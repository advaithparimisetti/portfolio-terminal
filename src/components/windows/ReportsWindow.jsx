// src/components/windows/ReportsWindow.jsx
import React from 'react';
import ModalWrapper from './ModalWrapper';
import { FileText, Download } from 'lucide-react';
import { reports } from '../../data/Portfolio';

const ReportsWindow = () => {
  return (
    <ModalWrapper title="INTELLIGENCE_DOSSIER // REPORTS" width="max-w-4xl">
      <div className="space-y-6 font-mono">
        <div className="border-b border-zinc-800 pb-4 mb-6">
          <h2 className="text-2xl text-white font-bold mb-2">Research & Analysis</h2>
          <p className="text-zinc-400 text-sm">
            ACCESSING ARCHIVED FILES... <span className="text-green-500 animate-pulse">GRANTED</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {reports.map((report) => (
            <div key={report.id} className="group border border-zinc-800 bg-zinc-900/30 p-4 hover:bg-zinc-900 hover:border-orange-500/50 transition-all duration-300 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded group-hover:border-orange-500/30">
                <FileText className="text-orange-500" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-orange-400 bg-orange-950/30 px-2 py-0.5 rounded border border-orange-500/20">
                    {report.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-zinc-500">{report.date}</span>
                </div>
                <h3 className="text-lg text-white font-bold mb-1 group-hover:text-orange-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {report.summary}
                </p>
              </div>
              <a href={report.link} target="_blank" rel="noreferrer" className="shrink-0 flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:bg-orange-600 hover:text-black hover:border-orange-500 text-zinc-300 text-xs font-bold transition-all">
                <Download size={14} />
                OPEN_FILE
              </a>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ReportsWindow;