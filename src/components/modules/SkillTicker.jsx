import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const skills = [
  { sym: 'PYTHON', val: '98.4', delta: '+2.4%', trend: 'up' },
  { sym: 'REACT', val: '45.2', delta: '+1.1%', trend: 'up' },
  { sym: 'FIN_MODEL', val: '102.0', delta: '+5.3%', trend: 'up' },
  { sym: 'ML/AI', val: '88.1', delta: '-0.2%', trend: 'down' },
  { sym: 'EQ_RESEARCH', val: '74.5', delta: '+12.8%', trend: 'up' },
  { sym: 'SQL', val: '67.9', delta: '0.0%', trend: 'flat' },
  { sym: 'DCF_VAL', val: '12.4', delta: '+1.5%', trend: 'up' },
  { sym: 'MONGODB', val: '41.2', delta: '-0.5%', trend: 'down' },
  { sym: 'ANALYSIS', val: '82.0', delta: '+5.3%', trend: 'up' },
];

const SkillItem = ({ s }) => {
  const color = s.trend === 'up' ? 'text-green-500' : s.trend === 'down' ? 'text-red-500' : 'text-zinc-400';
  const Icon = s.trend === 'up' ? TrendingUp : s.trend === 'down' ? TrendingDown : Minus;
  
  return (
    <div className="flex items-center gap-2 px-4 border-r border-zinc-700/50">
      <span className="font-bold text-orange-500">{s.sym}</span>
      <span className="text-zinc-300">{s.val}</span>
      <span className={`flex items-center gap-1 ${color}`}>
        {s.delta} <Icon size={12} />
      </span>
    </div>
  );
};

const SkillTicker = () => {
  // We double the list to create a seamless infinite loop effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="h-full bg-black border-b border-zinc-800 flex items-center overflow-hidden relative">
       {/* The fading edges effect */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
      
      {/* The animating container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicatedSkills.map((s, i) => (
          <SkillItem key={i} s={s} />
        ))}
      </div>
    </div>
  );
};

export default SkillTicker;