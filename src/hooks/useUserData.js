import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const useUserdata = () => {
  const { setUserData, userData } = useUserContext();
  const [loadingGoogle, setLoadingGoogle] = useState(false);


  const navigate = useNavigate();

  const handleFailure = (result) => {
    console.log(result);
  };
  const handleSuccess = (googledata) => {
    try {
      const user = {
        email: googledata.email,
        name: googledata.displayName,
        googleId: googledata.uid,
      };
      setLoadingGoogle(true);
      axios
        .post("https://investigo-tai.herokuapp.com/login", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === "success") {
            localStorage.setItem(
              "user",
              JSON.stringify(googledata?.reloadUserInfo)
            );
            setUserData(googledata?.reloadUserInfo);
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setLoadingGoogle(false);
          }
        })
        .catch((err) => {
          console.log(err?.response);
          setLoadingGoogle(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    axios("https://chessmafia.com/php/HawalaNetwork/App/api/logout", {
      headers: {
        "consumer-access-token": userData?.api_token,
      },
    })
      .then((res) => console.log(res?.data))
      .catch((err) => console.log(err?.resposne));
    localStorage.clear();
    setUserData(null);
    navigate("/");
    // window.location.reload();
  };
  return { handleLogout, handleFailure, handleSuccess, loadingGoogle };
};

export default useUserdata;
