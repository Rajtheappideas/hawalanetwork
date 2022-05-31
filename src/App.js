import React, { lazy, Suspense } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lottie from "react-lottie";
import Loader from "./assets/animations/Loader.json";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";

// import using lazy components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Contactus = lazy(() => import("./pages/Contactus"));
const TermsAndPolicy = lazy(() => import("./pages/TermsAndPolicy"));
const Profile = lazy(() => import("./pages/Profile"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Recipients = lazy(() => import("./pages/Recipients"));
const EditRecipient = lazy(() => import("./pages/EditRecipient"));
const NewRecipient = lazy(() => import("./pages/NewRecipient"));
const TransactionHistory = lazy(() => import("./pages/TransactionHistory"));
const SendMoney = lazy(() => import("./pages/SendMoney"));
const MobileBanking = lazy(() => import("./pages/MobileBanking"));
const TransactionStatus = lazy(() => import("./pages/TransactionStatus"));
const Error404 = lazy(() => import("./pages/Error404"));

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense
          fallback={
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/termsandpolicy" element={<TermsAndPolicy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/editrecipients" element={<EditRecipient />} />
            <Route path="/newrecipients" element={<NewRecipient />} />
            <Route
              path="/transactionhistory"
              element={<TransactionHistory />}
            />
            <Route path="/sendmoney" element={<SendMoney />} />
            <Route path="/mobilebanking" element={<MobileBanking />} />
            <Route path="/transactionstatus" element={<TransactionStatus />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
