import React, { useState } from "react";
import styled from "styled-components";
import Faqs from "./Faqs";

const data = [
  {
    id: 1,
    que: "Do you guarantee your services?",
    ans: "YES! Our unconditional guarantee is that you receive the best service ever, or it’s free.",
  },
  {
    id: 2,
    que: "How do I schedule an appointment?",
    ans: "You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate.",
  },
  {
    id: 3,
    que: "How do I choose the right treatments and products?",
    ans: "We offer complimentary consultations, and can make recommendations to fit your wants and needs. Whether you are looking for a skin care product line to use at home, or have specific needs for a salon or spa treatment, we are always available to answer your questions.",
  },
  {
    id: 4,
    que: "What methods of payment do you accept?",
    ans: "Cash, checks (local only), Visa, Mastercard, American Express, Discover, and I Am Salon Gift Cards. WE ARE NO LONGER A PARTICIPATING SALON FOR SPAFINDER OR SPA WISH AND WILL NO LONGER BE ACCEPTING GIFT CARDS FROM THEM. Sorry for any inconvenience",
  },
  {
    id: 5,
    que: "Do you guarantee your services?",
    ans: "YES! Our unconditional guarantee is that you receive the best service ever, or it’s free.",
  },
];
const Faq = () => {
  const [activeAll, setActiveAll] = useState(true);
  const [activeMoney, setActiveMoney] = useState(false);
  const [activeBanking, setActiveBanking] = useState(false);
  const [activeCharges, setActiveCharges] = useState(false);
  return (
    <div className="sm:px-20 sm:py-10 p-3 bg-white w-full" id="faq">
      <div className="relative">
        <h1 className="text-center tracking-widest font-bold text-3xl pb-3">
          FAQ
        </h1>
        <Underline className="mt-4 " />
      </div>
      {/* buttons  */}
      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-5 md:space-y-0 space-y-1">
        <div>
          <button
            type="button"
            className={`w-36 h-9 rounded-lg font-semibold bg-Green text-white ${
              activeAll ? "bg-Green text-white" : "bg-Gray text-gray-700"
            }`}
            onClick={() => {
              setActiveMoney(false);
              setActiveAll(true);
              setActiveBanking(false);
              setActiveCharges(false);
            }}
          >
            All
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`w-36 h-9 rounded-lg font-semibold bg-Green text-white ${
              activeMoney ? "bg-Green text-white" : "bg-Gray text-gray-700"
            }`}
            onClick={() => {
              setActiveMoney(true);
              setActiveAll(false);
              setActiveBanking(false);
              setActiveCharges(false);
            }}
          >
            Money Transfer
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`w-36 h-9 rounded-lg font-semibold bg-Green text-white ${
              activeBanking ? "bg-Green text-white" : "bg-Gray text-gray-700"
            }`}
            onClick={() => {
              setActiveMoney(false);
              setActiveAll(false);
              setActiveBanking(true);
              setActiveCharges(false);
            }}
          >
            Mobile Banking
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`w-36 h-9 rounded-lg font-semibold bg-Green text-white ${
              activeCharges ? "bg-Green text-white" : "bg-Gray text-gray-700"
            }`}
            onClick={() => {
              setActiveMoney(false);
              setActiveAll(false);
              setActiveBanking(false);
              setActiveCharges(true);
            }}
          >
            Charges
          </button>
        </div>
      </div>
      {/* faqs */}
      <div className="sm:p-10 p-3 mx-auto w-full">
        {data.map((item) => {
          return <Faqs {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 2rem;
    background: #d84f4f;
    position: absolute;
    left: calc(58% - 10%);
    bottom: 0;
  }
`;
