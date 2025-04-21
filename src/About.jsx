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
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.LLP9i6kGFOhwuxHQ5OZUiAHaHr?rs=1&pid=ImgDetMain"
                    className="w-full"
                    alt=""
                  />
                </div>
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
                    <h4 className="text-2xl text-center font-bold">
                      Over 40 Years of Expertise
                    </h4>
                    <p className="text-lg leading-10 text-[#555555] text-center">
                      With over four decades of experience, we have successfully
                      catered to the needs of more than 1,200 customers and{" "}
                      <br />
                      contributed to numerous large-scale projects throughout
                      Nepal. Our robust network of suppliers and logistics
                      partners enables us to ensure timely deliveries, even to
                      the most remote areas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-8 flex flex-col gap-4">
                <h4 className="text-xl font-bold text-center">
                  Our Commitment to You
                </h4>
                <p className="text-lg font-semibold text-center leading-6 text-[#555555]">
                  Our dedicated team of professionals carefully analyses your
                  project requirements to offer the best solutions. We
                  efficiently source a wide variety of products from trusted
                  suppliers, ensuring availability and cost-effectiveness
                  without compromising on quality.
                </p>
              </div>

              <div className="grid grid-cols-[70%_30%]">
                <div className="px-8 py-8 flex flex-col gap-4">
                  <h4 className="text-2xl font-bold text-center">Our Mission</h4>
                  <p className="text-lg font-semibold text-center italic">
                    We aim to provide our clients with:
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#effffa] px-5 py-3 rounded-lg text-[#555555] flex flex-col gap-2 ">
                      <p className="text-6xl text-[#10b981] flex justify-center">
                        <RiPriceTagLine />
                      </p>
                      <p className="text-lg font-bold text-[#10b981]">Competitive pricing</p>{" "}
                      <p className="text-sm">
                        Offering top-quality services at fair and competitive
                        rates to ensure the best value for your investment.
                      </p>
                    </div>
                    <div className="px-5 bg-[#f8f8ff] py-3 rounded-lg text-[#555555] flex flex-col gap-2 ">
                      <p className="text-6xl text-[#3b82f6] flex justify-center">
                        <RiStarLine />
                      </p>
                      <p className="text-lg font-bold  text-[#3b82f6]">High-quality products</p>
                      <p className="text-sm font-semibold">
                        "Carefully crafted with premium materials to deliver
                        durability, performance, and satisfaction you can
                        trust."
                      </p>
                      <p></p>
                    </div>
                    <div className=" bg-[#fff9ef] px-5 py-3 rounded-lg text-[#555555] flex flex-col gap-2 ">
                      <p className="text-[#f59e0b] text-6xl flex justify-center">
                        <RiTruckLine />
                      </p>
                      <p className="text-lg font-bold text-[#f59e0b]">
                        Timely and reliable delivery
                      </p>
                      <p className="text-sm font-semibold">
                        Count on us for fast, consistent, and dependable
                        delivery—right when you need it.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-center italic">
                    Your satisfaction is our priority.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                <div className="px-8 py-8l">
                  <h4 className="text-2xl font-bold text-center">Our Vision</h4>
                  <p className="text-lg font-semibold text-center text-[#666] italic">
                    To become Nepal's leading supplier of construction
                    materials, known for our quality, reliability, and
                    customer-centric approach.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 py-8">
              <p className="text-2xl font-bold text-center">Our Core Values</p>
              <ul className=" text-[#555555] grid grid-cols-5 gap-4 ">
                <li className="bg-[#f0f0ff] flex flex-col justify-between rounded-lg px-4 py-3 hover:scale-104 duration-500 gap-3">
                  <p className="text-6xl text-[#6366f1] flex justify-center">
                    <RiShieldCheckLine />
                  </p>
                  <p className="text-lg font-semibold text-[#6366f1]">Integrity and Trust</p>
                  <p className="text-sm">Built on honesty, transparency, and a commitment to doing what's right—every time.</p>
                </li>
                <li className="bg-[#f0faff] flex flex-col justify-between rounded-lg px-4 py-3 hover:scale-104 duration-500 gap-3">
                  <p className="text-6xl text-[#0ea5e9] flex justify-center">
                    <RiThumbUpLine />
                  </p>
                  <p className="text-lg font-semibold text-[#0ea5e9]">Customer Satisfaction</p>
                  <p className="text-sm">Focused on exceeding expectations with personalized service and genuine care at every step.</p>
                </li>
                <li className="bg-[#fffdf4] flex flex-col justify-between rounded-lg px-4 py-3 hover:scale-104 duration-500 gap-3">
                  <p className="text-6xl flex justify-center text-[#facc15]">
                    <RiMedalLine />
                  </p>
                  <p className="text-lg font-semibold text-[#facc15]">Commitment to Quality</p>
                  <p className="text-sm">Dedicated to maintaining the highest standards in every detail to ensure excellence and consistency.</p>
                </li>
                <li className="bg-[#f0fffd] flex flex-col justify-between rounded-lg px-4 py-3 hover:scale-104 duration-500 gap-3">
                  <p className="text-6xl flex justify-center text-[#14b8a6]">
                    <RiRefreshLine />
                  </p>
                  <p className="text-lg font-semibold text-[#14b8a6]">Continuous Improvement</p>
                  <p className="text-sm">Driven by innovation and feedback to constantly refine and elevate our products and services.</p>
                </li>
                <li className="flex bg-[#f6f3ff] flex-col justify-between rounded-lg px-4 py-3 hover:scale-104 duration-500 gap-3">
                  <p className="text-6xl text-[#8b5cf6] flex justify-center">
                    <RiGroupLine />
                  </p>
                  <p className="text-lg font-semibold text-[#8b5cf6]">Teamwork and Collaboration</p>
                  <p className="text-sm">Working together with openness and unity to achieve shared goals and stronger results.</p>
                </li>
              </ul>
            </div>
        <section className="px-10 py-10">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-6">
              <h5 className="text-3xl font-semibold">
                Ready to start your next project?{" "}
              </h5>
              <div className="flex justify-center">
                <button className="text-lg px-2 py-1 border border-black">CONTACT US</button>
              </div>
            </div>
          </div>
        </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
