import React from 'react';
import { X, Maximize2, Minus } from 'lucide-react';
import { useTerminal } from '../../context/TerminalContext';

const ModalWrapper = ({ title, children, width = "max-w-2xl" }) => {
  const { closeWindow } = useTerminal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Window Frame */}
      <div className={`w-full ${width} bg-black border border-zinc-700 shadow-[0_0_40px_rgba(255,165,0,0.15)] flex flex-col animate-in fade-in zoom-in-95 duration-200`}>
        
        {/* Window Title Bar */}
        <div className="h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-3 select-none">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {title}
          </span>
          <div className="flex gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors"><Minus size={14} /></button>
            <button className="text-zinc-500 hover:text-white transition-colors"><Maximize2 size={12} /></button>
            <button onClick={closeWindow} className="text-zinc-500 hover:text-red-500 transition-colors"><X size={14} /></button>
          </div>
        </div>

        {/* Window Content */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {children}
        </div>

        {/* Status Footer */}
        <div className="h-6 bg-zinc-900 border-t border-zinc-700 flex items-center px-3 text-[10px] text-zinc-500 justify-between">
          <span>MODE: READ_ONLY</span>
          <span>SECURE_CONNECTION</span>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;