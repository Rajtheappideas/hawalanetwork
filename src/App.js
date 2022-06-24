import React, { lazy, Suspense } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lottie from "react-lottie";
import Loader from "./assets/animations/Loader.json";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
import { UserProvider } from "./context/UserContext";

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
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
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
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/termsandpolicy" element={<TermsAndPolicy />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route
                path="/recipients"
                element={
                  <PrivateRoute>
                    <Recipients />
                  </PrivateRoute>
                }
              />
              <Route
                path="/editrecipients/:id"
                element={
                  <PrivateRoute>
                    <EditRecipient />
                  </PrivateRoute>
                }
              />
              <Route
                path="/newrecipients"
                element={
                  <PrivateRoute>
                    <NewRecipient />
                  </PrivateRoute>
                }
              />
              <Route
                path="/transactionhistory"
                element={
                  <PrivateRoute>
                    <TransactionHistory />
                  </PrivateRoute>
                }
              />
              <Route
                path="/sendmoney"
                element={
                  <PrivateRoute>
                    <SendMoney />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mobilebanking"
                element={
                  <PrivateRoute>
                    <MobileBanking />
                  </PrivateRoute>
                }
              />
              <Route
                path="/transactionstatus"
                element={
                  <PrivateRoute>
                    <TransactionStatus />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </UserProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
