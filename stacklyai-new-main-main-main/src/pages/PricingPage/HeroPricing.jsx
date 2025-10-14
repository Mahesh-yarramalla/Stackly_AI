
import React from "react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Banner1 from "../../assets/pricing-pg/GroupCollage.png";
import Banner2 from "../../assets/pricing-pg/GroupCollage.png";
import Frame from "../../assets/pricing-pg/Frame.png";
import pricingBG from "../../assets/pricing-pg/pricingBG.png";
import BannerImg from "../../assets/pricing-pg/bannerSec2.png";
import scrol from "../../assets/pricing-pg/scrol.png";
import GraphImage from "../../assets/pricing-pg/Graph.png";
import sec4Bg from "../../assets/pricing-pg/sec4Bg.png";

import arrow from "../../assets/home/Arrow.png";
import CreditStats from "./CreditStats";
import Graph from "./Graph";
import PricingTable from "./PricingTable";
import PricingFaq from "./PricingFaq";
import Billing from "./Billing";
import Payment from "./Payment";
import UiPlans from "./UiPlans";
import ConformationPage from "./ConformationPage";
import Pay from "./Pay";
import { Link } from "react-router-dom";

export default function HeroPricing() {
  const features = [
    "Unlimited Designs",
    "High-Resolution 4K Images",
    "Watermark-Free Downloads",
    "Highly Advanced AI Designs",
    "24/7 Support Assistance",
    "Cancel Anytime",
  ];
const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate months for the current year automatically
  const months = monthNames.map((month) => `${month} ${currentYear}`);

  // Default: Current month/year
  const defaultMonth = `${monthNames[currentDate.getMonth()]} ${currentYear}`;
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      {/* section-1 */}
     <section
  className="relative w-full h-auto  -mt-[75px] pt-[75px]  mx-auto  opacity-100 bg-black"
>
  <div
  className="absolute w-[604px] h-[604px] rounded-full bg-[#8A38F580] opacity-100 pointer-events-none"
  style={{
    top: "-467px",
    left: "-258px",
    transform: "rotate(0deg)",
    filter: "blur(200px)",
  }}
></div>
      {/* Marquee Section */}
        <div
          className="h-[46px] marquee-container 
             max-[1280px]:h-[40px] 
             max-[1024px]:h-[36px] 
             max-[440px]:h-[28px] max-[440px]:w-full
             flex items-center justify-center overflow-hidden mt-2 "
        >
          <div className="marquee-content flex items-center justify-center whitespace-nowrap 
                  max-[440px]:-translate-y-[11px]">
            <span
              className="marquee-text text-[16px] mr-8 
                 lg:text-[14px] 
                 md:text-[12px] 
                 max-[440px]:text-[9px] leading-[1]"
            >
              Hey! It looks like you are from USA. We support Purchasing Power
              Parity pricing, so enjoy 50% off on your subscription. Use code:
              abc589
            </span>
            <span
              className="marquee-text text-[16px] 
                 lg:text-[14px] 
                 md:text-[12px] 
                 max-[440px]:text-[9px] leading-[1]"
            >
              Hey! It looks like you are from USA. We support Purchasing Power
              Parity pricing, so enjoy 50% off on your subscription. Use code:
              abc589
            </span>
          </div>
        </div>

     <div
  className="
    absolute 
    top-[216px]       /* default for lg and above */
    max-[1024px]:top-[150px]   /* move up on screens <1024px */
    left-1/2 transform -translate-x-1/2 
    w-full max-w-[1231px] h-auto 
    flex flex-col lg:flex-row items-center lg:items-start 
    gap-6 lg:gap-[49px] opacity-100 
    px-4 sm:px-6 md:px-10
  "
>


  {/* Left Child */}
  <div className="w-full lg:w-[474px] h-auto text-center lg:text-left">
    <h2 className="font-[Lora] font-semibold 
      text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 
      leading-[120%] lg:leading-[100%] tracking-[0] text-white">
      Discover How <br />
      <span className="text-purple-400">Stackly.AI</span> Drives <br />
      Innovation
    </h2>
  </div>

  {/* Right Child */}
  <div className="w-full lg:w-[708px] h-auto flex flex-col justify-center gap-4 text-center lg:text-left text-white">

    {/* Top child: paragraph */}
   <p className="w-full font-[Inter] font-normal 
  text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] 
  leading-[150%] lg:leading-[140%] text-white opacity-100">
  Trusted by thousands of designers, homeowners, and teams worldwide. Explore real-time usage stats and watch our community transform spaces every day.
