#correct working file
from typing import Optional
import stripe
import json
from fastapi import APIRouter, HTTPException, Query, Request
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory, BillingInfo, APIKeyManager
from asgiref.sync import sync_to_async
import random
from pydantic import BaseModel, EmailStr
from fastapi_app.invoice_generator import generate_invoice_pdf
import smtplib
import os
import string
import logging
from email.message import EmailMessage
from django.db import transaction
from dotenv import load_dotenv
import stripe
import json
import aiohttp
from datetime import datetime, timedelta
from fastapi import APIRouter, HTTPException, Request
from asgiref.sync import sync_to_async
from django.utils import timezone

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")
FRONTEND_SUCCESS_URL = os.getenv("FRONTEND_SUCCESS_URL")
FRONTEND_CANCEL_URL = os.getenv("FRONTEND_CANCEL_URL")
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")
FRONTEND_PRICING_URL = os.getenv("FRONTEND_PRICING_URL")

stripe.api_key = STRIPE_SECRET_KEY

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

from stackly_admin.models import Plan, CouponCode, User
from asgiref.sync import sync_to_async
from decimal import Decimal

async def get_price_for_plan(plan_id: int) -> float:
    plan_obj = await sync_to_async(Plan.objects.filter(id=plan_id, is_active=True).first)()
    if not plan_obj:
        raise ValueError(f"Invalid or inactive plan ID: {plan_id}")
    return float(plan_obj.price)

async def get_validity_days_for_plan(plan_id: int) -> int:
    plan_obj = await sync_to_async(Plan.objects.filter(id=plan_id, is_active=True).first)()
    if not plan_obj:
        raise ValueError(f"Invalid or inactive plan ID: {plan_id}")
    return plan_obj.validity_days

async def get_max_api_calls_for_plan(plan_id: int) -> int:
    plan_obj = await sync_to_async(Plan.objects.filter(id=plan_id, is_active=True).first)()
    if not plan_obj:
        raise ValueError(f"Invalid or inactive plan ID: {plan_id}")
    return plan_obj.max_api_calls

async def get_discount_for_coupon(coupon_code: str, original_price: float, plan_id: int = None, user_id: int = None) -> float:
    now = timezone.now()
    coupon = await sync_to_async(CouponCode.objects.filter(code__iexact=coupon_code, is_active=True, valid_from__lte=now, valid_to__gte=now).first)()

    if not coupon:
        return 0.0
    
    # Check plan and user conditions based on your CouponCode model logic
    if coupon.coupon_type == 'plan_specific' and plan_id:
        if coupon.plan_id != plan_id:
            return 0.0

    if coupon.coupon_type == 'user_specific' and user_id:
        if coupon.user_id != user_id:
            return 0.0

    if not coupon.is_valid():
        return 0.0

    discount_amount = (Decimal(original_price) * Decimal(coupon.discount_percentage)) / 100
    return float(discount_amount)

async def get_credits_for_plan(plan_id: int) -> int:
    plan_obj = await sync_to_async(Plan.objects.filter(id=plan_id, is_active=True).first)()
    if not plan_obj:
        raise ValueError(f"Invalid or inactive plan ID: {plan_id}")
    return plan_obj.max_api_calls

class BillingInfoModel(BaseModel):
    full_name: str
    email: str  
    phone_number: str
    street_address: str
    city: str
    state: str
    country: str
    pincode: str

class SubscriptionData(BaseModel):
    email: str = None
    userid: str = None
    plan: str
    duration: str
    coupon_code: str = None
    payment_method: str
    billing_info: BillingInfoModel
    payment_success: bool = True
    amount: Optional[float] = None
    
class FailedPaymentEmailModel(BaseModel):
    email: EmailStr
    name: str

def send_invoice_email(to_email, customer_name, invoice_path):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Thank You for Upgrading Your Plan!"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email
        msg.set_content(f"""
Hi {customer_name},

Thank you for upgrading your plan with us. Please find the invoice for your recent purchase attached.

If you have any questions, feel free to reach out.

Best regards,
Your Team
""")
        # Attach PDF
        with open(invoice_path, 'rb') as f:
            file_data = f.read()
            file_name = os.path.basename(invoice_path)
            msg.add_attachment(file_data, maintype="application", subtype="pdf", filename=file_name)

        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send email: {e}")

