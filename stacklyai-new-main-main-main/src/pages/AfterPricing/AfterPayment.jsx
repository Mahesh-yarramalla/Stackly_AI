import React from 'react'
import Tick from "../../assets/pricing-pg/tick.png";
import Tick1 from "../../assets/pricing-pg/tick1.png";
import Logo from "../../assets/Logo1.png";
import Success from "../../assets/pricing-pg/success.png";
import Paper from "../../assets/pricing-pg/paper.png";
import Star3 from "../../assets/pricing-pg/Star3.png";
import Download from "../../assets/pricing-pg/download.png";
import Confirmation from "../../assets/pricing-pg/Confirmation.png";
import { Link } from "react-router-dom";

export default function AfterPayment() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-8 relative">
      {/* Custom Animation Style */}
      <style>
        {`
          @keyframes zoomIn {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-zoom-in {
            animation: zoomIn 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Main Container */}
      <div className="w-full max-w-[829px] h-auto flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 -mt-6">
        
        {/* Top Section: Image + Text */}
        <div className="w-full flex flex-col items-center justify-center">
          
          {/* Image with Zoom-In Animation */}
          <div className="w-[272px] h-[204px] mb-6">
            <img 
              src={Confirmation} 
              alt="example" 
              className="w-full h-full object-cover rounded-[8px] animate-zoom-in" 
            />
          </div>

          {/* Texts */}
          <div className="w-full flex flex-col items-center justify-center gap-4 mb-8">
            <p className="text-[#B5B5B5] font-poppins font-normal text-[20px] text-center">
              Amazing!
            </p>
            <p className="text-white font-poppins font-semibold text-[32px] text-center">
              Congratulations!
            </p>
            <p className="text-white font-poppins font-normal text-[24px] text-center">
              You've successfully upgraded to Premium Plan
            </p>
          </div>
        </div>

        {/* Billing Info */}
        <div className="w-full max-w-[311px] flex flex-col items-center justify-center gap-3 mb-8">
          <p className="text-[#B5B5B5] font-poppins font-normal text-[18px] text-center">
            Bill Number: 124422829
          </p>
          <p className="text-[#B5B5B5] font-poppins font-normal text-[18px] text-center">
            Payment Date: 13 October 2025
          </p>
          <p className="text-[#B5B5B5] font-poppins font-normal text-[18px] text-center">
            Amount Paid: $29.00
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[600px]">
          {/* Explore Now Button */}
          <Link to="/AfterHome">
            <button className="w-full sm:w-[283px] h-12 rounded-[30px] border border-[#C22CA299] flex items-center justify-center gap-2 px-7 py-2.5 bg-gradient-to-r from-[#8A38F580] to-[#C22CA280] hover:opacity-90 transition-opacity">
              <span className="text-white font-poppins text-[16px]">Explore now</span>
              <img src={Star3} alt="Star" className="w-6 h-6" />
            </button>
          </Link>

          {/* Download Invoice Button */}
          <button className="w-full sm:w-[283px] h-12 rounded-[30px] border border-[#8A38F5] flex items-center justify-center gap-2 px-7 py-2.5 bg-[#8A38F580] hover:opacity-90 transition-opacity">
            <span className="text-white font-poppins text-[16px]">Download Invoice</span>
            <img src={Download} alt="Download" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Support Text - Outside main div, responsive */}
<div className="absolute bottom-1 w-full px-4 sm:px-0 sm:bottom-2 sm:right-8 sm:w-auto sm:left-auto flex justify-center sm:justify-end">
  <p className="text-[#B5B5B5] font-poppins font-normal text-[14px] text-center sm:text-right">
    For Support, Contact support@gmail.com
  </p>
</div>

    </section>
  );
}