import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div
      id="contact"
      style={{ paddingBottom: 120 }}
      className="text-white app__bg section__padding"
    >
      <div className="flex max-[1150px]:flex-col max-[1150px]:gap-20 justify-between px-[3rem]">
        <div className="flex-1 flex flex-col items-center text-center gap-2">
          <h1 className="font-serif text-3xl text-golden-var font-medium">
            Contact Us
          </h1>
          <div className="p__opensans">
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-555-1230</p>
            <p>+1 212-344-1230</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="flex justify-center items-center">
            <img
              src={images.gericht}
              alt="gericht image"
              className="w-[180px]"
            />
          </div>

          <p className="p__opensans text-center mt-[0.8rem] max-w-[500px]">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img src={images.spoon} alt=" spoon image" className="mt-4" />

          <div className="flex text-3xl mt-4 gap-4">
            <FiTwitter />
            <FiFacebook />
            <FiInstagram />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center text-center gap-2">
          <h1 className="font-serif text-3xl text-golden-var font-medium">
            Working Hours
          </h1>
          <div className="p__opensans">
            <p>Monday-Friday:</p>
            <p>08:00 am - 12:00 am</p>
          </div>

          <div className="p__opensans">
            <p>Saturday-Sunday:</p>
            <p>07:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>

      <div className="mt-[2.8rem] max-[1150px]:mt-[6rem]">
        <p className="text-center p__opensans">
          2021 Gericht. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
