

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Arrow from "../../assets/forgetPg/arrow1.png";
import BgImage from "../../assets/forgetPg/ForgotPassword.png";
import BgImageMobile from "../../assets/forgetPg/ForgotPasswordMobile.png";

export default function HeroResetSuccess() {
  const [bg, setBg] = useState(BgImage);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 640) {
            setBg(BgImageMobile); // mobile background
          } else {
            setBg(BgImage); // desktop/tablet background
          }
        };
    
        handleResize(); // set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Top-left glow */}
      {/* <div className="absolute w-[700px] h-[300px] top-[-100px] left-[-100px] bg-[#8A38F5] opacity-40 rounded-full blur-[150px] z-0"></div> */}

      {/* Bottom-right glow */}
      {/* <div className="absolute w-[700px] h-[300px] bottom-[-100px] right-[-100px] bg-[#51218F] opacity-40 rounded-full blur-[150px] z-0"></div> */}

      {/* Card Wrapper */}
      <div
        className="
          relative
          w-[90%]              /* Default mobile-first */
          sm:w-[90%] sm:h-[90%]  /* Mobile: 350x341 */
          md:w-[740px] md:h-[360px]     /* Tablet: allow height to adjust */
          lg:w-[740px] lg:h-[360px]  /* Desktop/tablet: 740x360 */
          flex items-center justify-center
          z-10
        "
      >
        {/* Gradient Border Card */}
        <div
          className="
            relative bg-[#00000066] z-10 
            w-full h-full
            rounded-[16px] px-6 py-8 
            flex flex-col items-center justify-center text-center opacity-100
          "
        >
          <div
            style={{
              position: "absolute",
              inset: "0",
              borderRadius: "inherit",
              padding: "2px",
              background: `
                linear-gradient(48.81deg, rgba(0, 0, 0, 0) 60.41%, #51218F 89.33%),
                linear-gradient(221.1deg, rgba(0, 0, 0, 0) 74.13%, #51218F 92.57%)
              `,
              WebkitMask: `
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0)
              `,
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
              zIndex: "-1",
            }}
          ></div>

          {/* Success Message */}
          <h2
            className="
              text-white font-medium mt-[100px]
              text-[16px] sm:text-[16px]   /* Mobile */
              md:text-[24px]              /* Tablet */
              lg:text-[24px]              /* Desktop */
            "
          >
            Thanks for signing up!
          </h2>
          <p
            className="
              text-white text-center max-w-[400px] mt-3
              text-[12px] sm:text-[12px]   /* Mobile */
              md:text-[14px]               /* Tablet */
              lg:text-[14px]               /* Desktop */
            "
          >
            Your account has been successfully created.
          </p>

          {/* Back Button */}
          <Link
            to="/sign-in"
            className="flex items-center gap-2 text-white mt-5"
          >
            <div className="w-9 h-9 bg-[#8A38F533] rounded-full flex items-center justify-center border border-[#8A38F5]">
              <img src={Arrow} alt="back" className="w-4 h-4" />
            </div>
            <span className="text-[18px] text-white">Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
