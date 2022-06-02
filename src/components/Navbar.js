import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { XIcon, MenuIcon, ChevronDownIcon } from "@heroicons/react/outline";
import {
  UserIcon,
  LockClosedIcon,
  UsersIcon,
  ClockIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
      setToggleNav(false);
    }
  });
  return (
    <>
      <div className="w-full flex h-16 bg-Red text-white font-semibold lg:justify-around justify-between items-center p-1">
        {/* logo and language */}
        <div className="flex items-center space-x-4">
          <div>
            <Link to="/">
              <img
                src={logo}
                className="h-10 w-full cursor-pointer  object-cover object-center"
              />
            </Link>
          </div>
          {/* language */}
          <div className="md:block hidden group relative cursor-pointer w-20 h-10 text-center">
            <div className="flex items-center justify-center pt-2">
              <p className="text-center mr-1">English</p>
              <ChevronDownIcon className="h-5 w-5" color="white" />
            </div>
            <div className="group-hover:block text-center absolute top-10 text-black -left-5 hidden h-auto z-10">
              <ul className="top-0 w-32 bg-white shadow-2xl px-3 py-4 rounded-xl">
                <li className="py-1 ">
                  <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out">
                    <span className="hover:text-teal-500 tracking-wider cursor-pointer putline-none uppercase hover:border-b border-white ">
                      French
                    </span>
                  </button>
                </li>
                <li className="py-1 flex items-center justify-start">
                  <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out">
                    <span className="hover:text-teal-500 tracking-wider cursor-pointer putline-none uppercase hover:border-b border-white ">
                      English
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* nav button */}
        <div className="lg:hidden block">
          <button onClick={() => setToggleNav(!toggleNav)}>
            {toggleNav ? (
              <XIcon className="h-10 inline-block lg:hidden " />
            ) : (
              <MenuIcon className="h-10 inline-block lg:hidden " />
            )}
          </button>
        </div>
        {/* tabs and desktop navbar */}
        <div className="lg:flex items-center space-x-8 hidden">
          <a href="/#whychooseus">
            <span>Why Choose Us?</span>
          </a>
          <a href="/#howitswork">
            <span>How it Works?</span>
          </a>
          <a href="/#faq">
            <span>FAQ</span>
          </a>
          <Link to="/contactus">
            <span>Contact Us</span>
          </Link>
          {/* USER dropdown*/}
          <div className="md:block hidden group relative cursor-pointer w-auto h-14 my-auto text-center">
            <div className="flex items-center justify-center pt-4">
              <p className="text-center mr-1">Kevin clark</p>
              <ChevronDownIcon className="h-5 w-5" color="white" />
            </div>
            <div className="group-hover:block text-center absolute top-14 text-black right-0 hidden h-auto z-10">
              <ul className="top-0 w-60 bg-white shadow-2xl px-3 py-4 rounded-lg sm:space-y-3 space-y-1">
                {/* profile */}
                <li>
                  <Link to="/profile">
                    <button className="text-xl flex items-center justify-start font-medium ml-2 cursor-pointer">
                      <UserIcon className="h-6 mr-1" color="red" />
                      <span className="tracking-normal hover:text-gray-500 cursor-pointer outline-none capitalize">
                        Profile
                      </span>
                    </button>
                  </Link>
                </li>
                {/* Change Password */}
                <li>
                  <Link to="/changepassword">
                    <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer">
                      <LockClosedIcon className="h-6 mr-1" color="red" />
                      <span className="tracking-normal hover:text-gray-500 cursor-pointer outline-none capitalize">
                        Change Password
                      </span>
                    </button>
                  </Link>
                </li>
                {/* recipients */}
                <li>
                  <Link to="/recipients">
                    <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer">
                      <UsersIcon className="h-6 mr-1" color="red" />
                      <span className="tracking-normal hover:text-gray-500 cursor-pointer outline-none capitalize">
                        recipients
                      </span>
                    </button>
                  </Link>
                </li>
                {/* Transaction History*/}
                <li>
                  <Link to="/transactionhistory">
                    <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer">
                      <ClockIcon className="h-6 mr-1" color="red" />
                      <span className="tracking-normal hover:text-gray-500 cursor-pointer outline-none capitalize">
                        Transaction History
                      </span>
                    </button>
                  </Link>
                </li>
                {/* logout */}
                <li>
                  <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer">
                    <LogoutIcon className="h-6 mr-1" color="red" />
                    <span className="tracking-normal hover:text-gray-500 cursor-pointer outline-none capitalize">
                      Log out
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <Link to="/login">
            <button
              className="w-28 h-8  active:scale-95 duration-100 ease-in-out transition-all rounded-lg bg-Green text-xl text-white text-center"
              type="button"
            >
              Login
            </button>
          </Link> */}
        </div>
      </div>
      {/* mobile nav */}
      {toggleNav && (
        <div className="flex space-y-4 pb-2 text-lg bg-Red flex-col items-center h-full w-full text-white z-30 relative top-0 left-0">
          <a href="/#whychooseus">
            <span>Why Choose Us?</span>
          </a>
          <a href="/#howitswork">
            <span>How it Works?</span>
          </a>
          <a href="#faq">
            <span>FAQ</span>
          </a>
          <Link to="/contactus">
            <span>Contact Us</span>
          </Link>
          <Link to="/profile">
            <span>Profile</span>
          </Link>
          <Link to="/changepassword">
            <span>Change Password</span>
          </Link>
          <Link to="/recipients">
            <span>Recipients</span>
          </Link>
          <Link to="/transactionhistory">
            <span>Transaction History</span>
          </Link>
          <Link to="/login">
            <button
              className="text-white active:scale-95 duration-100 ease-in-out transition-all text-center"
              type="button"
            >
              Login
            </button>
          </Link>
          {/* language */}
          <div className="lg:hidden block group relative cursor-pointer w-20 h-10 text-center">
            <div className="flex items-center w-full justify-center pt-2">
              <p className="text-center mr-1">English</p>
              <ChevronDownIcon className="h-5 w-5" color="white" />
            </div>
            <div className="group-hover:block text-center absolute top-10 text-black -left-5 hidden h-auto z-10">
              <ul className="top-0 w-32 bg-white shadow-2xl px-3 py-4 rounded-xl">
                <li className="py-1 ">
                  <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out">
                    <span className="hover:text-teal-500 tracking-wider cursor-pointer putline-none uppercase hover:border-b border-white ">
                      French
                    </span>
                  </button>
                </li>
                <li className="py-1 flex items-center justify-start">
                  <button className="text-xl flex items-center justify-start font-semibold ml-2 cursor-pointer hover:scale-95 hover:text-gray-400 duration-100 transition-all ease-in-out">
                    <span className="hover:text-teal-500 tracking-wider cursor-pointer putline-none uppercase hover:border-b border-white ">
                      English
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
