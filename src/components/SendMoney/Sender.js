import { ChevronDownIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import tw from "tailwind-styled-components";
import caneda from "../../assets/caneda.png";
import { useUserContext } from "../../context/UserContext";
import { Form, FormikProvider, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Sender = ({ setShowReceiveDiv }) => {
  const [loading, setLoading] = useState(false);

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
    senderPhone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    receiverPhone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    occupation: yup.string().required("occupation is required"),
    birthday: yup.date().required("birthday is required"),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      email: userData?.email || "",
      firstname: userData?.f_name || "",
      lastname: userData?.l_name || "",
      address: userData?.address || "",
      state: userData?.state || "",
      city: userData?.city || "",
      country: userData?.country || "",
      postalcode: userData?.postal_code || "",
      occupation: userData?.occupation || "",
      birthday: userData?.birthday || "",
      senderPhone: userData?.phone || "",
      receiverPhone: "",
    },
    enableReinitialize: true,
    validationSchema: userProfileSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("f_name", values.firstname);
      fd.append("l_name", values.lastname);
      fd.append("email", values.email);
      fd.append("address", values.address);
      fd.append("postal_code", values.postalcode);
      fd.append("city", values.city);
      fd.append("state", values.state);
      fd.append("country", values.country);
      fd.append("occupation", values.occupation);
      fd.append("birthday", values.birthday);
      fd.append("senders_phone", values.senderPhone);
      fd.append("receiver_phone", values.receiverPhone);

      setLoading(true);
      axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/add-sender-details",
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
            console.log();
            // toast.success(response?.data?.message, {
            //   duration: 2000,
            //   style: {
            //     width: "500px",
            //     background: "black",
            //     color: "white",
            //     fontSize: "large",
            //   },
            //   position: "top-center",
            // });
            setShowReceiveDiv(true);
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
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
            <div className="text-lg font-semibold text-left">
              <p className="font-bold sm:text-3xl text-xl text-left">Sender</p>
              {/* You do not need to complete this form if you have an account.
        <Link to="/login">
          <button type="button" className="text-Red">
            Login
          </button>{" "}
        </Link>
        here */}
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
            {/* address */}
            <div className="flex flex-col items-start">
              <Label>Address*</Label>
              <input
                type="text"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors?.address &&
                  touched?.address &&
                  "border-2 border-red-600"
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
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors?.postalcode &&
                    touched?.postalcode &&
                    "border-2 border-red-600"
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
            </div>
            {/* state and country */}
            <div className="flex items-start justify-between w-full space-x-2">
              <div className="flex flex-col items-start w-full ">
                <Label>State*</Label>
                <input
                  type="tel"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                  ${
                    errors?.state && touched?.state && "border-2 border-red-600"
                  }
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
 ${errors?.country && touched?.country && "border-2 border-red-600"}
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
                name="email"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
 ${errors?.email && touched?.email && "border-2 border-red-600"}
 `}
                placeholder="type here..."
                {...getFieldProps("email")}
              />
              <ErrorMessage name="email" component={TextError} />
            </div>
            {/* Occupation */}
            <div className="flex flex-col items-start">
              <Label>Occupation</Label>
              <select
                name="occupation"
                {...getFieldProps("occupation")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
${errors?.occupation && touched?.occupation && "border-2 border-red-600"}
`}
              >
                <option>Choose an Occupation</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
                <option>option5</option>
              </select>
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
                  errors?.birthday &&
                  touched?.birthday &&
                  "border-2 border-red-600"
                }
                `}
              />
            </div>
            {/*sender phone */}
            <div className="flex flex-col items-start relative">
              <Label>Sender's Phone*</Label>
              <input
                type="tel"
                maxLength={10}
                name="senderPhone"
                {...getFieldProps("senderPhone")}
                className={`w-full  py-4 pl-24 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors?.senderPhone &&
                  touched?.senderPhone &&
                  "border-2 border-red-600"
                }
                `}
                placeholder="+1"
              />
              <div className="absolute top-12 left-2 flex items-center">
                <img src={caneda} className="h-7 mr-1" />
                <ChevronDownIcon className="h-5" />
              </div>
              <ErrorMessage name="senderPhone" component={TextError} />
            </div>
            {/*upload photo */}
            {/* <div className="flex flex-col items-start">
        <Label>Upload a file?</Label>
        <div className="relative w-full">
          <div className="flex justify-between items-center absolute top-0 right-1 h-full p-1 w-full">
            <p className="pl-4 text-lg font-semibold">Select File</p>
            <button
              type="button"
              className="w-28  bg-gray-200 h-full text-center rounded-lg"
            >
              Browse
            </button>
          </div>
          <div className="w-full z-50 h-16 bg-LightGray cursor-pointer border border-black rounded-lg outline-none">
            <input
              type="file"
              className="w-full opacity-0 h-full cursor-pointer"
            />
          </div>
        </div>
      </div> */}
            {/* checkbox */}
            {/* <div className="flex items-center">
        <input type="checkbox" className="h-7 w-7 bg-Green rounded-lg mr-2" />
        <p className="capitalize font-normal text-xl">Create account</p>
      </div> */}
            {/* password */}
            {/* <div className="flex flex-col items-start">
        <Label>Password*</Label>
        <input
          type="password"
          className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
        />
      </div> */}
            {/* confirm password */}
            {/* <div className="flex flex-col items-start">
        <Label>Confirm Password*</Label>
        <input
          type="password"
          className="w-full p-4 bg-LightGray border border-black rounded-lg outline-none"
        />
      </div> */}

            {/*receive phone */}
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
                <option>Mobile Money</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
                <option>option5</option>
              </select>
            </div>
            {/* next button */}
            <div className="float-right">
              <button
                type="submit"
                // onClick={() => setShowReceiveDiv(true)}
                className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
              >
                {loading ? "Loading..." : "Next"}
              </button>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default Sender;
