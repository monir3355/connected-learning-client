import React, { useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import sellerImg from "../../assets/images/best.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CourseCard = ({ course }) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, class_name, image, price, rating, details } = course;
  const handleBook = (course) => {
    setDisabled(true);
    if (!user) {
      navigate("/login");
      return;
    }
    // console.log(course._id);
    const bookCourse = {
      bookingId: _id,
      class_name,
      image,
      price,
      rating,
      details,
    };
    fetch("https://connected-learning-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully booking your Course",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

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
          <button
            onClick={() => handleBook(course)}
            disabled={disabled}
            className="btn btn-sm px-8 py-1 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
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
