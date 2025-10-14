import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/api/apibg.png";
import LeftArrow from "../../assets/api/LeftArrow.png";

const integrationData = [
    {
        title: "Interior Design Platforms",
        description:
            "Let your users transform their rooms instantly within your app using AI rendering.",
    },
    {
        title: "Architectural SaaS Tools",
        description:
            "Integrate real-time visualization of floor plans, facades, and elevations.",
    },
    {
        title: "Home Builder Apps",
        description:
            "Let buyers preview customized homes with different themes and materials.",
    },
    {
        title: "E-Commerce & Furniture Brands",
        description:
            "Display furniture in realistic settings using AI-generated room mockups.",
    },
    {
        title: "Real Estate Marketplaces",
        description:
            "Offer virtual staging with one click, enhancing property listings.",
    },
    {
        title: "Home Renovation Platforms",
        description:
            "Enable users to preview renovation ideas directly on your website.",
    },
];

const StacklyAPIIntegration = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Group data into pairs for mobile sliding - Ensure proper grouping
    const mobileSlides = [];
    for (let i = 0; i < integrationData.length; i += 2) {
        mobileSlides.push(integrationData.slice(i, i + 2));
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mobileSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
    };

    // Debug: Log the mobile slides to verify proper grouping
    console.log('Mobile slides:', mobileSlides);
    console.log('Current slide index:', currentSlide);
    console.log('Total slides:', mobileSlides.length);

    return (
        <div className="relative w-full bg-transparent">
            {/* Light glow (only on mobile) */}
            <div className="w-[120px] h-[120px] rounded-full absolute top-0 left-1/2 translate-x-[-50%] blur-[80px] z-0 bg-black max-[440px]:block md:hidden lg:hidden" />

            <div className="w-full max-w-[1440px] py-16 px-4 md:px-8 lg:px-16 mx-auto flex flex-col items-center justify-center gap-[52px] max-[440px]:w-full max-[440px]:pt-[20px] max-[440px]:pr-[16px] max-[440px]:pb-[20px] max-[440px]:pl-[16px] max-[440px]:gap-[24px] min-[320px]:max-[440px]:px-4 min-[441px]:max-[768px]:bg-transparent min-[320px]:bg-transparent md:w-full md:h-[320px] md:pt-[40px] md:pr-[40px] md:pb-[60px] md:pl-[40px] md:gap-[32px] md:opacity-100 md:mt-0 md:justify-start lg:h-[881px] lg:opacity-100"
                style={{
                    // Special padding adjustment for 540x720px to remove blank space
                    ...(window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720 && {
                        paddingTop: '20px',      // Reduced from 64px (py-16) to 20px
                        paddingBottom: '20px',   // Reduced from 64px to 20px
                        gap: '24px',             // Reduced gap from 52px to 24px
                        marginTop: '0px'         // Ensure no top margin
                    }),
                    // Special padding adjustment for 767x608px to remove blank space
                    ...(window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650 && {
                        paddingTop: '16px',      // Reduced padding top
                        paddingBottom: '16px',   // Reduced padding bottom
                        gap: '20px',             // Reduced gap between sections
                        marginTop: '0px',        // No top margin
                        marginBottom: '0px'      // No bottom margin
                    })
                }}
            >
                {/* Heading */}
                <motion.div
                    className="w-full max-w-[1280px] h-auto flex flex-col items-center justify-start gap-[16px] opacity-100 max-[440px]:w-full max-[440px]:h-auto max-[440px]:gap-[8px] min-[320px]:max-[374px]:px-2 md:w-full md:max-w-[688px] md:h-[112px] md:gap-[32px] md:opacity-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        // Special gap adjustment for 540x720px
                        ...(window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720 && {
                            gap: '12px',             // Reduced gap between title and description
                            marginBottom: '16px'     // Reduced bottom margin
                        }),
                        // Special gap adjustment for 767x608px
                        ...(window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650 && {
                            gap: '10px',             // Reduced gap between title and description
                            marginBottom: '12px',    // Reduced bottom margin
                            marginTop: '0px'         // No top margin
                        })
                    }}
                >
                    {/* Single Heading - Works for all screen sizes */}
                    <h2
                        className="w-full font-normal leading-[100%] tracking-[0] text-center text-white"
                        style={{ 
                            fontFamily: "Lora",
                            fontSize: 'clamp(16px, 4.5vw, 32px)', // Responsive font size from mobile to desktop
                            lineHeight: 'clamp(1.1, 2vw, 1.2)',
                            // Special font size for 540x720px
                            ...(window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720 && {
                                fontSize: '20px',        // Smaller font size to save space
                                lineHeight: '1.1',       // Tighter line height
                                marginBottom: '8px'      // Reduced margin
                            }),
                            // Special font size for 767x608px
                            ...(window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650 && {
                                fontSize: '22px',        // Compact font size
                                lineHeight: '1.1',       // Tighter line height
                                marginBottom: '6px',     // Minimal margin
                                marginTop: '0px'         // No top margin
                            })
                        }}
                    >
                        Who Can Integrate StacklyAI API?
                    </h2>

                    <motion.p
                        className="w-full font-normal leading-[140%] tracking-[0] text-center text-white opacity-100 px-2"
                        style={{ 
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontSize: 'clamp(11px, 3.2vw, 20px)', // Responsive font size from mobile to desktop
                            // Special styling for 540x720px
                            ...(window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720 && {
                                fontSize: '14px',        // Smaller font size to save space
                                lineHeight: '1.3',       // Tighter line height
                                marginBottom: '0px',     // No bottom margin
                                paddingBottom: '0px'     // No padding
                            }),
                            // Special styling for 767x608px
                            ...(window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650 && {
                                fontSize: '16px',        // Compact font size
                                lineHeight: '1.3',       // Tighter line height
                                marginBottom: '0px',     // No bottom margin
                                paddingBottom: '0px',    // No padding
                                marginTop: '0px'         // No top margin
                            })
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Our API is designed for platforms and businesses that want to bring
                        visual intelligence into their own systems.
                    </motion.p>
                </motion.div>

                {/* Desktop/Mobile Grid */}
                <motion.div
                    className="w-full max-w-[1279px] gap-5"
                    style={{ 
                        height: "auto", 
                        opacity: 1,
                        // Special styling for 540x720px
                        ...(window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720 && {
                            marginTop: '0px',        // No top margin
                            paddingTop: '0px'        // No top padding
                        }),
                        // Special styling for 767x608px
                        ...(window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650 && {
                            marginTop: '0px',        // No top margin
                            paddingTop: '0px',       // No top padding
                            marginBottom: '0px',     // No bottom margin
                            paddingBottom: '0px'     // No bottom padding
                        })
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {/* Desktop Grid */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-5">
                        {integrationData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full max-w-[390px] h-[300px] p-12 flex flex-col justify-center items-start gap-5 shadow-[4px_4px_12px_0px_#8A38F54D] rounded-[40px] text-left"
                                style={{
                                    backdropFilter: "blur(84px)",
                                    boxShadow: `
                                      4px 4px 12px 0px #8A38F54D,
                                      inset 2px 2px 16px 0px #FFFFFF14
                                    `,
                                    overflow: "hidden",
                                }}
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px rgba(138, 56, 245, 0.4), 0 0 50px rgba(138, 56, 245, 0.3)",
                                    transition: { duration: 0.2 },
                                }}

                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Gradient Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-[40px] p-[2px] pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, #8A38F5 0%, #FFFFFF 50%, #8A38F5 100%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.8 : 0.6,
                                        transition: { duration: 0.3 },
                                    }}
                                />

                                {/* Glowing Effects */}
                                <motion.div
                                    className="absolute w-[134px] h-[134px] rounded-full pointer-events-none"
                                    style={{
                                        top: "0px",
                                        right: "0px",
                                        background: "rgba(194, 44, 162, 0.5)",
                                        filter: "blur(100px)",
                                        zIndex: 0,
                                        willChange: "transform",
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? -20 : 0,
                                        opacity: hoveredIndex === index ? 1 : 0.8,
                                        transition: { duration: 0.5 },
                                    }}
                                />

                                <motion.div
                                    className="absolute w-[134px] h-[134px] rounded-full pointer-events-none"
                                    style={{
                                        bottom: "0px",
                                        left: "0px",
                                        background: "#C22CA24D",
                                        filter: "blur(100px)",
                                        zIndex: 0,
                                        willChange: "transform",
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? 20 : 0,
                                        opacity: hoveredIndex === index ? 1 : 0.8,
                                        transition: { duration: 0.5 },
                                    }}
                                />

                                <motion.h3
                                    className="w-full text-[28px] font-bold text-[#2a2a2a] leading-tight relative z-10"
                                    style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        letterSpacing: "0%",
                                    }}
                                    animate={{
                                        color: hoveredIndex === index ? "#8A38F5" : "#FFFFFF",
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {item.title}
                                </motion.h3>

                                <motion.p
                                    className="w-full text-[18px] text-[#FFFFFF] leading-snug relative z-10"
                                    style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        letterSpacing: "0%",
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? 5 : 0,
                                        transition: { type: "spring", stiffness: 300 },
                                    }}
                                >
                                    {item.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tablet Grid - Updated to only show for 640px and above (excluding mobile sliding range) */}
                    <div className="hidden min-[640px]:grid lg:hidden grid-cols-3 gap-4 md:gap-5">
                        {integrationData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full flex flex-col justify-center items-start gap-3 text-left mx-auto"
                                style={{
                                    // Special sizing for 540x720px screens
                                    width: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "160px"  // Smaller for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "240px"  // Medium for 767x608px
                                        : "100%",
                                    maxWidth: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "160px"  // Smaller for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "240px"  // Medium for 767x608px
                                        : "280px",
                                    height: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "180px"  // Smaller for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "160px"  // Compact height for 767x608px
                                        : "220px",
                                    minHeight: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "180px"  // Smaller for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "160px"  // Compact for 767x608px
                                        : "220px",
                                    padding: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "12px"   // Smaller padding for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "16px"   // Medium padding for 767x608px
                                        : "24px 32px",
                                    gap: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "8px"    // Smaller gap for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "10px"   // Medium gap for 767x608px
                                        : "12px",
                                    borderRadius: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                        ? "20px"   // Smaller radius for 540x720px
                                        : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                        ? "24px"   // Medium radius for 767x608px
                                        : "28px",
                                    backdropFilter: "blur(84px)",
                                    boxShadow: `
                                      4px 4px 12px 0px #8A38F51F,
                                      inset 2px 2px 16px 0px #FFFFFF14
                                    `,
                                    overflow: "hidden",
                                    border: '1.5px solid transparent',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexShrink: 0
                                }}
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 },
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px rgba(138, 56, 245, 0.3)",
                                    transition: { duration: 0.2 },
                                }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Gradient Border */}
                                <motion.div
                                    className="absolute inset-0 p-[2px] pointer-events-none"
                                    style={{
                                        borderRadius: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "20px"   // Smaller radius for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "24px"   // Medium radius for 767x608px
                                            : "28px",
                                        background:
                                            "linear-gradient(180deg, #8A38F5 0%, #FFFFFF 50%, #8A38F5 100%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.8 : 0.6,
                                        transition: { duration: 0.3 },
                                    }}
                                />

                                {/* Glowing Effects */}
                                <motion.div
                                    className="absolute rounded-full pointer-events-none"
                                    style={{
                                        width: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "60px"   // Smaller for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "70px"   // Medium for 767x608px
                                            : "80px",
                                        height: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "60px"   // Smaller for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "70px"   // Medium for 767x608px
                                            : "80px",
                                        top: "0px",
                                        right: "0px",
                                        background: "rgba(194, 44, 162, 0.5)",
                                        filter: "blur(60px)",
                                        zIndex: 0,
                                        willChange: "transform",
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? -12 : 0,
                                        opacity: hoveredIndex === index ? 1 : 0.8,
                                        transition: { duration: 0.5 },
                                    }}
                                />

                                <motion.div
                                    className="absolute rounded-full pointer-events-none"
                                    style={{
                                        width: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "60px"   // Smaller for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "70px"   // Medium for 767x608px
                                            : "80px",
                                        height: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "60px"   // Smaller for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "70px"   // Medium for 767x608px
                                            : "80px",
                                        bottom: "0px",
                                        left: "0px",
                                        background: "#C22CA24D",
                                        filter: "blur(60px)",
                                        zIndex: 0,
                                        willChange: "transform",
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? 12 : 0,
                                        opacity: hoveredIndex === index ? 1 : 0.8,
                                        transition: { duration: 0.5 },
                                    }}
                                />

                                <motion.h3
                                    className="w-full font-bold leading-tight relative z-10"
                                    style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        letterSpacing: "0%",
                                        fontSize: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "14px"   // Smaller font for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "15px"   // Medium font for 767x608px
                                            : "16px",
                                        lineHeight: '1.2'
                                    }}
                                    animate={{
                                        color: hoveredIndex === index ? "#8A38F5" : "#FFFFFF",
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {item.title}
                                </motion.h3>

                                <motion.p
                                    className="w-full text-[#FFFFFF] leading-snug relative z-10"
                                    style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        letterSpacing: "0%",
                                        fontSize: (window.innerWidth >= 540 && window.innerWidth <= 720 && window.innerHeight >= 540 && window.innerHeight <= 720) 
                                            ? "10px"   // Smaller font for 540x720px
                                            : (window.innerWidth >= 767 && window.innerWidth <= 800 && window.innerHeight >= 608 && window.innerHeight <= 650) 
                                            ? "11px"   // Medium font for 767x608px
                                            : "12px",
                                        lineHeight: '1.4'
                                    }}
                                    animate={{
                                        x: hoveredIndex === index ? 2 : 0,
                                        transition: { type: "spring", stiffness: 300 },
                                    }}
                                >
                                    {item.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Sliding Grid - Apply sliding ONLY below 640px */}
                    <div className="block max-[639px]:block min-[640px]:hidden lg:hidden relative w-full">
                        <div className="relative w-full flex justify-center">
                            <div
                                className="overflow-hidden"
                                style={{
                                    width: 'min(100vw - 32px, 328px)', // Updated for larger cards
                                    maxWidth: '328px'
                                }}
                            >
                                {/* Mobile sliding content - removed all conditionals */}
                                <motion.div
                                    className="flex"
                                    style={{
                                        width: `${mobileSlides.length * 328}px`, // Updated to match container
                                    }}
                                    animate={{
                                        x: -currentSlide * 328 + "px", // Updated translation
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {mobileSlides.map((slideData, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="flex-shrink-0"
                                            style={{
                                                width: '328px', // Fixed width for mobile container
                                                height: 'auto',
                                                minWidth: '328px', // Ensure minimum width
                                                padding: '0 4px' // Small padding
                                            }}
                                        >
                                            <div
                                                className="grid grid-cols-2 gap-[8px] min-[375px]:gap-[12px]"
                                                style={{
                                                    width: '320px', // Updated container for the two boxes
                                                    height: 'auto',
                                                    margin: '0 auto'
                                                }}
                                            >
                                                {slideData.map((item, itemIndex) => {
                                                    const actualIndex = slideIndex * 2 + itemIndex;
                                                    return (
                                                        <motion.div
                                                            key={actualIndex}
                                                            className="relative flex flex-col justify-start items-start text-left"
                                                            style={{
                                                                width: 'calc(50% - 6px)', // Adjusted for larger cards
                                                                minWidth: '150px', // Increased width
                                                                maxWidth: '160px', // Increased width
                                                                height: 'clamp(200px, 55vw, 220px)', // Increased height
                                                                borderRadius: '16px',
                                                                border: '1.5px solid transparent',
                                                                padding: 'clamp(8px, 3vw, 12px)',
                                                                gap: 'clamp(6px, 2vw, 8px)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                backdropFilter: "blur(84px)",
                                                                boxShadow: `
                                                             4px 4px 12px 0px #8A38F51F,
                                                             inset 2px 2px 16px 0px #FFFFFF14`,
                                                                overflow: "hidden",
                                                            }}
                                                            variants={{
                                                                hidden: { y: 20, opacity: 0 },
                                                                visible: { y: 0, opacity: 1 },
                                                            }}
                                                            initial="visible"
                                                            animate="visible"
                                                            onHoverStart={() => setHoveredIndex(actualIndex)}
                                                            onHoverEnd={() => setHoveredIndex(null)}
                                                        >
                                                            {/* Gradient Border */}
                                                            <motion.div
                                                                className="absolute inset-0 p-[1.5px] pointer-events-none"
                                                                style={{
                                                                    borderRadius: '16px',
                                                                    background:
                                                                        "linear-gradient(180deg, #8A38F5 0%, #FFFFFF 50%, #8A38F5 100%)",
                                                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                                    WebkitMaskComposite: "xor",
                                                                    maskComposite: "exclude",
                                                                }}
                                                                animate={{
                                                                    opacity: hoveredIndex === actualIndex ? 0.8 : 0.6,
                                                                    transition: { duration: 0.3 },
                                                                }}
                                                            />

                                                            {/* Glowing Effects */}
                                                            <motion.div
                                                                className="absolute w-[60px] h-[60px] min-[375px]:w-[80px] min-[375px]:h-[80px] rounded-full pointer-events-none"
                                                                style={{
                                                                    top: "0px",
                                                                    right: "0px",
                                                                    background: "rgba(194, 44, 162, 0.5)",
                                                                    filter: "blur(60px)",
                                                                    zIndex: 0,
                                                                    willChange: "transform",
                                                                }}
                                                                animate={{
                                                                    x: hoveredIndex === actualIndex ? -10 : 0,
                                                                    opacity: hoveredIndex === actualIndex ? 1 : 0.8,
                                                                    transition: { duration: 0.5 },
                                                                }}
                                                            />

                                                            <motion.div
                                                                className="absolute w-[60px] h-[60px] min-[375px]:w-[80px] min-[375px]:h-[80px] rounded-full pointer-events-none"
                                                                style={{
                                                                    bottom: "0px",
                                                                    left: "0px",
                                                                    background: "#C22CA24D",
                                                                    filter: "blur(60px)",
                                                                    zIndex: 0,
                                                                    willChange: "transform",
                                                                }}
                                                                animate={{
                                                                    x: hoveredIndex === actualIndex ? 10 : 0,
                                                                    opacity: hoveredIndex === actualIndex ? 1 : 0.8,
                                                                    transition: { duration: 0.5 },
                                                                }}
                                                            />

                                                            <motion.h3
                                                                className="w-full text-[16px] font-[400] leading-tight relative z-10 text-white"
                                                                style={{
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    letterSpacing: "0%"
                                                                }}
                                                                animate={{
                                                                    color: hoveredIndex === actualIndex ? "#8A38F5" : "#FFFFFF",
                                                                    transition: { duration: 0.2 },
                                                                }}
                                                            >
                                                                {item.title}
                                                            </motion.h3>

                                                            <motion.p
                                                                className="w-full text-[14px] leading-[160%] text-[#FFFFFF] relative z-10 mt-4"
                                                                style={{
                                                                    fontFamily: "Inter",
                                                                    fontStyle: "normal",
                                                                    letterSpacing: "0%"
                                                                }}
                                                                animate={{
                                                                    x: hoveredIndex === actualIndex ? 2 : 0,
                                                                    transition: { type: "spring", stiffness: 300 },
                                                                }}
                                                            >
                                                                {item.description}
                                                            </motion.p>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Navigation Controls - Only for mobile below 640px */}
                        <div
                            className="flex justify-center items-center gap-4 w-full mt-4"
                            style={{
                                flexDirection: 'row',
                                width: 'auto',
                                minWidth: '120px',
                                height: 'auto',
                                minHeight: '32px',
                                gap: 'clamp(8px, 3vw, 12px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <button
                                onClick={prevSlide}
                                className="flex items-center justify-center hover:opacity-80 transition-all"
                                aria-label="Previous slide"
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "60px",
                                    border: "0.5px solid #FFFFFF40",
                                    background: "#FFFFFF1F",
                                    boxShadow: "0px 0px 4px 0px #FFFFFF29",
                                    opacity: 1,
                                    transform: "rotate(0deg)"
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#FFFFFF"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="12" x2="6" y2="12" />
                                    <polyline points="12 6 6 12 12 18" />
                                </svg>
                            </button>

                            {/* Slide Indicators */}
                            <div
                                className="flex gap-1"
                                style={{
                                    gap: 'clamp(2px, 1vw, 4px)'
                                }}
                            >
                                {mobileSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className="rounded-full transition-all"
                                        style={{
                                            width: 'clamp(6px, 2vw, 8px)',
                                            height: 'clamp(6px, 2vw, 8px)',
                                            background: currentSlide === index ? '#8B3AF5' : 'rgba(255, 255, 255, 0.4)',
                                            border: currentSlide === index ? '1px solid #48207E' : 'none'
                                        }}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="flex items-center justify-center hover:opacity-80 transition-all"
                                aria-label="Next slide"
                                style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "60px",
                                    border: "0.5px solid #FFFFFF40",
                                    background: "#FFFFFF1F",
                                    boxShadow: "0px 0px 4px 0px #FFFFFF29",
                                    opacity: 1,
                                    transform: "rotate(0deg)"
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#FFFFFF"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="6" y1="12" x2="18" y2="12" />
                                    <polyline points="12 6 18 12 12 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default StacklyAPIIntegration;

