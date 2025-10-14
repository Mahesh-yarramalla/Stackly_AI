import React from 'react'
import { useState, useEffect } from "react";
import apiBackground from '../../assets/api/back.png';
import buttonkey from '../../assets/api/Key1.png'
import Keys from './Keys';
import ApiIntegrate from './ApiIntegrate';
import Plan from './Plan';
import ApiAccess from './ApiAccess';
import HowItWorks from './HowItWorks';
import CustomAPIPlan from './CustomApiPlan';
import Draggable from './Draggable';
import sec14Img2 from "../../assets/home/sec14/Vector.png";
import sec14Img3 from "../../assets/home/sec14/m1.jpg";
import sec14Img4 from "../../assets/home/sec14/m2.jpg";
import sec14Img5 from "../../assets/home/sec14/m3.jpg";
import ApiFaq from './ApiFaq';
import keyImage from "../../assets/api/key.png";
import apibg from "../../assets/api/API3.png";
import ApiTab from "../../assets/api/ApiTab.png";
import ApiMob from "../../assets/api/ApiMob.png";

import { Link } from 'react-router-dom';



export default function HeroApi() {
  const [bgImage, setBgImage] = useState(apibg); // default desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setBgImage(apibg); // Desktop
      else if (window.innerWidth >= 640) setBgImage(ApiTab); // Tablet
      else setBgImage(ApiMob); // Mobile
    };

    handleResize(); // set initial image
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faqs = [
    {
      question: "How do I get started with StacklyAI APIs?",
      answer:
        "Stackly AI is an intelligent platform designed to streamline your tasks using automation and smart tools. It helps enhance productivity by offering tailored solutions based on your needs.",
    },
    {
      question: "What authentication method does StacklyAI use?",
      answer:
        "Stackly AI works by analyzing your input and tasks, then offering automated suggestions, integrations, and tools to make your workflow more efficient and seamless.",
    },
    {
      question: "Are there any rate limits on API requests?",
      answer:
        "Stackly AI offers both free and premium plans. The free plan includes essential features, while premium plans unlock advanced capabilities and integrations.",
    },
    {
      question: " What image formats do StacklyAI APIs support?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "How to handle other image formats e.g. HEIC, HEIF etc?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
    {
      question: "What is the expiration period for my credit pack?",
      answer:
        "You can reach out to Stackly AI through our support page, via email at support@stackly.ai, or use the chat feature on our website for instant assistance.",
    },
  ];
  return (
  <div>
{/* NEW FIGMA DISGINE */}
  <section
      className="w-full -mt-[75px] pt-[75px] flex flex-col items-center bg-no-repeat bg-top bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% auto",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >

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

  {/* Centered Content Block */}
<div className="w-full max-w-[836px] h-[281px] max-[440px]:h-auto flex flex-col items-center gap-[40px] max-[440px]:gap-[24px] mt-[40px] sm:mt-[60px] md:mt-[90px] px-4 text-center">
    
    {/* Heading */}
    <div className="w-full h-[107px] max-[440px]:h-auto flex flex-col gap-12 max-[440px]:gap-2">
  <h1 className="text-[42px] md:text-[36px] sm:text-[30px] max-[440px]:text-[24px] text-white font-[600] leading-[100%] max-[440px]:leading-[120%] font-['Lora']">
    Transform Spaces in Real Time with StacklyAI
  </h1>
  <p className="text-[18px] md:text-[16px] sm:text-[14px] max-[440px]:text-[14px] text-[#E0E0E0] font-[500] leading-[140%] font-['Poppins'] max-[440px]:px-2">
    Experience intelligent design solutions crafted to enhance interiors, exteriors
    <br className="hidden min-[441px]:block" />
    <span className="max-[440px]:inline min-[441px]:hidden"> </span>
    and outdoor spaces with seamless AI precision
  </p>
</div>

   

    {/* Button */}
    <Link to="/sign-in">
      <div className="w-[212px] mt-8  max-[640px]:mt-2 md:w-[200px] max-[440px]:w-[180px] h-[44px] md:h-[42px] max-[440px]:h-[38px] flex items-center gap-[10px] md:gap-[8px] max-[440px]:gap-[6px] px-[30px] md:px-[24px] max-[440px]:px-[18px] py-[10px] md:py-[8px] max-[440px]:py-[6px] rounded-[30px] md:rounded-[28px] max-[440px]:rounded-[24px] border border-white bg-gradient-to-r from-[rgba(138,56,245,0.5)] to-[rgba(194,44,162,0.5)]">
        {/* Right Child: Text */}
        <div className="w-[118px] md:w-[110px] max-[440px]:w-[100px] h-[19px] md:h-[18px] max-[440px]:h-[16px] flex items-center">
          <span className="text-white text-[16px] md:text-[15px] max-[440px]:text-[13px] leading-[100%] font-medium font-['Inter']">
            Get API Access
          </span>
        </div>
        {/* Left Child: Image */}
        <div className="w-[24px] md:w-[22px] max-[440px]:w-[18px] h-[24px] md:h-[22px] max-[440px]:h-[18px] flex items-center justify-center">
          <img src={buttonkey} alt="Key" className="w-full h-full object-contain" />
        </div>
      </div>
    </Link>

</div>

 <ApiIntegrate />
  <CustomAPIPlan />
   
</section>

 

 
      {/* section-3  */}

      {/* <Keys /> */}

      {/* section 4  */}

     

      {/* section-5  */}

      {/* <Plan /> */}

      {/* section-6  */}

      {/* <ApiAccess /> */}

      {/* section-7  */}

      {/* <HowItWorks /> */}

      {/* section-8  */}

      

      {/* section-9  */}

     
      {/* section-14  */}

      {/* <ApiFaq faqs={faqs} /> */}
    </div>
  );
}