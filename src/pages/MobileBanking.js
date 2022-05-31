import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/backgroundcontactus.png";

const MobileBanking = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Mobile Banking</title>
      </Helmet>
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <div className="absolute lg:top-[45%] top-20 left-1/2 -translate-x-1/2 text-center">
          <h1 className=" font-bold text-3xl  text-white">Mobile Banking</h1>
        </div>
      </div>
      {/* empty div */}
      <div className="h-60 w-full bg-white" />
      {/* form start from here */}
      <div className="h-auto w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
        <p className="text-2xl font-semibold text-left">
          Withdrawing from an account
        </p>
        <table className="w-full table-auto border-collapse border border-black">
          <thead>
            <tr className="border-b border-black">
              <th className="text-center font-semibold text-xl border-r border-black">
                Minimum Amount
              </th>
              <th className="text-center font-semibold text-xl border-r border-black">
                Maximum Amount
              </th>
              <th className="text-center font-semibold text-xl">Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100">
              <th className="text-center font-normal text-xl border-r border-black w-40 p-2">
                50F
              </th>
              <th className="text-center font-normal text-xl border-r border-black w-40">
                2500F
              </th>
              <th className="text-center font-normal text-xl w-40">50F</th>
            </tr>
            <tr className="odd:bg-gray-100">
              <th className="text-center font-normal text-xl border-r border-black w-40 p-2">
                2501F
              </th>
              <th className="text-center font-normal text-xl border-r border-black w-40">
                175 000F
              </th>
              <th className="text-center font-normal text-xl w-40">2%</th>
            </tr>
            <tr className="odd:bg-gray-100">
              <th className="text-center font-normal text-xl border-r border-black w-40 p-2">
                175 001F
              </th>
              <th className="text-center font-normal text-xl border-r border-black w-40">
                505 000F
              </th>
              <th className="text-center font-normal text-xl w-40">3500F</th>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default MobileBanking;
