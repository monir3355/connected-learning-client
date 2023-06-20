import React from "react";
import expImg1 from "../../assets/images/about/experience/experience (3) 1.png";
import expImg2 from "../../assets/images/about/experience/tag 1.png";
import expImg3 from "../../assets/images/about/experience/united 1.png";

const WhyUs = () => {
  return (
    <div className="bg-[#edeef3]">
      <div className="Container py-24 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl lg:text-5xl font-semibold">Why Us?</h2>
          <p className="md:w-1/2 mx-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roo piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Ri chard McClintock, a Latin profes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          <div className="space-y-4">
            <img className="mx-auto" src={expImg3} alt="" />
            <h4 className="font-bold text-xl">Dedicated Team</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roopiece of classical Latin liter ature from 45 BC, making
              it over 2000 years old. Ri chard McClintock, a Latin profes
            </p>
          </div>
          <div className="space-y-4">
            <img className="mx-auto" src={expImg2} alt="" />
            <h4 className="font-bold text-xl">Flexible Pricing</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roopiece of classical Latin liter ature from 45 BC, making
              it over 2000 years old. Ri chard McClintock, a Latin profes
            </p>
          </div>
          <div className="space-y-4">
            <img className="mx-auto" src={expImg1} alt="" />
            <h4 className="font-bold text-xl">Great Experience</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roopiece of classical Latin liter ature from 45 BC, making
              it over 2000 years old. Ri chard McClintock, a Latin profes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
