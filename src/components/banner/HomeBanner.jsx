import React from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/homeBanner.png";
import dribbleImg from "../../assets/images/media/dribble.png";
import googleImg from "../../assets/images/media/google.png";
import latticeImg from "../../assets/images/media/lattice.png";
import microImg from "../../assets/images/media/micro.png";

const HomeBanner = () => {
  return (
    <div className="bg-[#edeef3] py-16">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 Container">
        <div className="md:w-1/2 space-y-6 px-2 md:px-0">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl">
            For Every Student <br />
            Every Classroom. <br />
            <span className="text-blue-600">Real Results.</span>
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a
            completeLorem ipsum dolor sit amet, consectetur adipi scing elit,
            sed do eiusm
          </p>
          <div className="flex gap-6">
            <Link>
              <button className="button-primary">Get Started</button>
            </Link>
            <button className="flex justify-center items-center gap-2">
              <div className="bg-white p-2 rounded-full border-l-4 border-blue-600">
                <FaVideo className="w-6 h-6 text-blue-600" />
              </div>{" "}
              Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img className="w-5/6 mx-auto" src={bannerImg} alt="" />
        </div>
      </div>
      <div className="w-11/12 flex justify-between items-center bg-white container mx-auto pr-6 py-4 mt-6">
        <img className="h-10 lg:h-20" src={dribbleImg} alt="" />
        <img className="h-10 lg:h-28" src={googleImg} alt="" />
        <img className="h-10 lg:h-20" src={latticeImg} alt="" />
        <img className="h-4 lg:h-8 " src={microImg} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
