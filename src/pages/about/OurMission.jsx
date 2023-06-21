import React from "react";
import missionImg from "../../assets/images/about/mission.png";

const OurMission = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-20 Container my-20">
      <div className="space-y-5 md:w-1/2">
        <h6 className="text-blue-600 font-semibold text-xl">Our Mission</h6>
        <h2 className="text-3xl lg:text-5xl font-semibold ">
          Build Better For Best Economy
        </h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roo piece of classical Latin literature from 45 BC, making it over
          2000 years old. Ri chard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, l ooked up one of the more obscure
          Latin words, consectetur, from a Lorem Ips um passage, and going
          through the cites of the word in classical literature, di scovered the
          undoubtable source
        </p>
        <p>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonoru et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on.
        </p>
        <button className="button-primary">Join Our Team</button>
      </div>
      <div className="md:w-1/2">
        <img className="" src={missionImg} alt="" />
        <div className="bg-white shadow-md inline-flex flex-col px-10 py-4 rounded-lg -mb-20">
          <p className="font-bold">MST: Alonker lon</p>
          <p className="text-blue-600">CEO,Education LTD</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