</p>


    {/* Bottom child: Button */}
    <div className="flex justify-center lg:justify-start">
      <div
  className="w-[158px] h-[44px] max-[640px]:w-[120px] max-[640px]:h-[34px] 
             rounded-[30px] px-[20px] py-[8px] flex items-center justify-center"
  style={{
    background:
      'linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)',
    border: '1px solid #C22CA299',
  }}
>
  <Link to="/sign-in" className="flex items-center gap-1 whitespace-nowrap">
    {/* Text */}
    <span className="text-white font-inter font-medium text-[16px] max-[640px]:text-[12px] leading-[100%]">
      Try Now
    </span>

    {/* Icon */}
    <div className="w-[24px] h-[24px] max-[640px]:w-[16px] max-[640px]:h-[16px]">
      <img src={arrow} alt="arrow" className="w-full h-full object-contain" />
    </div>
  </Link>
</div>

 


  
</div>


</div>

</div>

 <CreditStats />

{/* GRAPH JSX */}
<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 flex flex-col gap-8 relative mt-[1200px] lg:mt-[1200px] max-[1024px]:mt-[1000px] max-[640px]:mt-[700px]">



  {/* Heading */}
  <div className="w-full max-w-[343px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[666px] mx-auto flex flex-col gap-4 text-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold font-[Lora] text-center leading-tight">
      Growing Bigger, Every Day
    </h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal font-[Poppins] text-center leading-relaxed">
      Live graph displaying your credit activity over time, with labeled points such as “Yesterday,” “Today,” and others for easy tracking.
    </p>
  </div>

  {/* Graph Container */}
  <div className="w-full flex justify-center">
    <div className="w-full max-w-full sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1280px] flex flex-col items-center gap-6">

      {/* Main Graph Box */}
      <div className="w-full rounded-[20px] border border-[#8A38F599] bg-[#8A38F51A] shadow-[0px_0px_6px_0px_#00000040] flex flex-col pt-6 sm:pt-8 md:pt-10 lg:pt-[44px] px-4 sm:px-6 md:px-8 lg:px-12">

         <div className="flex flex-col gap-3">
    <p className="text-white text-xs sm:text-[10px] md:text-base lg:text-[16px] font-medium font-[Poppins]">
  Current Date: {currentDate.toLocaleDateString()}
</p>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
      {/* Designs Used */}
     <div className="flex items-center gap-2">
  <div className="w-2 sm:w-[13.3px] h-2 sm:h-[13.3px] bg-white rounded-full"></div>

  <span className="text-white text-xs sm:text-sm md:text-[12px] lg:text-[16px] font-normal font-[Poppins]">
    Designs Used
  </span>
