import React from 'react';
import { useTerminal } from '../../context/TerminalContext';
import ProjectHoldings from '../modules/ProjectHoldings';
import AnalystProfile from '../modules/AnalystProfile';
import NewsFeed from '../modules/NewsFeed';
import GithubChart from '../modules/GithubChart';
import SkillTicker from '../modules/SkillTicker';
import IntelligenceDossier from '../modules/IntelligenceDossier';
import ProjectDetail from '../windows/ProjectDetail'; 
import ContactForm from '../windows/ContactForm';
import HelpModal from '../windows/HelpModal';
import ReportsWindow from '../windows/ReportsWindow'; 
import CommandBar from './CommandBar'; 
import StatusBar from './StatusBar';

const hoverStyles = "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,153,0,0.15)] hover:border-orange-500/50 hover:bg-zinc-900 hover:z-10";

const TerminalShell = () => {
  const { activeWindow, modalData, openWindow } = useTerminal();

  return (
    <div className="h-screen flex flex-col bg-black text-orange-500 font-mono overflow-hidden selection:bg-orange-500/30">
      <StatusBar />

      <div className="flex-1 p-4 gap-4 grid grid-cols-12 grid-rows-12 min-h-0 relative z-0">
        
        {/* LEFT COLUMN */}
        <div className="col-span-12 md:col-span-3 row-span-12 flex flex-col gap-4">
          <div className={`flex-[2] min-h-0 border border-zinc-800 bg-zinc-900/40 ${hoverStyles}`}>
            <AnalystProfile />
          </div>
          <div className={`flex-1 min-h-0 border border-zinc-800 bg-zinc-900/40 relative ${hoverStyles}`}>
            <GithubChart />
          </div>
        </div>

        {/* CENTER COLUMN (Balanced 50/50 Split) */}
        <div className="col-span-12 md:col-span-6 row-span-12 flex flex-col gap-4">
          {/* Ticker */}
          <div className={`h-12 shrink-0 border border-zinc-800 bg-zinc-900/40 ${hoverStyles}`}>
            <SkillTicker />
          </div>
          
          {/* Projects: Now flex-1 for equal height */}
          <div className={`flex-1 min-h-0 border border-zinc-800 bg-zinc-900/40 ${hoverStyles}`}>
            <ProjectHoldings />
          </div>
          
          {/* Reports: Now flex-1 for equal height */}
          <div className={`flex-1 min-h-0 border border-zinc-800 bg-zinc-900/40 ${hoverStyles}`}>
            <IntelligenceDossier />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-3 row-span-12 flex flex-col gap-4">
          <div className={`flex-[2] min-h-0 border border-zinc-800 bg-zinc-900/40 ${hoverStyles}`}>
            <NewsFeed />
          </div>
          <div className={`flex-1 bg-black border border-zinc-800 p-4 text-xs font-mono text-green-500/80 flex flex-col ${hoverStyles}`}>
            <div className="mb-2 border-b border-zinc-800 pb-1 text-zinc-500 uppercase flex justify-between items-center">
              <span>System Log</span>
              <button onClick={() => openWindow('help')} className="text-[10px] text-orange-500 hover:text-white flex items-center gap-1 cursor-pointer transition-colors">[?] HELP</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1">
              <p> Initializing portfolio...</p>
              <p> Fetching github data...</p>
              <p> Connection secure.</p>
              <p className="animate-pulse"> Waiting for input...</p>
            </div>
          </div>
        </div>

      </div>

      {activeWindow === 'project' && modalData && <ProjectDetail project={modalData} />}
      {activeWindow === 'contact' && <ContactForm />}
      {activeWindow === 'help' && <HelpModal />}
      {activeWindow === 'reports' && <ReportsWindow />}

      <CommandBar />
    </div>
  );
};

export default TerminalShell;
