import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import Caneda from "../assets/caneda.png";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Signup = () => {
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;
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
      <div className="xl:hidden sm:h-60 w-full bg-white" />
      {/* form start from here */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">
          Create your account by filling out the form below.
        </p>
        {/* name */}
        <div className="flex flex-col items-start">
          <Label>Sender's name*</Label>
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
          <Label>Address*</Label>
          <input
            type="text"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here..."
          />
        </div>
        {/* postal code and city */}
        <div className="flex items-start justify-between w-full space-x-2">
          <div className="flex flex-col items-start w-full ">
            <Label>Postal Code*</Label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here..."
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <Label>City*</Label>
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
            <Label>State*</Label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here..."
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <Label>Country*</Label>
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
          <Label>Email*</Label>
          <input
            type="email"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here..."
          />
        </div>
        {/* Occupation */}
        <div className="flex flex-col items-start">
          <Label>Occupation</Label>
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
          <Label>Birthday</Label>
          <input
            type="date"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col items-start relative">
          <Label>Receiver's Phone*</Label>
          <input
            type="tel"
            maxLength={10}
            className="w-full py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="+1"
          />
          <div className="absolute top-12 left-2 flex items-center">
            <img src={Caneda} className="h-7 mr-1" />
            <ChevronDownIcon className="h-5" />
          </div>
        </div>
        {/* password */}
        <div className="flex flex-col items-start">
          <Label>Password*</Label>
          <input
            type="password"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* confirm password */}
        <div className="flex flex-col items-start">
          <Label>Confirm Password*</Label>
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
