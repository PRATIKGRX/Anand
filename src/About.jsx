import React from "react";
import Swipe from "./components/Swiper";
import { RiPriceTagLine } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { RiTruckLine } from "react-icons/ri";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiThumbUpLine } from "react-icons/ri";
import { RiMedalLine } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
const About = () => {
  return (
    <>
      <div className="mt-[10vh]">
        <main className="px-10 py-10">
          <section className="">
            <div>
              <div>
                <h4 className="text-center text-4xl font-bold">About US</h4>
              </div>
              <div className="grid grid-cols-2 gap-8 py-10">
                <div><img src="https://th.bing.com/th/id/OIP.LLP9i6kGFOhwuxHQ5OZUiAHaHr?rs=1&pid=ImgDetMain" className="w-full" alt="" /></div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold italic">
                    Pioneering the Steel and Construction Materials Industry
                    Since 1981
                  </h4>
                  <p className="text-xl leading-10 text-[#555555] ">
                    Established in 1981, we are proud to be among the first
                    companies in Nepal to offer a comprehensive range of steel
                    and metallic products essential for the construction
                    industry. We provide both wholesale and retail services,
                    delivering quality materials at the most competitive prices
                    across Nepal.
                  </p>
                  <div className="py-10 flex flex-col gap-4">
                <h4 className="text-2xl text-center font-bold">Over 40 Years of Expertise</h4>
                <p className="text-lg leading-10 text-[#555555] text-center">
                  With over four decades of experience, we have successfully
                  catered to the needs of more than 1,200 customers and <br />
                  contributed to numerous large-scale projects throughout Nepal.
                  Our robust network of suppliers and logistics partners enables
                  us to ensure timely deliveries, even to the most remote areas.
                </p>
              </div>
                </div>
                
              </div>
              <div className="px-8 py-8 flex flex-col gap-4">
                <h4 className="text-xl font-bold text-center">Our Commitment to You</h4>
                <p className="text-lg font-semibold text-center leading-6 text-[#555555]">
                  Our dedicated team of professionals carefully analyses your
                  project requirements to offer the best solutions. We
                  efficiently source a wide variety of products from trusted
                  suppliers, ensuring availability and cost-effectiveness
                  without compromising on quality.
                </p>
              </div>
              
              <div className="grid grid-cols-2">
               
          
              <div className="px-8 py-8 flex flex-col gap-4">
                <h4 className="text-xl font-bold text-center">Our Mission</h4>
                <p className="text-lg font-semibold text-center italic">We aim to provide our clients with:</p>
                <div>
                  <div className="text-lg font-semibold text-[#555555] flex gap-2 items-center justify-center"><p><RiPriceTagLine /></p><p>Competitive pricing</p></div>
                  <div className="text-lg font-semibold text-[#555555] flex gap-2 items-center justify-center"><p><RiStarLine /></p>
                    <p>High-quality products</p></div>
                  <div className="text-lg font-semibold text-[#555555] flex gap-2 items-center justify-center"><p><RiTruckLine /></p><p>Timely and reliable delivery</p></div>
                </div>
                <p className="text-lg font-semibold text-center italic">Your satisfaction is our priority.</p>
                <div className="px-8 py-8">
              <h4 className="text-xl font-bold text-center">Our Vision</h4>
              <p className="text-lg font-semibold text-center italic">
                To become Nepal's leading supplier of construction materials,
                known for our quality, reliability, and customer-centric
                approach.
              </p>
            </div>
              </div>
              <div>
                <img src="https://img.freepik.com/premium-photo/industrial-complex_328191-12776.jpg" alt="" className="h-[500px] object-cover object-center w-full" />
              </div>
              
            
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 py-8">
              <p className="text-xl font-bold text-center">Our Core Values</p>
              <ul className="text-lg font-semibold text-[#555555] flex gap-4 items-center justify-center">
                <li className="flex flex-col justify-between border border-[#505050] rounded-lg shadow-2xl px-4 py-3 hover:scale-110 hover:bg-[#505050] hover:text-white duration-500"><p className=" "><RiShieldCheckLine />
                </p><p>Integrity and Trust</p></li>
                <li className="flex flex-col justify-between border border-[#505050] rounded-lg shadow-2xl px-4 py-3 hover:scale-110 hover:bg-[#505050] hover:text-white duration-500"><p><RiThumbUpLine /></p><p>Customer Satisfaction</p></li>
                <li className="flex flex-col justify-between border border-[#505050] rounded-lg shadow-2xl px-4 py-3 hover:scale-110 hover:bg-[#505050] hover:text-white duration-500"><p><RiMedalLine /></p><p>Commitment to Quality</p></li>
                <li className="flex flex-col justify-between border border-[#505050] rounded-lg shadow-2xl px-4 py-3 hover:scale-110 hover:bg-[#505050] hover:text-white duration-500"><p><RiRefreshLine /></p><p>Continuous Improvement</p></li>
                <li className="flex flex-col justify-between border border-[#505050] rounded-lg shadow-2xl px-4 py-3 hover:scale-110 hover:bg-[#505050] hover:text-white duration-500"><p><RiGroupLine /></p><p>Teamwork and Collaboration</p></li>
              </ul>
            </div>
          </section>
          <section className="py-10">
          
            <div>
                <h4 className="text-center text-4xl font-bold">Projects We've Supported</h4>
                <div>
                  <Swipe />
                    
                </div>
            </div>
          </section>
        </main>
        <footer className="px-10 py-10">
            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-6">
                    <h5 className="text-3xl font-semibold">Ready to start your next project? </h5>
                    <div className="flex justify-center">
                    <button className="relative px-2 py-1 border-[1.5px] border-none shadow-xl/20 shadow-[#242424] text-[#080808] text-lg overflow-hidden transition-colors duration-500 hover:text-white group font-bold">
                    CONTACT US
                    <span className="absolute inset-0 transition-opacity duration-600 group-hover:opacity-0"></span>
                    <span className="absolute top-1/2 left-1/2 w-35 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#CC2936] shadow-xl shadow-[#ff0000] rounded-full scale-0 opacity-0 -z-10 group-hover:scale-100 group-hover:opacity-100  transition-all duration-600 ease-out"></span>
                  </button>
                        
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default About;
