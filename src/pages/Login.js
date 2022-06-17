import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import tw from "tailwind-styled-components";
import background from "../assets/background.png";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Form, FormikProvider, useFormik, ErrorMessage } from "formik";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userData, setUserData } = useUserContext();

  const navigate = useNavigate();
  // -------------------------------yup---------------------------
  const SignInSchema = yup.object().shape({
    username: yup.string().required("email is required").email(),
    password: yup.string().required("password is required"),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      const user = {
        username: values.username,
        password: values.password,
      };
      await axios
        .post("https://chessmafia.com/php/HawalaNetwork/App/api/login", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {
            window.localStorage.setItem(
              "user",
              JSON.stringify(res?.data?.data?.result)
            );
            setUserData(res?.data?.data?.result);
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
          if (error == "Credentials mismatch") {
            toast.error("Credentials mismatch", {
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

  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Toaster />
      <Navbar />
      <div className="relative">
        <img
          src={background}
          className="w-full h-96 object-cover object-center -z-10"
        />
        <h1 className="absolute font-bold text-3xl top-[45%] left-1/2 text-white -translate-x-1/2">
          Login
        </h1>
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div className="h-auto lg:w-1/2 w-[90%] mx-auto bg-white shadow-lg sm:p-10 p-3 sm:space-y-5 space-y-2 absolute top-[60%] left-1/2 -translate-x-1/2">
              <p className="text-xl font-semibold text-center">
                Enter your credential to access your account
              </p>
              {/* email */}
              <div className="flex flex-col items-start">
                <label>Email*</label>
                <input
                  type="email"
                  name="username"
                  {...getFieldProps("username")}
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  touched.username &&
                  errors.username &&
                  "border-4 border-red-400"
                }
                `}
                  placeholder="type here..."
                />
                <ErrorMessage name="username" component={TextError} />
              </div>
              {/* password */}
              <div className="flex flex-col items-start relative">
                <label>Password*</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={`w-full p-4 bg-LightGray border border-black rounded-lg outline-none
                ${
                  touched.password &&
                  errors.password &&
                  "border-4 border-red-400"
                }
                `}
                  {...getFieldProps("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-10"
                >
                  {showPassword ? (
                    <EyeIcon className="h-6" />
                  ) : (
                    <EyeOffIcon className="h-6" />
                  )}
                </button>{" "}
                <ErrorMessage name="password" component={TextError} />
              </div>
              <Link to="/forgotpassword">
                <button type="button" className="float-right text-Red">
                  Forgot password?
                </button>
              </Link>
              <button
                type="submit"
                className="w-full active:scale-95 duration-100 ease-in-out transition-all h-12 text-center text-white bg-Green rounded-lg"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </button>
              <p className="font-medium text-center">
                Do not have an account yet?{" "}
                <Link to="/signup">
                  <span className="text-Red cursor-pointer">
                    Create an account
                  </span>
                </Link>
              </p>
            </div>
          </Form>
        </FormikProvider>
      </div>
      {/* empty div */}
      <div className="sm:h-80 xl:h-[27rem] h-72 w-full bg-white" />
      {/* form */}

      <Footer />
    </div>
  );
};

export default Login;
