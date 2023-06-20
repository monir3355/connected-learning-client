import React from "react";
import HomeBanner from "../../../components/banner/HomeBanner";
import AboutUs from "../AboutUs";
import Category from "../Category";
import Team from "../Team";
import Testimonial from "../Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <Category />
      <Team />
      <Testimonial />
    </div>
  );
};

export default Home;
