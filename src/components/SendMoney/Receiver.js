import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import caneda from "../../assets/caneda.png";

const Receiver = ({
  setShowReceiveDiv,
  showReceiverSecondDiv,
  setShowReceiverSecondDiv,
  setShowPaymentDiv,
}) => {
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;


  return (
    <>
      {showReceiverSecondDiv ? (
        <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
          <div className="text-lg font-semibold text-left">
            <p className="font-bold sm:text-2xl text-xl text-left">Receiver</p>
            <p className="sm:text-xl">
              You can choose a recipient from your lsit or create a new one.
            </p>
          </div>
          {/* name */}
          <div className="flex flex-col items-start">
            <div className="flex justify-between items-center w-full">
              <p className="sm:text-xl mb-2 font-semibold">Recipients</p>
              <button type="button" className="text-Green font-semibold">
                + Add new recipient
              </button>
            </div>
            <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
              <option>Choose a recipient</option>
              <option>city1</option>
              <option>city2</option>
              <option>city3</option>
              <option>city4</option>
            </select>
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
                onClick={() => setShowReceiverSecondDiv(false)}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                Back
              </button>
            </div>
            <div className="float-right">
              <button
                type="button"
                onClick={() => setShowPaymentDiv(true)}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5  absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
          <div className="text-lg font-semibold text-left">
            <p className="font-bold sm:text-2xl text-xl text-left">Receiver</p>
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
            <Label>Receiver's name*</Label>
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

          {/*  city */}
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

          {/*Receiver phone */}
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
          <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-2">
            <div className="float-right">
              <button
                type="button"
                onClick={() => setShowReceiveDiv(false)}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                Back
              </button>
            </div>
            <div className="float-right">
              <button
                type="button"
                onClick={() => {
                  setShowReceiverSecondDiv(true);
                }}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Receiver);
