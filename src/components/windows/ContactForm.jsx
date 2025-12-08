import React from 'react';
import ModalWrapper from './ModalWrapper';
import { Mail, Linkedin, Github, Globe, Copy } from 'lucide-react';

const ContactItem = ({ label, value, icon: Icon, href, copy }) => (
  <div className="flex items-center justify-between p-3 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-orange-500/50 transition-all group">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-black border border-zinc-700 rounded-sm text-orange-500">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{label}</div>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-orange-400 decoration-1 underline-offset-4 hover:underline">
            {value}
          </a>
        ) : (
          <span className="text-sm font-bold text-white">{value}</span>
        )}
      </div>
    </div>
    {/* Optional: Copy Button logic could go here */}
  </div>
);

const ContactForm = () => {
  return (
    <ModalWrapper title="CONTACT_DETAILS // CARD" width="max-w-lg">
      <div className="space-y-4 font-mono">
        <div className="text-center mb-6">
          <div className="inline-block p-1 border border-green-500/50 rounded-full mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-xl font-bold text-white">OPEN FOR OPPORTUNITIES</h2>
          <p className="text-xs text-zinc-500">AVAILABLE FOR: QUANT DEV / FULL STACK / FINTECH</p>
        </div>

        <div className="grid gap-2">
          <ContactItem 
            label="Direct Email" 
            value="advaithparimisetti@gmail.com" 
            icon={Mail} 
            href="mailto:advaithparimisetti@gmail.com"
          />
          <ContactItem 
            label="LinkedIn Network" 
            value="linkedin.com/in/advaith-parimisetti" 
            icon={Linkedin} 
            href="https://www.linkedin.com/in/advaith-parimisetti"
          />
          <ContactItem 
            label="GitHub Repository" 
            value="github.com/advaithparimisetti" 
            icon={Github} 
            href="https://github.com/advaithparimisetti"
          />
          <ContactItem 
            label="Location" 
            value="Vijayawada, India (Open to Remote)" 
            icon={Globe} 
          />
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4 text-center">
          <p className="text-[10px] text-zinc-600">
            SECURE COMM CHANNEL: ENCRYPTED
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ContactForm;