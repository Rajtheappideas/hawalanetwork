import axios from "axios";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import * as yup from "yup";
import { useUserContext } from "../../context/UserContext";

const ReceiverSecondDiv = ({ setShowPaymentDiv, setShowReceiverSecondDiv }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { userData, setReceiverDetails, receiverDetails } = useUserContext();
  // --------------------yup-------------
  const receiverSchema = yup.object().shape({
    hw_reciver_get_money: yup.string().required("please choose any one"),
    receipt: yup.string().required("choose any one"),
  });

  //   formik
  const formik = useFormik({
    initialValues: {
      hw_reciver_get_money: receiverDetails?.hw_reciver_get_money || "",
      receipt: receiverDetails?.recipiets || "",
    },
    validationSchema: receiverSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("hw_reciver_get_money", values.firstname);
      fd.append("recipiets", values.lastname);

      setLoading(true);
      axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/add-reciver-details-2",
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
            setShowPaymentDiv(true);
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

  const Label = tw.label`s
  sm:text-xl mb-2 font-semibold
  `;

  // ------------------error text color tailwind-------------
  const TextError = tw.p`
  text-red-500
  `;
  return (
    <>
      <Toaster />
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
            <div className="text-lg font-semibold text-left">
              <p className="font-bold sm:text-2xl text-xl text-left">
                Receiver
              </p>
              <p className="sm:text-xl">
                You can choose a recipient from your lsit or create a new one.
              </p>
            </div>
            {/* name */}
            <div className="flex flex-col items-start">
              <div className="flex justify-between items-center w-full">
                <p className="sm:text-xl mb-2 font-semibold">Recipients</p>
                <Link to="/newrecipients">
                  <button type="button" className="text-Green font-semibold">
                    + Add new recipient
                  </button>
                </Link>
              </div>
              <select
                name="receipt"
                {...getFieldProps("receipt")}
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  errors?.receipt &&
                  touched?.receipt &&
                  "border-2 border-red-600"
                }
                `}
              >
                <option>Choose a recipient</option>
                <option>Receipt1</option>
                <option>Receipt2</option>
                <option>Receipt3</option>
                <option>Receipt4</option>
              </select>
              <ErrorMessage name="receipt" component={TextError} />
            </div>

            {/* option to choose send money */}
            <div className="flex flex-col items-start">
              <Label>
                How do you want your recipient to receive the money?*
              </Label>
              <select
                name="hw_reciver_get_money"
                className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
 ${errors?.receipt && touched?.receipt && "border-2 border-red-600"}
 `}
                {...getFieldProps("hw_reciver_get_money")}
              >
                <option>select</option>
                <option>Mobile Money</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
                <option>option5</option>
              </select>
              <ErrorMessage name="hw_reciver_get_money" component={TextError} />
            </div>
            {/* next button */}
            <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-2">
              <div className="float-right">
                <button
                  type="button"
                  onClick={() => setShowReceiverSecondDiv(false)}
                  className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
                >
                  Back
                </button>
              </div>
              <div className="float-right">
                <button
                  type="submit"
                  //   onClick={() => setShowPaymentDiv(true)}
                  className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
                >
                  {loading ? "Loading..." : "Next"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default ReceiverSecondDiv;
