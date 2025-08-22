import React, { useEffect, useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import hotelMusic from "../../constants/music";

const Intro = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const audioRef = useRef(null);

  const handleVideoClick = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.5, opacity: 0 },
        {
          opacity: 1,
          width: "100vw",
          height: "100vh",
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom+=200",
            onEnter: () => {
              gsap.fromTo(
                controlsRef.current,
                { opacity: 0, scale: 0 },
                {
                  opacity: 1,
                  scale: 1,
                  delay: 1.3,
                  duration: 2.5,
                  ease: "power1",
                }
              );
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isVideoPlaying) {
      videoRef.current.play();
      audioRef.current.play();
    } else {
      videoRef.current.pause();
      audioRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div id="intro" className="relative h-screen w-screen overflow-hidden  ">
      <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">
        <div
          ref={containerRef}
          onClick={handleVideoClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-lg overflow-hidden"
        >
          <video
            src={meal}
            id="video"
            ref={videoRef}
            loop
            autoPlay
            muted
            controls={false}
            className="object-cover origin-center object-center w-full h-full"
          />
          <audio src={hotelMusic} ref={audioRef} loop className="hidden" />
        </div>

        <div
          onClick={handleVideoClick}
          className="absolute bg-black inset-0 flex justify-center items-center bg-opacity-35"
        >
          <div
            ref={controlsRef}
            className="w-[100px] h-[100px] border rounded-full flex justify-center items-center"
          >
            {isVideoPlaying ? (
              <BsFillPlayFill color="#fff" fontSize={40} />
            ) : (
              <BsPauseFill color="#fff" fontSize={40} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