def safe_str(value):
    return str(value) if value is not None else ""
exchange_cache = {"data": {}, "last_update": None}


async def get_user_country_from_ip(ip_address: str):
    """Fetch user country from IP using ipapi.co"""
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(f"https://ipapi.co/{ip_address}/json/") as resp:
                data = await resp.json()
                return data.get("country", "US")  # Default to US
    except:
        return "US"


async def get_currency_from_country(country_code: str):
    """Map country code to common currency"""
    mapping = {
        "US": "USD", "IN": "INR", "GB": "GBP", "EU": "EUR", "CA": "CAD",
        "AU": "AUD", "SG": "SGD", "JP": "JPY", "AE": "AED"
    }
    return mapping.get(country_code, "USD")


async def get_conversion_rate(from_currency: str, to_currency: str):
    """Fetch conversion rate using Frankfurter API (with caching)"""
    now = datetime.utcnow()
    if (
        exchange_cache["last_update"]
        and exchange_cache["data"]
        and (now - exchange_cache["last_update"]) < timedelta(hours=24)
    ):
        # Return cached rate if exists
        if to_currency in exchange_cache["data"]:
            return exchange_cache["data"][to_currency]

    try:
        async with aiohttp.ClientSession() as session:
            url = f"https://api.frankfurter.app/latest?from={from_currency}&to={to_currency}"
            async with session.get(url) as resp:
                data = await resp.json()
                rate = data.get("rates", {}).get(to_currency, 1.0)

                # Update cache
                exchange_cache["data"][to_currency] = rate
                exchange_cache["last_update"] = now

                return rate
    except:
        return 1.0  # fallback


@router.post("/create-checkout-session/")
async def create_checkout_session(subscription_data: SubscriptionData, request: Request):
    try:
        # Get user IP for location-based currency
        client_ip = request.client.host
        country_code = await get_user_country_from_ip(client_ip)
        currency = await get_currency_from_country(country_code)

        # Fetch user
        user = await sync_to_async(UserData.objects.filter(id=subscription_data.userid).first)()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        # Fetch plan
        plan_obj = await sync_to_async(
            Plan.objects.filter(name__iexact=subscription_data.plan, is_active=True).first
        )()
        if not plan_obj:
            raise HTTPException(status_code=404, detail="Plan not found or inactive")

        # Price logic
        price_usd = float(subscription_data.amount or plan_obj.price)
        discount = 0.0
        used_credits = 0

        # Coupon logic
        if subscription_data.coupon_code:
            coupon = await sync_to_async(
                CouponCode.objects.filter(
                    code=subscription_data.coupon_code,
                    is_active=True,
                    valid_from__lte=timezone.now(),
                    valid_to__gte=timezone.now()
                ).first
            )()
            if coupon:
                discount = (price_usd * coupon.discount_percentage) / 100
            else:
                raise HTTPException(status_code=400, detail="Invalid or expired coupon code")

        # Final USD price
        final_usd_price = max(price_usd - discount, 0.01)

        # Convert USD → Local Currency
        conversion_rate = await get_conversion_rate("USD", currency)
        final_price_local = round(final_usd_price * conversion_rate, 2)
        unit_amount = int(final_price_local * 100)  # smallest currency unit

        # Billing Info JSON
        billing_info_str = json.dumps(subscription_data.billing_info.dict())

        # Stripe session
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': currency.lower(),
                    'product_data': {
                        'name': f"{plan_obj.name.capitalize()} Plan - {subscription_data.duration.capitalize()}",
                    },
                    'unit_amount': unit_amount,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=FRONTEND_SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
            cancel_url=FRONTEND_CANCEL_URL,
            metadata={
                "user_id": str(subscription_data.userid),
                "email": str(subscription_data.email),
                "plan": str(plan_obj.name),
                "currency": currency,
                "usd_price": str(final_usd_price),
                "local_price": str(final_price_local),
                "exchange_rate": str(conversion_rate),
                "coupon_code": str(subscription_data.coupon_code or ""),
                "billing_info": billing_info_str,
                "duration": str(subscription_data.duration),
                "payment_method": str(subscription_data.payment_method),
                "used_credits": str(used_credits),
                "original_price": str(price_usd),
                "discount_amount": str(discount),

            }
        )

        return {"checkout_url": checkout_session.url, "currency": currency, "converted_price": final_price_local}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
