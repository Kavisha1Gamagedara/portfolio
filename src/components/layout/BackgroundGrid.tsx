import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex justify-between px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 w-full h-full max-w-[1920px] mx-auto opacity-70"
      aria-hidden="true"
    >
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05]" />
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05]" />
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05] hidden sm:block" />
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05] hidden md:block" />
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05] hidden lg:block" />
      <div className="w-[1px] h-full bg-black/[0.04] dark:bg-white/[0.05]" />
    </div>
  );
};
