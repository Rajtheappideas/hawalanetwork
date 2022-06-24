import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [senderDetails, setSenderDetails] = useState(null);
  const [receiverDetails, setReceiverDetails] = useState(null);
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setSenderDetails,
        setReceiverDetails,
        senderDetails,
        receiverDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
