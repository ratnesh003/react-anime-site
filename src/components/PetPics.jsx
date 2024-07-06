import React from "react";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

import { 
  image1, 
  image2, 
  image3, 
  image4, 
  image5 
} from "../assets/index.js";

const PetPics = () => {
  const component = useRef(null);

  useGSAP(
    () => {

      const load = gsap.timeline();

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      load.from(
        ".image1",
        {
          opacity: 0,
          scale: .5,
          duration: 2,
          ease: "power3.out",
          delay: 1,
        },
        "frame0"
      )
      load.from(
        ".image2",
        {
          opacity: 0,
          y: "200",
          x: "200",
          duration: 2,
          ease: "power3.out",
          delay: 1,
        },
        "frame0"
      )
      load.from(
        ".image3",
        {
          opacity: 0,
          y: "-200",
          x: "200",
          duration: 2,
          ease: "power3.out",
          delay: 1,
        },
        "frame0"
      )
      load.from(
        ".image4",
        {
          opacity: 0,
          y: "-200",
          x: "-200",
          duration: 2,
          ease: "power3.out",
          delay: 1,
        },
        "frame0"
      )
      load.from(
        ".image5",
        {
          opacity: 0,
          y: "200",
          x: "-200",
          duration: 2,
          ease: "power3.out",
          delay: 1,
        },
        "frame0"
      )
      tl.to(
        ".image3",
        {
          y: 52,
          duration: 2,
        },
        "frame1"
      )
        .to(
          ".image3",
          {
            x: -60,
            duration: 2,
          },
          "frame2"
        )
        .to(
          ".image3",
          {
            x: -161,
            y: 52,
            rotate: "5deg",
            duration: 2,
          },
          "frame3"
        )
        .to(
          ".image3",
          {
            x: -82,
            y: 354.99,
            rotate: "15.35deg",
            duration: 2,
          },
          "frame4"
        )
        .to(
          ".image3",
          {
            x: 284.95,
            y: 751,
            rotate: "15.35deg",
            duration: 2,
          },
          "frame5"
        )
        .to(
          ".image2",
          {
            y: -156,
            duration: 2,
          },
          "frame1"
        )
        .to(
          ".image2",
          {
            y: -136.97,
            x: -110.42,
            duration: 2,
            rotate: "-4.53deg",
          },
          "frame3"
        )
        .to(
          ".image2",
          {
            y: -183.41,
            x: -41.07,
            duration: 2,
            rotate: "10.28deg",
          },
          "frame4"
        )
        .to(
          ".image2",
          {
            y: 404,
            x: 257.4,
            duration: 2,
            rotate: "10.28deg",
          },
          "frame5"
        )
        .to(
          ".image1",
          {
            scaleY: 1.0879,
            scaleX: 1.0867,
            x: 5,
            duration: 2,
          },
          "frame3"
        )
        .to(
          ".image1",
          {
            y: 106.78,
            x: -345,
            rotate: -13.01,
            duration: 2,
          },
          "frame4"
        )
        .to(
          ".image1",
          {
            y: 1088.64,
            x: -867,
            rotate: -64.4,
            duration: 2,
          },
          "frame5"
        )
        .to(
          ".image4",
          {
            x: 55,
            duration: 2,
          },
          "frame2"
        )
        .to(
          ".image4",
          {
            x: 172.33,
            rotate: -7.36,
            duration: 2,
          },
          "frame3"
        )
        .to(
          ".image4",
          {
            x: 116.71,
            rotate: -1.36,
            duration: 2,
          },
          "frame4"
        )
        .to(
          ".image4",
          {
            x: -887,
            y: 1168.24,
            rotate: -1.36,
            duration: 2,
          },
          "frame5"
        )
        .to(
          ".image5",
          {
            y: -141,
            duration: 2,
          },
          "frame2"
        )
        .to(
          ".image5",
          {
            x: 120,
            rotate: 8.87,
            duration: 2,
          },
          "frame3"
        )
        .to(
          ".image5",
          {
            y: -255.95,
            x: 190,
            rotate: -6,
            duration: 2,
          },
          "frame4"
        )
        .to(
          ".image5",
          {
            y: 574.35,
            x: -558.53,
            rotate: -6,
            duration: 2,
          },
          "frame5"
        )
        .to(".parent", {
          opacity: 0,
          duration: .5,
        });
    },

    { scope: component }
  );

  return (
    <React.Fragment>
      <div
        id="home"
        className="h-[2000px] w-full -z-[50] scroll-smooth"
        ref={component}
      >
        <div className="parent fixed left-0 top-0 h-[900px] w-full -z-[50]">
          <img
            src={image1}
            className="image1 absolute h-[546px] w-[369px] top-[191px] left-[886px]"
          />
          <img
            src={image2}
            className="image2 absolute object-bottom object-cover -z-40 h-[327px] w-[317px] top-[566px] left-[1070px]"
          />
          <img
            src={image3}
            className="image3 absolute -z-30 h-[428px] w-[260px] top-[138px] left-[1187px]"
          />
          <img
            src={image4}
            className="image4 absolute -z-10 h-[324px] w-[261px] top-[190px] left-[695px]"
          />
          <img
            src={image5}
            className="image5 absolute -z-20 h-[364px] w-[273px] top-[514px] left-[750px]"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetPics;
