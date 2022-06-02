import React from "react";
import styled from "styled-components";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/icon3.png";

const WhyChooseUs = () => {
  return (
    <div className="sm:p-10 p-3 bg-white w-full" id="whychooseus">
      <div className="relative">
        <h1 className="text-center font-bold text-3xl pb-3 uppercase">
          Why Choose us ?
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
        <div className="text-center rounded-xl shadow-lg w-64 h-auto py-5">
          <img
            src={img1}
            className="h-16 w-full mx-auto  object-contain"
          />
          <p className="font-semibold capitalize text-xl">Lorem ipsum</p>
          <p className="font-light text-lg text-center tracking-wide w-full px-1 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            faucibus
          </p>
        </div>
        {/* second div */}
        <div className="text-center rounded-xl shadow-lg w-64 h-auto py-5">
          <img
            src={img2}
            className="h-16 w-full mx-auto  object-contain"
          />
          <p className="font-semibold capitalize text-xl">Lorem ipsum</p>
          <p className="font-light text-lg text-center tracking-wide w-full px-1 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            faucibus
          </p>
        </div>
        {/* third div */}
        <div className="text-center rounded-xl shadow-lg w-64 h-auto py-5">
          <img
            src={img3}
            className="h-16 w-full mx-auto  object-contain"
          />
          <p className="font-semibold capitalize text-xl">Lorem ipsum</p>
          <p className="font-light text-lg text-center tracking-wide w-full px-1 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            faucibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 2rem;
    background: #D84F4F;
    position: absolute;
    left: calc(57% - 10%);
    bottom: 0;
  }
`;
