import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const PaymentSuccess = ({ transactionCode }) => {

  return (
    <>
      <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
        <div>
          <CheckCircleIcon className="h-40 mx-auto" color="lightgreen" />
        </div>
        <div className="text-center text-2xl">
          <p>
            Your transfer has been successfully registered. Click on the link to
            track your transaction
          </p>
          <Link to="/#trackapplication">
            <button type="button" className="text-blue-500 text-xl">
              Track transaction
            </button>
          </Link>
        </div>
        <div className="text-center h-auto bg-LightRed border border-Red rounded-xl w-full p-3 sm:space-y-5 space-y-2">
          <p>Transaction Code</p>
          <p className="text-Red text-2xl font-bold">{transactionCode}</p>
        </div>
        {/* <div className="text-center h-auto bg-LightGreen border border-Green rounded-xl w-full p-5 sm:space-y-5 space-y-2">
          <p>Thank you for your business!</p>
          <p>You can now proceed with the payment via interact e-transfer</p>
          <p className="text-Green text-2xl font-bold">
            Email:eajajfnjn @gmail.com
          </p>
          <p className="text-Green text-2xl font-bold">Password:excmacm</p>
        </div> */}
      </div>
      <div className="h-60" />
    </>
  );
};

export default PaymentSuccess;
