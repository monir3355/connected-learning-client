import React, { useEffect, useRef } from "react";
import { FaGreaterThan } from "react-icons/fa";

const Banner = ({ children, img }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black"></div>
      <img
        className="w-full h-[400px] lg:h-[600px]"
        src={img}
        alt="Background Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl lg:text-4xl font-bold flex items-center justify-center">
          Home <FaGreaterThan />{" "}
          <span className="text-blue-600">{children}</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
