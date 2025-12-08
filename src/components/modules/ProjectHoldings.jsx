import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/Portfolio';
import { useTerminal } from '../../context/TerminalContext'; // Import context

const ProjectHoldings = () => {
  const { openWindow } = useTerminal(); // Get the function

  return (
    <div className="h-full flex flex-col bg-zinc-900/50 border border-zinc-700 overflow-hidden">
      {/* ... Header stays the same ... */}
      <div className="bg-black px-3 py-2 text-xs border-b border-zinc-700 flex justify-between items-center text-orange-500 font-bold uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          PORTFOLIO_HOLDINGS
        </span>
        <span className="text-zinc-500">LIVE MARKET DATA</span>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead className="text-zinc-500 bg-black sticky top-0 uppercase font-mono">
            <tr>
              <th className="p-3 border-b border-zinc-800">Ticker</th>
              <th className="p-3 border-b border-zinc-800">Asset Name</th>
              <th className="p-3 border-b border-zinc-800 text-right">Tech Stack</th>
              <th className="p-3 border-b border-zinc-800 text-right">ROI</th>
              <th className="p-3 border-b border-zinc-800 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="font-mono text-zinc-300 divide-y divide-zinc-800">
            {projects.map((p, i) => (
              <tr 
                key={i} 
                onClick={() => openWindow('project', p)} // Click row to open modal
                className="hover:bg-orange-500/10 transition-colors group cursor-pointer"
              >
                <td className="p-3 font-bold text-orange-400 group-hover:underline">{p.ticker}</td>
                <td className="p-3 font-medium text-white">{p.name}</td>
                <td className="p-3 text-right text-zinc-400 font-mono text-[10px]">{p.tech.slice(0,2).join(" / ")}</td>
                <td className="p-3 text-right text-green-400 font-bold">{p.change}</td>
                <td className="p-3 text-center">
                  <button className="inline-flex items-center gap-1 text-[10px] bg-zinc-800 hover:bg-orange-500 hover:text-black px-2 py-1 rounded border border-zinc-600 transition-all">
                    ANALYZE <ArrowUpRight size={10} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectHoldings;