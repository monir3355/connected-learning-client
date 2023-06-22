import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import "./header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you want Logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logout!", "You are logout", "success");
          })
          .then((error) => {
            console.log(error);
          });
      }
    });
  };
  const navItems = (
    <>
      <li className="flex justify-start relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menuBottomUnderActive" : "menuHoverNonActive"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex justify-start relative">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "menuBottomUnderActive" : "menuHoverNonActive"
          }
        >
          About
        </NavLink>
      </li>
      <li className="flex justify-start relative">
        <NavLink
          to="/course"
          className={({ isActive }) =>
            isActive ? "menuBottomUnderActive" : "menuHoverNonActive"
          }
        >
          Course
        </NavLink>
      </li>
      <li className="flex justify-start relative">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "menuBottomUnderActive" : "menuHoverNonActive"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <header className="bg-[#edeef3] py-2 sticky top-0 w-full z-50 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="flex flex-col gap-2 dropdown-content mt-3 p-2 rounded-box w-52 bg-base-300"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img className="h-12" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <>
              <label
                className="btn btn-ghost btn-circle avatar mr-2 tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogOut} className="btn button-primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="login">
                <button className="button-outline">Login</button>
              </Link>
              <Link to="signup">
                <button className="button-primary">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
