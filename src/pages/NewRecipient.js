import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const NewRecipient = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>New Recipients</title>
      </Helmet>
      <Navbar />
      {/* back image */}
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          New Recipient
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      {/* form */}
      <div className="h-auto w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-left">
          Create a new recipient by filling out the below form
        </p>
        {/* country */}
        <div className="flex flex-col items-start w-full space-y-2">
          <label>Country*</label>
          <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
            <option>usa</option>
            <option>india</option>
            <option>usa</option>
            <option>china</option>
            <option>russia</option>
          </select>
        </div>
        {/* name */}
        <div className="flex flex-col items-start">
          <label>Name*</label>
          <div className="flex items-center justify-between w-full space-x-2">
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here...."
            />
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="type here...."
            />
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-col items-start">
          <label>Phone*</label>
          <input
            type="tel"
            maxLength={10}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here...."
          />
        </div>
        {/* email */}
        <div className="flex flex-col items-start">
          <label>Email</label>
          <input
            type="email"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="loreipsum@gmail.com"
          />
        </div>
        {/* city */}
        <div className="flex flex-col items-start w-full space-y-2">
          <label>City</label>
          <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
            <option>Select</option>
            <option>india</option>
            <option>usa</option>
            <option>china</option>
            <option>russia</option>
          </select>
        </div>
        {/* modify button */}
        <button
          type="button"
          className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
        >
          Create
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default NewRecipient;
