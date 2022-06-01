import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const Profile = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Profile
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      <div className="xl:hidden sm:h-40 h-10 w-full bg-white" />
      {/* form start from here */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-left">
          Your account information. Change this information by submitting the
          below form.
        </p>
        {/* name */}
        <div className="flex flex-col items-start">
          <label>Name</label>
          <div className="flex items-center justify-between w-full space-x-2">
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="Kevin"
            />
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="clark"
            />
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-col items-start">
          <label>Phone</label>
          <input
            type="tel"
            maxLength={10}
            placeholder="+12345678890"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
          />
        </div>
        {/* email */}
        <div className="flex flex-col items-start">
          <label>Email</label>
          <input
            type="email"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="keviclark123@gmail.com"
          />
        </div>
        {/* address */}
        <div className="flex flex-col items-start">
          <label>Address</label>
          <input
            type="text"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="lorem ipsum"
          />
        </div>
        {/* postal code and city */}
        <div className="flex items-start justify-between w-full space-x-2">
          <div className="flex flex-col items-start w-full ">
            <label>Postal Code</label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="0435"
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <label>City</label>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>Locke mills</option>
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
            <label>State</label>
            <input
              type="tel"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="Maine"
            />
          </div>
          <div className="flex flex-col items-start w-full ">
            <label>Country</label>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>canada</option>
              <option>india</option>
              <option>usa</option>
              <option>china</option>
              <option>russia</option>
            </select>
          </div>
        </div>
        {/* modify button */}
        <button className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg">
          Modify
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
