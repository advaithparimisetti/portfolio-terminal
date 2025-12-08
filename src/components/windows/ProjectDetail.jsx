import React from 'react';
import ModalWrapper from './ModalWrapper';
import { ExternalLink, Github, Layers, Cpu, Activity } from 'lucide-react';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <ModalWrapper title={`ASSET_DETAIL: ${project.ticker}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        
        {/* Left Col: Key Stats */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl text-white font-bold mb-1">{project.name}</h2>
            <div className="flex gap-4 text-xs text-zinc-400">
              <span className="bg-zinc-800 px-2 py-1 rounded text-orange-400 border border-zinc-700">{project.sector}</span>
              <span className="flex items-center gap-1"><Activity size={12}/> VOL: HIGH</span>
            </div>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/30 p-4">
            <h3 className="text-xs text-zinc-500 uppercase mb-2 border-b border-zinc-800 pb-1">Executive Summary</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div>
            <h3 className="text-xs text-zinc-500 uppercase mb-3 flex items-center gap-2">
              <Layers size={12} /> Tech Stack Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-green-400 text-xs font-bold">
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Performance & Actions */}
        <div className="space-y-4">
          <div className="bg-black border border-zinc-700 p-4 text-center">
            <div className="text-xs text-zinc-500 mb-1">PERFORMANCE (ROI)</div>
            <div className="text-3xl font-bold text-green-500 text-shadow-glow">{project.change}</div>
            <div className="text-[10px] text-zinc-600 mt-1">VS MARKET AVG</div>
          </div>

          <div className="space-y-2 pt-4 border-t border-zinc-800">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-500 text-black font-bold py-2 text-sm transition-all"
            >
              <Github size={16} /> VIEW SOURCE
            </a>
            
            {/* Only show Live Demo if a link exists */}
            {project.demo ? (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white py-2 text-sm transition-all cursor-pointer"
              >
                <ExternalLink size={16} /> LIVE DEMO
              </a>
            ) : (
              <button disabled className="flex items-center justify-center gap-2 w-full border border-zinc-800 text-zinc-600 py-2 text-sm cursor-not-allowed opacity-50">
                <ExternalLink size={16} /> DEMO OFFLINE
              </button>
            )}
          </div>

          <div className="text-[10px] text-zinc-600 font-mono mt-4">
            <p>ID: {project.ticker}</p>
            <p>LAST_UPDATED: T-2 DAYS</p>
            <p>RATING: STRONG BUY</p>
          </div>
        </div>

      </div>
    </ModalWrapper>
  );
};

export default ProjectDetail;