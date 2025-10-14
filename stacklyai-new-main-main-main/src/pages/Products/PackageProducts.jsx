import React from "react";
import { Link } from "react-router-dom";
import Ellipseblur from "../../assets/product-pg/section3Bg.png";

export default function SignUpBanner() {
  return (
    <section
      className="w-full mx-auto h-[386px] lg:h-[386px] md:h-[320px] sm:h-[280px] h-[240px] bg-black relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${Ellipseblur})`,
      }}
    >
      <div
        className="absolute w-full max-w-[717px] lg:max-w-[717px] md:max-w-[600px] sm:max-w-[500px] max-w-[90%] 
                   h-auto flex flex-col items-center gap-6 lg:gap-[32px] md:gap-5 sm:gap-4 top-1/2 left-1/2 px-4"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Top child */}
        <div
          className="w-full max-w-[717px] lg:max-w-[717px] md:max-w-[600px] sm:max-w-[500px] text-center uppercase 
                     text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[100%] font-normal"
          style={{
            fontFamily: "Lora, serif",
            background: "linear-gradient(180deg, #FFFFFF 18.18%, #F8BD00 87.88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Join the Pro Experience
        </div>

        {/* Middle child */}
        <div
          className="w-full max-w-[623px] lg:max-w-[623px] md:max-w-[520px] sm:max-w-[450px] text-center text-white 
                     text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] leading-[140%] tracking-[0.3px] font-normal"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Unlock advanced AI styles, high-resolution renders, and unlimited design suggestions for your interiors, exteriors, and beyond. Upgrade now and turn your dream spaces into reality without compromise.
        </div>

        {/* Bottom child (button) */}
        <Link to="/sign-in">
          <button
            className="w-[271px] lg:w-[271px] md:w-[240px] sm:w-[200px] h-[64px] lg:h-[64px] md:h-[56px] sm:h-[48px] 
                       flex items-center justify-center gap-2 rounded-full px-6 lg:px-[30px] py-2.5 lg:py-[10px] hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(180deg, #FBA716 8.5%, #90600D 100%)",
            }}
          >
            <span
              className="text-white text-[18px] sm:text-[20px] md:text-[20px] lg:text-[22px] font-semibold leading-[140%] text-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Upgrade to Pro now
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}