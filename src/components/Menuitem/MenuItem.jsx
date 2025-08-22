import React from "react";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p style={{ color: "#DCCA87" }} className="flex-1 p__cormorant">
          {title}
        </p>
        <div className="grey-line mx-[1rem] w-[90px] h-[1px] bg-grey-var" />
        <p className="p__cormorant">{price}</p>
      </div>

      <div className="mt-1">
        <p style={{ color: "#AAAAAA" }} className="p__opensans">
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
