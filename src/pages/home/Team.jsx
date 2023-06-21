import React from "react";
import team1 from "../../assets/images/popular/popu1.png";
import team2 from "../../assets/images/popular/popu2.png";
import team3 from "../../assets/images/popular/popu3.png";
import team4 from "../../assets/images/popular/popu4.png";

const Team = () => {
  return (
    <div className="bg-[#edeef3]">
      <div className="Container py-16">
        <div className="space-y-3 text-center">
          <h6 className="text-blue-600 font-semibold text-xl">Team Member</h6>
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Popular Professional <br />
            Teachers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="relative">
            <img className="rounded-lg w-full" src={team1} alt="" />
            <div className="absolute bottom-0 right-0 left-0 rounded-b-lg py-10 bg-blue-600 text-white space-y-3">
              <h2 className="text-center text-xl font-semibold">
                Pushpa Kanon
              </h2>
              <p className="text-center">CEO, derhab</p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg w-full" src={team2} alt="" />
            <div className="absolute bottom-0 right-0 left-0 rounded-b-lg py-10 bg-blue-600 text-white space-y-3">
              <h2 className="text-center text-xl font-semibold">
                Pushpa Kanon
              </h2>
              <p className="text-center">CEO, derhab</p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg w-full" src={team3} alt="" />
            <div className="absolute bottom-0 right-0 left-0 rounded-b-lg py-10 bg-blue-600 text-white space-y-3">
              <h2 className="text-center text-xl font-semibold">
                Pushpa Kanon
              </h2>
              <p className="text-center">CEO, derhab</p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg w-full" src={team4} alt="" />
            <div className="absolute bottom-0 right-0 left-0 rounded-b-lg py-10 bg-blue-600 text-white space-y-3">
              <h2 className="text-center text-xl font-semibold">
                Pushpa Kanon
              </h2>
              <p className="text-center">CEO, derhab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
