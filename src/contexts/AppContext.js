import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentTaskTime, setCurrentTaskTime] = useState(0);
  const [selectedTask, setSelectedTask] = useState();
  return (
    <AppContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        currentTaskTime,
        setCurrentTaskTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
