import React from "react";
import Banner from "../../components/banner/Banner";
import aboutImg from "../../assets/images/page img/about.png";
import WhyUs from "./WhyUs";
import OurMission from "./OurMission";
import TeamMember from "./TeamMember";

const About = () => {
  return (
    <div>
      <Banner img={aboutImg}>About Us</Banner>
      <WhyUs />
      <OurMission />
      <TeamMember />
    </div>
  );
};

export default About;
