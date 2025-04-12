import React from "react";
import ImgCard from "./components/ImgCard";
import { useState } from "react";
import CenteredTabs from "./components/Centerdtabs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Over 40 Years of Expertise",
      description:
        "With decades of experience, we bring unmatched knowledge and precision to every project. Our long-standing presence in the industry reflects our commitment to excellence.",
    },
    {
      title: "Trusted in Nepal's Construction Industry",
      description:
        "Recognized as a reliable partner, Anand has earned the trust of builders, contractors, and homeowners across Nepal through consistent quality and service.",
    },
    {
      title: "Quality Materials Guaranteed",
      description:
        "We source only premium materials, ensuring durability and strength in every construction, so your projects stand the test of time.",
    },
    {
      title: "Commitment to Customer Satisfaction",
      description:
        "Your satisfaction is our priority. We work closely with clients to understand their needs and deliver solutions that exceed expectations.",
    },
    {
      title: "Innovative Solutions for Modern Construction",
      description:
        "Staying ahead with modern technology and design trends, we provide innovative solutions that blend functionality with aesthetics.",
    },
    {
      title: "Environmentally Responsible Practices",
      description:
        "We are committed to sustainable building practices, minimizing environmental impact while maintaining top-tier quality.",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer fair and competitive pricing without compromising on quality, giving you the best value for your investment.",
    },
  ];
  return (
    <>
      <main>
        <section className="z-0 relative py-10 px-10 mt-[10vh] bg-[#F5F5F5]">
          <div className="absolute inset-0 "></div>
          <div className="relative z-10">
            <p className="text-center text-2xl font-bold text-black">
              "Comprehensive Steel Solutions: <br /> From Structural Integrity
              to Precision Tools, We Have Every Material You Need to Build with
              Strength." <br /> -Anand
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
                      <span className="text-6xl font-bold text-[#ff3030] absolute top-0 left-0 overflow-hidden w-0 group-hover:w-full transition-all duration-600">
                        ANAND
                      </span>
                    </div>
                  </div>

                  <p className="text-xl leading-10 text-[#555555]">
                    Established in <span className="text-[#353535] font-bold">1981</span>, we are a leading steel and metallic
                    products supplier in Nepal, serving both wholesale and
                    retail customers. With over four decades of experience,
                    we've supported over 1,200 customers and numerous
                    large-scale projects across the country. Our strong supplier
                    and transportation network ensures timely delivery, even to
                    remote areas. Our mission is to offer competitive prices,
                    high-quality products, and efficient solutions to meet all
                    construction material needs.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="relative px-2 py-1 border-[1.5px] border-[#7D0A0A] text-[#7D0A0A] text-lg overflow-hidden transition-colors duration-500 hover:text-white group font-bold">
                    Learn More
                    <span className="absolute inset-0 transition-opacity duration-600 group-hover:opacity-0"></span>
                    <span className="absolute top-1/2 left-1/2 w-30 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#7D0A0A] rounded-full scale-0 opacity-0 -z-10 group-hover:scale-100 group-hover:opacity-100 transition-all duration-600 ease-out"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 py-10 bg-[#F5F5F5]">
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
        <section className="px-10 py-10 bg-[#F5F5F5]">
          <div>
            <h5 className="text-center text-4xl font-bold">Why Choose Us?</h5>

            <div className="grid grid-cols-2 py-10">
              <div className=" flex items-center">
                <ul className="py-10 flex flex-col gap-4">
                  {items.map((item, index) => (
                    <li key={index}>
                      <div className="">
                        <button
                          onClick={() => toggleText(index)}
                          className=" flex gap-2 items-center transition text-left w-full font-semibold text-2xl"
                        >
                          <FaAngleDoubleRight />
                          {item.title}
                          <FaAngleDoubleLeft />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openIndex === index ? "max-h-40" : "max-h-0"
                          }`}
                        >
                          <p className="px-5 text-xl py-2 text-left text-black">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/wholesale-steel-rebar-round-iron-steel-rod-construction-steel-bars-view-rebar-steel-demra-dhaka-bangladesh_94678-707.jpg"
                  alt=""
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-10 py-10 bg-[#ffd1ac]">
        <div className="px-10 py-10">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-between"><p>logo Anand</p>
            <div className="flex gap-4">
            <button className="flex items-center justify-center w-8 h-8 text-red-400 bg-transparent rounded-full transition-all duration-300 hover:bg-red-400 hover:text-white hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.8),0_0_30px_rgba(239,68,68,0.6),0_0_45px_rgba(239,68,68,0.5)]">
                <SiGmail />
              </button>
              <button className="flex items-center justify-center w-8 h-8 text-green-400 bg-transparent rounded-full transition-all duration-300 hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.8),0_0_30px_rgba(34,197,94,0.6),0_0_45px_rgba(34,197,94,0.5)]">
              <BsWhatsapp />
              </button>
            </div>
            </div>
            <div className="text-sm">
              <p>
                +9779851360366 <br />
                01-5326501/5343576 <br />01-5151814/5151815
              </p>
              <p>
                Head Office: 131-Milan Marg, Teku, Kathmandu <br /> Branch
                Office Road, Beside Mahalaxmi Petrol Pump
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
              <p className="text-sm">anandtradeconcern@gmail.com <br />anandtradektm@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
              <p className="text-sm">+9779851360366</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm">
                Stay informed with our latest news, industry insights, and
                updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  className="border-1 border-black focus:outline-none px-4 py-4"
                  placeholder="Email..."
                />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
