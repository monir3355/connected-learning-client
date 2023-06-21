import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-[#edeef3] py-16">
      <h6 className="font-semibold text-3xl mb-8 text-center">
        Please Sign Up
      </h6>
      <div className="px-4 md:px-0">
        <div className="md:w-5/6 bg-white p-6 md:p-12 mx-auto rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="YourName">Your Name</label>
                  </div>
                  <input
                    type="text"
                    name="YourName"
                    className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                    placeholder="Type your name here"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">
                      <small>Name is required</small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="EmailAddress">Email Address</label>
                  </div>
                  <input
                    type="email"
                    name="emailAddress"
                    className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                    placeholder="Type your email here"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      <small>Email is required</small>
                    </span>
                  )}
                </div>
              </div>
              {/*Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 15,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-3 cursor-pointer"
                    />
                  </div>
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">
                      <small>Password is required</small>
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 6 or More Password</small>
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 15 or less Password</small>
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      <small>
                        Please Enter one uppercase, one lowercase, one number &
                        special character{" "}
                      </small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="Password">Confirm Password</label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="Confirm password"
                      className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        minLength: 6,
                        maxLength: 15,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-3 cursor-pointer"
                    />
                  </div>
                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-red-600">
                      <small>Confirm Password is required</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 6 or More Password</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "maxLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 15 or less Password</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "pattern" && (
                    <span className="text-red-600">
                      <small>
                        Please Enter one uppercase, one lowercase, one number &
                        special character{" "}
                      </small>
                    </span>
                  )}
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="EmailAddress">Phone Number</label>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                    placeholder="Type your phone number here"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-600">
                      <small>Phone is required</small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="PhotoURL">Photo URL</label>
                  </div>
                  <input
                    type="url"
                    name="Photo"
                    className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                    placeholder="Enter Your Photo URL here"
                    {...register("photo", { required: true })}
                  />
                  {errors.photo && (
                    <span className="text-red-600">
                      <small>Photo URL is required</small>
                    </span>
                  )}
                </div>
              </div>
              {/* terms and privacy policy. */}
              <div className="flex items-center mb-4">
                <input
                  onClick={() => setDisabled(!disabled)}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Accept <span className="text-red-500">terms</span> and{" "}
                  <span className="text-red-500">privacy policy</span>.
                </label>
              </div>
              {/* Button */}
              <div>
                <input
                  value="Sign Up"
                  type="submit"
                  className="btn button-primary"
                  disabled={disabled}
                />
              </div>
            </div>
          </form>
          <div className="space-y-3 my-0 py-0 mt-4 mb-4">
            <p>
              Already have an account{" "}
              <Link to="/login" className="link link-hover text-blue-500">
                Login
              </Link>
            </p>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
