import React, { useEffect, useRef } from "react";
import images from "../../constants/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const knifeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(
        sectionRef.current.querySelectorAll("p,h1,img,button")
      );

      elems.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
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
      gsap.to(knifeRef.current, {
        duration: 2,
        rotate: 180,
        ease: "elastic.out(1, 4)",
        scrollTrigger: {
          trigger: knifeRef.current,
          start: "center 55%",
          toggleActions: "play none none reverse",
        },
      });
    }, knifeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="relative section__padding app__bg">
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={images.G} alt="g image" className="w-[391px] h-[415px] z-0" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 flex max-[900px]:flex-col gap-16 items-center"
      >
        <div className="flex-1 flex flex-col justify-end items-end gap-8 text-right">
          <div className="flex flex-col items-end">
            <h1 className="headtext__cormorant font-bold">About Us</h1>
            <img src={images.spoon} alt="spoon image" />
          </div>
          <p style={{ color: "#AAAAAA" }} className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>

          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="">
          <img
            ref={knifeRef}
            src={images.knife}
            alt="knife-image"
            className="h-[910px] opacity-1 max-[1150px]:h-[700px] max-sm:h-[500px]"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="">
            <h1 className="headtext__cormorant font-bold">Our History</h1>
            <img src={images.spoon} alt="spoon image" className="" />
          </div>
          <p style={{ color: "#AAAAAA" }} className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
