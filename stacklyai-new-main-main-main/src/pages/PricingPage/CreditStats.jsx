
import React, { useState, useEffect, useRef } from "react";
import BannerImg from "../../assets/pricing-pg/bannerSec2.png";
import creditBg from "../../assets/pricing-pg/creditBg.png";
import creditBg2 from "../../assets/pricing-pg/creditBg2.png";
import bannersec1 from "../../assets/pricing-pg/bannersec1.png";
import bannersec3 from "../../assets/pricing-pg/bannersec3.png";
import bannersec4 from "../../assets/pricing-pg/bannersec4.png";


const UsageInsights = () => {
  const [credits, setCredits] = useState(0);
  const [images, setImages] = useState(0);
  const sectionRef = useRef(null);
  const [currentBg, setCurrentBg] = useState(0);
  const creditBackgrounds = [creditBg, bannersec1, bannersec3, bannersec4];

  const animateCounts = () => {
    let startTime = null;
    const endCredits = 10;
    const endImages = 100;
    const duration = 2000; // animation speed

    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setCredits(Math.floor(progress * endCredits));
      setImages(Math.floor(progress * endImages));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animateCounts(); // run when scrolled into view
        } else {
          // Reset numbers when scrolled out of view
          setCredits(0);
          setImages(0);
        }
      },
      { threshold: 0.5 } // 50% visible triggers animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    // Background image slider for creditBg
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % creditBackgrounds.length);
      }, 3000); // change every 3 seconds
      return () => clearInterval(interval);
    }, []);

  return (
<section
  ref={sectionRef}
  className="w-full h-[500px] sm:h-[600px] md:h-[570px] lg:h-[799px] 
             absolute top-[280px] lg:top-[468px] max-[1024px]:top-[450px] 
             max-[640px]:h-[320px]  max-[325px]:h-[265px]
             opacity-100 bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: `url(${BannerImg})`,
  }}
>




      {/* Heading */}
<div 
  className="absolute top-[50px] max-[640px]:top-[15px] 
             left-1/2 -translate-x-1/2 text-center 
             w-[90%] max-w-[727px] 
             flex flex-col gap-2 sm:gap-3 md:top-[20px] md:gap-4"
>

  <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium leading-[130%] sm:leading-[135%] md:leading-[140%] lg:leading-[140%] font-[Lora] bg-gradient-to-r from-[#8A38F5] via-[rgba(255,255,255,0.9)] to-[#8A38F5] bg-clip-text text-transparent">
    Daily Usage Insights
  </h2>
 <p className="text-[14px] max-[640px]:text-[10px]  max-[325px]:text-[8px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal font-[Poppins] text-white whitespace-nowrap">
  Follow your design journey through today's usage and results
</p>

</div>


      {/* Rotating Credit Background */}
<div className="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[1025px] h-auto aspect-[1025/441] rounded-[20px] overflow-hidden relative
               
                lg:top-[227px] 
                max-[1024px]:top-[170px]
                max-[640px]:top-[100px]
                 max-[325px]:top-[88px]">
  <img
    key={currentBg}
    src={creditBackgrounds[currentBg]}
    alt="Credit Background"
    className="w-full h-full object-cover absolute inset-0 animate-kenburns opacity-0 transition-opacity duration-1000 ease-in-out"
    style={{ opacity: 1 }}
  />
</div>




<div 
  className="absolute bottom-0 md:top-[75%] md:bottom-auto lg:top-[72%] 
             left-1/2 -translate-x-1/2 w-[90%] max-w-[776px] 
             flex flex-row flex-wrap justify-between gap-4 sm:gap-8 md:gap-6 lg:gap-[76px] 
             max-[325px]:top-[65%]"
>

  {/* Credits 1 */}
  <div
    className="w-full md:w-[42%] max-[777px]:w-[45%] h-auto aspect-[350/205] max-[640px]:aspect-[250/145] rounded-[20px] 
               border border-[#8A38F5] bg-cover bg-center relative max-[325px]:left-[10px]"
    style={{ backgroundImage: `url(${creditBg2})` }}
  >
    <div className="absolute top-[20%] left-[6%] flex flex-col gap-1 max-[640px]:gap-0.5">
      <h3 className="text-white font-[Lora] text-[20px] sm:text-[32px] md:text-[28px] max-[640px]:text-[16px] font-medium">
        {credits}+ credits
      </h3>
      <p className="text-white font-[Poppins] text-[12px] sm:text-[18px] md:text-[16px] max-[640px]:text-[10px]">
        Total Credits Used today
      </p>
    </div>
  </div>

  {/* Credits 2 */}
  <div
    className="w-full md:w-[42%] max-[777px]:w-[45%] h-auto aspect-[350/205] max-[640px]:aspect-[250/145] rounded-[20px] 
               border border-[#8A38F5] bg-cover bg-center relative  max-[325px]:right-[10px]"
    style={{ backgroundImage: `url(${creditBg2})` }}
  >
    <div className="absolute top-[20%] left-[6%] flex flex-col gap-1 max-[640px]:gap-0.5">
      <h3 className="text-white font-[Lora] text-[20px] sm:text-[32px] md:text-[28px] max-[640px]:text-[16px] font-medium">
        {images}+ images
      </h3>
      <p className="text-white font-[Poppins] text-[12px] sm:text-[18px] md:text-[16px] 
                    w-full sm:w-[206px] max-[640px]:w-full max-[640px]:text-[10px]">
        Creations Made Today
      </p>
    </div>
  </div>
</div>


      <style>
        {`
@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-5px, -5px);
  }
}
.animate-kenburns {
  animation: kenburns 3s ease-in-out forwards;
}
`}
      </style>
    </section>
  );
};

export default UsageInsights;
