import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import Caneda from "../assets/caneda.png";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import { ChevronDownIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import * as yup from "yup";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setUserData } = useUserContext();

  const navigate = useNavigate();

  // -------------------------------yup---------------------------
  const SignUpSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    firstname: yup
      .string()
      .required("name is required")
      .min(3, "too short")
      .max(30, "too long"),
    lastname: yup
      .string()
      .required("name is required")
      .min(2, "too short")
      .max(30, "too long"),
    address: yup.string().required("address is required"),
    postalcode: yup
      .number()
      .typeError("That doesn't look like a postal code")
      .required("postalcode is required"),
    city: yup.string().required("city is required"),
    state: yup.string().required("state is required"),
    country: yup.string().required("country is required"),
    password: yup
      .string()
      .required("password is required")
      .min(
        6,
        "should be 6 chars minimum with at least 1 uppercase and one special character."
      )
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Password should be 6 chars minimum with at least 1 uppercase and one special character."
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required("confirm password is required"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      postalcode: "",
      city: "",
      email: "",
      country: "",
      state: "",
      occupation: "",
      password: "",
      confirmpassword: "",
      phone: "",
      birthday: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      const user = {
        f_name: values.firstname,
        l_name: values.lastname,
        email: values.email,
        address: values.address,
        postal_code: values.postalcode,
        password: values.password,
        phone: values.phone,
        city: values.city,
        country: values.country,
        state: values.state,
        occupation: values.occupation,
        address: values.address,
        birthday: values.birthday,
      };
      await axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/register",
          user,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res?.data);
          if (res.data.status === "Success") {
            window.localStorage.setItem(
              "user",
              JSON.stringify(res?.data?.data)
            );
            setUserData(res?.data?.data);
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        })
        .catch((err) => {
          console.log(err?.response?.data);
          const error = err?.response?.data?.message;
          if (error == "Email is already exist") {
            toast.error(error, {
              duration: 2000,
              style: {
                width: "500px",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
          } else {
            return true;
          }
        });
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } =
    formik;
  // -------------------input errror text color--------------
  const TextError = tw.p`
  text-red-500 w-auto p-0
  `;
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;

  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <Toaster />
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold sm:text-3xl text-xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Create Account
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      <div className="h-screen w-full bg-white" />
      <div className="xl:hidden sm:h-60 w-full bg-white" />
      {/* form start from here */}
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit} className="pb-60">
          <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
            <p className="text-xl font-semibold text-center">
              Create your account by filling out the form below.
            </p>
            {/* name */}
            <div className="flex items-end justify-between w-full space-x-2">
              <div className="flex flex-col items-start w-full">
                <Label className="block">Sender's name*</Label>
                <input
                  type="text"
                  name="firstname"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    touched.firstname &&
                    errors.firstname &&
                    "border-2 border-red-400"
                  }
                  `}
                  placeholder="First name"
                  {...getFieldProps("firstname")}
                />
                <ErrorMessage name="firstname" component={TextError} />
              </div>
              <div className="flex flex-col items-start w-full ">
                <input
                  type="text"
                  name="lastname"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                    ${
                      touched.lastname &&
                      errors.lastname &&
                      "border-2 border-red-400"
                    }
                    `}
                  {...getFieldProps("lastname")}
                  placeholder="Last name"
                />
                <ErrorMessage name="lastname" component={TextError} />
              </div>
            </div>
            {/* address */}
            <div className="flex flex-col items-start">
              <Label>Address*</Label>
              <input
                type="text"
                name="address"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                    name="firstname"
                    ${
                      touched.address &&
                      errors.address &&
                      "border-2 border-red-400"
                    }
                `}
                placeholder="type here..."
                {...getFieldProps("address")}
              />
              <ErrorMessage name="address" component={TextError} />
            </div>

            {/* postal code and city */}
            <div className="flex items-start justify-between w-full space-x-2">
              <div className="flex flex-col items-start w-full ">
                <Label>Postal Code*</Label>
                <input
                  type="tel"
                  name="postalcode"
                  maxLength={6}
                  minLength={6}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    touched.postalcode &&
                    errors.postalcode &&
                    "border-2 border-red-400"
                  }
                  `}
                  placeholder="type here..."
                  {...getFieldProps("postalcode")}
                />
                <ErrorMessage name="postalcode" component={TextError} />
              </div>

              <div className="flex flex-col items-start w-full ">
                <Label>City*</Label>
                <select
                  name="city"
                  {...getFieldProps("city")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${touched.city && errors.city && "border-2 border-red-400"}
                  `}
                >
                  <option>select</option>
                  <option>city1</option>
                  <option>city2</option>
                  <option>city3</option>
                  <option>city4</option>
                </select>
                <ErrorMessage name="city" component={TextError} />
              </div>
            </div>
            {/* state and country */}
            <div className="flex items-start justify-between w-full space-x-2">
              <div className="flex flex-col items-start w-full ">
                <Label>State*</Label>
                <input
                  type="text"
                  name="state"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${touched.state && errors.state && "border-2 border-red-400"}
                  `}
                  placeholder="type here..."
                  {...getFieldProps("state")}
                />
                <ErrorMessage name="state" component={TextError} />
              </div>

              <div className="flex flex-col items-start w-full ">
                <Label>Country*</Label>
                <select
                  name="country"
                  {...getFieldProps("country")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    touched.country &&
                    errors.country &&
                    "border-2 border-red-400"
                  }
                  
                  `}
                >
                  <option>select</option>
                  <option>india</option>
                  <option>usa</option>
                  <option>china</option>
                  <option>russia</option>
                </select>
                <ErrorMessage name="country" component={TextError} />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col items-start">
              <Label>Email*</Label>
              <input
                type="email"
                {...getFieldProps("email")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${touched.email && errors.email && "border-2 border-red-400"}
                
                `}
                placeholder="type here..."
              />
              <ErrorMessage name="email" component={TextError} />
            </div>
            {/* Occupation */}
            <div className="flex flex-col items-start">
              <Label>Occupation</Label>
              <select
                name="occupation"
                {...getFieldProps("occupation")}
                className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
              >
                <option>Choose an Occupation</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
                <option>option5</option>
              </select>
              <ErrorMessage name="occupation" component={TextError} />
            </div>
            {/* birthday */}
            <div className="flex flex-col items-start">
              <Label>Birthday</Label>
              <input
                type="date"
                name="birthday"
                {...getFieldProps("birthday")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  touched.birthday &&
                  errors.birthday &&
                  "border-2 border-red-400"
                }
                
                `}
              />
              <ErrorMessage name="birthday" component={TextError} />
            </div>
            {/* phone */}
            <div className="flex flex-col items-start relative">
              <Label>Sender's Phone*</Label>
              <input
                type="tel"
                maxLength={10}
                {...getFieldProps("phone")}
                className={`w-full py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none
                ${touched.phone && errors.phone && "border-2 border-red-400"}
                `}
                placeholder="+1"
              />
              <div className="absolute top-12 left-2 flex items-center">
                <img src={Caneda} className="h-7 mr-1" />
                <ChevronDownIcon className="h-5" />
              </div>
              <ErrorMessage name="phone" component={TextError} />
            </div>
            {/* password */}
            <div className="flex flex-col items-start relative">
              <Label>Password*</Label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  touched.password &&
                  errors.password &&
                  "border-2 border-red-400"
                }
                `}
                {...getFieldProps("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-12 pt-1"
              >
                {showPassword ? (
                  <EyeIcon className="h-6" />
                ) : (
                  <EyeOffIcon className="h-6" />
                )}
              </button>{" "}
              <ErrorMessage name="password" component={TextError} />
            </div>
            {/* confirm password */}
            <div className="flex flex-col items-start relative">
              <Label>Confirm Password*</Label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  touched.confirmpassword &&
                  errors.confirmpassword &&
                  "border-2 border-red-400"
                }
                
                `}
                name="confirmpassword"
                {...getFieldProps("confirmpassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-12 pt-1"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="h-6" />
                ) : (
                  <EyeOffIcon className="h-6" />
                )}
              </button>
              <ErrorMessage name="confirmpassword" component={TextError} />
            </div>
            {/* create button */}
            <button
              type="submit"
              className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
            >
              {isSubmitting ? "Loading..." : "Create"}
            </button>
            {/*login button  */}
            <p className="font-medium text-center">
              Already have an account ?
              <Link to="/login">
                <span className="text-Red cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </Form>
      </FormikProvider>
      <Footer />
    </div>
  );
};

export default Signup;