# @router.post("/create-checkout-session/")
# async def create_checkout_session(subscription_data: SubscriptionData):
#     try:
#         user = await sync_to_async(UserData.objects.filter(id=subscription_data.userid).first)()
#         if not user:
#             raise HTTPException(status_code=404, detail="User not found with this ID")

#         plan_obj = await sync_to_async(
#             Plan.objects.filter(name__iexact=subscription_data.plan, is_active=True).first
#         )()
#         if not plan_obj:
#             raise HTTPException(status_code=404, detail=f"Plan '{subscription_data.plan}' not found or inactive")

#         price = float(subscription_data.amount) if getattr(subscription_data, 'amount', None) else float(plan_obj.price)
#         discount = 0.0
#         used_credits = 0

#         if subscription_data.coupon_code:
#             coupon = await sync_to_async(
#                 CouponCode.objects.filter(
#                     code=subscription_data.coupon_code,
#                     is_active=True,
#                     valid_from__lte=timezone.now(),
#                     valid_to__gte=timezone.now()
#                 ).first
#             )()
#             if coupon:
#                 discount = (price * coupon.discount_percentage) / 100
#             else:
#                 raise HTTPException(status_code=400, detail="Invalid or expired coupon code")

#         final_price = max(price - discount, 0.01)  # minimum 1 cent

#         billing_info_str = json.dumps({
#             "full_name": safe_str(subscription_data.billing_info.full_name),
#             "email": safe_str(subscription_data.billing_info.email),
#             "phone_number": safe_str(subscription_data.billing_info.phone_number),
#             "street_address": safe_str(subscription_data.billing_info.street_address),
#             "city": safe_str(subscription_data.billing_info.city),
#             "state": safe_str(subscription_data.billing_info.state),
#             "country": safe_str(subscription_data.billing_info.country),
#             "pincode": safe_str(subscription_data.billing_info.pincode)
#         })

#         # 🔹 Use USD since frontend shows dollars
#         currency = "usd"
#         unit_amount = int(final_price * 100)  # $10 → 1000 cents

#         checkout_session = stripe.checkout.Session.create(
#             payment_method_types=['card'],
#             line_items=[{
#                 'price_data': {
#                     'currency': currency,
#                     'product_data': {
#                         'name': f"{plan_obj.name.capitalize()} Plan - {subscription_data.duration.capitalize()}"
#                     },
#                     'unit_amount': unit_amount,
#                 },
#                 'quantity': 1
#             }],
#             mode='payment',
#             success_url=FRONTEND_SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
#             cancel_url=FRONTEND_CANCEL_URL,
#             metadata={
#                 "user_id": safe_str(subscription_data.userid),
#                 "email": safe_str(subscription_data.email),
#                 "plan": safe_str(plan_obj.name),
#                 "duration": safe_str(subscription_data.duration),
#                 "coupon_code": safe_str(subscription_data.coupon_code),
#                 "payment_method": safe_str(subscription_data.payment_method),
#                 "billing_info": billing_info_str,
#                 "payment_success": safe_str(subscription_data.payment_success),
#                 "max_api_calls": safe_str(plan_obj.max_api_calls),
#                 "original_price": str(price),
#                 "discount_amount": str(discount),
#                 "used_credits": str(used_credits)
#             }
#         )

#         return {"checkout_url": checkout_session.url}

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


def generate_api_key():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=32))

def create_unique_api_key():
    while True:
        api_key = generate_api_key()
        if not APIKeyManager.objects.filter(active_keys=api_key).exists():
            return api_key
        
def safe_float(val):
    try:
        return float(val)
    except (TypeError, ValueError):
        return 0.0

