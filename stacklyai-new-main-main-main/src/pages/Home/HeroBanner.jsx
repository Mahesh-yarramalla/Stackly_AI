
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../../assets/home/Frame.png";
import background from "../../assets/home/banner2.png";
import star from "../../assets/home/Big star.png";

export default function HeroBanner() {
  const [changeText, setChangeText] = useState(0);
  const [showAfterImage, setShowAfterImage] = useState(false);
  const navigate = useNavigate();

  //Rotate text every 1 second
  useEffect(() => {
    const textInterval = setInterval(() => {
      setChangeText((prev) => (prev === 3 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(textInterval);
  }, []);

  //Rotate images every 1 second
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setShowAfterImage((prev) => !prev);
    }, 1000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
<section
  className="bg-cover bg-top bg-no-repeat w-full min-h-[743px] 
             max-[1280px]:min-h-[600px] max-[1024px]:min-h-[500px] 
             max-[440px]:w-full max-[440px]:h-[450px] max-[440px]:min-h-[0]
             -mt-[82px] pt-[82px]"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
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



  {/* Main Content */}
  <div className="w-full h-[600px] flex justify-center items-center px-[5%] gap-[20px] 
                 max-[1280px]:h-[500px] max-[1280px]:px-[3%] max-[1280px]:gap-[15px]
                 max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:gap-[20px] 
                 max-[1024px]:h-auto max-[1024px]:py-[20px]">
    {/* Left Text Section */}
    <div
      className="w-[611px] h-[427px] text-[48px] flex flex-col justify-center items-start gap-[24px] 
                 max-[1280px]:w-[500px] max-[1280px]:h-[360px] max-[1280px]:gap-[20px]
                 max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:h-auto
                 max-[640px]:gap-[16px] relative"
      style={{ 
        left: "-280px", 
        opacity: 1, 
        flexShrink: 0,
        maxWidth: "100%",
        ...(window.innerWidth <= 1280 && { left: "-200px" }),
        ...(window.innerWidth <= 1024 && { left: "0" })
      }}
    >
      {/* Text Blocks */}
      <div
  className="flex flex-col gap-[4px] w-[590px] mt-4 
             max-[1280px]:w-[480px] max-[1024px]:w-full max-[440px]:w-[90%] 
             relative max-[441px]:right-[20px]"
>


            {/* Text 1: Generate */}
            <div className="h-[73px] max-[1280px]:h-[60px] max-[1024px]:h-[50px] max-[440px]:h-[40px]" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text
                max-[1280px]:text-[44px] max-[1024px]:text-[36px] max-[440px]:text-[28px]"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Generate
              </p>
            </div>

            {/* Text 2: Unique */}
            <div className="h-[73px] max-[1280px]:h-[60px] max-[1024px]:h-[50px] max-[440px]:h-[40px]" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text
                max-[1280px]:text-[44px] max-[1024px]:text-[36px] max-[440px]:text-[28px]"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 67.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Unique
              </p>
            </div>

            {/* Text 3: AI Image of your */}
            <div className="h-[73px] relative flex items-center 
                  max-[1280px]:h-[60px] max-[1024px]:h-[50px] max-[440px]:h-[38px]" style={{ opacity: 1 }}>
              <p
                className="text-[52px] font-normal leading-[140%] lora-text
                max-[1280px]:text-[44px] max-[1024px]:text-[36px] max-[440px]:text-[26px]"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Image of your
              </p>

              {/* Star positioned above "A" */}
              <div className="w-[15.43px] h-[15.43px] absolute top-[4px] left-[34px] opacity-100 
                    animate-[spin_3s_linear_infinite]
                    max-[1280px]:w-[13px] max-[1280px]:h-[13px] max-[1280px]:top-[3px] max-[1280px]:left-[28px]
                    max-[1024px]:w-[11px] max-[1024px]:h-[11px] max-[1024px]:top-[2px] max-[1024px]:left-[24px]
                    max-[440px]:w-[9px] max-[440px]:h-[9px] max-[440px]:top-[1px] max-[440px]:left-[20px]">
                <img
                  src={star}
                  alt="star"
                  className="w-full h-full 
                  [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#400C84_100%)] 
                  [mask-repeat:no-repeat] 
                  [mask-size:cover]"
                />
              </div>
            </div>

            {/* Text 4: Dream House */}
            <div className="h-[95px] -mt-[11px] flex items-center gap-2 
                  max-[1280px]:h-[80px] max-[1280px]:-mt-[8px] max-[1280px]:gap-1.5
                  max-[1024px]:h-[70px] max-[1024px]:-mt-[6px] 
                  max-[440px]:h-[50px] max-[440px]:-mt-[4px] max-[440px]:gap-1"
              style={{ opacity: 1 }}>
              <p
                className="text-[68px] font-normal leading-[140%] lancelot-text
                max-[1280px]:text-[56px] max-[1024px]:text-[48px] max-[440px]:text-[32px]"
                style={{
                  background: "linear-gradient(94.57deg, #FFFFFF 18.07%, #8A38F5 160.11%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dream House
              </p>

              {/* Large star */}
              <div className="w-[40px] h-[40px] opacity-100 animate-[spin_4s_linear_infinite]
                    max-[1280px]:w-[32px] max-[1280px]:h-[32px]
                    max-[1024px]:w-[28px] max-[1024px]:h-[28px]
                    max-[440px]:w-[20px] max-[440px]:h-[20px]">
                <img
                  src={star}
                  alt="star"
                  className="w-full h-full 
                  [mask-image:linear-gradient(180deg,_#FFFFFF_0%,_#745899_100%)] 
                  [mask-repeat:no-repeat] 
                  [mask-size:cover]"
                />
              </div>
            </div>
          </div>


      {/* Bottom Section */}
      <div className="w-[604px] h-[103px] flex flex-col gap-[32px] opacity-100 
                     max-[1280px]:w-[480px] max-[1280px]:h-[90px] max-[1280px]:gap-[24px]
                     max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:gap-[20px]
                     max-[640px]:w-[90%]">
        <div className="w-[604px] h-[27px] opacity-100 
                       max-[1280px]:w-[480px] max-[1280px]:h-[24px]
                       max-[1024px]:w-full max-[1024px]:h-[20px]">
<p
  className="relative text-[18px] font-normal leading-[100%] text-white 
            max-[1280px]:text-[16px] max-[1024px]:text-[14px] 
            max-[500px]:text-[10px] max-[400px]:text-[10px]  max-[320px]:text-[8px]
            max-[640px]:right-[20px]
            poppins-font overflow-hidden whitespace-nowrap typing text-left"
>
  "Curated interiors powered by AI, designed for unparalleled luxury"
</p>



           <style>
    {`
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      .typing {
        width: 0;
        animation: typing 3s steps(50, end) forwards;
      }
    `}
  </style>
        </div>

        {/* Generate Button */}
      <div
  className="w-[245px] h-[44px] flex justify-center items-center cursor-pointer opacity-100
             max-[1280px]:w-[200px] max-[1280px]:h-[40px]
             max-[1024px]:w-[180px] max-[1024px]:h-[36px]
             max-[640px]:relative max-[640px]:right-[20px]"
  onClick={() => navigate("/sign-in")}
>
          <div
            className="flex items-center justify-center gap-[8px] rounded-[28px] border px-[24px] py-[8px]
                      max-[1280px]:px-[20px] max-[1280px]:py-[7px]
                      max-[1024px]:px-[16px] max-[1024px]:py-[6px]"
            style={{
              background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
              borderWidth: "1px",
              width: "fit-content",
            }}
          >
            <p
              className="text-[16px] font-medium leading-[100%] text-white
                        max-[1280px]:text-[14px] max-[1024px]:text-[13px]"
              style={{
                fontFamily: "Inter, sans-serif",
                opacity: 1,
              }}
            >
              Generate your style
            </p>
            <div className="flex items-center justify-center w-[24px] h-[24px]
                           max-[1280px]:w-[20px] max-[1280px]:h-[20px]
                           max-[1024px]:w-[18px] max-[1024px]:h-[18px]">
              <img
                src={Frame}
                alt="icon"
                className="w-[19.5px] h-[19.5px]
                         max-[1280px]:w-[16px] max-[1280px]:h-[16px]
                         max-[1024px]:w-[14px] max-[1024px]:h-[14px]"
                style={{
                  filter: "brightness(0) saturate(100%) invert(92%) sepia(56%) saturate(763%) hue-rotate(239deg) brightness(97%) contrast(102%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Stars with Rotation */}
        <div className="w-[20px] h-[20px] opacity-100 animate-[spin_5s_linear_infinite] absolute top-[-20px] left-[794px] 
                       flex items-center justify-center
                       max-[1280px]:w-[16px] max-[1280px]:h-[16px] max-[1280px]:left-[650px]
                       max-[1024px]:hidden">
          <img
            src={star}
            alt="icon"
            className="w-full h-full"
            style={{
              filter: "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
            }}
          />
        </div>

        <div className="w-[20px] h-[20px] opacity-100 animate-[spin_6s_linear_infinite] absolute top-[451px] left-[834px] 
                       flex items-center justify-center
                       max-[1280px]:w-[16px] max-[1280px]:h-[16px] max-[1280px]:top-[380px] max-[1280px]:left-[680px]
                       max-[1024px]:hidden">
          <img
            src={star}
            alt="icon"
            className="w-full h-full"
            style={{
              filter: "brightness(0) saturate(100%) invert(72%) sepia(79%) saturate(1681%) hue-rotate(151deg) brightness(99%) contrast(102%)",
            }}
          />
        </div>
      </div>
    </div>
  </div>

  
</section>
  );
}