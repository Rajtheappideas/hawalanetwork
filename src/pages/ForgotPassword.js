import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const ForgotPassword = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Reset Password
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">
          Enter your phone number to reset your account password.
        </p>
        <div className="flex flex-col items-start">
          <label>Phone*</label>
          <input
            type="tel"
            maxLength={10}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        <div>
          <Link to="/resetpassword">
            <button
              type="button"
              className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
            >
              Reset Password
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
