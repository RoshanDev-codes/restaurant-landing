import React, { useEffect, useRef } from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../components/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const Chef = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -90, rotate: 5, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          rotate: -7,
          ease: "power1",
          duration: 0.6,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            gsap.to(imgRef.current, {
              ease: "power1",
              duration: 2,
              rotate: 0,
            });
          },
        }
      );
    }, imgRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(
        sectionRef.current.querySelectorAll("h1,img,p,.sub-heading")
      );

      elems.forEach((el) => {
        gsap.fromTo(
          el,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1.5,
            stagger: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert;
  });

  return (
    <div className="flex max-[900px]:flex-col justify-between items-center gap-8 max-[900px]:gap-20 section__padding app__bg">
      <div
        ref={imgRef}
        className="flex-1 w-full flex justify-start min-[900px]:ml-[2rem] items-center"
      >
        <img
          src={images.chef}
          alt="chef image"
          className="w-[80%] max-[900px]:w-full"
        />
      </div>

      <div ref={sectionRef} className="flex-1 flex flex-col gap-7">
        <div className="sub-heading">
          <SubHeading title="Chef's word" />
        </div>

        <h1 className="headtext__cormorant font-bold tracking-wider">
          What we believe in
        </h1>

        <div className="flex justify-start items-end mt-[3rem]">
          <img
            src={images.quote}
            alt="quote image"
            className="w-[47px] h-[40px] mr-[1rem] mb-[1rem]"
          />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="-mt-[1.8rem] p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>

        <div className="mt-5">
          <p className="text-golden-var font-base text-[30px] tracking-wider">
            Kevin Luo
          </p>
          <p className="p__opensans">Chef & Founder</p>
        </div>

        <div className="mt-4">
          <img src={images.sign} alt="sign image" className="w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
