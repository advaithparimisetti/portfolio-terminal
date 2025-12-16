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
          openWindow('help');
          break;
        case 'BIO':
        case 'ABOUT':
          alert("Analyst Profile is active on Left Monitor.");
          break;
        case 'PROJECTS':
        case 'PORTFOLIO':
          break;
        case 'REPORTS':   // <--- NEW COMMAND
        case 'RESEARCH':  // <--- NEW COMMAND
        case 'DOCS':      // <--- NEW COMMAND
          openWindow('reports');
          break;
        case 'CONTACT':
        case 'HIRE':
        case 'EMAIL': 
          openWindow('contact');
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
        placeholder="ENTER COMMAND (TRY 'REPORTS')..." 
        className="bg-transparent border-none outline-none text-orange-500 w-full uppercase placeholder-zinc-700 font-mono text-sm"
        autoFocus
      />
    </div>
  );
};

export default CommandBar;
