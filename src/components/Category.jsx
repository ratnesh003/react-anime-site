import React from "react";
import { useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

import { cn } from "../../lib/utils.js";

import {
  category1,
  category2,
  category3,
  category4,
  logo,
} from "../assets/index.js";

import { data } from "../constants.js";

const Category = () => {
  const component = useRef(null);
  const tl = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: component.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: self => {
          setCurrentTime(self.progress * tl.current.duration());
        }
      },
    });

    tl.current
      .to(
        ".parent",
        {
          opacity: 1,
          duration: 0.5,
        },
        "frame1"
      )
      .to(
        "#category1",
        {
          opacity: 1,
          duration: 2,
        },
        "frame1"
      )
      .from(
        ".navList",
        {
          opacity: 1,
          x: -40,
          duration: 2,
        },
        "frame1"
      )
      .from(
        ".cat1",
        {
          opacity: 0,
          x: 340,
          duration: 2,
        },
        "frame1"
      )
      .to(
        "#category1",
        {
          opacity: 0,
          duration: 2,
        },
        "frame2"
      )
      .to(
        "#category2",
        {
          opacity: 1,
          delay: 1,
          duration: 2,
        },
        "frame2"
      )
      .to(
        ".cat1",
        {
          opacity: 0,
          x: 340,
          y: 500,
          duration: 2,
        },
        "frame2"
      )
      .from(
        ".cat2",
        {
          opacity: 0,
          x: 340,
          y: -500,
          delay: 1,
          duration: 2,
        },
        "frame2"
      )
      .to(
        "#category2",
        {
          opacity: 0,
          duration: 2,
        },
        "frame3"
      )
      .to(
        "#category3",
        {
          opacity: 1,
          delay: 1,
          duration: 2,
        },
        "frame3"
      )
      .to(
        ".cat2",
        {
          opacity: 0,
          x: 340,
          y: 500,
          duration: 2,
        },
        "frame3"
      )
      .from(
        ".cat3",
        {
          opacity: 0,
          x: 340,
          y: -500,
          delay: 1,
          duration: 2,
        },
        "frame3"
      )
      .to(
        "#category3",
        {
          opacity: 0,
          duration: 2,
        },
        "frame4"
      )
      .to(
        "#category4",
        {
          opacity: 1,
          delay: 1,
          duration: 2,
        },
        "frame4"
      )
      .to(
        ".cat3",
        {
          opacity: 0,
          x: 340,
          y: 500,
          duration: 2,
        },
        "frame4"
      )
      .from(
        ".cat4",
        {
          opacity: 0,
          x: 340,
          y: -500,
          delay: 1,
          duration: 2,
        },
        "frame4"
      )

      tl.current.eventCallback("onUpdate", () => {
        setCurrentTime(tl.current.time());
      });
  });

  const goToPoint = (time) => {
    if (tl.current) {
      tl.current.seek(time);
      setCurrentTime(time);
    }
  };

  return (
    <div
      id="category"
      className="h-[3000px] bg-transparent w-full scroll-smooth"
      ref={component}
    >
      <div className="parent fixed top-0 left-0 w-full h-[900px] opacity-0">
        <div className="navList absolute flex items-center justify-between gap-3 w-[694px] left-14 top-[576px]">
          {data.map((item, idx) => (
            <a
              key={idx}
              id={idx}
              href={`#${item.id}`}
              onClick={() => goToPoint(item.pointOfTime)}
              className={cn(
                "flex items-center justify-between gap-[3px] w-fit rounded-md px-1 duration-500",
                (currentTime + currentTime*.2 >= item.pointOfTime && currentTime - currentTime*.2 <= item.pointOfTime) ? "bg-[#124c5f] text-white":" bg-transparent text-black"
              )}
            >
              <img
                src={logo}
                alt="logo"
                height={40}
                width={39}
                className="object-contain"
              />
              <h2 className="text-xl roboto-bold w-full">{item.label}</h2>
            </a>
          ))}
        </div>

        <h1 className="playfair-display-font text-[40px] tracking-wider absolute top-[125px] left-[107px]">
          Categories
        </h1>
        {data.map((item, idx) => (
          <div
            key={idx}
            className="absolute w-[667px] top-[260px] left-[107px] flex flex-col gap-[14px] items-start justify-between opacity-0"
            id={item.id}
          >
            <h2 className="roboto-bold text-2xl tracking-wider">
              {item.label}
            </h2>
            <p className="text-2xl roboto-regular tracking-wider">
              {item.content}
            </p>
            <div className="w-36 h-[48px] bg-[#c7e7e1] rounded-md text-center content-center text-[#124c5f] roboto-medium text-base">
              Get Started
            </div>
          </div>
        ))}

        <img src={category1} height={683} width={683} alt="image 1" className="cat1 absolute top-[151.52px] left-[738px]" />
        <img src={category2} height={683} width={683} alt="image 2" className="cat2 absolute top-[151.52px] left-[738px]" />
        <img src={category3} height={683} width={683} alt="image 3" className="cat3 absolute top-[151.52px] left-[738px]" />
        <img src={category4} height={683} width={683} alt="image 4" className="cat4 absolute top-[151.52px] left-[738px]" />
      </div>
    </div>
  );
};

export default Category;
