import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Arrow from "../../assets/forgetPg/arrow1.png";
import ExploreLv1 from "../../assets/afterHome/ExploreLv1.png";
import ExploreLv2 from "../../assets/afterHome/ExploreLv2.png";
import ExploreLv3 from "../../assets/afterHome/ExploreLv3.png";
import ExploreLv44 from "../../assets/afterHome/ExploreLv4.png";
import ExploreLv5 from "../../assets/afterHome/ExploreLv5.png";
import ExploreLv6 from "../../assets/afterHome/ExploreLv6.png";
import ExploreLv7 from "../../assets/afterHome/ExploreLv7.png";
import ExploreLv8 from "../../assets/afterHome/ExploreLv8.png";
import BedRoom1 from "../../assets/afterHome/BedRoom1.png";
import BedRoom2 from "../../assets/afterHome/BedRoom2.png";
import BedRoom3 from "../../assets/afterHome/BedRoom3.png";
import BedRoom4 from "../../assets/afterHome/BedRoom4.png";
import BedRoom5 from "../../assets/afterHome/BedRoom5.png";
import BedRoom6 from "../../assets/afterHome/BedRoom6.png";
import BedRoom7 from "../../assets/afterHome/BedRoom7.png";
import BedRoom8 from "../../assets/afterHome/BedRoom8.png";
import Kitchen1 from "../../assets/afterHome/Kitchen1.png";
import Kitchen2 from "../../assets/afterHome/Kitchen2.png";
import Kitchen3 from "../../assets/afterHome/Kitchen3.png";
import Kitchen4 from "../../assets/afterHome/Kitchen4.png";
import Kitchen5 from "../../assets/afterHome/Kitchen5.png";
import Kitchen6 from "../../assets/afterHome/Kitchen6.png";
import Kitchen7 from "../../assets/afterHome/Kitchen7.png";
import Kitchen8 from "../../assets/afterHome/Kitchen8.png";
import study1 from "../../assets/afterHome/study1.png";
import study2 from "../../assets/afterHome/study2.png";
import study3 from "../../assets/afterHome/study3.png";
import study4 from "../../assets/afterHome/study4.png";
import study5 from "../../assets/afterHome/study5.png";
import study6 from "../../assets/afterHome/study6.png";
import study7 from "../../assets/afterHome/study7.png";
import study8 from "../../assets/afterHome/study8.png";
import Bath1 from "../../assets/afterHome/Bath1.png";
import Bath2 from "../../assets/afterHome/Bath2.png";
import Bath3 from "../../assets/afterHome/Bath3.png";
import Bath4 from "../../assets/afterHome/Bath4.png";
import Bath5 from "../../assets/afterHome/Bath5.png";
import Bath6 from "../../assets/afterHome/Bath6.png";
import Bath7 from "../../assets/afterHome/Bath7.png";
import Bath8 from "../../assets/afterHome/Bath8.png";
import Star from "../../assets/afterHome/LikeStar.png";

