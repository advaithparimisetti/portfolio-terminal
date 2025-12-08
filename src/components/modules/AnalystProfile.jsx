import React from 'react';
import { User, MapPin, Award } from 'lucide-react';

const AnalystProfile = () => {
  return (
    <div className="h-full bg-terminal-panel border border-terminal-border flex flex-col overflow-hidden relative group">
      {/* Header */}
      <div className="bg-terminal-black px-3 py-2 text-[10px] text-terminal-dim border-b border-terminal-border flex justify-between uppercase">
        <span> ANALYST_BIO.TXT</span>
        <span className="text-terminal-green">ACTIVE</span>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto">
        {/* ID Card Style Header */}
        <div className="flex gap-4 items-center border-b border-terminal-border/50 pb-4">
          <div className="w-16 h-16 bg-terminal-dim/10 border border-terminal-amber flex items-center justify-center rounded-sm">
            <User size={32} className="text-terminal-amber opacity-80" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-wider text-terminal-amber">ADVAITH PARIMISETTI</h2>
            <div className="text-xs text-terminal-dim mt-1 font-mono">
              <p>ROLE: QUANT_DEV // FULL_STACK</p>
              <p className="flex items-center gap-1 mt-1"><MapPin size={10} /> VIJAYAWADA, IN</p>
            </div>
          </div>
        </div>

        {/* The "Memo" Text */}
        <div className="text-xs leading-relaxed text-zinc-400 font-mono space-y-3">
          <p>
            <strong className="text-terminal-amber">OBJECTIVE:</strong> Engineering the intersection of Algorithmic Trading and Software Architecture.
          </p>
          <p>
            Leveraging <span className="text-white">Python, Machine Learning, and MERN Stack</span> to automate financial workflows and generate alpha.
          </p>
          <p>
            <strong className="text-terminal-amber">CURRENT STATUS:</strong> Developing autonomous agents for equity research and optimizing portfolio risk models.
          </p>
        </div>

        {/* Badges */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 border border-terminal-green text-terminal-green text-[10px] flex items-center gap-1 bg-terminal-green/5">
            <Award size={10} /> GLOBAL CASE WINNER '25
          </span>
          <span className="px-2 py-1 border border-terminal-dim text-terminal-dim text-[10px]">
            CS UNDERGRAD
          </span>
        </div>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-terminal-amber"></div>
    </div>
  );
};

export default AnalystProfile;