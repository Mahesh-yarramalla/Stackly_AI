import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vector from "../../assets/api/vector.png";
import user from "../../assets/api/user.png";
import trending from "../../assets/api/trending.png";
import { AnimatePresence } from "framer-motion";
import buttonkey from '../../assets/api/Key1.png'
import apibg from '../../assets/api/apibg.png'

const CustomAPIPlan = () => {
  const [current, setCurrent] = useState(0);
  const [hoverStates, setHoverStates] = useState([false, false, false]);

  const boxes = [
    {
      title: "Tailored Integrations",
      desc: "APIs designed around your specific workflows, data and use cases with no clutter.",
      icon: vector,
      gradient: "rgba(0, 176, 186, 0.3)",
      color: "#00B0BA"
    },
    {
      title: "Scalable to Your Needs",
      desc: "From startup to scale-up, customize API limits and endpoints to fit your needs.",
      icon: trending,
      gradient: "rgba(177, 121, 23, 0.3)",
      color: "#B17917"
    },
    {
      title: "Priority Support",
      desc: "Expert support for fast API integration, issue resolution, and peak performance",
      icon: user,
      gradient: "rgba(255, 255, 255, 0.3)",
      color: "#FFFFFF"
    }
  ];

  return (
   <div className="w-full h-auto min-h-[631px] bg-black flex flex-col justify-start items-center px-4 md:px-8 lg:px-[80px] pt-0">

{/* WHO CAN INTEGRATE SECTION - Added margin-top for laptop version */} 
<div className="w-full max-w-[1230px] h-auto opacity-100 flex flex-col gap-6 md:gap-8 lg:gap-[38px] max-[440px]:px-0 px-4 max-[440px]:mt-0 min-[441px]:max-[638px]:mt-0 min-[639px]:max-[767px]:mt-0 min-[768px]:mt-[140px] lg:mt-[110px]">
  
  {/* --- Moved the heading down, just above the boxes --- */}
  <div className="w-full flex justify-center" style={{ position: 'relative', zIndex: 1 }}>
    {/* Mobile Version - Zigzag Column Layout */}
    <div 
      className="w-full flex-col gap-3 max-[440px]:flex hidden" 
      style={{
        width: '100%',
        maxWidth: '390px',
        height: 'auto',
        minHeight: '420px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        position: 'relative',
        marginTop: '70px', // <-- Move the zigzag boxes further down on mobile
      }}
    >
      {/* Heading for mobile */}
      <div className="w-full text-center text-white mb-4" style={{ position: 'relative', zIndex: 1 }}>
       <h2 className="font-[Lora] font-semibold text-[24px] leading-[140%] md:leading-[100%] md:text-[28px] lg:text-[32px] mt-[-40px]">
  Who Can Integrate StacklyAI API?
</h2>

      </div>
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          className={`flex flex-col justify-center items-center rounded-md bg-black text-center`}
          style={{
            width: 'calc(100% - 32px)',
            maxWidth: '214px',
            minWidth: '180px',
            height: '128px',
      
            minHeight: '128px',
            gap: '12px',
            position: 'absolute',
            border: 'none',
            top: `${index * 140}px`,
            // Corrected zigzag positioning: Left-Right-Left
            left: index === 0 ? '16px' :                           // Tailored Integrations - LEFT (1st)
                  index === 1 ? 'calc(100% - 214px - 16px)' :     // Scalable to Your Needs - RIGHT (2nd)
                  '16px',                                          // Priority Support - LEFT (3rd)
            transform: 'none',
            opacity: 1
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.2 },
            },
          }}
          whileHover={{
            y: -5,
          }}
        >
          {/* Icon at Top - Updated Vector Image Layout for Mobile */}
          <motion.div
            className="flex-shrink-0 flex justify-center items-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{
              filter: [
                `drop-shadow(0 0 2px ${box.color})`,
                `drop-shadow(0 0 8px ${box.color})`,
                `drop-shadow(0 0 4px ${box.color})`,
              ],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            viewport={{ once: true }}
            transition={{
              x: {
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              },
              opacity: { duration: 0.4 },
            }}
            style={{
              position: 'relative',
              ...(box.icon === vector && {
                top: '6px',
                left: '5px',
                width: '66px',
                height: '66px'
              }),
              ...(box.icon === trending && {
                top: '16px',        // Adjusted positioning to align with text
                left: '8px',        // Centered positioning within container
                width: '80px',      // Increased from 64px
                height: '80px',     // Increased from 64px
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }),
              ...(box.icon === user && {
                top: '2px',         // Updated top position
                left: '2px',        // Updated left position
                width: '64px',      // Container width remains same
                height: '64px'      // Container height remains same
              })
            }}
          >
            <img
              src={box.icon}
              alt={box.title}
              className="block transition-all duration-300 hover:scale-110 object-contain"
              style={{
                ...(box.icon === vector ? {
                  width: '21.41px',
                  height: '20.39px',
                  minWidth: '21.41px',
                  minHeight: '20.39px',
                  maxWidth: '21.41px',
                  maxHeight: '20.39px'
                } : box.icon === trending ? {
                  width: '50px',          // Increased from 40px
                  height: '28px',         // Increased from 22px
                  minWidth: '50px',       // Increased from 40px
                  minHeight: '28px',      // Increased from 22px
                  maxWidth: '50px',       // Increased from 40px
                  maxHeight: '28px'       // Increased from 22px
                } : box.icon === user ? {
                  width: '28px',          // Updated mobile width
                  height: '29px',         // Updated mobile height
                  minWidth: '28px',       // Updated mobile min-width
                  minHeight: '29px',      // Updated mobile min-height
                  maxWidth: '28px',       // Updated mobile max-width
                  maxHeight: '29px'       // Updated mobile max-height
                } : {
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  minHeight: '32px',
                  maxWidth: '32px',
                  maxHeight: '32px'
                })
              }}
              onError={(e) => {
                console.error('Image failed to load:', box.icon);
                e.target.style.display = 'none';
              }}
              onLoad={(e) => {
                console.log('Image loaded successfully:', box.icon);
              }}
            />
          </motion.div>

          {/* Title - Centered */}
          <motion.h3
            className="text-[12px] min-[350px]:text-[13px] min-[400px]:text-[14px] font-semibold text-white leading-tight text-center px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.3,
            }}
          >
            {box.title}
          </motion.h3>

          {/* Description - Centered */}
          <motion.p
            className="text-[8px] min-[350px]:text-[9px] min-[400px]:text-[10px] text-white leading-[1.3] text-opacity-80 text-center px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.4,
            }}
          >
            {box.desc}
          </motion.p>
        </motion.div>
      ))}
    </div>

    {/* Desktop/Tablet Version */}
    <div className="w-full max-[440px]:hidden min-[441px]:flex relative flex-col">
      {/* Heading for tablet/desktop */}
      <div className="w-full text-center text-white mb-8" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="font-[Lora] font-semibold text-[24px] md:text-[28px] mt:100px lg:text-[32px] leading-[100%]
                          min-[639px]:max-[1023px]:mt-[220px] 
                          min-[441px]:max-[767px]:mt-[px]
                          min-[1024px]:mt-0">
                          
          Who Can Integrate StacklyAI API?
        </h2>
      </div>
      {/* --- TABLET INLINE LAYOUT: 641px-1023px --- */}
      
      <div
        className={`
          w-full
          hidden
          min-[639px]:max-[1023px]:flex
          min-[639px]:max-[1023px]:flex-row
          min-[639px]:max-[1023px]:justify-center
          min-[639px]:max-[1023px]:items-stretch
          min-[639px]:max-[1023px]:gap-6
          min-[639px]:max-[1023px]:relative
          min-[639px]:max-[1023px]:z-10
          min-[639px]:max-[1023px]:mt-0
        `}
      >
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-start items-start rounded-md bg-black"
            style={{
              width: "clamp(220px, 28vw, 340px)",
              minHeight: "clamp(160px, 20vh, 186px)",
              gap: "clamp(12px, 2vh, 18px)",
              padding: "clamp(12px, 2vh, 16px) clamp(16px, 2.5vw, 20px)",
              border: 'none',
              flex: 1,
              maxWidth: 340,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              },
            }}
            whileHover={{
              y: -5,
            }}
          >
            {/* Icon + Title in horizontal layout */}
            <div
              className="flex flex-row items-center"
              style={{
                width: '100%',
                minHeight: "clamp(50px, 8vh, 66px)",
                gap: "clamp(8px, 1.5vw, 12px)",
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <motion.div
                className="flex-shrink-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{
                  filter: [
                    `drop-shadow(0 0 2px ${box.color})`,
                    `drop-shadow(0 0 8px ${box.color})`,
                    `drop-shadow(0 0 4px ${box.color})`,
                  ],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                viewport={{ once: true }}
                transition={{
                  x: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  opacity: { duration: 0.4 },
                }}
                style={{
                  position: 'relative',
                  width: 48,
                  height: 48,
                }}
              >
                <img
                  src={box.icon}
                  alt={box.title}
                  className="block transition-all duration-300 hover:scale-110 object-contain"
                  style={{
                    width: 36,
                    height: 36,
                  }}
                />
              </motion.div>
              <motion.h3
                className="text-white leading-[100%] flex-1"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: "clamp(16px, 2.5vw, 24px)",
                  fontWeight: '500',
                  lineHeight: '100%',
                  wordWrap: 'break-word',
                  hyphens: 'auto'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                {box.title}
              </motion.h3>
            </div>
            <motion.p
              className="text-white leading-[140%] text-opacity-80"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: "clamp(14px, 2.2vw, 18px)",
                fontWeight: '400',
                lineHeight: '140%',
                wordWrap: 'break-word',
                hyphens: 'auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.4,
              }}
            >
              {box.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
      {/* Zigzag Layout for 441px-638px */}
      <div 
        className="w-full flex-col gap-3 min-[441px]:max-[638px]:flex min-[639px]:hidden"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
          minHeight: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          position: 'relative',
          paddingBottom: '300px',
          paddingTop: '100px',
          marginTop: '100px'
        }}
      >
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-start items-start rounded-md bg-black`}
            style={{
              width: 'clamp(300px, 90%, 383px)',
              height: 'auto',
              minHeight: 'clamp(180px, 22vh, 220px)', // Increased from 186px to 220px
              gap: 'clamp(12px, 2vh, 18px)',
              padding: 'clamp(12px, 2vh, 16px) clamp(16px, 2.5vw, 20px)',
              position: 'absolute',
              border: 'none',
              top: `${100 + (index * 400)}px`, // Increased from 360px to 400px spacing, increased offset from 80px to 100px
              // Corrected zigzag positioning: Left-Right-Left
              left: index === 0 ? '16px' :                           // Tailored Integrations - LEFT (1st)
                    index === 1 ? 'calc(100% - 383px - 16px)' :     // Scalable to Your Needs - RIGHT (2nd)  
                    '16px',                                          // Priority Support - LEFT (3rd)
              transform: 'none',
              opacity: 1,
              zIndex: 1,
              flexDirection: 'column',
              display: 'flex'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
            whileHover={{
              y: -5,
            }}
          >
            {/* Icon + Title in horizontal layout - Same as laptop version */}
            <div 
              className="flex flex-row items-center"
              style={{
                width: '100%',
                height: 'auto',
                minHeight: 'clamp(50px, 8vh, 66px)',
                gap: 'clamp(8px, 1.5vw, 12px)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <motion.div
                className="flex-shrink-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{
                  filter: [
                    `drop-shadow(0 0 2px ${box.color})`,
                    `drop-shadow(0 0 8px ${box.color})`,
                    `drop-shadow(0 0 4px ${box.color})`,
                  ],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                viewport={{ once: true }}
                transition={{
                  x: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  opacity: { duration: 0.4 },
                }}
                style={{
                  position: 'relative',
                  width: 48,
                  height: 48,
                }}
              >
                <img
                  src={box.icon}
                  alt={box.title}
                  className="block transition-all duration-300 hover:scale-110 object-contain"
                  style={{
                    width: 36,
                    height: 36,
                  }}
                />
              </motion.div>
              <motion.h3
                className="text-white leading-[100%] flex-1"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: "clamp(16px, 2.5vw, 24px)",
                  fontWeight: '500',
                  lineHeight: '100%',
                  wordWrap: 'break-word',
                  hyphens: 'auto'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                {box.title}
              </motion.h3>
            </div>
            <motion.p
              className="text-white leading-[140%] text-opacity-80"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: "clamp(14px, 2.2vw, 18px)",
                fontWeight: '400',
                lineHeight: '140%',
                wordWrap: 'break-word',
                hyphens: 'auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.4,
              }}
            >
              {box.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Original Horizontal Layout for 1024px and above */}
      <div className="w-full flex-row justify-center min-[1024px]:flex hidden flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-start items-start rounded-md bg-black"
            style={{
              // Remove special handling for 540x720px since we're dealing with laptop version
              width: "clamp(300px, 30vw, 383px)",  
              height: "auto",
              minHeight: "clamp(160px, 20vh, 186px)",  
              gap: "clamp(12px, 2vh, 18px)",  
              padding: "clamp(12px, 2vh, 16px) clamp(16px, 2.5vw, 20px)",  
              position: 'relative',
              border: 'none',
              flexDirection: 'column',
              display: 'flex',
              margin: '0 auto',  
              maxWidth: '100%'   
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              },
            }}
            whileHover={{
              y: -5,
            }}
          >
            {/* Icon + Title in horizontal layout */}
            <div 
              className="flex flex-row items-center"
              style={{
                width: '100%',
                height: 'auto',
                minHeight: "clamp(50px, 8vh, 66px)",  
                gap: "clamp(8px, 1.5vw, 12px)",  
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <motion.div
                className="flex-shrink-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{
                  filter: [
                    `drop-shadow(0 0 2px ${box.color})`,
                    `drop-shadow(0 0 8px ${box.color})`,
                    `drop-shadow(0 0 4px ${box.color})`,
                  ],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                viewport={{ once: true }}
                transition={{
                  x: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                  opacity: { duration: 0.4 },
                }}
                style={{
                  position: 'relative',
                  // Regular responsive positioning for laptop version
                  ...(box.icon === vector && {
                    top: 'clamp(8px, 1.5vh, 11px)',
                    left: 'clamp(6px, 1.2vw, 9px)',
                    width: 'clamp(50px, 8vw, 66px)',
                    height: 'clamp(50px, 8vh, 66px)'
                  }),
                  ...(box.icon === trending && {
                    top: 'clamp(12px, 2vh, 16px)',
                    left: 'clamp(8px, 1.5vw, 12px)',
                    width: 'clamp(48px, 7.5vw, 64px)',
                    height: 'clamp(48px, 7.5vh, 64px)'
                  }),
                  ...(box.icon === user && {
                    top: 'clamp(6px, 1.2vh, 9px)',
                    left: 'clamp(7px, 1.3vw, 10px)',
                    width: 'clamp(48px, 7.5vw, 64px)',
                    height: 'clamp(48px, 7.5vh, 64px)'
                  })
                }}
              >
                <img
                  src={box.icon}
                  alt={box.title}
                  className="block transition-all duration-300 hover:scale-110 object-contain"
                  style={{
                    // Regular responsive sizing for laptop version
                    ...(box.icon === vector ? {
                      width: 'clamp(30px, 4.5vw, 42px)',
                      height: 'clamp(28px, 4.2vh, 40px)',
                      minWidth: 'clamp(30px, 4.5vw, 42px)',
                      minHeight: 'clamp(28px, 4.2vh, 40px)',
                      maxWidth: 'clamp(30px, 4.5vw, 42px)',
                      maxHeight: 'clamp(28px, 4.2vh, 40px)'
                    } : box.icon === trending ? {
                      width: 'clamp(48px, 6vw, 72px)',     // bigger min & max
                      height: 'clamp(32px, 4.5vh, 48px)', // bigger min & max
                      minWidth: 'clamp(48px, 6vw, 72px)',
                      minHeight: 'clamp(32px, 4.5vh, 48px)',
                      maxWidth: 'clamp(48px, 6vw, 72px)',
                      maxHeight: 'clamp(32px, 4.5vh, 48px)',
                      border: '3px solid transparent',
                      objectFit: 'contain',
                        marginTop: '-13px'
                    }
                      : box.icon === user ? {
                      width: 'clamp(32px, 4.8vw, 44px)',
                      height: 'clamp(33px, 5vh, 46px)',
                      minWidth: 'clamp(32px, 4.8vw, 44px)',
                      minHeight: 'clamp(33px, 5vh, 46px)',
                      maxWidth: 'clamp(32px, 4.8vw, 44px)',
                      maxHeight: 'clamp(33px, 5vh, 46px)'
                    } : {
                      width: 'clamp(24px, 3.6vw, 32px)',
                      height: 'clamp(24px, 3.6vh, 32px)',
                      minWidth: 'clamp(24px, 3.6vw, 32px)',
                      minHeight: 'clamp(24px, 3.6vh, 32px)',
                      maxWidth: 'clamp(24px, 3.6vw, 32px)',
                      maxHeight: 'clamp(24px, 3.6vh, 32px)'
                    })
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', box.icon);
                    e.target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', box.icon);
                  }}
                />
              </motion.div>

              <motion.h3
                className="text-white leading-[100%] flex-1"
                style={{
                  fontFamily: 'poppins-font',
                  width: '100%',
                  maxWidth: "clamp(200px, 25vw, 269px)",
                  height: 'auto',
                  minHeight: "clamp(24px, 4vh, 36px)",
                  fontSize: "clamp(16px, 2.5vw, 24px)",  
                  fontWeight: '500',
                  fontStyle: 'normal',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  wordWrap: 'break-word',
                  hyphens: 'auto'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                {box.title}
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p
              className="text-white leading-[140%] text-opacity-80"
              style={{
                fontFamily: 'poppins-font',
                width: '100%',
                maxWidth: "clamp(280px, 35vw, 366px)",
                height: 'auto',
                minHeight: "clamp(60px, 10vh, 102px)",
                fontSize: "clamp(14px, 2.2vw, 24px)",  
                fontWeight: '400',
                fontStyle: 'normal',
                lineHeight: '140%',
                letterSpacing: '0%',
                wordWrap: 'break-word',
                hyphens: 'auto',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.4,
              }}
            >
              {box.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
    
  {/* SEC2 DIV - Ready to Create Something Great Section */}
  <div className="w-full max-[440px]:px-0 px-4 max-[440px]:mt-[40px] min-[441px]:max-[638px]:mt-[300px] min-[639px]:mt-[60px] md:mt-[80px] lg:mt-[100px] mb-[40px] md:mb-[60px] lg:mb-[80px] flex justify-center">
    <div className="w-full max-w-[1280px] h-auto flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[32px] text-center text-white">

      {/* Top Title - Mobile Version */}
      <h2
        className="text-[24px] leading-[100%] font-[400] font-[Lancelot] text-center max-[440px]:block hidden min-[441px]:md:mt-0 lg:mt-[10px]"
        style={{ 
          fontFamily: 'Lancelot, serif',
          width: '390px',
          height: '27px',
          fontSize: '24px',
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#FFFFFF'
        }}
      >
        Ready to Create Something Great?
      </h2>

      {/* Top Title - Desktop/Tablet Version */}
      <h2
        className="text-[20px] md:text-[32px] lg:text-[52px] leading-[110%] md:leading-[105%] lg:leading-[100%] font-[400] font-[Lancelot] max-[440px]:px-0 px-4 max-[440px]:hidden min-[441px]:block"
        style={{ fontFamily: 'Lancelot, serif' }}
      >
        Ready to Create Something Great?
      </h2>

      {/* Middle Paragraph - Mobile Version */}
      <p 
        className="text-[12px] font-[400] leading-[140%] font-[Poppins] text-center max-[440px]:block hidden min-[441px]:hidden"
        style={{
          fontFamily: 'Poppins, sans-serif',
          width: '390px',
          height: '34px',
          fontSize: '12px',
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '140%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#FFFFFF'
        }}
      >
        We offer flexible API plans tailored to your needs. <br />
        Let's build the right setup, just for you!
      </p>

      {/* Middle Paragraph - Desktop/Tablet Version */}
      <p className="text-[14px] md:text-[18px] lg:text-[20px] font-[400] leading-[130%] md:leading-[135%] lg:leading-[140%] font-[Poppins] max-w-[280px] md:max-w-[600px] lg:max-w-[1000px] max-[440px]:px-0 px-4 max-[440px]:hidden min-[441px]:block">
        We offer flexible API plans tailored to your needs. <br className="hidden md:block" />
        <span className="md:hidden"> </span>Let's build the right setup, just for you!
      </p>

      <Link to="/sign-in">
        {/* Mobile Button */}
        <div
          className="w-[240px] h-[36px] flex items-center gap-[6px] px-[20px] py-[6px] rounded-[20px] border cursor-pointer hover:scale-105 transition-transform duration-200 max-[440px]:flex min-[441px]:hidden"
          style={{
            background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
            borderColor: "#C22CA299",
          }}
        >
          {/* Text */}
          <div className="text-white text-[12px] font-medium font-[Poppins] leading-none flex-1 text-center">
            LOGIN TO ACCESS API KEY
          </div>

          {/* Icon */}
          <div className="w-[16px] h-[16px] flex-shrink-0">
            <img
              src={buttonkey}
              alt="icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop/Tablet Button */}
        <div
          className="w-[240px] md:w-[297px] lg:w-[297px] h-[36px] md:h-[44px] lg:h-[44px] flex items-center gap-[6px] md:gap-[10px] lg:gap-[10px] px-[20px] md:px-[30px] lg:px-[30px] py-[6px] md:py-[10px] lg:py-[10px] rounded-[20px] md:rounded-[30px] lg:rounded-[30px] border cursor-pointer hover:scale-105 transition-transform duration-200 max-[440px]:hidden min-[441px]:flex"
          style={{
            background: "linear-gradient(95.92deg, rgba(138, 56, 245, 0.5) 15.32%, rgba(194, 44, 162, 0.5) 99.87%)",
            borderColor: "#C22CA299",
          }}
        >
          {/* Text */}
          <div className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-medium font-[Poppins] leading-none flex-1 text-center">
            LOGIN TO ACCESS API KEY
          </div>

          {/* Icon */}
          <div className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px] flex-shrink-0">
            <img
              src={buttonkey}
              alt="icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Link>

    </div>
  </div>

</div>
</div>
  );
};

export default CustomAPIPlan;