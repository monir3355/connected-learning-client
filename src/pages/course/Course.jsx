import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import courseImg from "../../assets/images/page img/course.png";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  // console.log(courses);
  return (
    <div className="bg-[#edeef3]">
      <Banner img={courseImg}>Course</Banner>
      <div className="Container py-16">
        <div className="space-y-3 text-center">
          <h6 className="text-blue-600 font-semibold text-xl">Course List</h6>
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Our Online <br />
            Course
          </h2>
        </div>
        <div className="mt-6">
          <Link to="/addCourse">
            <button className="button-primary">Add a Course</button>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {courses?.map((course) => (
              <CourseCard course={course} key={course._id}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
