
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  Bot, Zap, Globe, Filter, BarChart3, Mail, Target,
  ArrowRight, Star, CheckCircle, Users, RefreshCw,
  TrendingUp, Chrome, Send, ShieldCheck, Briefcase, MousePointerClick
} from 'lucide-react';

interface AutoHirULandingProps {
  onNavigate: (path: string) => void;
}

// ─── Floating particle background ────────────────────────────────
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: ((i * 3) % 4) + 2,
          height: ((i * 3) % 4) + 2,
          left: `${(i * 17) % 100}%`,
          top: `${(i * 23) % 100}%`,
          background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#64748b',
          opacity: 0.4,
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, (i % 2 === 0 ? 10 : -10), 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3 + (i % 4),
          repeat: Infinity,
          delay: (i * 0.3) % 3,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// ─── Generic 3D tilt panel (replaces phone mockups with dashboard UI) ──
const TiltPanel = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className={`relative group cursor-default ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
};

// ─── Feature Card ─────────────────────────────────────────────────
const FeatureCard = ({
  icon: Icon, title, desc, color, delay
}: { icon: React.ElementType; title: string; desc: string; color: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 overflow-hidden cursor-default shadow-sm dark:shadow-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
};

// ─── Stats counter ────────────────────────────────────────────────
const Counter = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = to / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// ─── Job-match mini card (used in hero dashboard + job matching stack) ──
const PLATFORM_STYLES: Record<string, string> = {
  LinkedIn: 'bg-blue-600',
  Naukri: 'bg-fuchsia-600',
  Indeed: 'bg-indigo-600',
  Monster: 'bg-teal-600',
};

const JobMatchCard = ({ company, role, match, platform }: { company: string; role: string; match: number; platform: string }) => (
  <div className="flex items-center gap-3 bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 rounded-xl p-3 shadow-sm">
    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
      {company.slice(0, 2).toUpperCase()}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-slate-900 dark:text-white text-sm font-semibold truncate">{role}</p>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className={`text-[9px] font-semibold text-white px-1.5 py-0.5 rounded ${PLATFORM_STYLES[platform]}`}>{platform}</span>
        <span className="text-slate-400 dark:text-slate-500 text-xs">{company}</span>
      </div>
    </div>
    <div className="flex flex-col items-end flex-shrink-0">
      <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold">{match}%</span>
      <span className="text-[9px] text-slate-400">match</span>
    </div>
  </div>
);

// ─── Hero autopilot dashboard mockup ──────────────────────────────
const AutopilotDashboard = () => (
  <div className="relative w-[300px] sm:w-[340px] rounded-3xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 shadow-2xl shadow-blue-500/20 overflow-hidden">
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
          <Bot size={14} className="text-white" />
        </div>
        <span className="text-slate-900 dark:text-white text-sm font-bold">AutoHirU</span>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 text-[10px] font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Autopilot ON
      </div>
    </div>

    <div className="px-5 pt-5 pb-4">
      <p className="text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-widest font-semibold mb-1">Applications sent today</p>
      <p className="text-4xl font-black text-slate-900 dark:text-white">
        <Counter to={47} />
      </p>
    </div>

    <div className="px-5 pb-5 space-y-2.5">
      <JobMatchCard company="Nimbus Tech" role="Frontend Engineer" match={96} platform="LinkedIn" />
      <JobMatchCard company="Vertex Labs" role="Product Designer" match={91} platform="Naukri" />
      <JobMatchCard company="Orbit Systems" role="Data Analyst" match={88} platform="Indeed" />
    </div>
  </div>
);

// ─── Platform sync row (multi-platform auto-apply section) ────────
const PlatformRow = ({ name, count, pct }: { name: string; count: number; pct: number }) => (
  <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${PLATFORM_STYLES[name]}`} />
        <span className="text-slate-900 dark:text-white text-sm font-semibold">{name}</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 font-semibold">Synced</span>
      </div>
      <span className="text-slate-500 dark:text-slate-400 text-xs">{count} sent</span>
    </div>
    <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-full rounded-full ${PLATFORM_STYLES[name]}`}
      />
    </div>
  </div>
);

// ─── Browser-window mockup wrapper (for "See it in Action") ───────
const BrowserPanel = ({ url, label, children }: { url: string; label: string; children: React.ReactNode }) => (
  <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-[#0d1424] shadow-lg dark:shadow-none" style={{ height: 340 }}>
    <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-100 dark:bg-white/[0.04] border-b border-slate-200 dark:border-white/10">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 text-center text-[10px] text-slate-400 dark:text-slate-500 truncate px-4 py-0.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
        {url}
      </div>
    </div>
    <div className="p-4 h-[calc(100%-72px)] overflow-hidden">{children}</div>
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
      <p className="text-white text-[11px] font-semibold text-center leading-snug">{label}</p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────
const AutoHirULandingPage: React.FC<AutoHirULandingProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const FEATURES = [
    { icon: Bot, title: 'AI Resume Matching', desc: 'Your resume is scored against every job description so only the best-fit roles get an application.', color: 'bg-blue-600', delay: 0 },
    { icon: Zap, title: 'One-Click Auto-Apply', desc: 'Turn on autopilot and AutoHirU applies to matching jobs for you, instantly and around the clock.', color: 'bg-purple-600', delay: 0.1 },
    { icon: Globe, title: 'Multi-Platform Sync', desc: 'Connect LinkedIn, Naukri, Indeed and more — apply everywhere from a single dashboard.', color: 'bg-sky-600', delay: 0.2 },
    { icon: Filter, title: 'Smart Job Filters', desc: 'Set role, location, salary and seniority once — AutoHirU only applies to jobs that truly fit.', color: 'bg-indigo-600', delay: 0.3 },
    { icon: BarChart3, title: 'Application Tracking', desc: 'See every application\'s status in real time — applied, viewed, responded or interviewing.', color: 'bg-violet-600', delay: 0.4 },
    { icon: Mail, title: 'Auto Follow-Up', desc: 'Polite, automated follow-up messages are sent to recruiters if there\'s no response in a few days.', color: 'bg-teal-600', delay: 0.5 },
    { icon: Target, title: 'ATS Optimization', desc: 'Your resume is auto-tailored with the right keywords so it clears applicant tracking systems.', color: 'bg-blue-700', delay: 0.6 },
    { icon: TrendingUp, title: 'Analytics Dashboard', desc: 'Track response rate, interview rate and your fastest-growing job source at a glance.', color: 'bg-purple-700', delay: 0.7 },
  ];

  const STATS = [
    { value: 250000, suffix: '+', label: 'Applications Sent' },
    { value: 3, suffix: 'x', label: 'More Interviews' },
    { value: 12, suffix: '+', label: 'Job Platforms' },
    { value: 24, suffix: '/7', label: 'Autopilot' },
  ];

  const HOW_IT_WORKS = [
    { num: '1', title: 'Connect Your Profile', desc: 'Upload your resume and connect your LinkedIn, Naukri and other job accounts in minutes.', icon: Users },
    { num: '2', title: 'Set Job Preferences', desc: 'Tell AutoHirU your target role, location, salary range and remote preference.', icon: Filter },
    { num: '3', title: 'AI Matches & Applies', desc: 'Our AI scans thousands of listings and auto-applies to the ones that fit you best.', icon: Bot },
    { num: '4', title: 'Track Every Application', desc: 'Watch applications move from Applied to Viewed to Interview in one live dashboard.', icon: BarChart3 },
    { num: '5', title: 'Auto Follow-Up', desc: 'AutoHirU nudges recruiters automatically if an application goes quiet.', icon: RefreshCw },
    { num: '6', title: 'Land Interviews', desc: 'Get notified the moment a recruiter responds — so you never miss a chance.', icon: CheckCircle },
  ];

  const ACTION_PANELS = [
    {
      url: 'autohiru.app/jobs',
      label: 'AI Job Feed — Ranked by Match',
      content: (
        <div className="space-y-2">
          <JobMatchCard company="Nimbus Tech" role="Frontend Engineer" match={96} platform="LinkedIn" />
          <JobMatchCard company="Vertex Labs" role="Product Designer" match={91} platform="Naukri" />
          <JobMatchCard company="Bright Robotics" role="Backend Engineer" match={89} platform="Indeed" />
          <JobMatchCard company="Cobalt Data" role="QA Engineer" match={85} platform="Monster" />
        </div>
      ),
    },
    {
      url: 'autohiru.app/apply',
      label: 'Instant Auto-Apply Checklist',
      content: (
        <div className="space-y-3 pt-2">
          {['Resume tailored to job', 'ATS keywords matched', 'Cover letter generated', 'Application submitted'].map((step) => (
            <div key={step} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle size={11} className="text-emerald-500 dark:text-emerald-400" />
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-sm">{step}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      url: 'autohiru.app/tracker',
      label: 'Live Application Tracker',
      content: (
        <div className="grid grid-cols-2 gap-2 h-full">
          {[
            { label: 'Applied', count: 128, color: 'bg-blue-500' },
            { label: 'Viewed', count: 54, color: 'bg-purple-500' },
            { label: 'Interview', count: 12, color: 'bg-violet-500' },
            { label: 'Offer', count: 3, color: 'bg-emerald-500' },
          ].map((col) => (
            <div key={col.label} className="bg-slate-50 dark:bg-white/5 rounded-lg p-2.5 flex flex-col">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">{col.label}</span>
              </div>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{col.count}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      url: 'autohiru.app/analytics',
      label: 'Response & Interview Analytics',
      content: (
        <div className="flex items-end justify-between h-full gap-2 px-1 pb-2">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-violet-400"
              />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* ──── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(139,92,246,0.15),transparent)]" />
        <FloatingParticles />

        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="bg-white rounded-xl px-3 py-2 shadow-lg">
                  <img src="/autohiru-logo.png" alt="AutoHirU" className="h-7 sm:h-8 w-auto object-contain" />
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Autopilot · Live
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
              >
                Get Hired.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-400">
                  On Autopilot.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                AutoHirU auto-applies to jobs for you across LinkedIn, Naukri and other platforms — matched to your profile, tracked in one dashboard, so you can focus on interviews instead of applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              >
                {[
                  { icon: Bot, label: 'AI-Matched Applications', color: 'text-blue-400' },
                  { icon: Zap, label: 'One-Click Auto-Apply', color: 'text-violet-400' },
                  { icon: Globe, label: 'LinkedIn, Naukri & More', color: 'text-sky-400' },
                  { icon: BarChart3, label: 'Real-Time Tracking', color: 'text-indigo-400' },
                  { icon: RefreshCw, label: 'Automated Follow-Ups', color: 'text-teal-400' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className={color} />
                    </div>
                    <span className="text-slate-300 text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('/contact')}
                  className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-violet-500 text-white rounded-xl font-bold text-sm shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Get Started Free <ArrowRight size={16} />
                </motion.button>

                <motion.a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300"
                >
                  <Chrome size={20} className="text-white" />
                  <span className="text-white font-bold text-sm">Add to Chrome — It's Free</span>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">4.9 · 8,000+ job seekers</span>
              </motion.div>
            </div>

            {/* Right: Autopilot dashboard mockup */}
            <div className="order-1 lg:order-2 flex justify-center items-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {[220, 300, 380, 460].map((size, i) => (
                  <motion.div
                    key={size}
                    className="absolute rounded-full border border-blue-500/20"
                    style={{ width: size, height: size }}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <AutopilotDashboard />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

      {/* ──── STATS ─────────────────────────────────────────────── */}
      <section className="py-20 border-y border-slate-200 dark:border-white/10 bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FEATURES ──────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-slate-50 dark:bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">Everything You Need</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Your Job Search,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Automated</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              AI-matched applications, multi-platform sync, and real-time tracking — all in one powerful dashboard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">Simple & Powerful</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              How It{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ num, title, desc, icon: Icon }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-slate-200 dark:text-white/5 select-none">{num}</div>
                <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── AI JOB MATCHING ───────────────────────────────────── */}
      <section className="py-28 overflow-hidden bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-blue-500 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">AI Job Matching</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Only Apply to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Jobs That Fit
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Our AI reads every job description and scores it against your resume and preferences — so AutoHirU only applies where you actually have a shot.
              </p>
              <div className="space-y-4">
                {[
                  'Resume-to-job match scoring in real time',
                  'Filters out roles below your target seniority or salary',
                  'Learns from every application\'s outcome',
                  'You stay in control — pause or adjust filters anytime',
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <TiltPanel delay={0.1} className="max-w-[360px] mx-auto">
              <div className="space-y-3">
                <JobMatchCard company="Nimbus Tech" role="Frontend Engineer" match={96} platform="LinkedIn" />
                <JobMatchCard company="Vertex Labs" role="Product Designer" match={91} platform="Naukri" />
                <JobMatchCard company="Bright Robotics" role="Backend Engineer" match={89} platform="Indeed" />
                <JobMatchCard company="Cobalt Data" role="QA Engineer" match={85} platform="Monster" />
              </div>
            </TiltPanel>
          </div>
        </div>
      </section>

      {/* ──── MULTI-PLATFORM AUTO-APPLY ─────────────────────────── */}
      <section className="py-28 overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <TiltPanel delay={0} className="order-2 lg:order-1 max-w-[400px] mx-auto w-full">
              <div className="bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-2xl shadow-blue-500/10 space-y-3">
                <PlatformRow name="LinkedIn" count={128} pct={82} />
                <PlatformRow name="Naukri" count={94} pct={64} />
                <PlatformRow name="Indeed" count={61} pct={48} />
                <PlatformRow name="Monster" count={37} pct={30} />
                <div className="pt-2 border-t border-slate-100 dark:border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold">Weekly goal</span>
                    <span className="text-slate-900 dark:text-white text-xs font-bold">68%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '68%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-400"
                    />
                  </div>
                </div>
              </div>
            </TiltPanel>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Multi-Platform Auto-Apply</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                One Dashboard.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                  Every Platform.
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Connect LinkedIn, Naukri, Indeed and more — AutoHirU keeps every account synced and applies in the background while you sleep.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Send, label: 'Instant Submit', desc: 'Applications sent in seconds' },
                  { icon: Globe, label: '12+ Platforms', desc: 'LinkedIn, Naukri, Indeed & more' },
                  { icon: RefreshCw, label: 'Always Synced', desc: 'Accounts stay connected 24/7' },
                  { icon: MousePointerClick, label: 'One Setup', desc: 'Connect once, apply forever' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-sm dark:shadow-none">
                    <Icon size={16} className="text-blue-500 dark:text-blue-400 mb-2" />
                    <p className="text-slate-900 dark:text-white font-semibold text-sm mb-0.5">{label}</p>
                    <p className="text-slate-500 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── SEE IT IN ACTION ──────────────────────────────────── */}
      <section className="py-28 bg-slate-100 dark:bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">See It In Action</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              From Job Feed to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Job Offer</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
              A single dashboard for every step of your automated job search.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 items-start">
            {ACTION_PANELS.map(({ url, label, content }, i) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-default"
              >
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/25 to-violet-500/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BrowserPanel url={url} label={label}>{content}</BrowserPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── DOWNLOAD / CTA ────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <FloatingParticles />

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl animate-pulse" />
                <div className="w-20 h-20 rounded-[22px] bg-white relative z-10 shadow-2xl shadow-violet-500/40 flex items-center justify-center p-2.5">
                  <img src="/autohiru-icon.png" alt="AutoHirU" className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Start Applying{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                On Autopilot
              </span>
            </h2>
            <p className="text-slate-400 text-xl mb-4">
              Free to start. Set up in under 2 minutes.
            </p>
            <p className="text-slate-500 text-sm mb-12 italic">"Get Hired on Autopilot"</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                onClick={() => onNavigate('/contact')}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 min-w-[220px] justify-center"
              >
                Get Started Free <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 min-w-[220px] justify-center"
              >
                <Chrome size={22} /> Add to Chrome
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              {[
                { icon: ShieldCheck, text: 'Privacy Protected' },
                { icon: Zap, text: 'Setup in 2 Minutes' },
                { icon: Star, text: 'Loved by Job Seekers' },
                { icon: Briefcase, text: 'Works Everywhere' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-slate-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── FOOTER CTA ────────────────────────────────────────── */}
      <div className="bg-black border-t border-white/5 py-8 text-center">
        <p className="text-slate-500 text-sm">
          A product by{' '}
          <button onClick={() => onNavigate('/')} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            LexonIT
          </button>
        </p>
      </div>
    </div>
  );
};

export default AutoHirULandingPage;
