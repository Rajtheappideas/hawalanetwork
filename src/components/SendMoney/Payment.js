import React from "react";
import tw from "tailwind-styled-components";
import { PaymentSuccess } from "..";

const Payment = ({
  setShowPaymentDiv,
  isSuccessPayment,
  setisSuccessPayment,
}) => {
  const Label = tw.label`
  text-xl mb-2 font-semibold
  `;

  return (
    <>
      {isSuccessPayment ? (
        <PaymentSuccess />
      ) : (
        <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
          <div className="text-lg font-semibold text-left">
            <p className="font-bold text-2xl text-left">Payment</p>
            How would you like to pay for your transaction?*
          </div>
          {/* transfer reason */}
          <div className="flex flex-col items-start">
            <Label>Reason For Transfer*</Label>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>Friend Support</option>
              <option>city1</option>
              <option>city2</option>
              <option>city3</option>
              <option>city4</option>
            </select>
          </div>

          {/* agent code */}
          <div className="flex flex-col items-start">
            <Label>
              Agent Code{" "}
              <span className="text-gray-300 text-xs">
                (Enter the agent code if you want to go through a particular
                agent)
              </span>
            </Label>
            <input
              type="text"
              className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              placeholder="XXXX"
            />
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
          <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-2">
            <div className="float-right">
              <button
                type="button"
                onClick={() => setShowPaymentDiv(false)}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                Back
              </button>
            </div>
            <div className="float-right">
              <button
                type="button"
                onClick={() => setisSuccessPayment(true)}
                className="bg-Green text-white w-40 h-12 text-center rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
