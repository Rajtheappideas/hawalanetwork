import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import Caneda from "../assets/caneda.png";
import { ChevronDownIcon } from "@heroicons/react/outline";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import OtpVerify from "../components/OtpVerify";

const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);

  const CloseModal = () => setOpenModal(false);

  const handleForgotPassword = () => {
    if (email === "") {
      toast.error("please enter email", {
        duration: 2000,
        style: {
          width: "500px",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    axios("https://chessmafia.com/php/HawalaNetwork/App/api/forgot-password", {
      method: "POST",
      params: {
        email: email,
      },
    })
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.status === "Success") {
          setOpenModal(true);
          setOtp(res?.data?.data?.otp);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        if (err?.response?.data?.status == "Error") {
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
        }
        setLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Toaster />
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-2xl sm:text-5xl sm:top-[45%] top-1/3 whitespace-nowrap left-1/2 text-white -translate-x-1/2">
          Reset Password
        </h1>
      </div>
      {/* empty div */}
      <div className="h-60 w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute sm:top-1/2 top-[60%] left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center">
          Enter your email to reset your account password.
        </p>
        {/* phone */}
        {/* <div className="flex flex-col items-start relative">
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
        </div> */}
        {/* email */}
        <div className="flex flex-col items-start relative">
          <label>Sender's email*</label>
          <input
            type="email"
            className="w-full p-4  bg-LightGray border border-black rounded-lg outline-none"
            placeholder="type here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
          >
            {loading ? "checking..." : "Reset Password"}
          </button>
          {openModal && (
            <OtpVerify
              openModal={openModal}
              CloseModal={CloseModal}
              email={email}
              otp={otp}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
