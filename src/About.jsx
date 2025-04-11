import React from "react";
import Swipe from "./components/Swiper";
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
              <div className="grid grid-cols-2 py-10">
                <div>img</div>
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
                </div>
              </div>
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
              <div className="grid grid-cols-2">
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
              <div className="px-8 py-8 flex flex-col gap-4">
                <h4 className="text-xl font-bold text-center">Our Mission</h4>
                <p className="text-lg font-semibold text-center italic">We aim to provide our clients with:</p>
                <div>
                  <div className="text-lg font-semibold text-[#555555] text-center">Competitive pricing</div>
                  <div className="text-center text-lg font-semibold text-[#555555]">High-quality products</div>
                  <div className="text-center text-lg font-semibold text-[#555555]">Timely and reliable delivery</div>
                </div>
                <p className="text-lg font-semibold text-center italic">Your satisfaction is our priority.</p>
              </div>
              <div className="px-8 py-8">
              <h4 className="text-xl font-bold text-center">Our Vision</h4>
              <p className="text-lg font-semibold text-center italic">
                To become Nepal's leading supplier of construction materials,
                known for our quality, reliability, and customer-centric
                approach.
              </p>
            </div>
            <div className="flex flex-col gap-4 px-8 py-8">
              <p className="text-xl font-bold text-center">Our Core Values</p>
              <ul className="text-center text-lg font-semibold text-[#555555]">
                <li>Integrity and Trust</li>
                <li>Customer Satisfaction</li>
                <li>Commitment to Quality</li>
                <li>Continuous Improvement</li>
                <li>Teamwork and Collaboration</li>
              </ul>
            </div>
              </div>
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
        <footer>
            <div>
                <div>
                    <h5>Ready to start your next project? </h5>
                    <div>
                        contact us or give somethings to go on
                        
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default About;
