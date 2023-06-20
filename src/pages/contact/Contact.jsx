import React from "react";
import contactImg from "../../assets/images/page img/contact.png";
import Banner from "../../components/banner/Banner";
import OurCompany from "./OurCompany";

const Contact = () => {
  return (
    <div>
      <Banner img={contactImg}>Contact</Banner>
      <div className="bg-[#edeef3]">
        <OurCompany />
      </div>
    </div>
  );
};

export default Contact;
