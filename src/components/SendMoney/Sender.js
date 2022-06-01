import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import caneda from "../../assets/caneda.png";

const Sender = ({ setShowReceiveDiv }) => {
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;
  return (
    <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
      <div className="text-lg font-semibold text-left">
        <p className="font-bold sm:text-2xl text-xl text-left">Sender</p>
        You do not need to complete this form if you have an account.
        <Link to="/login">
          <button type="button" className="text-Red">
            Login
          </button>{" "}
        </Link>
        here
      </div>
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
      {/*sender phone */}
      <div className="flex flex-col items-start relative">
        <Label>Sender's Phone*</Label>
        <input
          type="tel"
          maxLength={10}
          className="w-full py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none"
          placeholder="+1"
        />
        <div className="absolute top-12 left-2 flex items-center">
          <img src={caneda} className="h-7 mr-1" />
          <ChevronDownIcon className="h-5" />
        </div>
      </div>
      {/*upload photo */}
      <div className="flex flex-col items-start">
        <Label>Upload a file?</Label>
        <div className="relative w-full">
          <input
            type="file"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="Select file"
          />
          <div className="absolute top-0 right-0 h-full p-1">
            <button
              type="button"
              className="w-28 float-right z-10 bg-gray-200 h-full text-center rounded-lg"
            >
              Browse
            </button>
          </div>
        </div>
      </div>
      {/* checkbox */}
      <div className="flex items-center">
        <input type="checkbox" className="h-7 w-7 bg-Green rounded-lg mr-2" />
        <p className="capitalize font-normal text-xl">Create account</p>
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
      {/*receive phone */}
      <div className="flex flex-col items-start relative">
        <Label>Receiver's Phone*</Label>
        <input
          type="tel"
          maxLength={10}
          className="w-full py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none"
          placeholder="+1"
        />
        <div className="absolute top-12 left-2 flex items-center">
          <img src={caneda} className="h-7 mr-1" />
          <ChevronDownIcon className="h-5" />
        </div>
      </div>
      {/* option to choose send money */}
      <div className="flex flex-col items-start">
        <Label>How do you want your recipient to receive the money?*</Label>
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
        <button
          type="button"
          onClick={() => setShowReceiveDiv(true)}
          className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Sender;
