
//Good file 
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import SideArrow from "../../assets/pricing-pg/sideArrow.png";
import More from "../../assets/product-pg/more.png";
import Download from "../../assets/product-pg/do.png";
import Share from "../../assets/product-pg/share.png";
import axios from "axios";

export default function ImageGeneration() {
  const location = useLocation();
  const navigate = useNavigate();

  const [originalImage, setOriginalImage] = useState(null);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [formData, setFormData] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const backendBaseUrl = "http://localhost:8000";

  // Track if this is an initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (originalImage || generatedImages.length > 0 || formData || uploadedFile) {
      const stateToSave = {
        originalImage,
        generatedImages,
        formData,
        uploadedFile: uploadedFile ? {
          name: uploadedFile.name,
          type: uploadedFile.type,
          size: uploadedFile.size,
          lastModified: uploadedFile.lastModified
        } : null
      };
      localStorage.setItem("imageGenState", JSON.stringify(stateToSave));
    }
  }, [originalImage, generatedImages, formData, uploadedFile]);

  // Load state from location.state or localStorage
  useEffect(() => {
    let state = location.state;

    if (!state) {
      const saved = localStorage.getItem("imageGenState");
      if (saved) {
        state = JSON.parse(saved);
      }
    }

    if (state) {
      setFormData(state.formData || null);

      if (state.originalImage) {
        const fileObj = state.originalImage;
        const url = typeof fileObj === "string" ? fileObj : fileObj.url || "";
        setOriginalImage({
          url,
          id: "original",
          label: "Original Image",
          isOriginal: true,
        });
      }

      if (state.uploadedFile) {
        // Create a dummy file object with metadata
        const file = new File([""], state.uploadedFile.name, {
          type: state.uploadedFile.type,
          lastModified: state.uploadedFile.lastModified
        });
        setUploadedFile(file);
      }

      if (state.generatedImages) {
        const processed = state.generatedImages.map((img, index) => {
          let url = typeof img === "string" ? img : img.url || "";
          if (url && !url.startsWith("http") && !url.startsWith("blob:")) {
            url = backendBaseUrl + url;
          }
          return {
            url,
            id: img.id || `design-${index}-${Date.now()}`,
            label: `Design ${index + 1}`,
          };
        });
        setGeneratedImages(processed);
      }
    }
    setIsInitialLoad(false);
  }, [location.state]);

  // Clean up blob URLs when images change or component unmounts
  useEffect(() => {
    return () => {
      if (originalImage?.url?.startsWith("blob:")) {
        URL.revokeObjectURL(originalImage.url);
      }
      generatedImages.forEach((img) => {
        if (img.url?.startsWith("blob:")) {
          URL.revokeObjectURL(img.url);
        }
      });
    };
  }, [originalImage, generatedImages]);

  // Clear localStorage only when tab is closed or navigating back to home
  useEffect(() => {
    let isInternalNavigation = false;

    const handleBeforeUnload = (e) => {
      // Only clear if not an internal navigation
      if (!isInternalNavigation) {
        localStorage.removeItem("imageGenState");
      }
    };

    const handlePopState = (e) => {
      // Check if we're navigating back to home
      if (window.location.pathname === "/") {
        localStorage.removeItem("imageGenState");
      }
    };

    // Track link clicks to detect internal navigation
    const handleClick = (e) => {
      const target = e.target.closest('a[href]');
      if (target && target.getAttribute('href') !== '/') {
        isInternalNavigation = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const fetchOriginalFile = async () => {
    try {
      const response = await fetch(originalImage.url);
      const blob = await response.blob();
      return new File([blob], uploadedFile.name, { type: uploadedFile.type });
    } catch (error) {
      console.error("Error fetching original file:", error);
      return null;
    }
  };

  const generateMoreImages = async () => {
    if (!formData) return;

    if (!uploadedFile) {
      alert("Image file lost after reload. Please go back and upload again.");
      return;
    }

    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user_id", formData.userId);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("type_detail", formData.typeDetail);
      formDataToSend.append("style", formData.style);
      formDataToSend.append("ai_strength", formData.aiStrength);

      // Check if we have the actual file or just metadata
      let fileToUpload = uploadedFile;
      if (uploadedFile.size === 0) {
        // If we only have metadata, fetch the original file from the server
        fileToUpload = await fetchOriginalFile();
        if (!fileToUpload) {
          throw new Error("Could not retrieve original image");
        }
      }
      formDataToSend.append("uploaded_image", fileToUpload);

      const response = await axios.post(
        `${backendBaseUrl}/api/generate/more-designs`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success === true) {
        const newImages = response.data.designs.map((url, index) => ({
          url: backendBaseUrl + url,
          id: `more-design-${index}-${Date.now()}`,
          label: `Additional Design ${generatedImages.length + index + 1}`,
        }));
        setGeneratedImages([...generatedImages, ...newImages]);
      }
    } catch (error) {
      console.error("Error generating more designs:", error);
      alert("Failed to generate more designs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (imageUrl, label) => {
  if (!imageUrl) return;

  try {
    let blobUrl;

    if (imageUrl.startsWith('data:image')) {
      // ✅ base64 image: convert to blob directly
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      blobUrl = URL.createObjectURL(blob);
    } else {
      // ✅ normal image URL (server or blob:)
      let downloadUrl = imageUrl;
      if (!downloadUrl.startsWith('http') && !downloadUrl.startsWith('blob:')) {
        downloadUrl = `${backendBaseUrl}${downloadUrl}`;
      }

      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      const blob = await response.blob();
      blobUrl = URL.createObjectURL(blob);
    }

    // Create and trigger download link
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${label.replace(/\s+/g, "-")}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 100);
  } catch (error) {
    console.error("Error downloading image:", error);
    alert("Failed to download the image. Please try again.");
  }
};

  const handleDownloadAll = () => {
    const allImages = [];

    if (originalImage) {
      allImages.push({
        url: originalImage.url,
        label: originalImage.label
      });
    }

    generatedImages.forEach((img) => {
      // Ensure the URL is absolute by adding backendBaseUrl if needed
      let imageUrl = img.url;
      if (!imageUrl.startsWith('http') && !imageUrl.startsWith('blob:')) {
        imageUrl = `${backendBaseUrl}${imageUrl}`;
      }
      allImages.push({
        url: imageUrl,
        label: img.label
      });
    });

    // Download images sequentially with proper delays
    const downloadSequentially = async () => {
      for (let i = 0; i < allImages.length; i++) {
        const image = allImages[i];
        try {
          // Fetch the image first to ensure it's accessible
          const response = await fetch(image.url);
          if (!response.ok) throw new Error('Failed to fetch image');

          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);

          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = `${image.label.replace(/\s+/g, '-')}-${Date.now()}.jpg`;
          document.body.appendChild(link);
          link.click();

          // Clean up
          setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
          }, 100);

          // Add delay between downloads except for the last one
          if (i < allImages.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        } catch (error) {
          console.error(`Error downloading ${image.label}:`, error);
          // Continue with next image even if one fails
        }
      }
    };

    downloadSequentially().catch(error => {
      console.error('Download process failed:', error);
      alert('Some images failed to download. Please try again.');
    });
  };

  const getImagePairs = () => {
    const pairs = [];
    if (originalImage && generatedImages.length > 0) {
      pairs.push([originalImage, generatedImages[0]]);
    } else if (originalImage) {
      pairs.push([originalImage, null]);
    } else if (generatedImages.length > 0) {
      pairs.push([generatedImages[0], generatedImages[1] || null]);
    }

    let startIndex = originalImage ? 1 : 2;
    for (let i = startIndex; i < generatedImages.length; i += 2) {
      pairs.push([generatedImages[i], generatedImages[i + 1] || null]);
    }

    return pairs;
  };

  return (
    <div className="bg-black min-h-screen bg-cover bg-center -mt-[82px] pt-[82px] overflow-hidden">
     <div className="w-full h-[161px] bg-[linear-gradient(95.92deg,rgba(138,56,245,0.5)_15.32%,rgba(194,44,162,0.5)_99.87%)] rounded-t-xl flex items-center justify-center text-center mt-8">

        <h1 className="text-[38px] font-bold text-white lora-text">Generated Image</h1>
      </div>

      <div className="max-w-6xl mx-auto">
       <div className="rounded-b-xl shadow-lg p-6 
  bg-[linear-gradient(112.5deg,rgba(138,56,245,0.3)_6.68%,rgba(194,44,162,0.3)_92.82%)] 
  backdrop-blur-md  border-[1px] border-solid border-[#FFFFFF33]">


          <div className="flex justify-between items-center mb-8">
            <Link
              to="/"
              className="flex items-center text-white poppins-font"
              onClick={() => localStorage.removeItem("imageGenState")}
            >
              <img src={SideArrow} alt="Back" className="w-6 h-6 mr-2 " />
              <span>Back</span>
            </Link>
            <div className="flex space-x-6">
  {/* Download Button */}
  <button onClick={handleDownloadAll} className="flex items-center text-white poppins-font">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </svg>
    <span>Download All</span>
  </button>

{/* Share Button */}
<button className="flex items-center text-white poppins-font">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12v.01M16 8a4 4 0 11-8 0 4 4 0 018 0zm0 8a4 4 0 11-8 0 4 4 0 018 0zm4-4a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
  <span>Share</span>
</button>



  {/* Report Button */}
<button className="flex items-center text-white poppins-font">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mr-2 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z"
    />
  </svg>
  <span>Report</span>
</button>

</div>

          </div>

          {/* {showMoreOptions && (
            <div className="absolute right-8 bg-white shadow-lg rounded-md p-2 z-10 border border-gray-200">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Save to favorites</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Duplicate design</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">Delete design</button>
            </div>
          )} */}

          {isLoading ? (
            <div className="flex justify-center items-center h-96 rounded-lg border"
     style={{ backgroundColor: "#8A38F533", border: "1px solid #FFFFFF1A" }}>
  <PacmanLoader color="#8A38F533" size={25} />
  <span className="ml-4 text-gray-700">Generating designs...</span>
</div>

          ) : (
            <div className="space-y-8">
              {getImagePairs().map((pair, rowIndex) => (
                <div key={`row-${rowIndex}`} className="flex space-x-8">
                  {pair.map((image, colIndex) => (
                    <div key={image?.id || `empty-${rowIndex}-${colIndex}`} className="flex-1">
                      {image ? (
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <div className="relative">
                            <img src={image.url} alt={image.label} className="w-full h-auto max-h-96 object-contain" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 text-center">
                              {image.label}
                            </div>
                            <button
                              onClick={() => handleDownload(image.url, image.label)}
                              className="absolute top-2 right-2 bg-black p-2 rounded-full shadow-md hover:bg-gray-100"
                            >
                              <img src={Download} alt="Download" className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
                          <span className="text-gray-400">Empty Slot</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <button
              onClick={generateMoreImages}
              disabled={isLoading}
              className="bg-[#8A38F533] border-[1px] border-solid border-[#FFFFFF33] text-white font-semibold py-3 px-8 rounded-[12px] hover:bg-[#8A38F533] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Generating..." : "Generate 2 More Designs"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}