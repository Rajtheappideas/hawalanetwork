import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/background.png";

const Herosection = () => {
  const [openSendMoney, setOpenSendMoney] = useState(true);
  const [openTrackApplication, setOpenTrackApplication] = useState(false);
  return (
    <div className="h-full w-full relative">
      <img src={background} className="w-full h-screen object-fit -z-10" />
      {/* text div */}
      <div className="absolute md:top-1/3 md:left-1/3 md:-translate-x-1/2 w-1/2 md:block hidden text-white">
        <p className="text-4xl tracking-wide  leading-normal font-semibold text-left w-10/12">
          Lorem Ipsum is simply dummy text
        </p>
        <p className="text-lg font-semibold leading-normal tracking-wide w-9/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      {/* input box */}
      <div className="absolute sm:top-10 top-2 xl:right-28 sm:right-10 right-0 sm:p-0 p-2">
        <div className="bg-white xl:w-[32rem] lg:w-96 h-full rounded-xl xl:space-y-5 space-y-2 pb-4">
          {/* buttons */}
          <div className="flex items-center w-full">
            <button
              className={`w-1/2 h-12 ${
                openSendMoney ? " text-Red" : "text-black bg-LightRed"
              } text-center text-lg font-semibold rounded-tl-xl`}
              type="button"
              onClick={() => {
                setOpenSendMoney(true);
                setOpenTrackApplication(false);
              }}
            >
              Send Money
            </button>
            <button
              className={`w-1/2 h-12 ${
                openTrackApplication ? "text-Red" : "text-black bg-LightRed"
              } text-center text-lg font-semibold rounded-tr-xl`}
              type="button"
              onClick={() => {
                setOpenSendMoney(false);
                setOpenTrackApplication(true);
              }}
            >
              Track Application
            </button>
          </div>
          {/* input fields */}
          {/* send money box */}
          {openSendMoney && (
            <>
              <div className="flex flex-col px-3">
                <label className="p-1 font-semibold text-lg">
                  Sender country
                </label>
                <select className="w-full border border-gray-400 p-2 rounded-lg">
                  <option>Canada</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Russia</option>
                </select>
              </div>
              <div className="flex flex-col px-3">
                <label className="p-1 font-semibold text-lg">
                  Receiver country
                </label>
                <select className="w-full border border-gray-400 p-2 rounded-lg">
                  <option>Canada</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Russia</option>
                </select>
              </div>
              <div className="flex flex-col px-3 relative">
                <label className="p-1 font-semibold text-lg">Send Amount</label>
                <input
                  type="number"
                  min={0}
                  className="border border-gray-400 outline-none py-2 pr-14 pl-2 rounded-lg"
                />
                <span className="absolute top-11 right-5 border-l h-6 pl-2 text-center border-gray-600">
                  CAD
                </span>
              </div>
              <div className="flex flex-col px-3 relative">
                <label className="p-1 font-semibold text-lg">
                  Receiver Amount
                </label>
                <input
                  type="number"
                  min={0}
                  className="border border-gray-400 outline-none py-2 pr-14 pl-2 rounded-lg"
                />
                <span className="absolute top-11 right-5 border-l h-6 pl-2 text-center border-gray-600">
                  XAF
                </span>
              </div>
              {/* continue button */}
              <div className="p-2">
                <Link to="/sendmoney">
                  <button className="w-full h-12 text-center rounded-lg p-2 bg-Green text-white">
                    Continue
                  </button>
                </Link>
              </div>
            </>
          )}
          {/* track application box */}
          {openTrackApplication && (
            <>
              <p className="font-semibold text-xl px-3 w-full">
                Transaction Code
              </p>
              <div className="px-3">
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-x"
                  className="border w-full  border-gray-400 outline-none py-2 pr-14 pl-2 rounded-lg"
                />
              </div>
              <div className="p-2">
                <button
                  type="button"
                  className="w-full h-12 text-center rounded-lg p-2 bg-Green text-white"
                >
                  Check Transaction
                </button>
              </div>
            </>
          )}
          {/* terms of service */}
          <div className="px-2">
            <p className="text-center font-normal">
              By clicking continue, I am agree to{" "}
              <Link to="/termsandpolicy">
                <button type="button" className="text-Red">
                  Terms of service
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
