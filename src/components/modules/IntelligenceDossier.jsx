import React from 'react';
import { ShieldAlert, FileText, ExternalLink } from 'lucide-react';
import { reports } from '../../data/Portfolio';

const IntelligenceDossier = () => {
  return (
    <div className="flex flex-col h-full bg-black text-xs font-mono">
      {/* Panel Header */}
      <div className="h-8 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-4 justify-between shrink-0">
        <span className="text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
          <ShieldAlert size={12} className="text-blue-500" />
          INTELLIGENCE_DOSSIER
        </span>
        <span className="text-[10px] text-zinc-600 flex items-center gap-2">
          <span>SECURE</span>
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
        </span>
      </div>

      {/* List Container */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
        {reports.map((report, index) => (
          <a 
            key={index}
            href={report.link}
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center justify-between p-2 hover:bg-zinc-900 border border-transparent hover:border-zinc-700 cursor-pointer transition-all duration-200"
          >
            {/* Left Side: Icon & Info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-zinc-950 border border-zinc-800 text-blue-500 group-hover:text-white group-hover:border-blue-500/30 transition-colors">
                <FileText size={12} />
              </div>
              <div>
                <div className="text-zinc-300 font-bold group-hover:text-blue-400 transition-colors truncate w-32 md:w-48">
                  {report.title}
                </div>
                <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                  <span>{report.category}</span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span>{report.date}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Status/Action */}
            <div className="text-right pl-2">
              <div className="text-blue-500 font-bold flex items-center justify-end gap-1 group-hover:text-white transition-colors">
                <ExternalLink size={10} />
                VIEW REPORT
              </div>
              <div className="text-[10px] text-zinc-600">ACCESS</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceDossier;