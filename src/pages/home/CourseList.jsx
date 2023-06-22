import React, { useEffect, useState } from "react";
import CourseCard from "../course/CourseCard";
import { FaArrowRight } from "react-icons/fa";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState(true);
  useEffect(() => {
    fetch("https://connected-learning-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <div className="bg-[#edeef3]">
      <div className="Container py-16">
        <div className="space-y-3">
          <h6 className="text-blue-600 font-semibold text-xl">Course List</h6>
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Find your Perfect <br />
            Course
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {courses?.slice(0, view ? 6 : courses.length).map((course) => (
            <CourseCard course={course} key={course._id}></CourseCard>
          ))}
        </div>
        <div className="mt-14">
          {view && (
            <button
              onClick={() => setView(!view)}
              className="button-primary flex items-center mx-auto"
            >
              View All <FaArrowRight className="ml-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
