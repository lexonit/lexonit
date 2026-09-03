import React from 'react';
import { motion } from 'framer-motion';

export const TopProgressBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 overflow-hidden pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-emerald-400"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        style={{ width: '60%' }}
      />
    </div>
  );
};

export const PageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 py-12 px-6 overflow-hidden">
      <TopProgressBar />

      {/* Ambient background glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl animate-pulse">
        {/* Hero Skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Pill Badge */}
            <div className="h-8 w-44 rounded-full bg-slate-200 dark:bg-slate-800/80" />

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="h-12 md:h-14 w-4/5 rounded-2xl bg-slate-200 dark:bg-slate-800/80" />
              <div className="h-12 md:h-14 w-3/5 rounded-2xl bg-slate-200 dark:bg-slate-800/80" />
            </div>

            {/* Description lines */}
            <div className="space-y-2 pt-2 max-w-lg">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800/60" />
              <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800/60" />
              <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800/60" />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-12 w-44 rounded-2xl bg-slate-300 dark:bg-slate-700/80" />
              <div className="h-12 w-36 rounded-2xl bg-slate-200 dark:bg-slate-800/60" />
            </div>
          </div>

          {/* Right Column: Card / Mockup Skeleton */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[400px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2">
                  <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800/60" />
                </div>
              </div>

              <div className="space-y-3 py-6">
                <div className="h-14 w-4/5 rounded-2xl bg-slate-100 dark:bg-slate-800/50" />
                <div className="h-14 w-3/4 ml-auto rounded-2xl bg-violet-100/50 dark:bg-violet-900/20" />
                <div className="h-10 w-2/3 rounded-2xl bg-slate-100 dark:bg-slate-800/50" />
              </div>

              <div className="h-12 rounded-xl bg-slate-100 dark:bg-slate-800/60" />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid Skeleton */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800" />
                <div className="h-5 w-3/5 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-slate-100 dark:bg-slate-800/60" />
                  <div className="h-3 w-4/5 rounded bg-slate-100 dark:bg-slate-800/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
