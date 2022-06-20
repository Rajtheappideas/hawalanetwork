import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { Receiver, Sender, Payment } from "../components/index";
import CountryCodes from "../utils/CountryCodes";

const SendMoney = () => {
  const [showReceiveDiv, setShowReceiveDiv] = useState(false);
  const [showReceiverSecondDiv, setShowReceiverSecondDiv] = useState(false);
  const [showPaymentDiv, setShowPaymentDiv] = useState(false);
  const [isSuccessPayment, setisSuccessPayment] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Send Money</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl whitespace-nowrap sm:top-[40%] top-1/3 left-1/2 text-white -translate-x-1/2">
          Send Money
        </h1>
      </div>
      {/* form start from here */}
      {showReceiveDiv ? (
        <Receiver
          setShowReceiveDiv={setShowReceiveDiv}
          showReceiverSecondDiv={showReceiverSecondDiv}
          setShowReceiverSecondDiv={setShowReceiverSecondDiv}
          setShowPaymentDiv={setShowPaymentDiv}
        />
      ) : (
        <Sender setShowReceiveDiv={setShowReceiveDiv} />
      )}
      {showPaymentDiv && (
        <Payment
          setShowPaymentDiv={setShowPaymentDiv}
          setisSuccessPayment={setisSuccessPayment}
          isSuccessPayment={isSuccessPayment}
        />
      )}
      {/* empty div */}
      <div
        className={`${
          showReceiveDiv &&
          !showReceiverSecondDiv &&
          "lg:h-[35rem] md:h-[32rem] h-[42rem]"
        }`}
      />
      <div
        className={`${
          showReceiverSecondDiv && !showPaymentDiv && "lg:h-96 md:h-80 h-96"
        }`}
      />
      <div className={`${showPaymentDiv && "md:h-[28rem] h-[31rem]"}`} />

      {!showReceiveDiv && !showReceiverSecondDiv && !showPaymentDiv && (
        <div className="h-96 w-full bg-white" />
      )}
      {!showReceiveDiv && !showReceiverSecondDiv && !showPaymentDiv && (
        <div className="h-screen w-full bg-white" />
      )}
      {!showReceiveDiv && !showReceiverSecondDiv && !showPaymentDiv && (
        <div className="xl:h-96 lg:h-[30rem] md:h-[32rem] sm:h-96 h-80 w-full bg-white" />
      )}

      {/* transaction summuray */}
      {!isSuccessPayment && (
        <div className="h-auto lg:w-1/2 xl:w-[52%] w-[90%] mx-auto mb-10 bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2">
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
      )}

      {/* Sender */}
      {showReceiveDiv && !isSuccessPayment && (
        <div className="h-auto lg:w-1/2 xl:w-[52%] w-[90%] text-left border-2 border-Green rounded-xl mx-auto mb-10 bg-LightGreen sm:p-5 p-3 space-y-2">
          <p className="sm:text-3xl text-xl font-bold">Sender</p>
          <p className="sm:text-xl font-semibold">Michle John</p>
          <p className="sm:text-xl font-semibold">+12309032039</p>
        </div>
      )}

      {/* receiver */}
      {showPaymentDiv && !isSuccessPayment && (
        <div className="h-auto lg:w-1/2 xl:w-[52%] w-[90%] text-left border-2 border-Green rounded-xl mx-auto mb-20 bg-LightGreen sm:p-5 p-3 space-y-2">
          <p className="sm:text-3xl text-xl font-bold">Receiver</p>
          <p className="sm:text-xl font-semibold">Dude Panchal</p>
          <p className="sm:text-xl font-semibold">+12309032039</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SendMoney;
