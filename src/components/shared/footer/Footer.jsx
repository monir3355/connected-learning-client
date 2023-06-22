import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import appImg from "../../../assets/images/footerimg/app.png";
import googleImg from "../../../assets/images/footerimg/google.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#132742] text-neutral-content">
      <div className="space-y-4">
        <Link to="/">
          <img className="h-12" src={logo} alt="" />
        </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do.</p>
        <div className="flex flex-col gap-2">
          <Link to="https://www.apple.com/app-store/">
            <img className="h-10 w-36" src={appImg} alt="" />
          </Link>
          <Link to="https://play.google.com/store/games?hl=en&gl=US">
            <img className="h-10 w-36" src={googleImg} alt="" />
          </Link>
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-white">Follow Us</p>
          <div className="flex gap-4">
            <Link to="https://www.linkedin.com/in/monirul80/">
              <FaLinkedin className="text-blue-700 h-6 w-6" />
            </Link>
            <Link to="https://twitter.com/Dev1Monirul">
              <FaTwitter className="text-blue-700 h-6 w-6" />
            </Link>
            <Link to="https://www.facebook.com/monirul80/">
              <FaFacebook className="text-blue-700 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <span className="text-white text-lg font-semibold">About Us</span>
        <a className="link link-hover text-gray-200">Our Company</a>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Investor Relations</a>
        <a className="link link-hover">Social Impact</a>
      </div>
      <div>
        <span className="text-white text-lg font-semibold">Resources</span>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <a className="link link-hover">Give Feedback</a>
        <a className="link link-hover">Hello@example.com</a>
      </div>
      <div>
        <div className="relative">
          <input
            className="py-2 border-0 pl-4 text-black rounded-full"
            type="email"
            placeholder="Email Address"
          />{" "}
          <button className="button-primary absolute -ml-10">Started</button>
        </div>
        <a className="link link-hover mt-4">Email Us</a>
        <a className="link link-hover">RK@Oama.io</a>
        <a className="link link-hover">Bolomu All Rights Reserved, 2021</a>
      </div>
    </footer>
  );
};

export default Footer;
