import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import testimonialImg from "../../assets/images/testimonial/Rectangle 28.png";

const Testimonial = () => {
  return (
    <div>
      <div className="Container py-16 flex flex-col md:flex-row gap-12">
        <div className="space-y-6 md:w-1/3">
          <h6 className="text-blue-600 font-semibold xl">Testimonial</h6>
          <h2 className="text-3xl lg:text-5xl font-semibold">What They Say?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in repreh
          </p>
          <p>
            enderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button className="button-outline w-80 flex justify-between items-center relative">
            Write your Assessment <FaArrowRight className="absolute right-4" />{" "}
          </button>
        </div>
        <div className="md:w-2/3 h-[420px] sm:h-[520px]">
          <div className="w-2/3 z-10 relative">
            <img className="" src={testimonialImg} alt="" />
            <div className="w-72 border-l-4 border-blue-600 p-4 space-y-3 bg-[#edeef3] z-30 absolute left-32 lg:left-60 -bottom-40 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor
                in repreh
              </p>
              <p className="flex justify-between">
                <span className="font-bold">Ruksana Akter</span>
                <span className="text-yellow-500 flex items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-[#edeef3]"></div>
    </div>
  );
};

export default Testimonial;
