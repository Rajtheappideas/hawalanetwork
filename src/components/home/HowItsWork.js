import React from "react";
import styled from "styled-components";
import img1 from "../../assets/cash deposit.png";
import img2 from "../../assets/bank deposit.png";
import img3 from "../../assets/mobile banking.png";

const HowItsWork = () => {
  return (
    <div className="sm:p-10 p-3 bg-LightGray w-full" id="howitswork">
      <div className="relative">
        <h1 className="text-center font-bold text-3xl pb-3">
          How It Works ?
        </h1>
        <Underline className="mt-4 " />
      </div>
      <p className="text-center font-normal text-lg mx-auto sm:w-10/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        ullamcorper pulvinar faucibus. Phasellus erat ex, iaculis at tempor et,
        tincidunt ultrices lectus.
      </p>
      <div className="grid md:grid-cols-3 place-items-start justify-items-center p-5 mt-10 gap-5">
        {/* first div */}
        <div className="text-center">
          <img src={img1} className="h-24 w-24 mx-auto  object-contain" />
          <p className="font-semibold capitalize text-xl">cash pickup</p>
          <p className="font-light text-lg text-center tracking-wide sm:w-10/12 mx-auto">
            Our agent will call you for cash pickup in a secure and safe
            location
          </p>
        </div>
        {/* second div */}
        <div className="text-center">
          <img src={img3} className="h-24 w-24 mx-auto  object-contain" />
          <p className="font-semibold capitalize text-xl">mobile deposit</p>
          <p className="font-light text-lg text-center tracking-wide sm:w-10/12 mx-auto">
            It takes minutes to receive the money in a mobile banking account
          </p>
        </div>
        {/* third div */}
        <div className="text-center">
          <img src={img2} className="h-24 w-24 mx-auto  object-contain" />
          <p className="font-semibold capitalize text-xl">mobile banking</p>
          <p className="font-light text-lg text-center tracking-wide sm:w-10/12 mx-auto">
            Money can be deposited in your bank account in less than 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 2rem;
    background: #6CCE56;
    position: absolute;
    left: calc(57% - 10%);
    bottom: 0;
  }
`;
