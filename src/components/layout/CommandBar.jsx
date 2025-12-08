import React, { useState } from 'react';
import { useTerminal } from '../../context/TerminalContext';

const CommandBar = () => {
  const [input, setInput] = useState("");
  const { openWindow, logout } = useTerminal();

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toUpperCase();
      
      switch(cmd) {
        case 'HELP':
        case 'MANUAL':
          openWindow('help'); // Changed from alert()
          break;
        case 'BIO':
        case 'ABOUT':
          // You could open a bio modal, or just let them read the left panel
          alert("Analyst Profile is active on Left Monitor.");
          break;
        case 'PROJECTS':
        case 'PORTFOLIO':
          // Focus is already on center, but we could add highlighting
          break;
        case 'CONTACT':
        case 'HIRE':
        case 'EMAIL': 
          openWindow('contact'); // <--- THIS OPENS THE FORM
          break;
        case 'LOGOUT':
        case 'EXIT':
          logout();
          break;
        default:
          console.log("Unknown Command");
      }
      setInput(""); 
    }
  };

  return (
    <div className="h-10 bg-black border-t border-zinc-700 flex items-center px-4 shrink-0">
      <span className="mr-3 text-orange-500 font-bold animate-pulse">{`>`}</span>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="ENTER COMMAND (TRY 'CONTACT')..." 
        className="bg-transparent border-none outline-none text-orange-500 w-full uppercase placeholder-zinc-700 font-mono text-sm"
        autoFocus
      />
    </div>
  );
};

export default CommandBar;