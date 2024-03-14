import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = (username) => {
    setSelectedUser(username);
    setIsLoggedIn(true)
  };

  const signOut = () => {
    setSelectedUser(null);
    setIsLoggedIn(false)
  };

  return (
    <UserContext.Provider value={{ selectedUser, isLoggedIn, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
