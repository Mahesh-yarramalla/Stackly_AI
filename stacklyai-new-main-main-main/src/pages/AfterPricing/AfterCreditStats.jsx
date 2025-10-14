import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BgSec2 from "../../assets/afterHome/InsSec23.png";
import Lv1 from "../../assets/afterHome/lv1.png";
import BedRoom5 from "../../assets/afterHome/BedRoom5.png";
import Kitchen3 from "../../assets/afterHome/Kitchen3.png";
import Lv4 from "../../assets/afterHome/lv1.png";
import Lv5 from "../../assets/afterHome/lv1.png";
import study8 from "../../assets/afterHome/study8.png";
import Bath1 from "../../assets/afterHome/Bath1.png";

export default function AfterCreditStats() {
  const [active, setActive] = useState(0);
 
    const navigate = useNavigate();

  const tabs = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Study Room"];

  // Map tabs to routes
  const tabRoutes = [
  "/explore/livingroom",
  "/explore/bedroom",
  "/explore/kitchen",
  "/explore/bathroom",
  "/explore/studyroom",
];

const content = [
  { 
    title: "Living Room", 
    description: "A spacious and cozy living area designed for relaxation and entertainment, featuring comfortable seating, modern decor, and ambient lighting.", 
    img: Lv1 
  },
  { 
    title: "Bedroom", 
    description: "A serene and restful bedroom designed to promote sleep and relaxation, with a cozy bed, soft lighting, and stylish storage solutions.", 
    img: BedRoom5 
  },
  { 
    title: "Kitchen", 
    description: "A functional and modern kitchen with ample storage, sleek countertops, and efficient appliances to make cooking a pleasure.", 
    img: Kitchen3 
  },
  { 
    title: "Bathroom", 
    description: "A clean and elegant bathroom featuring modern fixtures, soothing colors, and a spa-like ambiance for relaxation.", 
    img: Bath1 
  },
  { 
    title: "Study Room", 
    description: "A quiet and organized study room with a comfortable workspace, proper lighting, and storage for books and office supplies.", 
    img: study8 
  },
];
  // Handle Explore button click
    const handleExplore = (route) => {
  navigate(route); // ✅ use the route passed in
};

  return (
   <section
  className="relative w-full min-h-[750px] bg-black flex flex-col justify-center items-center gap-6 bg-contain bg-no-repeat bg-center"
  style={{ backgroundImage: `url(${BgSec2})` }}
>
  {/* Badge */}
  <div
    className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] sm:w-[147px] h-[36px] flex items-center justify-center rounded-[20px] px-2.5 py-1.5"
    style={{ border: "1px solid #8A38F5" }}
  >
    <span className="text-white text-sm sm:text-[16px] font-normal text-center">For Personals</span>
  </div>

  {/* Main Container */}
  <div className="w-full max-w-[1038px] px-4 sm:px-6 flex flex-col items-center justify-start gap-6 sm:gap-[50px] mx-auto mt-[90px]">
    {/* Header */}
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h2 className="w-full text-center text-white capitalize text-2xl sm:text-3xl md:text-4xl lg:text-[42px] lancelot-text font-normal leading-tight">
        Which Rooms Will You Stage?
      </h2>
      <p className="w-full max-w-[720px] text-center text-white text-sm sm:text-[16px] poppins-font font-medium leading-relaxed tracking-[1%]">
        Create the perfect space with a seamless design process. Let’s design your dream home or any space with AI and get the best interior design suggestions
      </p>
    </div>

    {/* Tabs */}
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1038px] relative">
        <div className="h-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-2 md:gap-[17px] relative">
          {tabs.map((text, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="w-[150px] sm:w-[180px] md:w-[206px] h-[47px] flex items-center justify-center cursor-pointer relative"
            >
              <p
                className={`text-center text-base sm:text-lg md:text-[20px] font-poppins font-normal leading-tight transition-all duration-300 ${
                  active === i
                    ? "bg-gradient-to-r from-[#8A38F5] to-[#C22CA2] bg-clip-text text-transparent"
                    : "text-white hover:bg-gradient-to-r hover:from-[#8A38F5] hover:to-[#C22CA2] hover:bg-clip-text hover:text-transparent"
                }`}
              >
                {text}
              </p>
              <div
                className={`absolute bottom-0 h-[2px] w-[70%] rounded-full  ${
                  active === i
                    ? "bg-gradient-to-r from-[#8A38F5] to-[#C22CA2] z-10 md:bg-gradient-to-r md:from-[#8A38F5] md:to-[#C22CA2]"
                    : "bg-white md:bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white hidden md:block"></div>

      </div>
    </div>

    {/* Content Div */}
  <div className="w-full max-w-[1038px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-[50px]">
  {/* Content Section */}
  <div className="w-full md:w-[489px] flex flex-col gap-6">
    <h2 className="w-full text-white poppins-font font-medium text-xl sm:text-2xl md:text-[24px] leading-tight">
      {content[active].title}
    </h2>
    <p className="w-full text-white poppins-font font-normal text-sm sm:text-[16px] leading-relaxed">
      {content[active].description}
    </p>
    
    {/* Button for Desktop only */}
    <button
      onClick={() => handleExplore(tabRoutes[active])}
      className="hidden md:flex w-full md:w-[489px] h-[44px] py-2 px-6 rounded-[30px] border border-[#C22CA299] text-white bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] items-center justify-center gap-2"
    >
      <span className="text-sm sm:text-base">Explore all design</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-[#8A38F5]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z" />
      </svg>
    </button>
  </div>
  
  {/* Image Section */}
  <div className="w-full md:w-[440px] flex flex-col gap-4">
    <div className="w-full h-[200px] sm:h-[250px] md:h-[301px] rounded-[20px] overflow-hidden relative">
      <img
        src={content[active].img}
        alt={content[active].title}
        className="w-full h-full object-cover rounded-[20px]"
      />
    </div>
    
    {/* Button for Mobile only - Below image */}
    <button
      onClick={() => handleExplore(tabRoutes[active])}
      className="md:hidden w-full h-[44px] py-2 px-6 rounded-[30px] border border-[#C22CA299] text-white bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] flex items-center justify-center gap-2"
    >
      <span className="text-sm sm:text-base">Explore all design</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-[#8A38F5]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z" />
      </svg>
    </button>
  </div>
</div>
  </div>
</section>
  );
}