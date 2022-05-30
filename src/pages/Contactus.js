import React from "react";
import { Helmet } from "react-helmet";
import { DeviceMobileIcon } from "@heroicons/react/outline";
import { Footer, Navbar } from "../components";
import background from "../assets/backgroundcontactus.png";
import img1 from "../assets/call.png";
import img2 from "../assets/email.png";
import img3 from "../assets/location.png";

const Contactus = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <div className="absolute lg:top-[45%] top-20 left-1/2 -translate-x-1/2 text-center">
          <h1 className=" font-bold text-3xl  text-white">Contact us</h1>
          <p className="text-white font-normal">
            We are a provider of the best of the best service
          </p>
        </div>
      </div>
      {/* empty div */}
      {/* <div className="h-screen w-full bg-white" /> */}
      {/* form start from here */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">Get In Touch</p>
        {/* name */}
        <div className="flex items-center justify-between w-full space-x-3">
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
        {/* email and subject */}
        <div className="flex items-center justify-between w-full space-x-3">
          <input
            type="email"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="Subject"
          />
        </div>
        {/* message */}
        <div>
          <textarea
            rows={5}
            cols={5}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="message"
          />
        </div>
        {/* send button */}
        <div className="text-center">
          <button className="w-60 active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg">
            Send
          </button>
        </div>
      </div>
      {/* last div */}
      <div className="grid sm:grid-cols-3 place-items-start justify-items-center gap-5 sm:p-10 p-3 xl:mt-[26rem] mt-96">
        <div className="shadow-lg rounded-lg text-center space-y-5 p-5 w-full h-full">
          <img src={img1} className="h-20 w-20 object-contain mx-auto" />
          <p className="text-xl font-semibold">Call Us</p>
          <p className="flex items-center justify-center">
            <DeviceMobileIcon className="h-5" />
            +44 12345 67890
          </p>
        </div>
        <div className="shadow-lg rounded-lg text-center space-y-5 p-5 w-full h-full">
          <img src={img2} className="h-20 w-20 object-contain mx-auto" />
          <p className="text-xl font-semibold">Email Us</p>
          <p className="text-center">loremipsum@gmail.com</p>
        </div>
        <div className="shadow-lg rounded-lg text-center space-y-5 p-5 w-full h-full">
          <img src={img3} className="h-20 w-20 object-contain mx-auto" />
          <p className="text-xl font-semibold">Our Head Office</p>
          <p className="text-center">
            1234 lorem ipsum, suite 100 basda, asdnja ,Canada
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
