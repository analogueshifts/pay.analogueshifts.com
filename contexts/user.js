import React, { createContext, useContext, useState } from 'react';

// Create a Context for the user
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Provider component to wrap your application
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the user object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
