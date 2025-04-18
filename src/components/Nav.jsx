import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ananadlogo.png";
const Nav = () => {
  return (
    <nav className="px-10 fixed top-0 right-0 left-0 z-99 bg-[#E8C999] text-[#8E1616] shadow-2xl ">
      <div className="flex justify-between items-center h-[10vh]">
        <div className="h-[50%]">
          <img src={logo} alt="" className="h-full" />
        </div>
        <div className="font-semibold tracking-[2px]">
          <ul className="flex h-10 gap-4 text-md ">
            <li
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/">HOME</Link>
            </li>
            <li
              
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/about">ABOUT</Link>
            </li>
            <li
              
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/blog">BLOG</Link>
            </li>
            <li
              
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/products">PRODUCTS</Link>
            </li>
            <li
              
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/projects">PROJECTS</Link>
            </li>
            <li
              
            >
              <Link className="relative flex justify-center items-center h-full  px-2 py-1 transition-all duration-600 ease-[cubic-bezier(0.075,0.82,0.165,1)] nav-item" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-5 text-md ">
          <button className="font-medium">Sign In</button>
          <div className="">
            <button className="relative px-2 font-bold py-1 border-[1.5px] border-[#A31D1D] overflow-hidden transition-colors duration-600 hover:text-white group">
              Request
              <span className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="absolute top-1/2 left-1/2 w-22 h-15 -translate-x-1/2 -translate-y-1/2 bg-[#A31D1D] rounded-full scale-0 opacity-0 -z-10 group-hover:scale-100 group-hover:opacity-100 transition-all duration-600 ease-out"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
