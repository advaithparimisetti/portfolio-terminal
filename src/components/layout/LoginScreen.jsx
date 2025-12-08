import React, { useState } from 'react';
import { Lock, ShieldCheck, ChevronRight, Terminal } from 'lucide-react';
import { useTerminal } from '../../context/TerminalContext';

const LoginScreen = () => {
  const { login } = useTerminal();
  const [loading, setLoading] = useState(false);

  const handleAccess = () => {
    setLoading(true);
    setTimeout(login, 1500); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-orange-500 font-mono relative overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Main Login Card */}
      <div className="z-10 w-full max-w-md p-8 border border-zinc-800 bg-zinc-900/90 backdrop-blur shadow-[0_0_50px_rgba(255,165,0,0.1)]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 gap-4">
          <div className="p-4 border border-orange-500/50 rounded-full bg-orange-500/10 shadow-[0_0_15px_rgba(255,165,0,0.3)] animate-pulse">
            <Lock size={32} className="text-orange-500" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-widest text-orange-500 text-shadow-glow">
              $ADVP TERMINAL
            </h1>
            <p className="text-xs text-zinc-500 mt-2 tracking-wider">
              SECURE ACCESS PORTAL // V.3.0.1
            </p>
          </div>
        </div>

        {/* Status Box */}
        <div className="mb-6 p-3 bg-black border border-zinc-800 text-xs text-zinc-400 font-mono">
          <p className="flex justify-between"><span>STATUS:</span> <span className="text-green-500">ONLINE</span></p>
          <p className="flex justify-between"><span>ENCRYPTION:</span> <span>TLS 1.3 (256-BIT)</span></p>
          <p className="flex justify-between"><span>IP_ADDR:</span> <span>192.168.X.X</span></p>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAccess}
          disabled={loading}
          className="w-full group relative overflow-hidden border border-orange-500 bg-orange-500/5 text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-200 py-4 font-bold tracking-wider flex items-center justify-center gap-3"
        >
          {/* Button content */}
          {loading ? (
            <span className="animate-pulse">ESTABLISHING UPLINK...</span>
          ) : (
            <>
              <Terminal size={18} />
              <span>INITIATE SESSION</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </>
          )}
        </button>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-between text-[10px] text-zinc-600 uppercase">
          <span className="flex items-center gap-1">
            <ShieldCheck size={12} /> Authorized Personnel Only
          </span>
          <span>ID: GUEST_ADMIN</span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;