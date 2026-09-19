import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { profileData } from '../../data/profile';

interface TopHeaderProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenMobileMenu,
  isMobileMenuOpen,
}) => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Works', path: '/works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full px-6 sm:px-12 md:px-16 lg:px-20 py-6 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Left Side: Brand Name & Direct Theme Icon */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-lg md:text-xl font-bold tracking-tight text-light-text dark:text-dark-text hover:opacity-80 transition-opacity"
          >
            {profileData.name}
          </Link>

          {/* Inline Quick Icon Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-1.5 rounded-full text-light-text/70 dark:text-dark-text/70 hover:text-accent-dynamic transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-accent-mint transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Right Side: Desktop Navigation & Full Theme Button */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-accent-dynamic font-semibold'
                      : 'text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-dynamic rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Theme Switcher Button Text */}
          <button
            onClick={toggleTheme}
            className="group flex items-center gap-2 text-sm font-medium text-light-text/80 dark:text-dark-text/80 hover:text-accent-dynamic transition-colors pl-4 border-l border-black/10 dark:border-white/10"
          >
            <span>{theme === 'dark' ? 'Light Version' : 'Dark Version'}</span>
            <span className="text-xs transition-transform group-hover:rotate-180 duration-300">
              {theme === 'dark' ? '☼' : '☾'}
            </span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-accent-mint" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            className="p-2 rounded-md text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};
