// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: "Dineshkumar", email: "dinesh@example.com" },
    { id: 2, name: "Divya Dineshkumar", email: "divya@example.com" },
    { id: 3, name: "Darwin Divya Dinesh", email: "darwin@example.com" },
  ]);

  return (
    <>
      <UserContext.Provider value={users}>{children}</UserContext.Provider>
    </>
  );
};
