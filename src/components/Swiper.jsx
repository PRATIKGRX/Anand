import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History } from "swiper/modules";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipe() {
  return (
    <div className="h-[500px] relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={true}
        history={{ key: "slide" }}
        modules={[Navigation, Pagination, History]}
        className="h-full w-full m-10"
      >
        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-history="1" className="h-full w-full m-5">
          <div className="relative flex flex-col h-[90%] justify-center items-center  shadow-2xl hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden ">
            <div className="relative w-full h-full">
              <img
                src="https://th.bing.com/th/id/OIP.xQw1ikARq01sHjGrJ-V2ZwHaE8?rs=1&pid=ImgDetMain"
                alt=""
                className="h-[60%] w-full object-cover object-center"
              />

              {/* Gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#333333] to-[#c90000] opacity-99"></div>

              {/* Content */}
              <div className="absolute top-[30%] left-0 w-full bg-opacity-50 p-4 flex flex-col gap-2 text-white">
                <h4 className="text-xl font-bold">Project description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit accusantium ut architecto ipsa sequi. Quasi illo
                  rem perspiciatis, placeat earum consequuntur molestias fugit
                  pariatur id recusandae odio vel, labore error?
                </p>
                <div>
                  <button className="relative px-4 py-2 border-[1.5px] border-[#CC2936] shadow-xl/20 shadow-[#242424] text-white text-lg overflow-hidden transition-colors duration-500 hover:text-black group font-bold bg-[#e02a39]">
                    <span className="relative z-10">Learn More</span>

                    {/* Background burst animation */}
                    <span className="absolute top-1/2 left-1/2 w-35 h-32 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="custom-next absolute top-0 left-[-15px] h-full z-50 text-[#c9c9c9] bg-[#6e6e6e]/80 p-2 hover:text-[#444] hover:bg-[#8f8f8f] transition-all duration-400 ">
      <FaChevronLeft />
      </button>
      <button className="custom-next absolute top-0 right-[-15px] h-full z-50 text-[#c9c9c9] bg-[#6e6e6e]/80 p-2 hover:text-[#444] hover:bg-[#8f8f8f] transition-all duration-400 ">
      <FaChevronRight />
      </button>
    </div>
  );
}
