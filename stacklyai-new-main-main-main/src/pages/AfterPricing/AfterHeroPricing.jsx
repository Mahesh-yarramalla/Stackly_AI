import React, { useEffect, useState } from "react";
import Bg1 from "../../assets/afterHome/insBg.png";
import img1 from "../../assets/afterHome/img1.png";
import img2 from "../../assets/afterHome/img2.png";
import img3 from "../../assets/afterHome/img3.png";
import img4 from "../../assets/afterHome/img4.png";
import AfterCreditStats from "./AfterCreditStats";
import AfterGraph from "./AfterGraph";

export default function ImageSection() {
  const [bgImg, setBgImg] = useState(Bg1);

  // Responsive image size and container dimensions
  const [imageSize, setImageSize] = useState(163.71);
  const [containerWidth, setContainerWidth] = useState(939);
  const [containerHeight, setContainerHeight] = useState(320);
  const [containerMarginTop, setContainerMarginTop] = useState("-320px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setImageSize(80);
        setContainerWidth(300);
        setContainerHeight(120);
        setContainerMarginTop("-60px"); // Reduced negative margin for mobile
      } else if (width >= 640 && width < 1024) {
        setImageSize(160);
        setContainerWidth(600);
        setContainerHeight(200);
        setContainerMarginTop("-180px"); // Reduced negative margin for tablet
      } else {
        setImageSize(163.71);
        setContainerWidth(939);
        setContainerHeight(320);
        setContainerMarginTop("-320px"); // Original for desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Original desktop positions (for 939px container width)
  const originalImages = [
    { top: 433, left: 171.08, rotate: -12, src: img1, z: 1 },
    { top: 448.43, left: 316.23, rotate: 8.09, src: img2, z: 3 },
    { top: 442.41, left: 429.72, rotate: 12.53, src: img3, z: 2 },
    { top: 452.02, left: 579.93, rotate: -9.26, src: img4, z: 1 },
  ];

  // Calculate scaled positions based on current container width
  const getScaledImages = () => {
    const scaleFactor = containerWidth / 939; // 939 is the original desktop container width
    
    return originalImages.map(img => ({
      ...img,
      top: img.top * scaleFactor,
      left: img.left * scaleFactor,
    }));
  };

  const scaledImages = getScaledImages();

  return (
    <div>
      <div
        className="w-full h-[400px] sm:h-[500px] md:h-[652px] bg-cover bg-center -mt-[82px] pt-[82px] overflow-hidden relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Text Content */}
        <div className="w-full max-w-[939px] mx-auto relative flex flex-col items-center gap-4 sm:gap-[34px] opacity-100 px-4" 
             style={{ 
               top: window.innerWidth < 640 ? "40px" : 
                    window.innerWidth < 1024 ? "60px" : "80px" 
             }}>
          <h2 className="w-full text-center text-white text-[20px] sm:text-[36px] md:text-[52px] lancelot-text capitalize opacity-100 leading-tight">
            Unveil the art of modern living.
          </h2>
          <p
            className="w-full max-w-[573px] text-center text-white text-[10px] sm:text-[18px] md:text-[22px] lora-text font-medium capitalize opacity-100 leading-snug"
          >
            Discover curated spaces, smart ideas, and timeless style crafted to inspire your everyday.
          </p>
        </div>

        {/* Images Container - Centered */}
        <div
          className="w-full flex justify-center items-center"
          style={{
            marginTop: containerMarginTop,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
              maxWidth: "90vw",
            }}
          >
            {/* Images inside the container */}
            {scaledImages.map((img, i) => (
              <div
                key={i}
                className="absolute overflow-hidden opacity-100 transition-transform duration-300 hover:scale-105"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  top: `${img.top}px`,
                  left: `${img.left}px`,
                  transform: `rotate(${img.rotate}deg)`,
                  borderRadius: imageSize === 80 ? "12px" : imageSize === 160 ? "18px" : "22px",
                  border: "4.45px solid #FFFFFF33",
                  boxShadow:
                    "8.77px 8.77px 4.39px 0px #00000040 inset, -8.77px -8.77px 4.39px 0px #00000040 inset",
                  zIndex: img.z,
                }}
                onMouseEnter={() => setBgImg(img.src)}
                onMouseLeave={() => setBgImg(Bg1)}
              >
                <img
                  src={img.src}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AfterCreditStats />
      <AfterGraph />
    </div>
  );
}