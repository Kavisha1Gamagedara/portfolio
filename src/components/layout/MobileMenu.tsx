import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Works', path: '/works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-white dark:bg-[#121318] border-l border-black/10 dark:border-white/10 p-8 flex flex-col justify-between lg:hidden shadow-2xl"
          >
            {/* Top Bar inside drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/5 dark:border-white/10">
                <span className="font-bold text-lg">{profileData.name}</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-5 mt-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `text-xl font-semibold transition-colors ${
                        isActive
                          ? 'text-accent-dynamic pl-2 border-l-2 border-accent-dynamic'
                          : 'text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Theme Toggle Button */}
              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10">
                <button
                  onClick={() => {
                    toggleTheme();
                  }}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors font-medium text-sm"
                >
                  <span>{theme === 'dark' ? 'Light Version' : 'Dark Version'}</span>
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-accent-mint" />
                  ) : (
                    <Moon className="w-4 h-4 text-neutral-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Drawer Footer with Socials & Email */}
            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col gap-4">
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs text-light-muted dark:text-dark-muted hover:text-accent-dynamic transition-colors"
              >
                E: {profileData.email}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/kavisha-gamagedara-4513kavi"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:text-accent-dynamic transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:text-accent-dynamic transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
