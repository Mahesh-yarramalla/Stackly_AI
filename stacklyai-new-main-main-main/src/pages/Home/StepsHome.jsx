
import React from "react";
import { motion } from "framer-motion";
import SlideInView from "../../components/SlideInView.jsx";
import Frame from "../../assets/home/Frame.png";
import step1 from "../../assets/home/sec7/step1.png";
import step2 from "../../assets/home/sec7/step2.png";
import step3 from "../../assets/home/sec7/step3.png";
import stepbg from "../../assets/home/sec7/sectionBg.png";

export default function StepsHome() {
  return (
<section
  className="
    w-full 
    h-[777px] 
    lg:h-[763px] 
    md:h-[590px] 
    sm:h-[450px] 

    min-[640px]:max-[767px]:h-[550px]
   

    min-[1024px]:max-[1280px]:h-[650px]  

    opacity-100 
    pt-[60px] md:pt-[40px] sm:pt-[30px] max-[639px]:pt-[20px]
    pb-[60px] md:pb-[40px] sm:pb-[30px] max-[639px]:pb-[20px]
    gap-[53px] md:gap-[40px] sm:gap-[20px] max-[639px]:gap-[16px]

    max-[640px]:h-[430px] 
    max-[500px]:h-[400px] 
    max-[440px]:h-[370px]
  "
  style={{ backgroundImage: `url(${stepbg})` }}
>



     <div
  className="
    w-full 
    h-[657px] md:h-[546px] sm:h-[450px]    
    opacity-100 
    flex flex-col items-center mx-auto 
    gap-[65px] md:gap-[54px] sm:gap-[30px]  
  "
>
        {/* Heading */}
      <div className="w-full max-w-[1120px] mx-auto flex flex-col items-center text-center gap-4">
<h1
  className="text-white lora-text whitespace-nowrap 
             text-[32px] lg:text-[28px] md:text-[24px] 
             max-[570px]:text-[20px] max-[400px]:text-[18px] 
             leading-tight"
>
  Bringing <span className="text-[#8A38F5]">Beauty</span> to Every Corner
</h1>


 <p
  className="text-white poppins-font leading-snug
             text-[18px]           
             lg:text-[16px]        
             md:text-[15px]       
             sm:text-[14px]        
             max-[570px]:text-[13px] 
             max-[400px]:text-[12px]" 
>
  Personalized design solutions that make your home truly yours
</p>

</div>


        {/* Steps Section */}
       <div className="w-[1440px] h-[511px] opacity-100 flex flex-row justify-center items-start gap-[22px] flex-wrap max-[1280px]:w-full max-[1280px]:h-auto max-[1280px]:gap-4 ">
          {/* Sub-heading */}
     <div className="w-[1440px] h-[19px] opacity-100 gap-[10px] px-[80px] flex items-start max-[1280px]:w-full max-[1280px]:h-auto max-[1280px]:px-[20px]">
<p
  className="w-[1280px] h-[19px] opacity-100 text-[16px] leading-[100%] font-normal text-left text-white poppins-font
             max-[1280px]:w-full max-[1280px]:h-auto max-[1280px]:text-[14px]
             max-[945px]:w-full max-[945px]:text-[13px]
             max-[640px]:w-full max-[640px]:text-[12px] max-[640px]:leading-[150%]
             max-[440px]:text-[11px]
             max-[350px]:text-[10px]
             max-[640px]:-mt-10 max-[500px]:-mt-10 max-[440px]:-mt-10"
>
  Create Stunning Designs in 3 Simple Steps, Powered by{" "}
  <span className="text-[#8A38F5]">STACKLYAI</span>
</p>


</div>


          {/* Step Cards */}
<div
  className="w-[1440px] 
             h-[470px] max-[1280px]:h-[160px] max-[945px]:h-[300px] 
             px-[80px] max-[1280px]:px-[70px] max-[945px]:px-[20px] 
             flex justify-between items-start
             max-[640px]:-mt-10 max-[640px]:h-[220px] 
             max-[500px]:-mt-6 max-[500px]:h-[180px] 
             max-[440px]:-mt-6 max-[440px]:h-[160px]"
>


  {[
    {
      step: "Step 1",
      title: "Upload",
      text: "Upload a photo of your room, home, or outdoor space.",
      image: step1,
    },
    {
      step: "Step 2",
      title: "Personalize your experience",
      text: "Personalize your stay! choose a room, set AI creativity, and pick your design style.",
      image: step2,
    },
    {
      step: "Step 3",
      title: "Generate",
      text: "Generate stunning new decor and design concepts in under 25 seconds.",
      image: step3,
    },
  ].map((item, index) => (
<SlideInView key={index} delay={index * 0.3}>
  <div
    className="flex flex-col w-[400px] h-[470px] rounded-[12px] opacity-100 relative 
                max-[1280px]:w-[280px] max-[1280px]:h-[340px] 
                max-[945px]:w-[220px] max-[945px]:h-[280px] 
                max-[640px]:w-[150px] max-[640px]:h-[200px] 
                max-[500px]:w-[120px] max-[500px]:h-[170px] 
                max-[440px]:w-[100px] max-[440px]:h-[150px] 
                max-[350px]:w-[85px]  max-[350px]:h-[130px]" // 👈 extra tiny
  >
    {/* Step Badge */}
    <div
      className="absolute top-[394px] left-[250px] z-10 
                 flex items-center gap-[6px] 
                 rounded-[10px] px-[14px] py-[6px] 
                 backdrop-blur-[6px] shadow-[0px_2px_6px_0px_#00000040] 
                 border border-white/20 bg-white/10

                 max-[1280px]:top-[270px] max-[1280px]:left-[160px] 
                 max-[945px]:top-[230px] max-[945px]:left-[120px] 
                 max-[640px]:top-[170px] max-[640px]:left-[70px] 
                 max-[500px]:top-[140px] max-[500px]:left-[40px]
                 max-[440px]:top-[120px] max-[440px]:left-[30px] 
                 max-[350px]:top-[100px] max-[350px]:left-[20px]" // 👈 adjust
    >
      {/* Rotating circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex items-center justify-center rounded-full border border-white 
                   w-[18px] h-[18px] 
                   max-[1280px]:w-[14px] max-[1280px]:h-[14px] 
                   max-[945px]:w-[12px] max-[945px]:h-[12px] 
                   max-[640px]:w-[10px] max-[640px]:h-[10px] 
                   max-[500px]:w-[8px]  max-[500px]:h-[8px]
                   max-[440px]:w-[6px]  max-[440px]:h-[6px] 
                   max-[350px]:w-[5px]  max-[350px]:h-[5px]" // 👈 tiny
      >
        <img src={Frame} alt="star" className="w-[70%] h-[70%] object-contain" />
      </motion.div>

      {/* Step text */}
      <span
        className="text-white font-semibold poppins-font 
                   text-[14px] leading-none
                   max-[1280px]:text-[12px] 
                   max-[945px]:text-[11px] 
                   max-[640px]:text-[9px] 
                   max-[500px]:text-[8px]
                   max-[440px]:text-[7px] 
                   max-[350px]:text-[6px]" // 👈 smallest
      >
        {item.step}
      </span>
    </div>

    {/* Image block */}
    <div
      className="group w-[400px] h-[470px] rounded-[12px] overflow-hidden relative z-0 
                  max-[1280px]:w-[280px] max-[1280px]:h-[340px] 
                  max-[945px]:w-[220px] max-[945px]:h-[280px] 
                  max-[640px]:w-[150px] max-[640px]:h-[200px] 
                  max-[500px]:w-[120px] max-[500px]:h-[170px] 
                  max-[440px]:w-[100px] max-[440px]:h-[150px] 
                  max-[350px]:w-[85px]  max-[350px]:h-[130px]" // 👈 scaled
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url('${item.image}')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-500 group-hover:opacity-0"></div>
    </div>

    {/* Description */}
    <div
      className="absolute top-[46px] left-[25px] w-[247px] h-auto text-white z-20 
                  max-[1280px]:top-[25px] max-[1280px]:left-[18px] max-[1280px]:w-[180px] 
                  max-[945px]:top-[18px] max-[945px]:left-[14px] max-[945px]:w-[150px] 
                  max-[640px]:top-[12px] max-[640px]:left-[8px]  max-[640px]:w-[110px] 
                  max-[500px]:top-[10px] max-[500px]:left-[6px]  max-[500px]:w-[90px] 
                  max-[440px]:top-[8px]  max-[440px]:left-[4px]  max-[440px]:w-[80px]
                  max-[350px]:top-[6px]  max-[350px]:left-[3px]  max-[350px]:w-[70px]" // 👈 smaller
    >
      <p
        className="font-[600] text-[16px] leading-[140%] font-[Poppins] mb-1 
                    max-[1280px]:text-[13px] 
                    max-[945px]:text-[12px] 
                    max-[640px]:text-[10px] 
                    max-[500px]:text-[8px] 
                    max-[440px]:text-[7px] 
                    max-[350px]:text-[6px]" // 👈 tiny
      >
        {item.title}
      </p>
      <p
        className="font-[400] text-[16px] leading-[140%] font-[Poppins] 
                    max-[1280px]:text-[12px] 
                    max-[945px]:text-[11px] 
                    max-[640px]:text-[9px] 
                    max-[500px]:text-[7px] 
                    max-[440px]:text-[6px] 
                    max-[350px]:text-[5px]" // 👈 smallest
      >
        {item.text}
      </p>
    </div>
  </div>
</SlideInView>



  ))}
</div>
</div>
      </div>
    </section>
  );
}

