import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import center from "../../assets/afterHome/SpaceCenter.png";
import star from "../../assets/afterHome/SpaceStar.png";
import recent from "../../assets/afterHome/SpaceRecent.png";
import colorStar from "../../assets/afterHome/colorStar.png";
import DraggableImages from "../../components/DraggableImages";
import DragSize from "./../../assets/product-pg/dragsize.png";
import Search from "./../../assets/product-pg/search.png";
import Input from "./../../assets/product-pg/input.png";
import Download from "./../../assets/product-pg/download.png";

export default function HeroAfterProducts() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showDraggable, setShowDraggable] = useState(false);
  const [dragData, setDragData] = useState({ left: "", right: "" });
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ category: null, isFavorite: null });
  const draggableRef = useRef(null);

  // Fetch user designs from backend with filters
  const fetchDesigns = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = {};
      if (filter.category) params.category = filter.category;
      if (filter.isFavorite !== null) params.is_favorite = filter.isFavorite;

      const response = await axios.get("http://localhost:8000/designs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params,
      });
      setDesigns(response.data);
    } catch (error) {
      console.error("Error fetching designs:", error);
      setError("Failed to load designs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, [filter]);

  const handleFullscreen = (image) => setFullscreenImage(image);

  const handleDownload = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { mode: "cors" });
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `stackly-design-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Cleanup
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download failed:", err);
    alert("Failed to download image. Please try again.");
  }
};
  const handleShow = (leftImg, rightImg) => {
    setDragData({ left: leftImg, right: rightImg });
    setShowDraggable(true);
  };

  const handleFavoriteToggle = async (id, isFavorite) => {
    setDesigns((prevDesigns) => {
      const updated = prevDesigns.map((design) =>
        design.id === id ? { ...design, is_favorite: isFavorite } : design
      );
      // If in Starred Image mode, remove unstarred designs
      if (filter.isFavorite && !isFavorite) {
        return updated.filter((design) => design.id !== id);
      }
      return updated;
    });
    // Re-fetch designs to sync with backend
    await fetchDesigns();
  };

  const handleFilter = (category = null, isFavorite = null) => {
    // Toggle isFavorite if clicking Starred Image again
    setFilter({
      category,
      isFavorite: filter.isFavorite === true && isFavorite === true ? null : isFavorite,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (draggableRef.current && !draggableRef.current.contains(event.target)) {
        setShowDraggable(false);
      }
    };
    if (showDraggable) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDraggable]);

  const baseImageUrl = "http://localhost:8000";

  const RoomCard = ({ roomName, originalImage, transformedImage, isFavorite, id, category, onFavoriteToggle }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [isStarred, setIsStarred] = useState(isFavorite);
    const optionsRef = useRef(null);

    useEffect(() => {
      setIsStarred(isFavorite);
    }, [isFavorite]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
          setShowOptions(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleFavoriteToggleLocal = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:8000/designs/${id}/favorite`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setIsStarred(response.data.is_favorite);
        onFavoriteToggle(id, response.data.is_favorite);
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    };

    return (
      <div className="max-w-[522px] m-auto w-full h-auto flex flex-col gap-2">
        <div className="max-w-[520px] min-h-[35px] flex flex-col gap-2">
          <div className="flex justify-between items-center max-w-[520px] min-h-[35px]">
            <div className="w-[45px] h-[20px] text-white text-[14px] font-poppins font-normal leading-[140%]">
              {roomName}
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-[24px] h-[24px] flex items-center justify-center rounded-[30px] border-[1px] border-solid border-[#FFFFFF33] opacity-100 cursor-pointer"
                onClick={handleFavoriteToggleLocal}
              >
                <img
                  src={isStarred ? colorStar : star}
                  alt="star"
                  className="w-[12px] h-[11px]"
                />
              </div>
              <div
                className="w-[24px] h-[24px] cursor-pointer hover:opacity-80"
                onClick={() => handleFullscreen(transformedImage)}
              >
                <img src={DragSize} alt="Fullscreen" title="View fullscreen" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[522px] w-full h-auto rounded-[16px] overflow-hidden">
          <DraggableImages imageLeft={transformedImage} imageRight={originalImage} />
        </div>
        {showOptions ? (
          <div className="max-w-[520px] min-h-[57px] flex justify-between items-center">
            <div
              className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
              onClick={() => handleShow(transformedImage, originalImage)}
            >
              <img src={Search} alt="Show" />
              <div className="text-[12px] text-[#ffffff]">Show</div>
            </div>
            <div className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80">
              <img src={Input} alt="Input" />
              <div className="text-[12px] text-[#ffffff]">Input</div>
            </div>
            <div
              className="max-w-[40px] flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
              onClick={() => handleDownload(transformedImage)}
            >
              <img src={Download} alt="Download" />
              <div className="text-[12px] text-[#ffffff]">Download</div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end" ref={optionsRef}>
            <div
              className="w-[28px] h-[28px] cursor-pointer flex items-center justify-center hover:opacity-80"
              onClick={() => setShowOptions(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className="relative w-full min-h-[800px] max-h-[2911px] bg-black opacity-100 -mt-[82px] pt-[82px] overflow-hidden"
      style={{ transform: "rotate(0deg)" }}
    >
      <div className="absolute top-[159px] left-[58px] flex gap-[46px] z-10">
        {["Interiors", "Exteriors", "Outdoors"].map((item) => (
          <a
            key={item}
            href="#"
            className={`relative text-white font-poppins cursor-pointer hover:text-[#BD8AFF] z-10
                       ${filter.category === item.toLowerCase() ? 'text-[#BD8AFF] after:w-full' : ''}
                       after:content-[''] after:absolute after:left-0 after:bottom-0
                       after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-transparent after:via-[#8A38F5] after:to-transparent
                       after:transition-all after:duration-300 hover:after:w-full`}
            onClick={(e) => {
              e.preventDefault();
              handleFilter(item.toLowerCase(), filter.isFavorite);
            }}
          >
            {item}
          </a>
        ))}
      </div>
      <div
        className="absolute w-[1255px] h-[1px] top-[196px] left-1/2 transform -translate-x-1/2 bg-[#FFFFFF80] opacity-100"
      ></div>
      <div
        className="absolute w-[238px] h-[24px] top-[212px] left-[1060px] flex gap-[24px] opacity-100"
      >
        <div className="w-[81px] h-[24px] flex items-center gap-[8px] opacity-100">
          <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[30px] border border-[#FFFFFF33]">
            <img src={recent} alt="icon" className="w-[24px] h-[24px]" />
          </div>
          <div className="w-[49px] h-[21px] flex items-center">
            <span
              className={`font-poppins font-normal text-[14px] leading-[100%] cursor-pointer ${
                filter.isFavorite === null && !filter.category ? 'text-[#BD8AFF]' : 'text-white'
              }`}
              onClick={() => handleFilter(null, null)}
            >
              Recent
            </span>
          </div>
        </div>
        <div className="w-[133px] h-[24px] flex items-center gap-[8px] opacity-100">
          <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[30px] border-[1px] border-solid border-[#FFFFFF33]">
            <img src={filter.isFavorite ? colorStar : star} alt="icon" className="w-[16px] h-[16px]" />
          </div>
          <div className="flex-1 flex items-center">
            <span
              className={`text-white font-poppins text-[14px] leading-[100%] cursor-pointer ${
                filter.isFavorite ? 'text-[#BD8AFF]' : ''
              }`}
              onClick={() => handleFilter(filter.category, filter.isFavorite ? null : true)}
            >
              Starred Image
            </span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <p className="text-white">Loading...</p>
        </div>
      ) : error ? (
        <div className="fixed mt-[120px] inset-0 flex items-center justify-center bg-black/50">
          <p className="text-white">{error}</p>
        </div>
      ) : designs.length === 0 ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-[90%] max-w-[496px] h-auto flex flex-col items-center justify-center gap-[24px] opacity-100 rounded-lg shadow-lg bg-[rgba(0,0,0,0.7)] p-6 mt-[180px]">
            <div className="w-[318px] h-[318px]">
              <img
                src={center}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full text-center flex flex-col gap-[6px]">
              <p className="text-[16px] font-poppins font-medium text-white leading-[100%]">
                This space is still empty
              </p>
              <p className="text-[14px] font-poppins font-normal text-[#E0E0E0] leading-[120%]">
                Start creating with AI to design a home that reflects your style.
              </p>
            </div>
            <button
              className="w-[236px] h-[44px] flex items-center justify-between gap-[10px] 
                         rounded-[30px] px-[30px] py-[10px] 
                         border border-[#C22CA299] 
                         bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)]
                         backdrop-blur-[6px] 
                         shadow-[0px_2px_12px_0px_#C22CA240]
                         cursor-pointer"
            >
              <span className="text-white font-inter font-medium text-[16px] leading-[100%]">
                Start creating now
              </span>
              <img
                src={colorStar}
                alt="icon"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[1214px] mx-auto p-5 sm:p-10 flex flex-col gap-10 mt-52">
          <div>
            <div className="w-full h-[27px] text-[#E0E0E0EE] text-[18px] font-poppins font-normal leading-[100%] text-center mb-12">
              {filter.isFavorite ? "Starred Designs" : filter.category ? `${filter.category.charAt(0).toUpperCase() + filter.category.slice(1)} Designs` : "Recent Designs"}
            </div>
            <div className="grid grid-cols-2 gap-10">
              {designs.map((design) => (
                <RoomCard
                  key={design.id}
                  roomName={new Date(design.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  originalImage={`${baseImageUrl}${design.uploaded_image}`}
                  transformedImage={`${baseImageUrl}${design.generated_image}`}
                  isFavorite={design.is_favorite}
                  id={design.id}
                  category={design.category}
                  onFavoriteToggle={handleFavoriteToggle}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen preview"
              className="max-w-[860px] max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {showDraggable && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={() => setShowDraggable(false)}
        >
          <div
            ref={draggableRef}
            onClick={(e) => e.stopPropagation()}
            className="w-[95%] max-w-[860px] max-h-[90vh] overflow-hidden bg-white rounded-xl shadow-xl"
          >
            <DraggableImages imageRight={dragData.right} imageLeft={dragData.left} />
          </div>
        </div>
      )}
    </section>
  );
}