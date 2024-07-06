import React from "react";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import { logo } from "../assets/index.js"
import { PageConstants } from "../constants.js";

const NavBar = () => {

  const component = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("nav div, div a", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: .25
      })
    }, { scope: component }
  )


  return (
    <React.Fragment>
      <nav className="fixed left-0 top-0 w-full h-[108px] bg-white py-5 px-12 flex items-center justify-between gap-[102px]" ref={component}>
        <div className="absolute text-sm roboto-medium text-red-600 top-0 left-0 tracking-tighter">
          Please view of 1440 X 900 display cause developed as per figma file
        </div>
        <div className="w-32 pl-6 bg-white flex items-center justify-center gap-[5px]">
          <img src={logo} alt="logo" height={"64px"} width={"67px"} className="object-contain"/>
          <h2 className="first-letter:text-[#ffaa00] text-3xl roboto-bold text-[#ffe55e] ">Glocal</h2>
        </div>
        <div className="w-100 flex-grow flex items-center justify-center gap-10">
          {PageConstants.map((item, index) => (
            <a href={`#${item.label}`} key={index} className="w-full capitalize hover:cursor-pointer roboto-medium">
              {item.label}
            </a>
          ))}
        </div>
        <div className="w-fit bg-white flex items-center justify-between gap-10">
          <div className="w-36 h-[48px] bg-[#124c5f] rounded-md text-center content-center text-white roboto-medium">Sign In</div>
          <div className="w-36 h-[48px] bg-[#c7e7e1] rounded-md text-center content-center text-[#124c5f] roboto-medium">Register</div>
        </div>
      </nav>
      <div className="bgProps fixed -z-[999] top-[102px] w-full h-[695px] p-0"></div>
    </React.Fragment>
  );
};

export default NavBar;
