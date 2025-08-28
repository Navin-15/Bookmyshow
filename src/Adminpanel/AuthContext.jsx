
// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [username, setUsername] = useState(null);

//   const logout = () => {
//     setUsername(null);
//   };

//   return (
//     <AuthContext.Provider value={{ username, setUsername, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [username, setUsername] = useState('');

//   return (
//     <AuthContext.Provider value={{ username, setUsername }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/Adminpanel/AuthContext.jsx

//final

import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
