import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const ChangePassword = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Change Password</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center"
        />
        <h1 className="absolute font-bold text-3xl sm:top-[45%] top-1/3 left-1/2 text-white -translate-x-1/2">
          Change Password
        </h1>
      </div>
      {/* empty div */}
      <div className="md:h-[25rem] h-96 w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center w-10/12 mx-auto">
          Change your account password by filling out the form below.
        </p>
        <div className="flex flex-col items-start">
          <label>Current Password</label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
          />
        </div>
        <div className="flex flex-col items-start">
          <label>New Password</label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
          />
        </div>
        <div className="flex flex-col items-start">
          <label>Confirm Password</label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
          />
        </div>

        <button className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg">
          Modify
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
