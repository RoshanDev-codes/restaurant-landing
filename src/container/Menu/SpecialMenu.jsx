import React, { useEffect, useRef } from "react";
import { MenuItem, SubHeading } from "../../components";
import { images, data } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../components/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const SpecialMenu = () => {
  const sectionRef = useRef([]);
  const imgRef = useRef(null);
  const todayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elemsToday = gsap.utils.toArray(
        todayRef.current.querySelectorAll("h1,p,img")
      );

      elemsToday.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, todayRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(
        sectionRef.current.querySelectorAll("h1,p,button,.grey-line")
      );

      elems.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.3, y: 100 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "back.out(1,5)",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }, imgRef);

    return () => ctx.revert();
  });

  return (
    <div
      id="menu"
      className="section__padding bg-black-var flex flex-col justify-center items-center"
    >
      <div
        ref={todayRef}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <SubHeading
          title="Menu that fits your palatte"
          containerClass="mx-auto"
        />
        <h1 className="text-golden-var text-center text-[57px] tracking-wider font-base font-bold">
          Today's Special
        </h1>
      </div>

      <div
        ref={sectionRef}
        className="pt-[4rem] mt-[3rem] max-sm:mt-[0.5rem] w-full content-div flex max-[1150px]:flex-col max-[1150px]:gap-14 gap-10"
      >
        <div className="flex-1 z-10 relative">
          <div>
            <AnimatedTitle
              title="Wine & Beer"
              containerClass="font-base text-[#fdfaee] font-semibold text-[45px] tracking-wide text-center"
            />
          </div>

          <div>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} {...wine} />
            ))}
          </div>
        </div>

        <div
          ref={imgRef}
          className="-mt-[7rem] flex justify-center items-start"
        >
          <img
            src={images.menu}
            alt="menu image"
            className="w-[421px] h-[750px]"
          />
        </div>

        <div className="flex-1">
          <div>
            <AnimatedTitle
              title="Cocktails"
              containerClass="font-base text-[#fdfaee] font-semibold text-[45px] tracking-wide text-center"
            />
          </div>

          <div>
            {data.cocktails.map((cocktails, index) => (
              <MenuItem key={cocktails.title + index} {...cocktails} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
