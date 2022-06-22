import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { PaymentSuccess } from "..";
import { Form, FormikProvider, ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

const Payment = ({
  setShowPaymentDiv,
  isSuccessPayment,
  setisSuccessPayment,
}) => {
  const [loading, setLoading] = useState(false);

  const { userData } = useUserContext();

  const navigate = useNavigate();
  // --------------------yup-------------
  const receiverSchema = yup.object().shape({
    agent_code: yup.number().required("agent code is required").min(4,"agent code should be 4 numbers"),
    reasone_for_tranfer: yup
      .string()
      .required("lastname is required")
      .min(2, "too short")
      .max(30, "too long"),
  });

  // --------------------------formik-------------

  const formik = useFormik({
    initialValues: {
      reasone_for_tranfer: "",
      agent_code: "",
    },
    validationSchema: receiverSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("reasone_for_tranfer", values.reasone_for_tranfer);
      fd.append("agent_code", values.agent_code);

      setLoading(true);
      axios
        .post(
          "https://chessmafia.com/php/HawalaNetwork/App/api/add-reciver-details-3",
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
            setisSuccessPayment(true);
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
  text-xl mb-2 font-semibold
  `;

  return (
    <>
      <Toaster />
      {isSuccessPayment ? (
        <PaymentSuccess />
      ) : (
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 pb-10">
              <div className="text-lg font-semibold text-left">
                <p className="font-bold text-2xl text-left">Payment</p>
                How would you like to pay for your transaction?*
              </div>
              {/* transfer reason */}
              <div className="flex flex-col items-start">
                <Label>Reason For Transfer*</Label>
                <select
                  name="reasone_for_tranfer"
                  {...getFieldProps("reasone_for_tranfer")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
${
  errors?.reasone_for_tranfer &&
  touched?.reasone_for_tranfer &&
  "border-2 border-red-600"
}
`}
                >
                  <option>select</option>
                  <option>Friend Support</option>
                  <option>option1</option>
                  <option>option2</option>
                  <option>option3</option>
                  <option>option4</option>
                </select>
                <ErrorMessage
                  name="reasone_for_tranfer"
                  component={TextError}
                />
              </div>

              {/* agent code */}
              <div className="flex flex-col items-start">
                <Label>
                  Agent Code{" "}
                  <span className="text-gray-300 text-xs">
                    (Enter the agent code if you want to go through a particular
                    agent)
                  </span>
                </Label>
                <input
                  type="tel"
                  minLength={4}
                  maxLength={4}
                  placeholder="XXXX"
                  name="agent_code"
                  {...getFieldProps("agent_code")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
              ${
                errors?.agent_code &&
                touched?.agent_code &&
                "border-2 border-red-600"
              }
              `}
                />
                <ErrorMessage name="agent_code" component={TextError} />
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
                    onClick={() => setShowPaymentDiv(false)}
                    className="border border-Red w-40 h-12 text-Red text-center rounded-lg"
                  >
                    Back
                  </button>
                </div>
                <div className="float-right">
                  <button
                    type="submit"
                    // onClick={() => setisSuccessPayment(true)}
                    className="bg-Green active:scale-95 duration-100 ease-in-out transition-all text-white w-40 h-12 text-center rounded-lg"
                  >
                    {loading ? "Loading..." : "Send"}
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

export default Payment;
