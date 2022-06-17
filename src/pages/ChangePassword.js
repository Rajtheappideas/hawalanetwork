import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userData } = useUserContext();

  const handleChangePassword = () => {
    if (
      confirmPassword === "" ||
      newPassword === "" ||
      currentPassword === ""
    ) {
      toast.error("All field should be filled", {
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
    if (confirmPassword !== newPassword) {
      toast.error("new password & confirm password should be match", {
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
    axios("https://chessmafia.com/php/HawalaNetwork/App/api/change-password", {
      method: "POST",
      params: {
        old_password: currentPassword,
        password: newPassword,
      },
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((res) => {
        if (res?.data?.status === "Success") {
          toast.success(res?.data?.message, {
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
      })
      .catch((err) => {
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
        return false;
      });
  };

  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Change Password</title>
      </Helmet>
      <Toaster />
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
      <div className="md:h-[29rem] h-96 w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl font-semibold text-center w-10/12 mx-auto">
          Change your account password by filling out the form below.
        </p>
        {/* curent password */}
        <div className="flex flex-col items-start relative">
          <label>Current Password</label>
          <input
            type={showCurrentPassword ? "text" : "password"}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-5 top-10"
          >
            {showCurrentPassword ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeOffIcon className="h-6" />
            )}
          </button>
        </div>
        {/* new password */}
        <div className="flex flex-col items-start relative">
          <label>New Password</label>
          <input
            type={showNewPassword ? "text" : "password"}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-5 top-10"
          >
            {showNewPassword ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeOffIcon className="h-6" />
            )}
          </button>
        </div>
        {/* confirm new pasword */}
        <div className="flex flex-col items-start relative">
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-5 top-10"
          >
            {showConfirmPassword ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeOffIcon className="h-6" />
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => handleChangePassword()}
          className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
        >
          Modify
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
