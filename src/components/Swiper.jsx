import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // ✅ Import autoplay CSS

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module

import './styles.css';

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
        <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
            <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
            <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
        <SwiperSlide><div className='flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button></div></SwiperSlide>
            

      </Swiper>
    </>
  );
}
