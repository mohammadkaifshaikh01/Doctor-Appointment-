import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 const [isAuth , setISAuth] = useState(localStorage.getItem("token") ? true : false)
 const [user , setUser] = useState(localStorage.getItem("user"))
 const [token, setToken] = useState(localStorage.getItem("token"))
  const currencySymbol = "$";

  console.log("User from Context and localStorage", user)
  
  const value = {
    doctors,
    currencySymbol,
    isAuth,
    setISAuth,
    token, setToken,
    user , setUser
    
   
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
