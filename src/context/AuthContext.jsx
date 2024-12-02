import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (username) => {
    setUser({ username, profilePicture: null }); 
  };

  const logout = () => {
    setUser(null); 
  };

  const updateProfilePicture = (picture) => {
    setUser((prevUser) => ({ ...prevUser, profilePicture: picture }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfilePicture }}>
      {children}
    </AuthContext.Provider>
  );
};
