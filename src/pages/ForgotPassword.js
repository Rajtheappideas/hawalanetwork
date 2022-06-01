import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import Caneda from "../assets/caneda.png";
import { ChevronDownIcon } from "@heroicons/react/outline";

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
        <h1 className="absolute font-bold text-3xl sm:top-[45%] top-1/3 whitespace-nowrap left-1/2 text-white -translate-x-1/2">
          Reset Password
        </h1>
      </div>
      {/* empty div */}
      <div className="h-60 w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute sm:top-1/2 top-[60%] left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">
          Enter your phone number to reset your account password.
        </p>
        <div className="flex flex-col items-start relative">
          <label>Receiver's Phone*</label>
          <input
            type="tel"
            maxLength={10}
            className="w-full py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="+1"
          />
          <div className="absolute top-10 left-2 flex items-center">
            <img src={Caneda} className="h-7 mr-1" />
            <ChevronDownIcon className="h-5" />
          </div>
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
