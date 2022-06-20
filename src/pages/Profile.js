import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { Form, FormikProvider, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components/dist/tailwind";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const { userData } = useUserContext();

  const navigate = useNavigate();
  // --------------------yup-------------
  const userProfileSchema = yup.object().shape({
    email: yup.string().required().email("email is requied"),
    firstname: yup
      .string()
      .required("firstname is required")
      .min(3, "too short")
      .max(30, "too long"),
    lastname: yup
      .string()
      .required("lastname is required")
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
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      email: userDetails?.email || "",
      firstname: userDetails?.f_name || "",
      lastname: userDetails?.l_name || "",
      phone: userDetails?.phone || "",
      address: userDetails?.address || "",
      state: userDetails?.state || "",
      city: userDetails?.city || "",
      country: userDetails?.country || "",
      postalcode: userDetails?.postal_code || "",
    },
    enableReinitialize: true,
    validationSchema: userProfileSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("f_name", values.firstname);
      fd.append("l_name", values.lastname);
      fd.append("phone", values.phone);
      fd.append("email", values.email);
      fd.append("address", values.address);
      fd.append("postal_code", values.postalcode);
      fd.append("city", values.city);
      fd.append("state", values.state);
      fd.append("country", values.country);
      setLoading(true);
      axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/update-user-details",
          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "consumer-access-token": userData?.api_token,
            },
          }
        )
        .then((response) => {
          if (response?.data?.status == "Success") {
            toast.success(response?.data?.message, {
              duration: 2000,
              style: {
                width: "500px",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
            setLoading(false);
            setTimeout(() => {
              // window.location.reload();
            }, 1000);
            return true;
          }
        })
        .catch((err) => {
          if (
            err?.response?.data?.message === "Un-Authentic" &&
            err?.response?.data?.status === "Error"
          ) {
            toast(err?.response?.data?.message, { type: "error" });
            setLoading(false);
            navigate("/login");
          } else if (err?.response?.data?.status === "Error") {
            toast.error(err?.response?.data?.message, {
              duration: 2000,
              style: {
                width: "500px",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
            setLoading(false);
            return false;
          }
        });
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  // ------------------error text color tailwind-------------
  const TextError = tw.p`
  text-red-500
  `;
  useEffect(() => {
    axios("https://chessmafia.com/php/HawalaNetwork/App/api/get-user-details", {
      method: "POST",
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((res) => {
        setUserDetails(res?.data?.data);
      })
      .catch((err) => {
        console.log(err?.reponse?.data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Toaster />
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Profile
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      <div className="sm:h-40 h-10 w-full bg-white" />
      {/* form start from here */}
      <FormikProvider
        value={userDetails || formik.initialValues}
        className="h-auto"
      >
        <Form autoComplete="off" onSubmit={handleSubmit} className="h-auto">
          <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
            <p className="text-xl font-semibold text-left">
              Your account information. Change this information by submitting
              the below form.
            </p>
            {/* name */}
            <div className="flex flex-col items-start">
              <label>Name</label>
              <div className="flex items-center justify-between w-full space-x-2">
                <div className="w-full">
                  <input
                    type="text"
                    name="firstname"
                    className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  
                  ${
                    errors.firstname &&
                    touched.firstname &&
                    "border-2 border-red-600"
                  }`}
                    placeholder="Kevin"
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
            </div>
            {/* phone */}
            <div className="flex flex-col items-start">
              <label>Phone</label>
              <input
                type="tel"
                maxLength={10}
                name="phone"
                placeholder="+12345678890"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${errors.phone && touched.phone && "border-2 border-red-600"}
                `}
                {...getFieldProps("phone")}
              />
              <ErrorMessage name="phone" component={TextError} />
            </div>
            {/* email */}
            <div className="flex flex-col items-start">
              <label>Email</label>
              <input
                type="email"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${errors.email && touched.email && "border-2 border-red-600"}
                `}
                placeholder="keviclark123@gmail.com"
                {...getFieldProps("email")}
              />
              <ErrorMessage name="email" component={TextError} />
            </div>
            {/* address */}
            <div className="flex flex-col items-start">
              <label>Address</label>
              <input
                type="text"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors.address && touched.address && "border-2 border-red-600"
                }
                `}
                placeholder="lorem ipsum"
                {...getFieldProps("address")}
              />
              <ErrorMessage name="address" component={TextError} />
            </div>
            {/* postal code and city */}
            <div className="flex items-start justify-between w-full space-x-2">
              <div className="flex flex-col items-start w-full ">
                <label>Postal Code</label>
                <input
                  type="tel"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors.postalcode &&
                    touched.postalcode &&
                    "border-2 border-red-600"
                  }
                  `}
                  placeholder="043534"
                  {...getFieldProps("postalcode")}
                />
                <ErrorMessage name="postalcode" component={TextError} />
              </div>
              <div className="flex flex-col items-start w-full ">
                <label>City</label>
                <select
                  {...getFieldProps("city")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${errors.city && touched.city && "border-2 border-red-600"}
                  `}
                >
                  <option>Locke mills</option>
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
                <label>State</label>
                <input
                  type="tel"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${errors.state && touched.state && "border-2 border-red-600"}
                  `}
                  placeholder="Maine"
                  {...getFieldProps("state")}
                />
                <ErrorMessage name="state" component={TextError} />
              </div>
              <div className="flex flex-col items-start w-full ">
                <label>Country</label>
                <select
                  {...getFieldProps("country")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${errors.country && touched.city && "border-2 border-red-600"}
                  `}
                >
                  <option>canada</option>
                  <option>india</option>
                  <option>usa</option>
                  <option>china</option>
                  <option>russia</option>
                </select>
                <ErrorMessage name="country" component={TextError} />
              </div>
            </div>
            {/* modify button */}
            <button
              type="submit"
              className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
            >
              {loading ? "updating..." : "Modify"}
            </button>
          </div>
        </Form>
      </FormikProvider>
      <Footer />
    </div>
  );
};

export default Profile;
