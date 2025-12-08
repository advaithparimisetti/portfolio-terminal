import React from 'react';
import ModalWrapper from './ModalWrapper';

const commands = [
  { cmd: 'BIO / ABOUT', desc: 'Open Analyst Profile' },
  { cmd: 'PROJECTS', desc: 'View Portfolio Holdings' },
  { cmd: 'CONTACT', desc: 'Display Contact Information' },
  { cmd: 'HELP', desc: 'Show this manual' },
  { cmd: 'EXIT', desc: 'Terminate Session' },
];

const HelpModal = () => {
  return (
    <ModalWrapper title="SYSTEM_MANUAL // V.3.0.1" width="max-w-md">
      <div className="space-y-4 font-mono text-xs">
        <div className="bg-zinc-900 border border-zinc-700 p-3 text-zinc-400">
          <p>WELCOME TO THE ADVAITH PARIMISETTI PORTFOLIO TERMINAL.</p>
          <p className="mt-2 text-white">NAVIGATE USING MOUSE CLICKS OR TERMINAL COMMANDS.</p>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-700 text-zinc-500">
              <th className="py-2 pl-2">COMMAND</th>
              <th className="py-2">FUNCTION</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {commands.map((c, i) => (
              <tr key={i} className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                <td className="py-2 pl-2 font-bold text-orange-500">{c.cmd}</td>
                <td className="py-2">{c.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModalWrapper>
  );
};

export default HelpModal;