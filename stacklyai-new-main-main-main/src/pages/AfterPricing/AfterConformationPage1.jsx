import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import Tik from "../../assets/pricing-pg/tik.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import LArrow from "../../assets/pricing-pg/Larrow.png";
import ConfirmPG from "../../assets/pricing-pg/ConfirmPG.png";
import logoImg from "../../assets/Logo1.png";
import Paper from "../../assets/pricing-pg/paper.png";
import Con1 from "../../assets/pricing-pg/Con1.png";
import Arrow from "../../assets/forgetPg/arrow1.png";

export default function AfterConformationPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section
        className="relative w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ConfirmPG})` }}
      >
        {/* Back Arrow */}
        <Link to="/api#afteruiplan" className="z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[52px] lg:h-[52px] border border-[#FFFFFF33] rounded-full p-2 sm:p-2.5 md:p-3 lg:p-4 bg-[#FFFFFF1F] flex justify-center items-center">
            <img src={Arrow} alt="back" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-auto lg:h-auto" />
          </div>
        </Link>

        {/* Main Content */}
        <div className="w-full h-auto flex flex-col md:flex-row justify-center items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-12 sm:mt-16 md:mt-24 lg:mt-32">
          {/* Left Side - Features */}
          <div className="w-full max-w-[497px] flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Logo and Plan Info */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[325.42px] h-12 sm:h-14 md:h-16 lg:h-[65px]">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
                <div className="w-12 sm:w-14 md:w-16 lg:w-[54px] h-0 border-2 border-white opacity-100"></div>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-[497px]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white poppins-font">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal">Gold Plan</span>
                  <span
                    className="text-white text-sm sm:text-base border border-[#FFAA17] rounded-2xl px-2 sm:px-3 py-1 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(180deg, #FFAA17 0%, #99660E 100%)",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
                <div className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-normal poppins-font">
                  Get ready to unlock <span style={{ color: "#FFD700", fontWeight: "bold" }}>Gold</span> Subscription benefits
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                "Unlimited Room Designs",
                "Commercial use up to 3-5 members",
                "Fully customized AI designs with layout and lighting suggestions",
                "Unlimited design revisions",
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <div className="w-5 h-5 flex-shrink-0 bg-gradient-to-b from-[#8A38F5] to-[#51218F] rounded-sm flex items-center justify-center shadow-[0px_0px_4px_0px_#FFFFFF29]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                      <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="font-medium text-sm sm:text-base md:text-lg text-white">{feature}</div>
                </div>
              ))}

              {/* Extra Features if expanded */}
              {showMore && (
                <>
                  {[
                    "Priority email support",
                    "Basic customization options",
                    "Limited revisions (up to 3)",
                    "No watermark on images",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <div className="w-5 h-5 flex-shrink-0 bg-gradient-to-b from-[#8A38F5] to-[#51218F] rounded-sm flex items-center justify-center shadow-[0px_0px_4px_0px_#FFFFFF29]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                          <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="font-medium text-sm sm:text-base md:text-lg text-white">{feature}</div>
                    </div>
                  ))}
                </>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex gap-2 items-center text-left mt-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`w-5 h-5 transition-transform duration-300 ${showMore ? "rotate-90" : ""}`}
                >
                  <defs>
                    <linearGradient id="arrowGradient" x1="0" y1="0" x2="24" y2="24">
                      <stop offset="0%" stopColor="#8A38F5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 5L15 12L8 19"
                    stroke="url(#arrowGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-medium text-sm sm:text-base md:text-lg text-white">
                  {showMore ? "See less" : "See 4 more"}
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Plan Details */}
          <div className="w-full max-w-[485px] flex flex-col justify-start items-center gap-4 sm:gap-5 md:gap-6">
            <div
              className="w-full rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-6 sm:gap-8 border border-[#FFFFFF1F] backdrop-blur-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(14.18px)",
                boxShadow: "0px 0px 23.63px 0px #00000040",
              }}
            >
              <div className="font-semibold text-base sm:text-lg md:text-xl text-white poppins-font">
                Plan Details
              </div>

              <div
                className="w-full max-w-[357px] rounded-2xl p-4 sm:p-5 border border-[#89898999] mx-auto"
                style={{
                  backdropFilter: "blur(14.18px)",
                  boxShadow: "0px 0px 23.63px 0px #0A0A0A40",
                }}
              >
                <div className="flex flex-col items-center">
                  {[
                    ["Plan Name", "Gold"],
                    ["Price", "$59.00"],
                    ["Duration", "One Month"],
                    ["Discount", "10%"],
                  ].map(([label, value], idx) => (
                    <div key={idx} className="w-full flex justify-between items-center text-sm sm:text-base md:text-lg">
                      <div className="w-1/2 text-white font-medium poppins-font">{label}</div>
                      <div className="w-1/2 text-white font-semibold poppins-font">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grand Total */}
              <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
                <div className="w-full max-w-[334.79px] flex justify-between items-center">
                  <div className="flex flex-col justify-start gap-2 sm:gap-3">
                    <div className="text-base sm:text-lg md:text-xl text-white poppins-font">
                      Grand Total
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white poppins-font">
                      $59
                    </div>
                  </div>
                  <div className="w-8 sm:w-9 md:w-10 lg:w-[38px] h-auto">
                    <img src={Paper} alt="page-icon" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Payment Button */}
            <Link to="/AfterBilling" className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10">
              <div
                className="flex items-center justify-center gap-2 text-white text-sm sm:text-base md:text-lg font-semibold text-center cursor-pointer rounded-[35.45px] px-6 sm:px-8 py-3 sm:py-3.5 border border-[#C22CA299]"
                style={{
                  background: "linear-gradient(95.92deg, rgba(138,56,245,0.5) 15.32%, rgba(194,44,162,0.5) 99.87%)",
                  backdropFilter: "blur(14.18px)",
                  boxShadow: "0 0 23.63px 0 #00000040",
                }}
              >
                <span>Confirm Payment</span>
                <img src={Con1} alt="icon" className="w-6 sm:w-7 md:w-[28.36px] h-auto" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}