function LivingRoom() {
  const { roomType } = useParams();

  const roomToIndex = {
    livingroom: 0,
    bedroom: 1,
    kitchen: 2,
    bathroom: 3,
    studyroom: 4,
  };
  // Room categories array
  const roomCategories = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Studyroom"];
  
  // State to track current room category
  const [currentCategory, setCurrentCategory] = useState(roomToIndex[roomType] || 0);
  
  // Images data for each category
  const categoryImages = {
    "Living Room": [
      { src: ExploreLv1, name: "Contemporary" },
      { src: ExploreLv2, name: "Classic" },
      { src: ExploreLv3, name: "Modern" },
      { src: ExploreLv44, name: "Scandinavian" },
      { src: ExploreLv5, name: "Industrial" },
      { src: ExploreLv6, name: "Japandi" },
      { src: ExploreLv7, name: "Minimal" },
      { src: ExploreLv8, name: "Costal" },
    ],
    "Bedroom": [
      { src: BedRoom1, name: "Cozy Retreat" },
      { src: BedRoom2, name: "Serene Space" },
      { src: BedRoom3, name: "Dreamy Haven" },
      { src: BedRoom4, name: "Tranquil Oasis" },
      { src: BedRoom5, name: "Restful Escape" },
      { src: BedRoom6, name: "Peaceful Sanctuary" },
      { src: BedRoom7, name: "Calm Refuge" },
      { src: BedRoom8, name: "Relaxing Getaway" },
    ],
    "Kitchen": [
      { src: Kitchen1, name: "Modern Kitchen" },
      { src: Kitchen2, name: "Classic Kitchen" },
      { src: Kitchen3, name: "Contemporary Kitchen" },
      { src: Kitchen4, name: "Minimalist Kitchen" },
      { src: Kitchen5, name: "Rustic Kitchen" },
      { src: Kitchen6, name: "Industrial Kitchen" },
      { src: Kitchen7, name: "Gourmet Kitchen" },
      { src: Kitchen8, name: "Family Kitchen" },
    ],
    "Bathroom": [
      { src: Bath1, name: "Spa Bathroom" },
      { src: Bath2, name: "Modern Bathroom" },
      { src: Bath3, name: "Luxury Bathroom" },
      { src: Bath4, name: "Compact Bathroom" },
      { src: Bath5, name: "Minimalist Bathroom" },
      { src: Bath6, name: "Classic Bathroom" },
      { src: Bath7, name: "Serene Bathroom" },
      { src: Bath8, name: "Elegant Bathroom" },
    ],
    "Studyroom": [
      { src: study1, name: "Home Office" },
      { src: study2, name: "Creative Studio" },
      { src: study3, name: "Reading Nook" },
      { src: study4, name: "Minimalist Study" },
      { src: study5, name: "Executive Office" },
      { src: study6, name: "Cozy Library" },
      { src: study7, name: "Modern Workspace" },
      { src: study8, name: "Productive Environment" },
    ]
  };

  // Get current category name
  const currentCategoryName = roomCategories[currentCategory];
  
  // Get images for current category
  const images = categoryImages[currentCategoryName];
  
  // Initialize activeStars state based on the number of images
  const [activeStars, setActiveStars] = useState(Array(images.length).fill(false));

  // Function to handle next category
  const handleNextCategory = () => {
    const nextCategory = (currentCategory + 1) % roomCategories.length;
    setCurrentCategory(nextCategory);
    // Reset stars when category changes
    setActiveStars(Array(categoryImages[roomCategories[nextCategory]].length).fill(false));
  };

  // Function to handle previous category
  const handlePrevCategory = () => {
    const prevCategory = (currentCategory - 1 + roomCategories.length) % roomCategories.length;
    setCurrentCategory(prevCategory);
    // Reset stars when category changes
    setActiveStars(Array(categoryImages[roomCategories[prevCategory]].length).fill(false));
  };

  const toggleStar = (index) => {
    const newStars = [...activeStars];
    newStars[index] = !newStars[index];
    setActiveStars(newStars);
  };

  useEffect(() => {
    // whenever URL changes, update the category
    if (roomType && roomToIndex[roomType] !== undefined) {
      setCurrentCategory(roomToIndex[roomType]);
    }
  }, [roomType]);

  return (
 <section className="relative w-full h-fit min-h-[auto] sm:min-h-[400px] md:min-h-[500px] bg-black pt-[82px] -mt-[82px] overflow-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8 box-border px-4 sm:px-6 md:px-8">
  {/* Header */}
  <div className="w-full max-w-[1334px] flex items-center relative z-10 mt-0 md:mt-[-40px]">
  {/* Mobile category selector (show only on <640px) */}
<div className="w-full flex justify-between items-center mt-12 sm:hidden">
  {/* Back Button */}
  <Link to="/afterheropricing/">
    <button className="flex items-center gap-2 bg-transparent hover:bg-[#8A38F50F] rounded-full px-2 py-1 transition-colors">
      <div className="w-5 h-5 bg-[#FFFFFF1F] rounded-full flex items-center justify-center border border-[#8A38F5]">
        <img src={Arrow} alt="back" className="w-2.5 h-2.5" />
      </div>
      <span className="text-[13px] text-white poppins-font">Back</span>
    </button>
  </Link>

  {/* Sliding Category Selector */}
  <div className="relative flex-1 mx-2 w-[140px]">
    <div
      className="flex items-center justify-between rounded-[20px] px-2 py-[5px]"
      style={{
        height: "36px",
        background: "rgba(255,255,255,0.08)",
        borderImageSource:
          "linear-gradient(94deg, rgba(138,56,245,0.4) 0.61%, rgba(255,255,255,0.4) 99.99%)",
        borderImageSlice: 1,
        borderWidth: "1px",
      }}
    >
      {/* Prev Button */}
      <button
        className="w-[18px] h-[18px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={handlePrevCategory}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M8 2L2 8L8 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Category Name */}
      <span className="text-[12px] poppins-font font-normal text-white text-center flex-1">
        {currentCategoryName}
      </span>

      {/* Next Button */}
      <button
        className="w-[18px] h-[18px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={handleNextCategory}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path
            d="M2 2L8 8L2 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>


    {/* Tablet and Desktop header */}
      <div className="w-full relative hidden sm:flex items-center mt-[90px]">
  {/* Back button on the left */}
  <Link to="/afterheropricing/">
    <button className="w-[83px] h-[32px] flex items-center gap-[12px] bg-transparent hover:bg-[#8A38F50F] rounded-full px-1 py-1 transition-colors">
      <div className="w-7 h-7 bg-[#FFFFFF1F] rounded-full flex items-center justify-center border border-[#8A38F5]">
        <img src={Arrow} alt="back" className="w-3 h-3" />
      </div>
      <span className="text-[16px] text-white poppins-font">Back</span>
    </button>
  </Link>

  {/* Centered slide button div */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] xl:w-[584px]">
    <div
      className="flex items-center justify-between rounded-[20px] px-3 sm:px-4 py-[6px]"
      style={{
        height: "42px",
        background: "rgba(255,255,255,0.08)",
        borderImageSource:
          "linear-gradient(94deg, rgba(138,56,245,0.4) 0.61%, rgba(255,255,255,0.4) 99.99%)",
        borderImageSlice: 1,
        borderWidth: "1px",
      }}
    >
      <button
        className="w-[20px] h-[20px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={handlePrevCategory}
      >
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2L2 8L8 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] poppins-font font-normal text-white text-center flex-1">
        {currentCategoryName}
      </span>

      <button
        className="w-[20px] h-[20px] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={handleNextCategory}
      >
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L8 8L2 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

  </div>

  {/* Image Grid */}
  <div className="w-full max-w-[1338px] flex flex-col gap-4 sm:gap-[24px] px-4 sm:px-6 md:px-8 pb-4 sm:pb-8">
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-[24px]">
      {images.map((imgObj, index) => {
        const handleDownload = () => {
          const link = document.createElement("a");
          link.href = imgObj.src;
          link.download = `image-${index + 1}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        return (
          <div
            key={index}
            className="w-full h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[250px] rounded-[4px] sm:rounded-[6px] md:rounded-[8px] border border-[0.5px] overflow-hidden relative"
          >
            <img src={imgObj.src} alt={`${imgObj.name}`} className="w-full h-full object-cover" />

            {/* Download Button */}
            <div
              onClick={handleDownload}
              className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#8A38F533] bg-[#7A1FF133] flex items-center justify-center absolute top-1 sm:top-2 right-1 sm:right-2 cursor-pointer"
              style={{ boxShadow: "0px 0px 4px 0px #FFFFFF29", backdropFilter: "blur(4px)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>

            {/* Star Icon */}
            <div
              onClick={() => toggleStar(index)}
              className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#FFFFFF33] flex items-center justify-center absolute bottom-1 sm:bottom-2 right-1 sm:right-2 cursor-pointer"
              style={{
                boxShadow: "0px 0px 4px 0px #FFFFFF33",
                backgroundColor: activeStars[index] ? "#FFD700" : "transparent",
              }}
            >
              <img src={Star} alt="star" className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] ${activeStars[index] ? "" : "filter brightness-0"}`} />
            </div>

            {/* Image Name */}
            <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white poppins-font text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] bg-black bg-opacity-50 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
              {imgObj.name}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}

export default LivingRoom;