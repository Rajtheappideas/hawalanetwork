import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import background from "../assets/background.png";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import * as yup from "yup";
import tw from "tailwind-styled-components";

const NewRecipient = () => {
  const [loading, setLoading] = useState(false);
  const { userData } = useUserContext();

  const navigate = useNavigate();

  // -------------------------------yup---------------------------
  const newReceiptSchema = yup.object().shape({
    email: yup.string().required().email(),
    firstname: yup.string().required().min(3, "too short").max(30, "too long"),
    lastname: yup.string().required().min(2, "too short").max(30, "too long"),
    city: yup.string().required(),
    country: yup.string().required(),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required(),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      city: "",
      email: "",
      country: "",
      phone: "",
    },
    validationSchema: newReceiptSchema,
    onSubmit: async (values) => {
      const user = {
        f_name: values.firstname,
        l_name: values.lastname,
        email: values.email,
        phone: values.phone,
        city: values.city,
        country: values.country,
      };
      setLoading(true);
      await axios
        .post(
          "  https://chessmafia.com/php/HawalaNetwork/App/api/add-recipts",
          user,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "consumer-access-token": userData?.api_token,
            },
          }
        )
        .then((res) => {
          if (res.data.status === "Success") {
            toast.success("New Receipt Created", {
              duration: 2000,
              style: {
                width: "500px",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
            navigate("/recipients");
            setLoading(false);
          }
        })
        .catch((err) => {
          const error = err?.response?.data?.message;
          if (err?.response?.data?.status == "Error") {
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
            setLoading(false);
          } else {
            return true;
          }
        });
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  // -------------------input errror text color--------------
  const TextError = tw.p`
  text-red-500
  `;
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;
  return (
    <div>
      <Helmet>
        <title>New Recipients</title>
      </Helmet>
      <Toaster />
      <Navbar />
      {/* back image */}
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-2xl sm:text-5xl sm:top-[45%] top-1/3 whitespace-nowrap left-1/2 text-white -translate-x-1/2">
          New Recipient
        </h1>
      </div>
      {/* empty div */}
      <div className="h-screen w-full bg-white" />
      {/* form */}
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="h-auto w-[70%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2">
            <p className="text-xl font-semibold text-left">
              Create a new recipient by filling out the below form
            </p>
            {/* country */}
            <div className="flex flex-col items-start w-full ">
              <Label>Country*</Label>
              <select
                name="country"
                {...getFieldProps("country")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
 ${errors?.country && touched?.country && "border-[3px] border-red-400"}
 `}
              >
                <option>select</option>
                <option>india</option>
                <option>usa</option>
                <option>china</option>
                <option>russia</option>
              </select>
              {/* <ErrorMessage name="country" component={TextError} /> */}
            </div>
            {/* name */}
            <div className="flex flex-col items-start">
              <Label>Sender's name*</Label>
              <div className="flex items-center justify-between w-full space-x-2">
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors?.firstname &&
                    touched?.firstname &&
                    "border-[3px] border-red-400"
                  }
                  `}
                    placeholder="First name"
                    name="firstname"
                    {...getFieldProps("firstname")}
                  />
                  {/* <ErrorMessage name="firstname" component={TextError} /> */}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                    ${
                      errors?.lastname &&
                      touched?.lastname &&
                      "border-[3px] border-red-400"
                    }
                    `}
                    placeholder="Last name"
                    name="lastname"
                    {...getFieldProps("lastname")}
                  />
                  {/* <ErrorMessage name="lastname" component={TextError} /> */}
                </div>
              </div>
            </div>
            {/* phone */}
            <div className="flex flex-col items-start relative">
              <Label>Phone*</Label>
              <input
                type="tel"
                maxLength={10}
                name="phone"
                {...getFieldProps("phone")}
                className={`w-full  p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors?.phone &&
                  touched?.phone &&
                  "border-[3px] border-red-400"
                }
                `}
                placeholder="type here..."
              />
              {/* <ErrorMessage name="phone" component={TextError} /> */}
            </div>
            {/* email */}
            <div className="flex flex-col items-start">
              <Label>Email*</Label>
              <input
                type="email"
                name="email"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
 ${errors?.email && touched?.email && "border-[3px] border-red-400"}
 `}
                placeholder="type here..."
                {...getFieldProps("email")}
              />
              {/* <ErrorMessage name="email" component={TextError} /> */}
            </div>
            {/* city */}
            <div className="flex flex-col items-start w-full ">
              <Label>City*</Label>
              <select
                {...getFieldProps("city")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors?.city &&
                    touched?.city &&
                    "border-[3px] border-red-400"
                  }
                  `}
              >
                <option>select</option>
                <option>city1</option>
                <option>city2</option>
                <option>city3</option>
                <option>city4</option>
              </select>
              {/* <ErrorMessage name="city" component={TextError} /> */}
            </div>
            {/* modify button */}
            <button
              type="submit"
              className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
            >
              {loading ? "submitting..." : "Create"}
            </button>
          </div>
        </Form>
      </FormikProvider>
      <Footer />
    </div>
  );
};

export default NewRecipient;
