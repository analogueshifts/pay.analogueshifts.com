import React, { createContext, useContext, useState } from 'react';

// Create a Context for the user
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  
  // Check if context is undefined, which could indicate that the provider is missing
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
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
