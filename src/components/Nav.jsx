import React from "react";

const Nav = () => {
  return (
    <nav className="px-10 fixed top-0 right-0 left-0 z-99 bg-[#EEEEEE] text-[#7D0A0A] font-semibold">
      <div className="flex justify-between items-center h-[10vh]">
        <div className="text-[15px]">
          <p>Anand</p>
        </div>

        <div className="font-semibold">
          <ul className="flex h-10 gap-8">
            {["Home", "About", "Blog", "Projects", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="relative flex justify-center items-center h-full text-lg px-2 py-1 transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex gap-5 text-[15px]">
          <button>Sign In</button>
          <div className="">
            <button className="relative px-2 py-1 rounded-sm border-1 border-[#7D0A0A] overflow-hidden transition-colors duration-500 hover:text-white group">
              Request
              <span className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="absolute top-1/2 left-1/2 w-25 h-30 -translate-x-1/2 -translate-y-1/2 bg-[#7D0A0A] rounded-full scale-0 opacity-0 -z-10 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
