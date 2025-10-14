import React, { useState, useEffect } from "react";
import incpirationBg3 from "../../assets/afterHome/incpirationBg3.png";
import before1 from "../../assets/afterHome/study8.png";
import after1 from "../../assets/afterHome/Bath1.png";
import before2 from "../../assets/afterHome/Bath2.png";
import after2 from "../../assets/afterHome/study4.png";
import before from "../../assets/afterHome/Before.png";
import after from "../../assets/afterHome/After.png";
import before11 from "../../assets/afterHome/Before1.png";
import after11 from "../../assets/afterHome/After1.png";
import before22 from "../../assets/afterHome/Before2.png";
import after22 from "../../assets/afterHome/After2.png";

export default function AfterGraph() {
  const [toggle, setToggle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Array of image pairs
  const imagePairs = [
    { before: before, after: after },
    { before: before11, after: after11 },
    { before: before22, after: after22 },
    // Add more pairs as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
  };
  return (
<section
  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[555px] bg-black flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-[50px] bg-contain bg-no-repeat bg-center px-4 overflow-visible"
  style={{ backgroundImage: `url(${incpirationBg3})` }}
>

  {/* Heading */}
<div className="w-full max-w-[480px] sm:max-w-[500px] md:max-w-[520px] lg:max-w-[576px] flex flex-col items-center justify-center gap-4 mt-0 md:mt-[-40px]">
 <h2 className="w-full text-center text-white capitalize text-base sm:text-sm md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[22px] poppins-font font-normal leading-snug">
  Experience the magic of <span className="text-[#8A38F5]">AI</span> as it transforms spaces into beautiful works of art.
</h2>

</div>


  {/* Main Image + Arrows */}
  <div className="w-full max-w-[1064px] h-auto md:h-[370px] flex justify-center items-center relative mt-0 md:mt-[-40px] overflow-visible px-3 sm:px-6">
    
   {/* Left Arrow */}
<button
  className="absolute left-[3px] xl:left-[-48px] top-1/2 transform -translate-y-1/2 
             w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
             rounded-full bg-white/20 flex justify-center items-center shadow-md 
             hover:bg-white/40 transition-all duration-300 z-10"
  onClick={handlePrev}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>


    {/* Image Div */}
    <div
      className="w-[90%] max-w-[1100px] lg:max-w-[864px] xl:max-w-[864px] 
                 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[370px] 
                 rounded-[12px] overflow-hidden relative 
                 transition-all duration-300 ease-in-out mx-auto"
    >
      <img
        src={toggle ? imagePairs[currentIndex].after : imagePairs[currentIndex].before}
        alt="Description"
        className="w-full h-full object-cover rounded-[12px]"
      />

      {/* Toggle Button */}
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 xl:bottom-4 left-1/2 transform -translate-x-1/2 
                      w-[120px] sm:w-[150px] md:w-[163px] 
                      h-[26px] sm:h-[30px] md:h-[33px] 
                      flex justify-between items-center rounded-[20px] 
                      border border-[#E2E2E280] px-2 sm:px-3 
                      bg-black/25 shadow-[0_0_4px_0_#00000040] backdrop-blur-sm cursor-pointer">
        <div
          className={`w-[38px] sm:w-[45px] h-[18px] sm:h-[21px] flex items-center justify-center text-[11px] sm:text-[13px] md:text-[14px] font-normal poppins-font text-white text-center rounded-[20px] transition-all duration-300
            ${!toggle ? 'w-[72px] sm:w-[85px] md:w-[91px] h-[26px] sm:h-[30px] md:h-[33px] bg-gradient-to-r from-[#48207E]/60 via-[#6D2CC2]/60 to-[#48207E]/60 pt-[3px] sm:pt-[5px] px-2 sm:px-3' : ''}`}
          onClick={() => setToggle(false)}
        >
          Before
        </div>

        <div
          className={`w-[28px] sm:w-[34px] h-[18px] sm:h-[21px] flex items-center justify-center text-[11px] sm:text-[13px] md:text-[14px] font-medium poppins-font text-white text-center rounded-[20px] transition-all duration-300
            ${toggle ? 'w-[72px] sm:w-[85px] md:w-[91px] h-[26px] sm:h-[30px] md:h-[33px] bg-gradient-to-r from-[#48207E]/60 via-[#6D2CC2]/60 to-[#48207E]/60 pt-[3px] sm:pt-[5px] px-2 sm:px-3' : ''}`}
          onClick={() => setToggle(true)}
        >
          After
        </div>
      </div>
    </div>

    {/* Right Arrow */}
   <button
  className="absolute right-[3px] xl:right-[-48px] top-1/2 transform -translate-y-1/2 
             w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 
             rounded-full bg-white/20 flex justify-center items-center shadow-md 
             hover:bg-white/40 transition-all duration-300 z-10"
  onClick={handleNext}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>


  </div>
</section>


  );
}