</div>


      {/* Credits Consumed */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
<div
  className="w-2 sm:w-[13.3px] h-2 sm:h-[13.3px] rounded-full"
  style={{ background: "linear-gradient(180deg, #8A38F5 0%, #51218F 100%)" }}
></div>

  <span className="text-white text-xs sm:text-sm md:text-[12px] lg:text-[16px] font-normal font-[Poppins] whitespace-nowrap">
    Credits consumed in {selectedMonth}
  </span>
</div>
</div>
    </div>
 
          {/* Right - Month Selector */}
         <div className="relative w-full">
  <div className="absolute  top-[-70px] right-2 flex items-center gap-3 sm:gap-[18px]">
    {/* Dropdown */}
    <div className="relative">
  <button
  onClick={() => setIsOpen(!isOpen)}
  className="w-[100px] sm:w-[150px] md:w-[200px] h-7 sm:h-9 md:h-[44px] flex items-center justify-center gap-1 sm:gap-2 md:gap-[10px] rounded-[30px] border border-[#C22CA299] px-2 sm:px-4 md:px-[30px] py-1 sm:py-2 md:py-[10px] text-white text-[10px] sm:text-sm md:text-[16px] font-medium font-[Inter] whitespace-nowrap"
  style={{
    background:
      "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
  }}
>
  {selectedMonth}
  <svg
    className={`w-3 sm:w-4 md:w-[18px] h-3 sm:h-4 md:h-[18px] transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>



      {isOpen && (
        <div className="absolute mt-2 w-[120px] sm:w-[150px] md:w-[200px] bg-[#000000] text-[#48207E] poppins-font rounded-lg border border-gray-600 shadow-lg z-50">
 
          {months.map((month) => (
            <div
              key={month}
              onClick={() => {
                setSelectedMonth(month);
                setIsOpen(false);
              }}
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base hover:bg-[#8A38F5] cursor-pointer whitespace-nowrap"
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Menu Icon */}
    <div className="w-8 sm:w-[36px] h-8 sm:h-[36px] rounded-full border border-white flex items-center justify-center cursor-pointer">
      <div className="w-5 sm:w-[27px] h-4 sm:h-[18px] flex flex-col justify-between">
        <span className="block h-0.5 sm:h-[2px] w-full bg-white rounded"></span>
        <span className="block h-0.5 sm:h-[2px] w-full bg-white rounded"></span>
        <span className="block h-0.5 sm:h-[2px] w-full bg-white rounded"></span>
      </div>
    </div>
  </div>
</div>
</div>

        {/* Graph Image */}
        <div className="w-full mt-6 flex justify-center">
          <img src={GraphImage} alt="Graph" className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1044px] h-auto object-contain rounded-lg" />
        </div>

        {/* Bottom Text */}
        <div className="w-full mt-4 text-center px-2 sm:px-4">
  <p className="font-[Inter] text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-white leading-[150%]">
    Total credits consumed in January: <span className="text-[#8A38F5]">850</span>
  </p>
</div>

      </div>
    </div>
    
  </div>
   <div className="w-full mt-4 text-center px-2 sm:px-4">
          <p className="font-[Inter] text-sm sm:text-base md:text-lg lg:text-[18px] font-normal text-white leading-[150%]">
            *These numbers reflect the real impact of Stackly.Ai developers, teams, and creators building smarter every day.
          </p>
        </div>
</div>

 {/* You can adjust the 200px value as needed */}
  <UiPlans />




{/* section-6  */}
<div
  className="
    relative w-full py-12 px-4 text-center text-white
    md:px-16 lg:px-20
    flex flex-col items-center
    bg-cover bg-center
  "
  style={{
    backgroundImage: `url(${sec4Bg})`,
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Heading */}
  <h2
    className="
      font-bold text-[32px] leading-[64px] text-center text-white
      max-w-[1200px] mx-auto
      sm:text-[24px] sm:leading-[34px]
      xs:text-[20px] xs:leading-[28px]
    "
    style={{ fontFamily: "Inter" }}
  >
    Why Upgrade to <span className="text-[#FFB900]">Pro</span>?
  </h2>

  {/* Badge */}
  <span
    className="
      mt-6 inline-block text-white font-semibold text-[22px] rounded-[50px]
      px-8 py-2
      sm:text-[16px] sm:px-6 sm:py-1.5
      xs:text-[14px] xs:px-4 xs:py-1
    "
    style={{
      background: "linear-gradient(180deg, #FBA716 8.5%, #90600D 100%)",
    }}
  >
    Features of Paid Plans
  </span>

  {/* Features Grid */}
  <div
    className="
      mt-8 grid gap-6 text-left
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      w-full
      max-w-[768px] lg:max-w-[900px]   /* reduce container width on large screens */
      mx-auto                         /* center horizontally */
    "
  >
    {features.map((feature, idx) => (
      <div key={idx} className="flex items-start gap-3">
        {/* Icon */}
        <div
          className="
            w-6 h-6 flex items-center justify-center rounded-[5px] mt-2
            sm:w-5 sm:h-5 xs:w-4 xs:h-4
          "
          style={{
            background: "linear-gradient(180deg, #FBA716 41.67%, #95630D 133.33%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
            />
          </svg>
        </div>

        {/* Feature Text */}
        <span
          className="
            text-[20px] font-medium leading-[44px]
            sm:text-[16px] sm:leading-[32px]
            xs:text-[14px] xs:leading-[28px]
            text-white
          "
        >
          {feature}
        </span>
      </div>
    ))}
  </div>
</div>

</section>

      {/* section-7 */}
      {/* <PricingFaq /> */}
      {/* section 8  */}
    </div>
  );
}