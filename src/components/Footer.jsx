import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="px-10 py-10 bg-[#746565] text-[#EEEEEE]">
        <div className="px-10 py-10">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-between"><p>logo Anand</p>
            <div className="flex gap-1">
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
                  className="border-1 border-[#EEEEEE] focus:outline-none px-4 py-4"
                  placeholder="Email..."
                />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
