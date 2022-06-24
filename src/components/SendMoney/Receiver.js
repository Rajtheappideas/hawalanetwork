import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import caneda from "../../assets/caneda.png";
import { useUserContext } from "../../context/UserContext";
import { Form, FormikProvider, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReceiverSecondDiv from "./ReceiverSecondDiv";

const Receiver = ({
  setShowReceiveDiv,
  showReceiverSecondDiv,
  setShowReceiverSecondDiv,
  setShowPaymentDiv,
}) => {
  const [loading, setLoading] = useState(false);
  const { userData, setReceiverDetails, receiverDetails } = useUserContext();

  const navigate = useNavigate();
  // --------------------yup-------------
  const receiverSchema = yup.object().shape({
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
    city: yup.string().required("city is required"),
    receiverPhone: yup
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
      firstname: receiverDetails?.f_name || "",
      lastname: receiverDetails?.l_name || "",
      city: receiverDetails?.city || "",
      receiverPhone: receiverDetails?.phone_no || "",
    },
    validationSchema: receiverSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("f_name", values.firstname);
      fd.append("l_name", values.lastname);
      fd.append("city", values.city);
      fd.append("phone_no", values.receiverPhone);
      fd.append("payment_method", "Bank transfer");

      setLoading(true);
      axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/add-reciver-details-1",
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
            console.log(response?.data);
            setReceiverDetails(response?.data?.data?.reciver_info);
            setShowReceiverSecondDiv(true);
            setLoading(false);
            return true;
          }
        })
        .catch((err) => {
          console.log(err?.response?.data);
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
  const Label = tw.label`
  sm:text-xl mb-2 font-semibold
  `;

  return (
    <>
      <Toaster />
      {showReceiverSecondDiv ? (
        <ReceiverSecondDiv
          setShowPaymentDiv={setShowPaymentDiv}
          setShowReceiverSecondDiv={setShowReceiverSecondDiv}
        />
      ) : (
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5  absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
              <div className="text-lg font-semibold text-left">
                <p className="font-bold sm:text-2xl text-xl text-left">
                  Receiver
                </p>
                {/* You do not need to complete this form if you have an account.{" "}
            <Link to="/login">
              <button type="button" className="text-Red">
                Login
              </button>{" "}
            </Link>
            here */}
              </div>
              {/* name */}
              <div className="flex flex-col items-start">
                <Label>Receiver's name*</Label>
                <div className="flex items-center justify-between w-full space-x-2">
                  <div className="w-full">
                    <input
                      type="text"
                      className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors?.firstname &&
                    touched?.firstname &&
                    "border-2 border-red-600"
                  }
                  `}
                      placeholder="First name"
                      name="firstname"
                      {...getFieldProps("firstname")}
                    />
                    <ErrorMessage name="firstname" component={TextError} />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                    ${
                      errors?.lastname &&
                      touched?.lastname &&
                      "border-2 border-red-600"
                    }
                    `}
                      placeholder="Last name"
                      name="lastname"
                      {...getFieldProps("lastname")}
                    />
                    <ErrorMessage name="lastname" component={TextError} />
                  </div>
                </div>
              </div>

              {/*  city */}
              <div className="flex flex-col items-start w-full ">
                <Label>City*</Label>
                <select
                  {...getFieldProps("city")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${errors?.city && touched?.city && "border-2 border-red-600"}
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

              {/*Receiver phone */}
              <div className="flex flex-col items-start relative">
                <Label>Receiver's Phone*</Label>
                <input
                  type="tel"
                  maxLength={10}
                  {...getFieldProps("receiverPhone")}
                  className={`w-full  py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors?.receiverPhone &&
                  touched?.receiverPhone &&
                  "border-2 border-red-600"
                }
                `}
                  placeholder="+1"
                />
                <div className="absolute top-12 left-2 flex items-center">
                  <img src={caneda} className="h-7 mr-1" />
                  <ChevronDownIcon className="h-5" />
                </div>
                <ErrorMessage name="receiverPhone" component={TextError} />
              </div>

              {/* option to choose send money */}
              <div className="flex flex-col items-start">
                <Label>
                  How do you want your recipient to receive the money?*
                </Label>
                <select className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none">
                  <option>select</option>
                  <option>Mobile Money</option>
                  <option>option2</option>
                  <option>option3</option>
                  <option>option4</option>
                  <option>option5</option>
                </select>
              </div>
              {/* next button */}
              <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-2">
                <div className="float-right">
                  <button
                    type="button"
                    onClick={() => setShowReceiveDiv(false)}
                    className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
                  >
                    Back
                  </button>
                </div>
                <div className="float-right">
                  <button
                    type="submit"
                    onClick={() => {
                      // setShowReceiverSecondDiv(true);
                    }}
                    className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
                  >
                    {loading ? "Loading.." : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </FormikProvider>
      )}
    </>
  );
};

export default React.memo(Receiver);
