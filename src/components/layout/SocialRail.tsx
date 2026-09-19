import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const SocialRail: React.FC = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kavisha-gamagedara-4513kavi',
      icon: FaLinkedinIn,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Kavisha1Gamagedara',
      icon: FaGithub,
    },
  ];

  return (
    <aside
      className="hidden md:flex fixed right-4 lg:right-6 xl:right-8 bottom-8 z-40 flex-col items-center gap-6 select-none"
      aria-label="Social media connections"
    >
      {/* Rotated Vertical Follow Me Label */}
      <span className="writing-mode-vertical text-[11px] font-semibold tracking-widest uppercase text-light-muted dark:text-dark-muted rotate-180">
        Follow Me
      </span>

      {/* Subtle Vertical Hairline */}
      <div className="w-[1px] h-10 bg-black/10 dark:bg-white/15" />

      {/* Social Icons Stack */}
      <div className="flex flex-col items-center gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-1.5 text-light-text/70 dark:text-dark-text/70 hover:text-accent-dynamic transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          );
        })}
      </div>
    </aside>
  );
};
