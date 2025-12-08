import React, { useState, useEffect } from 'react';
import { Rss, Zap } from 'lucide-react';

// A pool of headlines to randomly select from
const headlinePool = [
  { source: 'MKT_DATA', text: 'Tech sector sees higher volatility ahead of earnings.' },
  { source: 'GITHUB', text: 'Advaith pushed 3 commits to "Equity-Engine" repo.' },
  { source: 'ALERT', text: 'Portfolio delta neutral achieved.' },
  { source: 'SYSTEM', text: 'Latency optimized to <20ms on main dashboard.' },
  { source: 'ANALYSIS', text: 'DCF model updated with latest risk-free rate parameters.' },
  { source: 'LINKEDIN', text: 'Profile viewed by recruiter from top-tier Quant firm.' },
];

// Initial static data
const initialNews = [
  { time: '14:02', source: 'AWARDS', text: 'WINNER: Global Case Study Competition 2025.' },
  { time: '11:30', source: 'ACADEMIC', text: 'Achieved 1st Prize in District Inter-Collegiate Quiz.' },
  { time: '09:15', source: 'CERT', text: 'Investment Banker Micro Degree (Financial Edge) - In Progress.' },
  { time: 'YEST', source: 'DEV', text: 'Deployed "ShelfBound" v2.0 with GraphQL API.' },
];

const NewsFeed = () => {
  const [news, setNews] = useState(initialNews);

  // Effect to simulate live incoming news every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeadline = headlinePool[Math.floor(Math.random() * headlinePool.length)];
      const newEntry = {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: randomHeadline.source,
        text: randomHeadline.text,
        isNew: true // Flag to add a highlight effect
      };
      // Add new item to top, keep only latest 6
      setNews(prev => [newEntry, ...prev.slice(0, 5)]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-zinc-900/50 border border-zinc-700 flex flex-col overflow-hidden">
      <div className="bg-black px-3 py-2 text-[10px] text-zinc-500 border-b border-zinc-700 flex justify-between uppercase font-bold tracking-wider">
        <span> NEWS_WIRE (REALTIME)</span>
        <Rss size={12} className="text-orange-500" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
        <div className="flex flex-col">
          {news.map((item, i) => (
            <div key={i} className={`flex flex-col gap-1 p-3 border-b border-zinc-800/50 text-xs hover:bg-white/5 transition-colors ${item.isNew ? 'animate-pulse bg-orange-500/10' : ''}`}>
              <div className="flex justify-between items-center text-[10px] font-mono">
                 <span className="text-zinc-500">{item.time}</span>
                 <span className={`font-bold ${item.isNew ? 'text-orange-400' : 'text-orange-600/70'}`}>
                    {item.isNew && <Zap size={10} className="inline mr-1 fill-orange-400"/>}
                    [{item.source}]
                 </span>
              </div>
              <span className="text-zinc-300 leading-tight">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;