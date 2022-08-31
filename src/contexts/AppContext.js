import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => console.log(time), [time]);
  return (
    <AppContext.Provider
      value={{
        time,
        setTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
