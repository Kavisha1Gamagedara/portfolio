import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { Check, Copy } from 'lucide-react';

export const BottomFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="fixed bottom-0 left-0 z-40 px-6 sm:px-12 md:px-16 lg:px-20 py-6 pointer-events-none">
      <div className="flex flex-col gap-1 pointer-events-auto">
        {/* Email Click to Copy */}
        <div className="flex items-center gap-2 group">
          <span className="text-xs sm:text-sm text-light-muted dark:text-dark-muted font-normal">
            E:
          </span>
          <button
            onClick={handleCopyEmail}
            className="text-xs sm:text-sm font-medium text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors flex items-center gap-1.5 focus:outline-none"
            title="Click to copy email"
          >
            <span>{profileData.email}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-accent-dynamic" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
              )}
            </span>
          </button>
          {copied && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-accent-dynamic bg-accent-dynamic/10 px-1.5 py-0.5 rounded">
              Copied!
            </span>
          )}
        </div>

        {/* Copyright Attribution */}
        <div className="text-[11px] sm:text-xs text-light-muted/80 dark:text-dark-muted/80 tracking-wide">
          © {profileData.name} {profileData.copyrightYear} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
