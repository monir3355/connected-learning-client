import React from "react";
import location from "../../assets/images/contact/contactIcon/Group 121.png";
import contact1 from "../../assets/images/contact/contactIcon/Group 122.png";
import contact2 from "../../assets/images/contact/contactIcon/Group 124.png";
import contact from "../../assets/images/contact/contact.png";
import AnyQuestion from "./AnyQuestion";

const OurCompany = () => {
  return (
    <div className="Container py-16">
      <div className="space-y-3 text-center">
        <h6 className="text-blue-600 font-semibold text-xl">Team Member</h6>
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Our Company <br />
          Contact Now
        </h2>
      </div>
      <div className="mt-16 flex flex-col-reverse md:flex-row justify-center items-center gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Get In Touch With Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt.
          </p>
          <div className="space-y-4">
            <div className="flex justify-start items-center gap-6">
              <img className="w-12 h-12" src={location} alt="" />
              <div className="space-y-2">
                <p className="text-xl font-semibold">Our Address</p>
                <p>
                  2972 Westheimer Rd. Santa Ana, <br /> Illinois 8585
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-6">
              <img className="w-12 h-12" src={contact1} alt="" />
              <div className="space-y-2">
                <p className="text-xl font-semibold">Contact Information</p>
                <p>
                  Mobile: +8825465456 <br />
                  Email: example@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-6">
              <img className="w-12 h-12" src={contact2} alt="" />
              <div className="space-y-2">
                <p className="text-xl font-semibold">Contact Information</p>
                <p>
                  Mobile: +8825465456 <br />
                  Email: example@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={contact} alt="" />
        </div>
      </div>
      <AnyQuestion />
    </div>
  );
};

export default OurCompany;