@router.post("/stripe-webhook/")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    event = None
    try:
        event = stripe.Webhook.construct_event(payload, sig_header, STRIPE_WEBHOOK_SECRET)
        logging.info(f"Received Stripe event: {event['type']}")
    except ValueError:
        # Invalid payload
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        # Invalid signature
        raise HTTPException(status_code=400, detail="Invalid signature")

    event_type = event["type"]
    data_object = event["data"]["object"]

    try:
        if event_type == "checkout.session.completed":
            # Call your update subscription function asynchronously
            from fastapi_app.pricing_page import update_subscription
            session_id = data_object.get("id")
            if session_id:
                await update_subscription(session_id=session_id)

        elif event_type == "payment_intent.succeeded":
            # Optional: handle successful payment intents
            logging.info(f"PaymentIntent succeeded: {data_object['id']}")

        elif event_type == "payment_intent.payment_failed":
            logging.warning(f"PaymentIntent failed: {data_object['id']}")

        elif event_type == "invoice.paid":
            logging.info(f"Invoice paid: {data_object['id']}")
            # handle subscription renewals or invoicing

        elif event_type == "invoice.payment_failed":
            logging.warning(f"Invoice payment failed: {data_object['id']}")
            # notify user or mark subscription as unpaid

        # Add more event types if needed...

    except Exception as e:
        logging.error(f"Error handling event {event_type}: {str(e)}")
        # Don't raise exception here, just log error and continue

    return {"status": "success"}

@router.get("/verify-payment/")
async def verify_payment(session_id: str = Query(..., description="Stripe Checkout Session ID")):
    try:
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        if checkout_session.payment_status == "paid":
            return {
                "success": True,
                "message": "Payment verified",
                "payment_intent": checkout_session.payment_intent,
                "customer_email": checkout_session.customer_details.email if checkout_session.customer_details else None
            }
        else:
            return {
                "success": False,
                "message": "Payment not completed yet",
                "status": checkout_session.payment_status
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error verifying payment: {str(e)}")

@router.post("/update-subscription/")
async def update_subscription(session_id: str):
    try:
        # Check if session already processed
        existing_billing = await sync_to_async(BillingHistory.objects.filter(transaction_id=session_id).exists)()
        if existing_billing:
            return {"message": "This session has already been processed"}

        # Retrieve session from Stripe
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        metadata = checkout_session.metadata
        payment_intent_id = checkout_session.payment_intent

        if checkout_session.payment_status != "paid":
            raise HTTPException(status_code=400, detail="Payment not successful.")

        # Retrieve user
        user_id = int(metadata.get("user_id"))
        user = await sync_to_async(UserData.objects.get)(id=user_id)

        # Load billing info
        billing_info_data = json.loads(metadata.get("billing_info", "{}"))

        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            plan_name = metadata["plan"].lower()
            duration = metadata["duration"]

            # Fetch Plan object
            plan_obj = Plan.objects.filter(name__iexact=plan_name, is_active=True).first()
            if not plan_obj:
                raise Exception(f"Plan '{plan_name}' not found or inactive")

            original_price = safe_float(plan_obj.price)

            # Apply coupon if available
            discount_amount = 0.0
            coupon_code = metadata.get("coupon_code")
            if coupon_code:
                coupon = CouponCode.objects.filter(
                    code=coupon_code, is_active=True,
                    valid_from__lte=timezone.now(), valid_to__gte=timezone.now()
                ).first()
                if coupon:
                    discount_amount = (original_price * coupon.discount_percentage) / 100

            discount_price = max(original_price - discount_amount, 0.0)
            discount_percent = round((discount_amount / original_price) * 100) if discount_amount else 0

            # Update subscription
            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            start_date = timezone.now().date()
            expiry_date = start_date + (relativedelta(years=1) if duration == "yearly" else relativedelta(months=1))
            used_credits = int(metadata.get("used_credits", 0))

            subscription.current_plan = plan_name
            subscription.duration = duration
            subscription.start_date = start_date
            subscription.expiry_date = expiry_date
            subscription.renews_on = expiry_date
            subscription.original_price = original_price
            subscription.discount_price = discount_price
            subscription.discount_amount = discount_amount
            subscription.discount_percentage = discount_percent
            subscription.is_active = True
            subscription.total_credits = plan_obj.max_api_calls
            subscription.used_credits=used_credits
            subscription.coupon_code=coupon_code
            subscription.save()

            # Manage API keys
            new_api_key = create_unique_api_key()
            api_key_manager, _ = APIKeyManager.objects.get_or_create(user=user)

            try:
                active_keys = json.loads(api_key_manager.active_keys) if isinstance(api_key_manager.active_keys, str) else (api_key_manager.active_keys or [])
            except:
                active_keys = []

            try:
                revoked_keys = json.loads(api_key_manager.revoked_keys) if isinstance(api_key_manager.revoked_keys, str) else (api_key_manager.revoked_keys or [])
            except:
                revoked_keys = []

            revoked_keys.extend(active_keys)
            api_key_manager.active_keys = json.dumps([new_api_key])
            api_key_manager.revoked_keys = json.dumps(revoked_keys)
            api_key_manager.plan = plan_name
            api_key_manager.monthly_credits = plan_obj.max_api_calls
            api_key_manager.usage_count = 0
            api_key_manager.is_active = True
            api_key_manager.save()

            # Save billing info
            billing_info = BillingInfo.objects.create(
                user=user,
                full_name=billing_info_data.get("full_name", ""),
                email=billing_info_data.get("email", ""),
                phone_number=billing_info_data.get("phone_number", ""),
                street_address=billing_info_data.get("street_address", ""),
                city=billing_info_data.get("city", ""),
                state=billing_info_data.get("state", ""),
                country=billing_info_data.get("country", ""),
                zip_code=billing_info_data.get("pincode", "")
            )

            # Create billing history
            invoice_id = f"INV-{timezone.now().strftime('%Y%m%d')}-{random.randint(1000,9999)}"
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=plan_name,
                amount=discount_price,
                payment_method=metadata.get("payment_method", "unknown"),
                status="paid",
                invoice_id=invoice_id,
                transaction_id=payment_intent_id,
                paid_on=start_date
            )

            # Generate PDF invoice
            invoice_path = generate_invoice_pdf({
                "customer_name": billing_info.full_name,
                "email": billing_info.email,
                "invoice_id": invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": expiry_date.strftime("%d-%m-%Y"),
                "plan": plan_name,
                "duration": duration,
                "start_date": start_date.strftime("%d-%m-%Y"),
                "expire_date": expiry_date.strftime("%d-%m-%Y"),
                "amount": original_price,
                "discount_price": discount_price,
                "discount_amount": discount_amount,
                "discount_percent": discount_percent,
                "payment_method": billing.payment_method,
                "transaction_id": payment_intent_id,
                "logo_path": None,
            })
            billing.invoice = invoice_path
            billing.save()

            # Send invoice via email
            send_invoice_email(
                to_email=billing_info.email,
                customer_name=billing_info.full_name,
                invoice_path=invoice_path
            )

            return {"message": "Subscription updated successfully!"}

        result = await perform_db_operations()
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")


