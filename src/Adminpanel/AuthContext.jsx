
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const logout = () => {
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
