import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

navItems = ["Home", "About", "Menu", "Awards", "Contact"];



export default Header;

w-[391px] h-[415px]
 text-[64px]
h-[910px]"
text-[45px]
eading-[58.5px]

w-[410px]

DCCA87
ebe8dd


import React, { useEffect, useRef } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import gsap from "gsap";

const Header = () => {
  const textRef = useRef([]);
  const imgRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for text
      gsap.fromTo(
        textRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power1",
          duration: 1,
        }
      );

      gsap.fromTo(
        imgRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 1.5,
          rotate: 25,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "back.out",
          duration: 2,  
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="section__padding min-h-screen items-center flex max-[1150px]:flex-col w-screen">
      <div className="min-[1150px]:mt-[8rem] max-[1150px]:mt-[4rem] flex-1 flex flex-col gap-5 items-start justify-center">
        <div ref={(el) => (textRef.current[0] = el)}>
          <SubHeading title="Chase the new flavour" />
        </div>

        <h1
          ref={(el) => (textRef.current[1] = el)}
          className="font-base leading-[120px] tracking-wide font-bold text-[92px] max-[1150px]:text-[50px] max-[1150px]:leading-[70px]  text-golden-var"
        >
          The Key To Fine Dining
        </h1>
        <p
          ref={(el) => (textRef.current[2] = el)}
          className="p__opensans mt-2 mb-4"
        >
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <button
          ref={(el) => (textRef.current[3] = el)}
          type="button"
          className="custom__button"
        >
          Explore More
        </button>
      </div>

      <div className="min-[1150px]:mt-[8rem] flex-1 flex justify-center items-center">
        <div
          ref={circleRef}
          className="absolute w-[400px] h-[400px] rounded-full"
        ></div>
        <img
          ref={imgRef}
          src={images.welcome}
          alt="header img"
          className="w-[80%] max-[1150px]:w-[40%] max-sm:w-[60%]"
        />
      </div>
    </header>
  );
};

export default Header;

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
      const elements = gsap.utils.toArray(
        sectionRef.current.querySelectorAll("p,button,img,h1")
      );

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
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
        knifeRef.current,
        {
          y: -200,
          opacity: 0,
          scale: 0,
          rotate: -500,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          rotate: 0,
          ease: "elastic.out(1, 2)",
          scrollTrigger: {
            trigger: knifeRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, knifeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative app__bg section__padding ">
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={images.G} alt="g image" className="w-[391px] h-[415px] z-0" />
      </div>

      <div className="relative z-10 flex max-[900px]:flex-col gap-16 justify-center items-center">
        <div className="about-section z-10 flex-1 flex gap-8 flex-col justify-end text-end items-end">
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
            Read More
          </button>
        </div>

        <div ref={knifeRef} className="ml-[1rem]">
          <img
            src={images.knife}
            alt="knife image"
            className="h-[910px] max-sm:h-[600px]"
          />
        </div>

        <div className="about-section flex-1 flex flex-col gap-8 justify-start text-start items-start">
          <div className="flex flex-col items-start">
            <h1 className="headtext__cormorant font-bold">Our History</h1>
            <img src={images.spoon} alt="spoon image" />
          </div>

          <p style={{ color: "#AAAAAA" }} className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>

          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


import React, { useEffect, useRef } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import MenuItem from "../../components/Menuitem/MenuItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SpecialMenu = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".grey-line,p,button,img,h1")
      );

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
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

  return (
    <div
      ref={sectionRef}
      className="section__padding flex items-center justify-center flex-col max-sm:gap-10 gap-24"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <SubHeading
          title="Menu that fits your palatte"
          containerClass="mx-auto"
        />
        <h1 className="headtext__cormorant font-bold text-center">
          Today's Special
        </h1>
      </div>

      <div className="w-full flex max-[1150px]:flex-col gap-10">
        <div className="flex-1">
          <p className="text-center text-[45px] max-sm:text-[34px] font-base font-bold text-[#fffbec] tracking-wide leading-[100px]">
            Wine & Beer
          </p>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} {...wine} />
          ))}
        </div>

        <div className="w-[410px] max-[1150px]:w-full mt-12 flex justify-center items-center">
          <img
            src={images.menu}
            alt="menu image"
            className="w-full max-[1150px]:w-[410px]"
          />
        </div>

        <div className="flex-1">
          <p className="text-center text-[45px] max-sm:text-[34px] font-base font-bold text-[#fffbec] tracking-wider leading-[100px]">
            Cocktails
          </p>
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} {...cocktails} />
          ))}
        </div>
      </div>

      <div className="sm:-mt-4">
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;

import React from "react";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="text-white font-medium">
      <div className="flex mt-8 justify-between items-center">
        <p style={{ color: "#DCCA87" }} className="flex-1 p__cormorant">
          {title}
        </p>
        <div className="grey-line w-[90px] h-[1px] bg-grey-var mx-[1rem]" />
        <p className="p__cormorant">{price}</p>
      </div>
      <div>
        <p style={{ color: "#AAAAAA" }} className="p__opensans">
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;


import React from "react";
import images from "../../constants/images";

const SubHeading = ({ title, containerClass }) => {
  return (
    <div className="">
      <h1 className="p__cormorant">{title}</h1>
      <img src={images.spoon} alt="spoon" className={`${containerClass}`} />
    </div>
  );
};

export default SubHeading;