def send_payment_failure_email(to_email: str, name: str):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Payment Failed - Action Required"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email

        msg.set_content(f"""
Hi {name},

Unfortunately, your recent payment attempt was unsuccessful.

Please try again to complete your subscription. If you continue to face issues, feel free to reach out to our support team.

Retry your payment here: {os.getenv("FRONTEND_PRICING_URL")}

Best regards,  
Your Support Team
""")


        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send failure email: {e}")
        raise

# -------------------------------
# 🔁 API Endpoint
# -------------------------------
@router.post("/send-payment-failed-email")
async def send_payment_failed_email(data: FailedPaymentEmailModel):
    try:
        send_payment_failure_email(data.email, data.name)
        return {"message": "Failure email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error sending failure email: {str(e)}")





"""@router.post("/update-subscription/")
async def update_subscription(session_id: str):
    try:
        # Check if this session has already been processed
        existing_billing = await sync_to_async(BillingHistory.objects.filter(transaction_id=session_id).exists)()
        if existing_billing:
            return {"message": "This session has already been processed"}
        
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        metadata = checkout_session.metadata
        payment_intent_id = checkout_session.payment_intent

        # Get user from metadata (email or user ID) and create subscription
        # user_email = metadata.get("email")
        # user = await sync_to_async(UserData.objects.get)(email=user_email)
        
        user_id = int(metadata.get("user_id"))  # You should have passed user_id in metadata
        user = await sync_to_async(UserData.objects.get)(id=user_id)

        billing_info_data = json.loads(metadata.get("billing_info", "{}"))
        billing_email = billing_info_data.get("email", user_email)

        if checkout_session.payment_status != "paid":
            raise HTTPException(status_code=400, detail="Payment not successful.")

        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            original_price = get_price_for_plan(metadata["plan"], metadata["duration"])
            discount_amount = get_discount_for_coupon(metadata.get("coupon_code"), original_price)
            discount_price = original_price - discount_amount

            if discount_price < original_price:
                discount_amount_inr = discount_amount
                discount_percent = round((discount_amount_inr / original_price) * 100)
            else:
                discount_amount_inr = 0
                discount_percent = 0

            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            old_plan = subscription.current_plan if subscription.current_plan else "basic"
            new_plan = metadata["plan"].lower()

            subscription.current_plan = new_plan
            subscription.duration = metadata["duration"]
            subscription.start_date = timezone.now().date()
            subscription.discount_price = discount_price
            subscription.discount_percentage = discount_percent 
            subscription.total_price = original_price
            subscription.discount_amount = discount_amount_inr
            subscription.is_active = True
            subscription.total_credits = get_credits_for_plan(new_plan)

            if subscription.duration == "yearly":
                subscription.expiry_date = subscription.start_date + relativedelta(years=1)
            else:
                subscription.expiry_date = subscription.start_date + relativedelta(months=1)
            subscription.save()

            usage_count = 0
            api_key_manager, created = APIKeyManager.objects.get_or_create(user=user)
            if created:
                api_key_manager.active_keys = []
                api_key_manager.revoked_keys = []
                api_key_manager.usage_count = usage_count
                api_key_manager.is_active = True
            else:
                if isinstance(api_key_manager.active_keys, str):
                    # If stored as JSON string, parse it
                    try:
                        api_key_manager.active_keys = json.loads(api_key_manager.active_keys)
                    except Exception:
                        api_key_manager.active_keys = []

            # Check if user has active keys; if none, generate new key
            if not api_key_manager.active_keys:
                new_api_key = create_unique_api_key()
                api_key_manager.active_keys = [new_api_key]

            api_key_manager.plan = new_plan
            api_key_manager.monthly_credits = get_credits_for_plan(new_plan)
            api_key_manager.usage_count = usage_count
            api_key_manager.is_active = True
            api_key_manager.save()

            # Save billing info
            billing_info = BillingInfo(
                user=user,
                full_name=billing_info_data.get("full_name", ""),
                phone_number=billing_info_data.get("phone_number", ""),
                street_address=billing_info_data.get("street_address", ""),
                city=billing_info_data.get("city", ""),
                state=billing_info_data.get("state", ""),
                country=billing_info_data.get("country", ""),
                zip_code=billing_info_data.get("pincode", ""),
            )
            billing_info.save()

            # Create billing history
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=metadata["plan"],
                amount=discount_price,
                payment_method=metadata["payment_method"],
                status="paid",
                invoice_id=f"INV-{timezone.now().strftime('%Y%m%d')}-{random.randint(1000, 9999)}",
                transaction_id=payment_intent_id,
                paid_on=timezone.now().date()
            )
            # Generate invoice PDF with minimal data (price, name, email, etc.)
            invoice_path = generate_invoice_pdf({
                "customer_name": billing_info_data["full_name"],
                "email": user_email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                #"amount": billing.amount,
                "amount" : subscription.original_price,
                "payment_method": billing.payment_method,
                "transaction_id": billing.transaction_id,
                "logo_path": None,
                "discount_price": subscription.discount_price,
                "discount_amount": discount_amount_inr,  # Discount amount in ₹
                "discount_percent": discount_percent,
            })
            billing.invoice = invoice_path
            billing.save()


            # Send invoice email
            send_invoice_email(
                to_email=user_email,
                customer_name=billing_info_data["full_name"],
                invoice_path=invoice_path
            )

            return {"message": "Subscription updated successfully!"}

        # Perform database operation
        result = await perform_db_operations()
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))"""






