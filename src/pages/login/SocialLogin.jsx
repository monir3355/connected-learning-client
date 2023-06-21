import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const currentUSer = result.user;
        // console.log(currentUSer);
        const savedUser = {
          name: currentUSer.displayName,
          email: currentUSer.email,
          photo_url: currentUSer.photoURL,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="divider pt-0 mt-0">OR</div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-8 gap-6">
        <button onClick={handleGoogle} className="btn button-primary btn-wide">
          <FaGoogle className="text-2xl" />{" "}
          <span className="ml-2">Login With Google</span>
        </button>
        <button className="btn button-primary btn-wide">
          <FaGithub className="text-2xl" />{" "}
          <span className="ml-2">Login With Github</span>
        </button>
      </div>
      <p className="text-red-500 text-center">{error}</p>
    </div>
  );
};

export default SocialLogin;
