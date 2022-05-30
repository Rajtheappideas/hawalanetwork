import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const SendMoney = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Send Money</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold sm:text-3xl text-xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Send Money
        </h1>
      </div>
      {/* form start from here */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <div className="text-lg font-semibold text-left">
          <p className="font-bold text-2xl text-left">Sender</p>
          You do not need to complete this form if you have an account.{" "}
          <Link to="/login">
            <button type="button" className="text-Red">
              Login
            </button>{" "}
          </Link>
          here
        </div>
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
        {/*sender phone */}
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
        {/*sender phone */}
        <div className="flex flex-col items-start">
          <label>Receiver's Phone*</label>
          <input
            type="tel"
            maxLength={10}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* option to choose send money */}
        <div className="flex flex-col items-start">
          <label>How do you want your recipient to receive the money?*</label>
          <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
            <option>Mobile Money</option>
            <option>option2</option>
            <option>option3</option>
            <option>option4</option>
            <option>option5</option>
          </select>
        </div>
        {/* next button */}
        <div className="float-right">
          <button className="border border-Red w-40 h-12 text-Red text-center rounded-lg">
            Next
          </button>
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
      {/* transaction summuray */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute xl:-bottom-[115rem] md:-bottom-[120rem] -bottom-[102rem] left-1/2 -translate-x-1/2">
        <p className="sm:text-3xl text-xl font-semibold text-left capitalize">
          transaction Summary
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">from</span>
          <span className="text-gray-400">canada</span>
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">to</span>
          <span className="text-gray-400">cameroon</span>
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">amount sent</span>
          <span className="text-gray-400">1.00 CAD</span>
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">amount received</span>
          <span className="text-gray-400">456.00 XAF</span>
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">transaction fees</span>
          <span className="text-gray-400">0 CAD</span>
        </p>
        <p className="flex items-center justify-between text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">payment method</span>
          <span className="text-gray-400">interact transfer</span>
        </p>
        <p className="text-base font-medium bg-Cream text-yellow-600 rounded-lg w-full p-2">
          <span className="text-lg text-yellow-500 font-semibold">
            Warning:
          </span>
          Mobile Money operators charge a fee for withdrawing cash.
          <span className="text-blue-500 cursor-pointer block">See fees</span>
        </p>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      <div className="h-screen w-full bg-white" />
      <div className="h-screen w-full bg-white" />
      <div className="md:h-screen block xl:hidden h-60 w-full bg-white" />

      <Footer />
    </div>
  );
};

export default SendMoney;
