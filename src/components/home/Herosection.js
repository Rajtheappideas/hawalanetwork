import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import background from "../../assets/background.png";
import { useUserContext } from "../../context/UserContext";

const Herosection = () => {
  const [openSendMoney, setOpenSendMoney] = useState(true);
  const [openTrackApplication, setOpenTrackApplication] = useState(false);
  const [senderCountry, setSenderCountry] = useState("CAD");
  const [ReceiverCountry, setReceiverCountry] = useState("USD");
  const [senderAmount, setSenderAmount] = useState(0);
  const [receiverAmount, setReceiverAmount] = useState(0);
  const [sendMoneySummary, setSendMoneySummary] = useState({});
  const [senderCountryName, setSenderCountryName] = useState("canada");
  const [loading, setLoading] = useState(false);

  const { userData } = useUserContext();

  const navigate = useNavigate();

  // useEffect(() => {
  //   handleConvertMoney();
  // }, [senderAmount]);

  const handleConvertMoney = () => {
    if (senderAmount === 0) {
      alert("amount should more than 0");
      return false;
    }
    setLoading(true);
    axios(
      `https://api.apilayer.com/fixer/convert?to=${ReceiverCountry}&from=${senderCountry}&amount=${senderAmount}`,
      {
        method: "GET",
        headers: {
          apikey: process.env.REACT_APP_EXCHANGECURRENY_API_KEY,
        },
      }
    )
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.success === true) {
          setReceiverAmount(Math.floor(res?.data?.result));
          setLoading(false);
        } else if (res?.data?.success === false) {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  };

  const handleSendMoneyData = () => {
    if (userData === null) {
      navigate("/login");
      return false;
    }
    if (senderAmount === 0) {
      return false;
    }
    setTimeout(() => {
      axios(
        "https://chessmafia.com/php/HawalaNetwork/App/api/send-money-request",
        {
          method: "POST",
          params: {
            sender_country: senderCountry,
            receiver_country: ReceiverCountry,
            sender_amount: senderAmount,
            receiver_amount: receiverAmount,
          },
          headers: {
            "consumer-access-token": userData?.api_token,
          },
        }
      )
        .then((res) => {
          console.log(res?.data);
          setSendMoneySummary(res?.data?.data?.summary);
        })
        .catch((err) => {
          console.log(err?.response?.data);
        });
    }, 2000);
  };
  console.log(senderCountryName);
  const countrysName = [
    { name: "india" },
    { name: "canada" },
    { name: "usa" },
    { name: "china" },
    { name: "russia" },
  ];
  return (
    <div className="h-full w-full relative">
      <img
        src={background}
        className="w-full h-screen object-cover object-center -z-10"
      />
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
      <div className="absolute sm:top-5 top-2 xl:right-28 sm:right-10 right-0 sm:p-0 p-2">
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
              {/* sender country input */}
              <div className="flex flex-col px-3">
                <label className="p-1 font-semibold text-lg">
                  Sender country
                </label>
                <select
                  onChange={(e) => {
                    setSenderCountry(e.target.value);
                    setSenderCountryName(e.target.id);
                  }}
                  value={senderCountry}
                  className="w-full border border-gray-400 p-2 rounded-lg"
                >
                  {/* {countrysName.map((name) => (
                    <option value={name.name}>{name.name}</option>
                  ))} */}
                  <option value={"CAD"}>Canada</option>
                  <option value={"INR"}>India</option>
                  <option value={"CNY"}>China</option>
                  <option value={"RUB"}>Russia</option>
                  <option value={"USD"}>Usa</option>
                </select>
              </div>

              {/* receiver country input */}
              <div className="flex flex-col px-3">
                <label className="p-1 font-semibold text-lg">
                  Receiver country
                </label>
                <select
                  value={ReceiverCountry}
                  onChange={(e) => setReceiverCountry(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded-lg"
                >
                  <option value={"CAD"}>Canada</option>
                  <option value={"INR"}>India</option>
                  <option value={"CNY"}>China</option>
                  <option value={"RUB"}>Russia</option>
                  <option value={"USD"}>Usa</option>
                </select>
              </div>

              {/* sender amount */}
              <div className="flex flex-col px-3 relative">
                <label className="p-1 font-semibold text-lg">Send Amount</label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setSenderAmount(e.target.value)}
                  value={senderAmount}
                  className="border border-gray-400 outline-none py-2 pr-14 pl-2 rounded-lg"
                />
                <span className="absolute top-11 right-5 border-l h-6 pl-2 text-center border-gray-600">
                  {senderCountry}
                </span>
              </div>

              {/* receiver amount */}
              <div className="flex flex-col px-3 relative">
                <label className="p-1 font-semibold text-lg">
                  Receiver Amount
                </label>
                <input
                  type="number"
                  min={0}
                  value={receiverAmount}
                  className="border border-gray-400 outline-none py-2 pr-14 pl-2 rounded-lg"
                  disabled={true}
                />
                <span className="absolute top-11 right-5 border-l h-6 pl-2 text-center border-gray-600">
                  {ReceiverCountry}
                </span>
              </div>
              {/* continue button */}
              <div className="p-2">
                {/* <Link to="/sendmoney"> */}
                <button
                  type="button"
                  onClick={() => {
                    handleConvertMoney();
                    handleSendMoneyData();
                  }}
                  className="w-full h-12 text-center rounded-lg p-2 bg-Green text-white"
                >
                  {loading ? "Converting..." : "Continue"}
                </button>
                {/* </Link> */}
              </div>
            </>
          )}
          {/* track application box */}
          {openTrackApplication && (
            <div id="trackapplication">
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
                <Link to="/transactionstatus">
                  <button
                    type="button"
                    className="w-full active:scale-95 duration-100 transition-all ease-in-out h-12 text-center rounded-lg p-2 bg-Green text-white"
                  >
                    Check Transaction
                  </button>
                </Link>
              </div>
            </div>
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
