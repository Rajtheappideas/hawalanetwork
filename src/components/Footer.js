import React from "react";
import logo from "../assets/footerlogo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import pinterest from "../assets/pinterest.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="h-auto bg-LightRed w-full grid lg:grid-cols-4 md:grid-cols-2 place-items-start lg:justify-items-center justify-items-start gap-5 sm:p-10 p-3">
        {/* logo */}
        <div>
          <img src={logo} alt="logo" className="h-24 w-24 object-center object-cover" />
        </div>
        {/* about us  */}
        <div>
          <h1 className="text-2xl font-semibold">Aboout us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        {/* quick links */}
        <div className="text-lg font-normal list-none space-y-2">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <li>
            <a href="/#whychooseus">Why Choose Us?</a>
          </li>
          <li>
            <a href="/#howitswork">How it Works?</a>
          </li>
          <li>
            <a href="/#faq">FAQ</a>
          </li>
          <Link to="/contactus">
            <li>Contact us</li>
          </Link>
        </div>
        {/* social links */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Social Media</h1>
          <div className="flex items-start sm:space-x-6 space-x-3">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={facebook}
                className="h-8 w-8 object-cover object-center cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                src={linkedin}
                className="h-8 w-8 object-cover object-center cursor-pointer"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                src={youtube}
                className="h-8 w-8 object-cover object-center cursor-pointer"
              />
            </a>
          </div>
          <div className="flex items-start sm:space-x-6 space-x-3">
            <a href="https://twitter.com/" target="_blank">
              <img
                src={twitter}
                className="h-8 w-8 object-cover object-center cursor-pointer"
              />
            </a>
            <a href="https://in.pinterest.com/" target="_blank">
              <img
                src={pinterest}
                className="h-8 w-8 object-cover object-center cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      {/* bottom last div footer */}
      <div className="bg-Red text-center text-xl text-white p-2">
        Copyright &#169; {year} Money Transfer All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
