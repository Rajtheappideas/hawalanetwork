import React from "react";
import Helmet from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";

const TransactionStatus = () => {
  return (
    <div>
      <Helmet>
        <title>Transaction Status</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold whitespace-nowrap text-3xl sm:top-[45%] top-1/3 left-1/2 text-white -translate-x-1/2">
          Transaction Status
        </h1>
      </div>
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
        <div className="text-lg font-semibold text-left">
          <p className="font-bold sm:text-2xl text-left">
            Processing of your transaction
          </p>
          <p className="text-sm">
            Here is presented all the operations brought on your transaction.
          </p>
        </div>
        <div className="flex items-start text-center">
          <p className="border-8 border-gray-100 rounded-full w-12 h-12 py-1">
            1
          </p>
          <div className="ml-2">
            <p className="block sm:text-lg font-normal">2022-05-09 2:40 PM</p>
            <p className="block font-normal text-left text-gray-300">
              Creation
            </p>
          </div>
        </div>
        <div className="flex items-start text-center">
          <p className="border-8 border-gray-100 rounded-full w-12 h-12 py-1">
            2
          </p>
          <div className="ml-2">
            <p className="block sm:text-lg font-normal">2022-05-09 2:40 PM</p>
            <p className="block font-normal text-left text-gray-300">
              Creation
            </p>
          </div>
        </div>
        <div className="flex items-start text-center">
          <p className="border-8 border-gray-100 rounded-full w-12 h-12 py-1">
            3
          </p>
          <div className="ml-2">
            <p className="block sm:text-lg font-normal">2022-05-09 2:40 PM</p>
            <p className="block font-normal text-left text-gray-300">
              Creation
            </p>
          </div>
        </div>
        <div className="flex items-start text-center">
          <p className="border-8 border-gray-100 rounded-full w-12 h-12 py-1">
            4
          </p>
          <div className="ml-2">
            <p className="block sm:text-lg font-normal">2022-05-09 2:40 PM</p>
            <p className="block font-normal text-left text-gray-300">
              Creation
            </p>
          </div>
        </div>
        <div className="flex items-start text-center">
          <p className="border-8 border-gray-100 rounded-full w-12 h-12 py-1">
            5
          </p>
          <div className="ml-2">
            <p className="block sm:text-lg font-normal">2022-05-09 2:40 PM</p>
            <p className="block font-normal text-left text-gray-300">
              Creation
            </p>
          </div>
        </div>
      </div>
      <div className="sm:h-[22rem] h-60" />
      {/* transaction summuray */}
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto xl:mt-20 md:mt-24 mt-14 mb-10 bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2">
        <p className="sm:text-3xl text-xl font-semibold text-left capitalize">
          transaction Summary
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">from</span>
          <span className="text-gray-400">canada</span>
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">to</span>
          <span className="text-gray-400">cameroon</span>
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">amount sent</span>
          <span className="text-gray-400">1.00 CAD</span>
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">amount received</span>
          <span className="text-gray-400">456.00 XAF</span>
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize border-b border-gray-300 pb-3">
          <span className="text-black">transaction fees</span>
          <span className="text-gray-400">0 CAD</span>
        </p>
        <p className="flex items-center justify-between sm:text-lg font-medium capitalize">
          <span className="text-black">payment method</span>
          <span className="text-gray-400">interact transfer</span>
        </p>
      </div>
      {/* Sender */}
      <div className="h-auto lg:w-1/2 w-[90%] text-left border-2 border-Green rounded-xl mx-auto mb-10 bg-LightGreen sm:p-5 p-3 space-y-2">
        <p className="sm:text-3xl text-xl font-bold">Sender</p>
        <p className="sm:text-xl font-semibold">Michle John</p>
        <p className="sm:text-xl font-semibold">+12309032039</p>
      </div>

      {/* receiver */}
      <div className="h-auto lg:w-1/2 w-[90%] text-left border-2 border-Green rounded-xl mx-auto mb-20 bg-LightGreen sm:p-5 p-3 space-y-2">
        <p className="sm:text-3xl text-xl font-bold">Receiver</p>
        <p className="sm:text-xl font-semibold">Dude Panchal</p>
        <p className="sm:text-xl font-semibold">+12309032039</p>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionStatus;
