import React from "react";
import aboutImg from "../../assets/images/digital/digital1.png";
import aboutRectangle from "../../assets/images/digital/digital3.png";
import aboutImg2 from "../../assets/images/digital/digital2.png";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 Container">
      <div className="h-80 sm:h-96">
        <div className="relative">
          <img
            className="w-5/6 z-30 absolute right-12 top-4"
            src={aboutImg}
            alt=""
          />
          <img
            className="w-5/6 left-0 top-14 absolute"
            src={aboutRectangle}
            alt=""
          />
          <img
            className="w-2/6 absolute right-0 -top-4"
            src={aboutImg2}
            alt=""
          />
        </div>
      </div>
      <div className="space-y-3">
        <h6 className="text-blue-600 font-semibold">About Us</h6>
        <h2 className="text-4xl lg:text-6xl font-semibold ">
          We are providing the best online digital courses.
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
      </div>
    </div>
  );
};

export default AboutUs;
