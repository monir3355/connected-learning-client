import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const navItems = (
    <>
      <li className="flex justify-start">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 w-1/2"
              : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:w-1/2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex justify-start">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 w-1/2"
              : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:w-1/2"
          }
        >
          About
        </NavLink>
      </li>
      <li className="flex justify-start">
        <NavLink
          to="/course"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 w-1/2"
              : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:w-1/2"
          }
        >
          Course
        </NavLink>
      </li>
      <li className="flex justify-start">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 w-1/2"
              : "hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:w-1/2 border-[#edeef3] border-b-2"
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
          <Link to="login">
            <button className="button-outline">Login</button>
          </Link>
          <Link to="signup">
            <button className="button-primary">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
