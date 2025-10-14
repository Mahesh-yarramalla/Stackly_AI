import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import sec1bg from "../../assets/product-pg/sec1bg.jpg";
import arrow from "../../assets/home/Arrow.png";
import group from "../../assets/product-pg/groupimg.png";
import drag1 from "../../assets/product-pg/drag1.png";
import drag2 from "../../assets/product-pg/drag2.png";
import drag3 from "../../assets/product-pg/drag3.png";
import drag4 from "../../assets/product-pg/drag4.png";
import drag5 from "../../assets/product-pg/drag5.png";
import drag6 from "../../assets/product-pg/drag6.png";
import drag7 from "../../assets/product-pg/drag7.png";
import drag8 from "../../assets/product-pg/drag8.png";
import drag9 from "../../assets/product-pg/drag9.png";
import drag10 from "../../assets/product-pg/drag10.png";

export default function HeroProducts() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeRef = useRef(null);

  const images = [drag1, drag2, drag3, drag4, drag5, drag6, drag7, drag8, drag9, drag10];
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Handle image click to open pop-up and pause marquee
  //   const handleImageHover = (index) => {
  //   setSelectedImageIndex(index);
  //   setIsPopUpOpen(true);
  //   setIsMarqueePaused(true);
  // };
  let hoverTimer = null;

  const handleMouseEnter = (index) => {
    hoverTimer = setTimeout(() => {
      setSelectedImageIndex(index);
      setIsPopUpOpen(true);
      setIsMarqueePaused(true);
    }, 800); // 0.8 second hold
  };
  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  };

  // Close pop-up and resume marquee
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
    setIsMarqueePaused(false);
  };

  // Navigate to previous image in slider
  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next image in slider
  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Pause/resume marquee animation based on isMarqueePaused
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.style.animationPlayState = isMarqueePaused ? "paused" : "running";
    }
  }, [isMarqueePaused]);

  // Pop-up animation variants
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  // Slider image animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  };

  return (
     <>
    <link rel="preload" href={sec1bg} as="image" />
    <section
  className="
    relative w-full opacity-100 -mt-[82px] pt-[82px] overflow-hidden bg-[#0D0D0D]
    h-[1187px]               
    max-[1280px]:h-[1000px]    
    max-[1024px]:h-[1150px]     
    max-[920px]:h-[900px]      
    max-[681px]:h-[700px]        
  "
>
        {/* Blur background image */}
        <img
          src={sec1bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager" // Load immediately
        />
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
     
        {/* Main Centered Content */}
        <div className="relative lg:absolute lg:top-[203px] lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[1240px] mx-auto 
                        px-4 sm:px-6 md:px-8 flex flex-col gap-8 lg:gap-[64px] md:gap-6 sm:gap-5 mt-6 lg:mt-0 sm:mt-4">
          {/* Hero Section */}
          <div className="w-full max-w-[836px] mx-auto flex flex-col items-center gap-6 lg:gap-[30px] text-white text-center px-2 sm:px-4">
            <div className="h-[27px] flex items-center">
              <p className="text-[16px] md:text-[18px] sm:text-[15px] text-[14px] leading-[100%] font-['Poppins'] font-normal">
                STACKLY AI
              </p>
            </div>
            <div>
              <h1 className="font-['Lora'] text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[110%] 
                             text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CDA8FC]
                             max-[768px]:text-[28px] max-[440px]:text-[24px]">
                Smarter Design for Every Space You Live and Love
              </h1>
            </div>
            <div>
              <p className="font-['Inter'] font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] 
                            leading-[140%] max-[768px]:text-[13px] max-[440px]:text-[12px]">
                Experience intelligent design solutions crafted to enhance interiors, exteriors, and outdoor spaces with seamless AI precision
              </p>
            </div>
            <Link to="/sign-in">
              <div className="w-[158px] h-[44px] px-6 py-2.5 flex items-center justify-center gap-2 rounded-[30px] 
                              border border-[#C22CA299] bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] 
                              hover:bg-[linear-gradient(95.92deg,rgba(138,56,245,0.7)_15.32%,rgba(194,44,162,0.7)_99.87%)] 
                              transition-colors cursor-pointer 
                              md:w-[140px] md:h-[40px] sm:w-[130px] sm:h-[38px] max-[440px]:w-[120px] max-[440px]:h-[36px]">
                <div className="text-white text-[16px] md:text-[14px] sm:text-[13px] max-[640px]:text-[12px] leading-[100%] font-['Inter'] font-medium whitespace-nowrap">
                  Try Now
                </div>

                <div className="w-6 h-6 md:w-5 md:h-5 sm:w-[18px] sm:h-[18px]">
                  <img src={arrow} alt="icon" className="w-full h-full object-contain" />
                </div>
              </div>
            </Link>
          </div>

          {/* Latest Design Trends Section */}
          <div className="w-full flex flex-col items-center gap-8 lg:gap-[48px] md:gap-6 sm:gap-5">
            <div className="w-full max-w-[727px] flex flex-col items-center gap-3 lg:gap-[12px] text-center px-4">
              <p className="text-white text-[40px] sm:text-[44px] md:text-[48px] lg:text-[52px] leading-[140%] font-['Lancelot'] font-normal
                          max-[768px]:text-[30px] max-[440px]:text-[24px]">
                Latest Design Trends
              </p>
              <p className="text-white text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] font-['Poppins'] font-normal
                          max-[768px]:text-[14px] max-[440px]:text-[12px]">
                Curated ideas for modern living
              </p>
            </div>

            {/* Image Marquee Section */}
<div className="relative w-screen max-w-none h-[225px] lg:h-[449.14px] md:h-[500px] sm:h-[150px] overflow-hidden -mx-[calc((100vw-100%)/2)]">
  <div
    ref={marqueeRef}
    className="absolute flex gap-0 h-full animate-marquee whitespace-nowrap"
    style={{ animation: "marquee-latest 20s linear infinite" }}
  >
    {/* First Column */}
    <div className="inline-block h-full w-[143px] lg:w-[286.5px] md:w-[230px] sm:w-[180px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="relative w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag1}
          alt="Image 1"
          className="absolute top-[-34px] lg:top-[-68px] md:top-[-54px] sm:top-[-42px] w-full h-[191px] lg:h-[383px] md:h-[306px] sm:h-[239px] object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] mt-[3px] md:mt-[4px] sm:mt-[3px] overflow-hidden group cursor-pointer border-[0.58px] border-gray-300">
        <img
          src={drag2}
          alt="Image 2"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
    {/* Second Column */}
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="flex gap-[3px] md:gap-[4px] sm:gap-[3px] w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] mb-[3px] md:mb-[4px] sm:mb-[3px]">
        <div className="w-[143px] lg:w-[286.5px] md:w-[229px] sm:w-[179px] h-full border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag3}
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="w-[140px] lg:w-[280px] md:w-[224px] sm:w-[175px] h-full border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag4}
            alt="Image 4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag5}
          alt="Image 5"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
    {/* Third Column */}
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag6}
          alt="Image 6"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flex gap-[3px] md:gap-[4px] sm:gap-[3px] mt-[3px] md:mt-[4px] sm:mt-[3px]">
        <div className="w-[143px] lg:w-[286.5px] md:w-[229px] sm:w-[179px] h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag7}
            alt="Image 7"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="w-[140px] lg:w-[280px] md:w-[224px] sm:w-[175px] h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag8}
            alt="Image 8"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
    {/* Fourth Column */}
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag9}
          alt="Image 9"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] mt-[3px] md:mt-[4px] sm:mt-[3px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag10}
          alt="Image 10"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
    {/* Duplicate content for seamless looping */}
    <div className="inline-block h-full w-[143px] lg:w-[286.5px] md:w-[230px] sm:w-[180px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="relative w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag1}
          alt="Image 1"
          className="absolute top-[-34px] lg:top-[-68px] md:top-[-54px] sm:top-[-42px] w-full h-[191px] lg:h-[383px] md:h-[306px] sm:h-[239px] object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] mt-[3px] md:mt-[4px] sm:mt-[3px] overflow-hidden group cursor-pointer border-[0.58px] border-gray-300">
        <img
          src={drag2}
          alt="Image 2"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="flex gap-[3px] md:gap-[4px] sm:gap-[3px] w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] mb-[3px] md:mb-[4px] sm:mb-[3px]">
        <div className="w-[143px] lg:w-[286.5px] md:w-[229px] sm:w-[179px] h-full border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag3}
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="w-[140px] lg:w-[280px] md:w-[224px] sm:w-[175px] h-full border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag4}
            alt="Image 4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag5}
          alt="Image 5"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag6}
          alt="Image 6"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flex gap-[3px] md:gap-[4px] sm:gap-[3px] mt-[3px] md:mt-[4px] sm:mt-[3px]">
        <div className="w-[143px] lg:w-[286.5px] md:w-[229px] sm:w-[179px] h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag7}
            alt="Image 7"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="w-[140px] lg:w-[280px] md:w-[224px] sm:w-[175px] h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
          <img
            src={drag8}
            alt="Image 8"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
    <div className="inline-block h-full w-[286px] lg:w-[573px] md:w-[458px] sm:w-[358px] mr-[3px] md:mr-[4px] sm:mr-[3px]">
      <div className="w-full h-[96px] lg:h-[192.16px] md:h-[154px] sm:h-[120px] border-[0.58px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag9}
          alt="Image 9"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="w-full h-[125px] lg:h-[250.98px] md:h-[200px] sm:h-[156px] border-[0.58px] mt-[3px] md:mt-[4px] sm:mt-[3px] border-gray-300 overflow-hidden group cursor-pointer">
        <img
          src={drag10}
          alt="Image 10"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  </div>
</div>
</div>
</div>
        {/* Pop-up Modal */}
        <AnimatePresence>
          {isPopUpOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopUp}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden max-w-[55vw] lg:max-w-[55vw] md:max-w-[70vw] sm:max-w-[80vw] max-w-[90vw] 
                           max-h-[65vh] lg:max-h-[65vh] md:max-h-[60vh] sm:max-h-[55vh] max-h-[50vh]"
                variants={popUpVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={handleClosePopUp}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={images[selectedImageIndex]}
                    alt={`Image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl lg:text-4xl md:text-3xl sm:text-2xl hover:scale-125 transition-transform duration-200 drop-shadow-lg"
                    onClick={handlePrevImage}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl lg:text-4xl md:text-3xl sm:text-2xl hover:scale-125 transition-transform duration-200 drop-shadow-lg"
                    onClick={handleNextImage}
                  >
                    ›
                  </button>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inline CSS for marquee animation */}
        <style jsx>{`
          @keyframes marquee-latest {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
      
        `}</style>
      </section>
    </>
  );
}