import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-444px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
