import React from "react";
import ImgCard from "./components/ImgCard";
import { useState } from "react";
import CenteredTabs from "./components/Centerdtabs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import MyDisclosure from "./components/Discolsure";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main>
        <section className="z-0 relative py-10 px-10 mt-[10vh] bg-[#F8EEDF]">
          <div className="absolute inset-0 "></div>
          <div className="relative z-10">
            <p className="text-center text-2xl font-bold text-black">
              <i>
                "Comprehensive Steel Solutions: <br /> From Structural Integrity
                to Precision Tools, We Have Every Material You Need to Build
                with Strength."
              </i>{" "}
              <br /> -Anand
            </p>
            <div className="grid grid-cols-2 py-15 gap-15">
              <div>
                <img
                  src="https://th.bing.com/th/id/OIP.76QO-ytHRfNjynV8_KkPVgHaJQ?w=1080&h=1350&rs=1&pid=ImgDetMain"
                  alt=""
                  className="h-[600px] w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-between py-10">
                <div className="flex flex-col gap-4">
                  <p className="text-2xl font-medium flex items-center">
                    <HiMiniMinusSmall />
                    About Us
                    <HiMiniMinusSmall />
                  </p>
                  <div className="relative mb-4 flex">
                    <span className="text-6xl font-bold relative">ANAND</span>
                    <div className="group cursor-pointer absolute top-0 left-0 h-full w-55">
                      <span className="text-6xl font-bold text-[#8E1616] absolute top-0 left-0 overflow-hidden w-0 group-hover:w-full transition-all duration-600">
                        ANAND
                      </span>
                    </div>
                  </div>

                  <p className="text-xl leading-10 text-[#555555]">
                    Established in{" "}
                    <span className="text-[#353535] font-bold">1981</span>, we
                    are a leading steel and metallic products supplier in Nepal,
                    serving both wholesale and retail customers. With over four
                    decades of experience, we've supported over 1,200 customers
                    and numerous large-scale projects across the country. Our
                    strong supplier and transportation network ensures timely
                    delivery, even to remote areas. Our mission is to offer
                    competitive prices, high-quality products, and efficient
                    solutions to meet all construction material needs.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="relative px-2 py-1 border-[1.5px] border-[#8E1616]  text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group font-bold">
                    Learn More
                    <span className="absolute inset-0 transition-opacity duration-600 group-hover:opacity-0"></span>
                    <span className="absolute top-1/2 left-1/2 w-34 h-40 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover:scale-100 group-hover:opacity-100  transition-all duration-500 ease-out"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 py-10  text-[#8E1616]">
          <div>
            <h4 className="text-4xl font-bold text-center">
              Our Product Range
            </h4>
            <div className="py-10">
              <div>
                <CenteredTabs />
              </div>
            </div>
          </div>
        </section>
        <section className="relative px-10 py-10 bg-[#F5F5F5]">
          {/* Background gradient + image layer */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/wholesale-steel-rebar-round-iron-steel-rod-construction-steel-bars-view-rebar-steel-demra-dhaka-bangladesh_94678-707.jpg')]">
              <div className="w-full h-full bg-gradient-to-b from-[#F5F5F5] via-[#F5F5F5]/90 to-[#F5F5F5]/50"></div>
            </div>
          </div>

          {/* Foreground content */}
          <div className="relative z-10">
            <h5 className="text-center text-4xl font-bold">
              Why Choose Us?
            </h5>
            <div className="grid grid-cols-2 gap-10 py-10">
              <MyDisclosure />
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/wholesale-steel-rebar-round-iron-steel-rod-construction-steel-bars-view-rebar-steel-demra-dhaka-bangladesh_94678-707.jpg"
                  alt=""
                  className="w-full h-[600px] object-cover object-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
