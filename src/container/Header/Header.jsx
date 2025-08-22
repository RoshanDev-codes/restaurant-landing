import React, { useEffect, useRef } from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import gsap from "gsap";

const Header = () => {
  const textRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.2,
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          y: -100,
          rotate: 25,
          scale: 1.25,
        },
        {
          rotate: 0,
          y: 0,
          scale: 1,
          ease: "back.out",
          duration: 2,
        }
      );
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="home"
      className="relative z-0 section__padding bg-black-var min-h-screen flex max-[1150px]:flex-col min-[1150px]:gap-10 justify-between items-center"
    >
      <div className="flex-1 -mt-[2rem] flex flex-col min-[1150px]:gap-5 gap-2 justify-center items-start max-[1150px]:pt-0">
        <div className="max-sm:mb-1" ref={(el) => (textRef.current[0] = el)}>
          <SubHeading title="Chase the new flavour" />
        </div>

        <h1
          ref={(el) => (textRef.current[1] = el)}
          className="text-[92px] max-[1150px]:text-[50px] font-base text-golden-var font-semibold leading-[110px] max-[1150px]:leading-[60px] tracking-wide"
        >
          The Key To Fine Dining
        </h1>

        <p
          ref={(el) => (textRef.current[2] = el)}
          className="p__opensans max-[1150px]:mt-4 mb-4"
        >
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <button
          ref={(el) => (textRef.current[4] = el)}
          type="button"
          className="custom__button mt-2"
        >
          Explore More
        </button>
      </div>

      <div className="flex-1 -mt-[2rem] flex justify-center items-center max-[1150px]:pt-12">
        <img
          ref={imageRef}
          src={images.welcome}
          alt="hero image"
          className="w-[80%] max-[1150px]:w-[60%] mb-10"
        />
      </div>
    </header>
  );
};

export default Header;
