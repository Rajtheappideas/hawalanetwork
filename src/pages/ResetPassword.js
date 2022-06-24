import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import axios from "axios";

const ResetPassword = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { email } = useLocation().state;

  const navigate = useNavigate();

  const resetPassword = () => {
    if (newPassword === "" || confirmNewPassword === "") {
      toast.error("All filed should be filled!!", {
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
    } else if (newPassword !== confirmNewPassword) {
      toast.error("new password and confirm password should be match!!", {
        duration: 2000,
        style: {
          width: "100%",
          background: "black",
          color: "white",
          fontSize: "large",
          whiteSpace: "nowrap",
        },
        position: "top-center",
      });
      return false;
    } else if (newPassword.length < 6) {
      toast.error("password should more than 6 characters!!", {
        duration: 2000,
        style: {
          width: "100%",
          background: "black",
          color: "white",
          fontSize: "large",
          whiteSpace: "nowrap",
        },
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    const data = {
      email: email,
      password: newPassword,
    };
    axios
      .post(
        "https://chessmafia.com/php/HawalaNetwork/App/api/reset-password",
        data
      )
      .then((res) => {
        if (res?.data?.status == "Success") {
          toast.success("Password updated", {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "fail") {
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
          setLoading(false);
        }
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
          Change Password
        </h1>
      </div>
      {/* empty div */}
      <div className="sm:h-80 h-60 w-full bg-white" />
      {/* form */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-xl tracking-widest font-semibold text-center w-full">
          The Password should have atleast 6 characters.
        </p>

        <div className="flex flex-col items-start relative">
          <label>Password*</label>
          <input
            type={showpassword ? "text" : "password"}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <button
            type="button"
            onClick={() => setShowpassword(!showpassword)}
            className="absolute right-4 top-10"
          >
            {showpassword ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeOffIcon className="h-6" />
            )}
          </button>
        </div>
        <div className="flex flex-col items-start relative">
          <label>Confirm Password*</label>
          <input
            type={confirmNewPassword ? "text" : "password"}
            className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
            placeholder="***********"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            value={confirmNewPassword}
          />
          <button
            type="button"
            onClick={() => setConfirmNewPassword(!confirmNewPassword)}
            className="absolute right-4 top-10"
          >
            {confirmNewPassword ? (
              <EyeIcon className="h-6" />
            ) : (
              <EyeOffIcon className="h-6" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={resetPassword}
            className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
          >
            {loading ? "verifying..." : "Reset Password"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
