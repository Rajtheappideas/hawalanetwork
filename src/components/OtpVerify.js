import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const OtpVerify = ({ openModal, CloseModal, email, otp }) => {
  const [EnteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log(otp, EnteredOtp);

  const CheckOtp = () => {
    if (EnteredOtp === "") {
      toast.error("Enter Otp first", {
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
    setTimeout(() => {
      if (otp != EnteredOtp) {
        toast.error("Enter Valid Otp", {
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
        return false;
      } else if (otp == EnteredOtp) {
        navigate("/resetpassword", { state: { email: email } });
        setLoading(false);
      }
    }, 1000);
  };
  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={openModal}
      onRequestClose={() => CloseModal()}
      preventScroll={false}
    >
      <button onClick={() => CloseModal()}>
        <XIcon className="h-9 z-10 absolute top-3 right-4" />
      </button>
      <div className="md:h-[500px] h-full md:w-[500px] w-full p-5 space-y-5 mt-5 absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center   bg-white">
        <h1 className="font-bold text-4xl text-center tracking-wide">
          {/* {t("Enter_your_OTP")} */}
          Enter your OTP
        </h1>

        {/* -------------input fieilds--------------- */}
        <form action="post" className="w-full">
          <div className="space-y-2 w-full">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                disabled={true}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <input
                type="tek"
                // placeholder={`${t("Enter_your_otp_here")}`}
                placeholder="Enter otp here"
                name="otp"
                onChange={(e) => setEnteredOtp(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            <div>
              <button
                type="button"
                className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg bg-blue-500 font-semibold text-black text-center px-6 w-full h-[56px] bg-gradient-to-r from-Purple to-VividBlue rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                onClick={() => CheckOtp()}
              >
                {loading ? "Verifying..." : "Check"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OtpVerify;
