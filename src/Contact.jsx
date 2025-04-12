import React from "react";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <div>
      <main className="mt-[10vh]">
        <section className="px-10 py-10">
          <h5 className="text-center text-2xl font-bold">
            We're here to answer your questions and guide you every step of the
            way.
          </h5>
          <div className="grid grid-cols-2 py-10">
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.U4KLScodWqPv4_trHyBDawHaHa?rs=1&pid=ImgDetMain"
                alt=""
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-10 flex flex-col gap-4">
              <h4 className="text-xl font-medium"> Get in Touch</h4>
              <p className="text-lg leading-8 text-[#6b6b6b]">
                We'd love to hear from you! Reach out to us for inquiries,
                quotations, or any assistance with your construction needs.
              </p>
              <div>
                <p>Phone: +977-XXXXXXXXXX</p>
                <p>Email: info@yourdomain.com </p>
                <p>Address: Your Full Business Address</p>
                <p>Hours: Sunday Friday, 9:00 AM 6:00 PM</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center justify-center w-8 h-8 text-red-400 bg-transparent rounded-full transition-all duration-300 hover:bg-red-400 hover:text-white hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.8),0_0_30px_rgba(239,68,68,0.6),0_0_45px_rgba(239,68,68,0.5)]">
                  <SiGmail />
                </button>
                <button className="flex items-center justify-center w-8 h-8 text-green-400 bg-transparent rounded-full transition-all duration-300 hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.8),0_0_30px_rgba(34,197,94,0.6),0_0_45px_rgba(34,197,94,0.5)]">
                  <BsWhatsapp />
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-2xl font-bold">Get in touch of us</p>
          <div className="grid grid-cols-[65%_35%] py-10">
          <div className="px-10 ">
            <form action="" className="flex flex-col gap-8">
              <div className="flex gap-4 justify-between text-xl font-semibold">
              <div className="flex gap-4 items-center w-full ">
                <label htmlFor="name"><p>Name</p></label>
                <input type="text" className=" w-full px-3 py-2 border-r-2 border-l-2 rounded-xl focus:outline-none" name="" id="name" placeholder="*Name" />
              </div>
              <div className="flex gap-3 items-center w-full">
              <label htmlFor="email"><p>Email:</p></label>
              <input type="text" className=" w-full px-3 py-2 border-r-2 border-l-2 focus:outline-none rounded-xl" id="email" placeholder="Your email" />
              </div>
              </div>
              
              <div className="flex flex-col gap-5">
              <textarea name="" id="" rows={15} className="px-3 py-2 text-xl font-semibold w-full border-r-2 border-l-2 rounded-xl focus:outline-none" placeholder="Message">
              </textarea>
              <button className="px-2 py-1 border-2 rounded-lg text-lg font-bold">Send message</button>
              </div>
            </form>
          </div>
          <div>
            gmap
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
