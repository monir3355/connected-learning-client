import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import sellerImg from "../../assets/images/best.png";

const CourseCard = ({ course }) => {
  const { class_name, image, price, rating } = course;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-6">
        <img src={image} alt="Course" />
      </figure>
      <div className="px-6 space-y-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{class_name}</h2>
          <div>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaStar className="text-yellow-500" />}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="text-blue-600 text-xl font-semibold">${price}</h2>
          <button className="px-8 py-1 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
            Book Now
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-2 rounded-full bg-blue-200">
            <img src={sellerImg} />
          </div>
          <p className="text-lg text-blue-600">Best Seller</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
