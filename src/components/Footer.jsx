import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import Biglogo from "../assets/anandLogoBig.png";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="px-10 pt-10 bg-[#F8EEDF] text-black">
        <div className="px-10 py-0">
          <div className="grid grid-cols-[15%_15%_30%_10%_25%] gap-4 items-center">
            <div className="flex flex-col gap-8">
              <div className='h-[40%]'>
              <img src={Biglogo} alt="" className='h-[100px]' />
              </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-bold'>Links</p>
            <div className="flex gap-1">
            <button className="flex items-center justify-center w-8 h-8 text-red-400 bg-transparent rounded-full transition-all duration-300 hover:bg-red-400 hover:text-white hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.8),0_0_30px_rgba(239,68,68,0.6),0_0_45px_rgba(239,68,68,0.5)]">
                <SiGmail />
              </button>
              <button className="flex items-center justify-center w-8 h-8 text-green-400 bg-transparent rounded-full transition-all duration-300 hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.8),0_0_30px_rgba(34,197,94,0.6),0_0_45px_rgba(34,197,94,0.5)]">
              <BsWhatsapp />
              </button>
            </div>
            </div>
            </div>
            <div className="text-sm flex flex-col gap-4">
             <div>
             <p className='flex items-center gap-2'><IoCall />
              +9779851360366</p>
              <p className="text-sm flex items-center gap-2"> <IoCall />+9779851360366</p>
             </div>
              <p>
                01-5326501/5343576 <br />01-5151814/5151815
              </p>
              
            </div>
            <div className='flex flex-col gap-2'>
              <div>
              <p className="text-sm">anandtradeconcern@gmail.com <br />anandtradektm@gmail.com</p>
              </div>
              <p>
                Head Office: 131-Milan Marg, Teku, Kathmandu <br /> Branch
                Office Road, Beside Mahalaxmi Petrol Pump
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>Quick Links</p>
              <ul className='text-sm cursor-pointer'>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>About</li>
                <li className='hover:underline'>Blog</li>
                <li className='hover:underline'>Products</li>
                <li className='hover:underline'>Projects</li>
                <li className='hover:underline'>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm">
                Stay informed with our latest news, industry insights,<br /> and
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
        <hr className='my-2 text-gray-600'/>
        <div className='flex justify-center font-bold'>
          <p>© 2025 Anand. All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer
