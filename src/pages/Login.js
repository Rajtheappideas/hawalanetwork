import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Login
        </h1>
        <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-[60%] left-1/2 -translate-x-1/2">
          <p className="text-xl font-semibold text-center">
            Enter your credential to access your account
          </p>
          <div className="flex flex-col items-start">
            <label>Phone*</label>
            <input
              type="tel"
              maxLength={10}
              minLength="0"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Password*</label>
            <input
              type="password"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here..."
            />
          </div>
          <Link to="/forgotpassword">
            <button type="button" className="float-right text-Red">
              Forgot password?
            </button>
          </Link>
          <button className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg">
            Login
          </button>
          <p className="font-medium text-center">
            Do not have an account yet?{" "}
            <Link to="/signup">
              <span className="text-Red cursor-pointer">Create an account</span>
            </Link>
          </p>
        </div>
      </div>
      {/* empty div */}
      <div className="sm:h-80 xl:h-[27rem] h-72 w-full bg-white" />
      {/* form */}

      <Footer />
    </div>
  );
};

export default Login;
