import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const animatedTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        animatedTitleRef.current.querySelectorAll(".letter"),
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.inOut",
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: animatedTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, animatedTitleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={animatedTitleRef} className={`${containerClass}`}>
      {title.split(" ").map((word, index) => (
        <span key={index} className="mr-3 word">
          {word.split("").map((letter, index) => (
            <span
              key={index}
              className={`font-inherit inline-block ${containerClass} letter`}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
