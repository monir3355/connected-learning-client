import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AnyQuestion = () => {
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Container py-16">
      <div className="space-y-3 text-center">
        <h6 className="text-blue-600 font-semibold text-xl">Contact Us</h6>
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Have Any Questions? <br />
          Let’s Talk!
        </h2>
      </div>
      <div>
        <div className="md:w-5/6 bg-white p-6 md:p-12 mx-auto rounded-lg mt-16">
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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 md:w-1/2">
                  <div>
                    <label htmlFor="subject">Subject</label>
                  </div>
                  <input
                    type="text"
                    name="Subject"
                    className="w-full py-2 rounded-md pl-4 bg-[#edeef3]"
                    placeholder="Type your subject here"
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && (
                    <span className="text-red-600">
                      <small>Subject is required</small>
                    </span>
                  )}
                </div>
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
              </div>

              {/* Row 4 */}
              <div className="space-y-2">
                <div>
                  <label htmlFor="Massage">Massage ....</label>
                </div>
                <textarea
                  type="text"
                  name="Massage"
                  id=""
                  cols="30"
                  rows="6"
                  className="w-full rounded-md pl-4 pt-4 bg-[#edeef3]"
                  placeholder="Type your massage here ..........."
                  {...register("massage", { required: true })}
                ></textarea>
                {errors.massage && (
                  <span className="text-red-600">
                    <small>Massage is required</small>
                  </span>
                )}
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
              </div>
              {/* Button */}
              <div>
                <input
                  value="Submit Massage"
                  type="submit"
                  className="btn button-primary"
                  disabled={disabled}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnyQuestion;
