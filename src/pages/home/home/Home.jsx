import React from "react";
import HomeBanner from "../../../components/banner/HomeBanner";
import AboutUs from "../AboutUs";
import Category from "../Category";
import Team from "../Team";
import Testimonial from "../Testimonial";
import CourseList from "../CourseList";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <CourseList />
      <Category />
      <Team />
      <Testimonial />
    </div>
  );
};

export default Home;
