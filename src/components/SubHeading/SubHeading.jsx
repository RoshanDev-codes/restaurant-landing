import React from "react";
import images from "../../constants/images";

const SubHeading = ({ title, containerClass }) => {
  return (
    <div>
      <p className="p__cormorant">{title}</p>
      <img
        src={images.spoon}
        alt="spoon image"
        className={`scale-125 ${containerClass}`}
      />
    </div>
  );
};

export default SubHeading;
