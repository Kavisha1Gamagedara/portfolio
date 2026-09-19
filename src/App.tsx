import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundGrid } from './components/layout/BackgroundGrid';
import { TopHeader } from './components/layout/TopHeader';
import { BottomFooter } from './components/layout/BottomFooter';
import { SocialRail } from './components/layout/SocialRail';
import { MobileMenu } from './components/layout/MobileMenu';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { WorksPage } from './pages/WorksPage';
import { BlogPage } from './pages/BlogPage';
import { ContactsPage } from './pages/ContactsPage';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0e0f12] text-[#111215] dark:text-[#ffffff] transition-colors duration-300 overflow-x-hidden selection:bg-accent-dynamic/20 selection:text-accent-dynamic">
      {/* Reset Scroll position on route change */}
      <ScrollToTop />

      {/* Subtle Architectural Column Grid Lines across entire page */}
      <BackgroundGrid />

      {/* Top Header with Name, quick icon toggle, Nav links and Dark/Light Version button */}
      <TopHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Far-Right Vertical "Follow Me" Rail */}
      <SocialRail />

      {/* Main Content Area with Smooth Page Route Transitions */}
      <main className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Left Email and Copyright */}
      <BottomFooter />
    </div>
  );
};

export default App;
