import React, { createContext, useState, useContext } from 'react';

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null); // 'bio', 'contact', 'project'
  const [modalData, setModalData] = useState(null); // Stores the specific project object

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  
  const openWindow = (windowName, data = null) => {
    setActiveWindow(windowName);
    if (data) setModalData(data);
  };
  
  const closeWindow = () => {
    setActiveWindow(null);
    setModalData(null);
  };

  return (
    <TerminalContext.Provider value={{ 
      isLoggedIn, 
      login, 
      logout, 
      activeWindow, 
      modalData,
      openWindow, 
      closeWindow 
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => useContext(TerminalContext);