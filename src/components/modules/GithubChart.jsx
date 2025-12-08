import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Simulated data representing your contribution activity over a year
const data = [
  { name: 'Jan', commits: 20 }, { name: 'Feb', commits: 35 },
  { name: 'Mar', commits: 25 }, { name: 'Apr', commits: 60 },
  { name: 'May', commits: 45 }, { name: 'Jun', commits: 80 },
  { name: 'Jul', commits: 110 }, { name: 'Aug', commits: 95 },
  { name: 'Sep', commits: 130 }, { name: 'Oct', commits: 115 },
  { name: 'Nov', commits: 160 }, { name: 'Dec', commits: 185 },
];

const GithubChart = () => {
  return (
    <div className="h-full w-full bg-zinc-900/50 border border-zinc-700 flex flex-col relative group">
      {/* Header */}
      <div className="bg-black px-3 py-2 text-[10px] text-zinc-500 border-b border-zinc-700 flex justify-between uppercase font-bold tracking-wider">
        <span> GITHUB_ALPHA (YTD)</span>
        <span className="text-green-500 flex items-center gap-1">
          <span className="animate-pulse">●</span> LIVE
        </span>
      </div>
      
      {/* The Chart Container - CRITICAL: needs min-h-0 and flex-1 to fill space */}
      <div className="flex-1 min-h-0 p-2 relative">
         {/* Background Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              {/* The glowing green gradient under the line */}
              <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF41" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00FF41" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0A0C10', border: '1px solid #333', color: '#00FF41', fontSize: '12px' }}
              itemStyle={{ color: '#00FF41' }}
              cursor={{ stroke: '#00FF41', strokeWidth: 1, strokeDasharray: '3 3' }}
            />
            <Area 
              type="monotone" 
              dataKey="commits" 
              stroke="#00FF41" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCommits)" 
              isAnimationActive={true}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Overlay Big Number */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <div className="text-3xl font-bold text-white text-shadow-glow">1,420</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Total Contributions</div>
        </div>
      </div>
    </div>
  );
};

export default GithubChart;