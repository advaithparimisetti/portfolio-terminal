import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';
import { useTerminal } from '../../context/TerminalContext';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const { logout } = useTerminal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  return (
    <div className="h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-4 text-xs uppercase tracking-wider text-zinc-400 select-none z-50 relative">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-green-500 font-bold">
          <Wifi size={14} /> CONNECTED
        </span>
        <span className="hidden sm:inline">USER: ADVAITH_PARIMISETTI</span>
      </div>
      
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* TIME */}
        <span className="text-orange-400 font-bold font-mono">
          {timeString}
        </span>

        {/* LOGOUT */}
        <button 
          onClick={logout} 
          className="bg-red-900/20 text-red-500 hover:bg-red-600 hover:text-white px-3 py-0.5 text-[10px] border border-red-900/50 transition-colors"
        >
          DISCONNECT
        </button>
      </div>
    </div>
  );
};

export default StatusBar;