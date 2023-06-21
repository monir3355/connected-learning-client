import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-[#edeef3] py-16 px-4 md:px-0">
      <h6 className="font-semibold text-3xl mb-8 text-center">Please Login</h6>
      <div className="md:w-1/2 bg-white p-6 md:p-12 mx-auto rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Row 1 */}
            <div className="space-y-4">
              <div className="space-y-2">
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
              <div className="space-y-2">
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
              </div>
            </div>
            {/* Button */}
            <div>
              <input
                value="Login"
                type="submit"
                className="btn button-primary"
              />
            </div>
          </div>
        </form>
        <div className="space-y-3 my-0 py-0 mt-4">
          <p>
            Don't have an account{" "}
            <Link to="/signup" className="link link-hover text-blue-500">
              Sign Up
            </Link>
          </p>
          <p className="text-red-500">{error}</p>
          <p className="text-green-700">{success}</p>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
