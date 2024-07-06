import React from "react";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const IntroText = () => {
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
        ".largeText",
        {
          x: 1700,
          duration: 2,
          delay: 2,
        },
        "frame0"
      );
      tl.to(
        ".largeText",
        {
          x: -437,
          duration: 2,
        },
        "frame1"
      )
        .to(
          ".largeText",
          {
            x: -696,
            duration: 2,
          },
          "frame2"
        )
        .to(
          ".largeText",
          {
            x: -1420,
            duration: 2,
          },
          "frame3"
        )
        .from(
          ".smallText",
          {
            y: -40,
            opacity: 0,
            duration: 1,
            delay: 1,
          },
          "frame3"
        )
        .to(
          ".smallText",
          {
            y: 139,
            duration: 2,
            delay: 2,
          },
          "frame4"
        )
        .to(
          ".smallText",
          {
            y: 579,
            duration: 2,
          },
          "frame5"
        )
        .to(".smallText, .largeText", {
          opacity: 0,
          duration: 0.5,
        });
    },
    { scope: component }
  );

  return (
    <React.Fragment>
      <div
        ref={component}
        className=" fixed top-0 left-0 -z-[60] h-[2000px]  w-full"
      >
        <h1 className="largeText absolute top-[404px] left-[107px] text-8xl w-full playfair-display-font leading-[128px] h-32 tracking-wider">
          Taking care for your pets !
        </h1>
        <h1 className="smallText text-center absolute top-[342px] left-[165px] text-[40px] w-fit playfair-display-font leading-[54px] h-28 tracking-wider">
          Get various services personalized <br />
          for your pets like
        </h1>
      </div>
    </React.Fragment>
  );
};

export default IntroText;
