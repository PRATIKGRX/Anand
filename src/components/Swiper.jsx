import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // ✅ Import autoplay CSS

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ Import Autoplay module

import "./styles.css";

export default function Swipe() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{ clickable: true }}
        navigation={true} // ✅ Enable navigation
        autoplay={{
          delay: 2500, // 2.5 seconds delay between slides
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }} // ✅ Enable autoplay
        modules={[Pagination, Navigation, Autoplay]} // ✅ Add Autoplay module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 nborder-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 shadow-2xl px-4 py-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="mt-4 group/button">
          <button className="relative px-2 py-1 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group/button font-bold">
            Learn More
            <span className="absolute inset-0 transition-opacity duration-600 group-hover/button:opacity-0"></span>
            <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover/button:scale-100 group-hover/button:opacity-100 transition-all duration-600 ease-out"></span>
          </button>
        </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
