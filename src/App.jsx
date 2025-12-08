import React from 'react';
import { TerminalProvider, useTerminal } from './context/TerminalContext';
import LoginScreen from './components/layout/LoginScreen';
import TerminalShell from './components/layout/TerminalShell';

const Main = () => {
  const { isLoggedIn } = useTerminal();
  return (
    <>
      <div className="scanlines"></div>
      {isLoggedIn ? <TerminalShell /> : <LoginScreen />}
    </>
  );
};

function App() {
  return (
    <TerminalProvider>
      <Main />
    </TerminalProvider>
  );
}

export default App;