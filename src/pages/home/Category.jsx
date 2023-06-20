import React from "react";
import icon2 from "../../assets/images/icon/Mask group-1.png";
import icon3 from "../../assets/images/icon/Mask group-2.png";
import icon4 from "../../assets/images/icon/Mask group-3.png";
import icon5 from "../../assets/images/icon/Mask group-4.png";
import icon6 from "../../assets/images/icon/Mask group-5.png";
import icon7 from "../../assets/images/icon/Mask group-6.png";
import icon8 from "../../assets/images/icon/Mask group.png";
import icon9 from "../../assets/images/icon/Mask group.svg";

const Category = () => {
  return (
    <div className="Container py-16">
      <div className="space-y-3">
        <h6 className="text-blue-600 font-semibold xl">Service</h6>
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Top <br />
          Categories
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon9} alt="" />
          <h4 className="text-lg font-semibold">Development</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon8} alt="" />
          <h4 className="text-lg font-semibold">Development</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon7} alt="" />
          <h4 className="text-lg font-semibold">Graphics Design</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon6} alt="" />
          <h4 className="text-lg font-semibold">Photography</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon5} alt="" />
          <h4 className="text-lg font-semibold">Marketing</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon4} alt="" />
          <h4 className="text-lg font-semibold">UI Design</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon3} alt="" />
          <h4 className="text-lg font-semibold">IT and Software</h4>
        </div>
        <div className="bg-[#edeef3] hover:text-white cursor-pointer hover:bg-blue-600 space-y-3 rounded-md py-10 text-center">
          <img className="mx-auto" src={icon2} alt="" />
          <h4 className="text-lg font-semibold">Business</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
