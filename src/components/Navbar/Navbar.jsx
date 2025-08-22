import React, { useEffect, useRef, useState } from "react";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = ["Home", "About", "Menu", "Intro", "Contact"];

  const navContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navContainerRef.current,
      { opacity: 0 },
      { opacity: 1, ease: "power1", duration: 1 }
    );
  }, []);

  return (
    <nav
      ref={navContainerRef}
      className="bg-black-var border-none inset-x-0 top-4 z-20 transition-all ease-linear duration-200 flex justify-between items-center px-[2rem] py-[1rem]"
    >
      <div>
        <img
          src={images.gericht}
          alt="nav logo"
          className="w-[140px] sm:w-[150px] lg:w-[200px]"
        />
      </div>

      <ul className="flex-1 flex justify-center items-center gap-8 hover:text-grey-var max-[1150px]:hidden">
        {navItems.map((item, index) => (
          <li className="p__opensans hover:text-grey-var" key={index}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="p__opensans lg:mr-10 flex gap-4 max-sm:hidden">
        0<a href="#login">Login / Registration</a>
        <div className="w-[1px] h-[30px] bg-grey-var" />
        <a href="/">Book Table</a>
      </div>

      <div className="hidden max-[1150px]:block">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="top-0 z-30 left-0 w-full inset-0 bottom-0 fixed min-h-screen bg-black-var flex slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="text-golden-var absolute top-6 right-8 scale-125"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="flex-1 flex flex-col justify-center items-center gap-8 hover:text-grey-var">
              {navItems.map((item, index) => (
                <li
                  className="font-base text-golden-var text-[30px] hover:text-white-var"
                  key={index}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setToggleMenu(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
