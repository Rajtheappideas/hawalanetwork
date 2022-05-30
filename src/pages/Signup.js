import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold sm:text-3xl text-xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Create Account
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      <div className="h-screen w-full bg-white" />
      {/* form start from here */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">
          Create your account by filling out the form below.
        </p>
        {/* name */}
        <div className="flex flex-col items-start">
          <label>Sender's name*</label>
          <div className="flex items-center justify-between w-full space-x-2">
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="Last name"
            />
          </div>
        </div>
        {/* address */}
        <div className="flex flex-col items-start">
          <label>Address*</label>
          <input
            type="text"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here..."
          />
        </div>
        {/* postal code and city */}
        <div className="flex items-start justify-between w-full space-x-2">
          <div className="flex flex-col items-start w-full ">
            <label>Postal Code*</label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here..."
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <label>City*</label>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>select</option>
              <option>city1</option>
              <option>city2</option>
              <option>city3</option>
              <option>city4</option>
            </select>
          </div>
        </div>
        {/* state and country */}
        <div className="flex items-start justify-between w-full space-x-2">
          <div className="flex flex-col items-start w-full ">
            <label>State*</label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here..."
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <label>Country*</label>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>select</option>
              <option>india</option>
              <option>usa</option>
              <option>china</option>
              <option>russia</option>
            </select>
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col items-start">
          <label>Email*</label>
          <input
            type="email"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here..."
          />
        </div>
        {/* Occupation */}
        <div className="flex flex-col items-start">
          <label>Occupation</label>
          <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
            <option>Choose an Occupation</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
            <option>option5</option>
          </select>
        </div>
        {/* birthday */}
        <div className="flex flex-col items-start">
          <label>Birthday</label>
          <input
            type="date"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col items-start">
          <label>Sender's Phone*</label>
          <input
            type="tel"
            maxLength={10}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* password */}
        <div className="flex flex-col items-start">
          <label>Password*</label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* confirm password */}
        <div className="flex flex-col items-start">
          <label>Confirm Password*</label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* create button */}
        <button
          type="button"
          className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
        >
          Create
        </button>
        {/*login button  */}
        <p className="font-medium text-center">
          Already have an account ?
          <Link to="/login">
            <span className="text-Red cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
