
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Shield, MapPin, Users, Bell, Zap, Phone, Navigation,
  ChevronRight, Star, Download, CheckCircle,
  AlertCircle, Clock, Eye, Smartphone, Volume2, PhoneCall
} from 'lucide-react';

interface SakhiLandingProps {
  onNavigate: (path: string) => void;
}

// ─── Animated SOS pulse ring ──────────────────────────────────────
const SOSPulse = () => (
  <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
    {/* Static dark concentric rings — matches app radar UI */}
    {[280, 230, 180].map((size) => (
      <div
        key={size}
        className="absolute rounded-full border border-red-200 dark:border-red-900/40"
        style={{ width: size, height: size }}
      />
    ))}
    {/* Animated outward ripple rings */}
    {[0, 0.8, 1.6].map((delay, i) => (
      <motion.div
        key={`ripple-${i}`}
        className="absolute rounded-full border-2 border-red-500/60"
        style={{ width: 144, height: 144 }}
        animate={{ scale: [1, 2], opacity: [0.7, 0] }}
        transition={{ duration: 2.4, delay, repeat: Infinity, ease: 'easeOut' }}
      />
    ))}
    {/* Main SOS button */}
    <motion.button
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 w-36 h-36 rounded-full flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        background: 'radial-gradient(circle at 38% 35%, #f87171, #dc2626 55%, #991b1b)',
        boxShadow: '0 0 0 6px rgba(220,38,38,0.15), 0 0 50px rgba(220,38,38,0.55), 0 0 100px rgba(220,38,38,0.2)',
      }}
    >
      <span className="text-white text-3xl font-black tracking-[0.18em] leading-none">SOS</span>
      <span className="text-red-100 text-[10px] font-semibold tracking-widest mt-1.5 leading-none">TAP TO ACTIVATE</span>
    </motion.button>
  </div>
);

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
          background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#7c3aed' : '#64748b',
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

// ─── 3D Phone mockup wrapper ──────────────────────────────────────
const PhoneMockup = ({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.88 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {/* Glow behind phone */}
        <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-red-500/20 to-violet-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={src}
          alt={alt}
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(239,68,68,0.3)]"
        />
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
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 shadow-lg`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
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

// ─── Main Component ───────────────────────────────────────────────
const SakhiLandingPage: React.FC<SakhiLandingProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const FEATURES = [
    { icon: Shield, title: 'Instant SOS Alert', desc: 'One tap to alert all your trusted contacts with your live location instantly.', color: 'bg-red-600', delay: 0 },
    { icon: MapPin, title: 'Live Location Sharing', desc: 'Share your real-time GPS location with trusted contacts so they always know where you are.', color: 'bg-emerald-600', delay: 0.1 },
    { icon: Users, title: 'Trusted Contacts', desc: 'Add emergency contacts who are notified instantly during any safety situation.', color: 'bg-blue-600', delay: 0.2 },
    { icon: Bell, title: 'Real-Time Alerts', desc: 'Get safety notifications and alerts in real time — stay informed at all times.', color: 'bg-amber-600', delay: 0.3 },
    { icon: Clock, title: 'Safety Check Timer', desc: 'Set a timer before you go. If you don\'t check in, your contacts are alerted automatically.', color: 'bg-violet-600', delay: 0.4 },
    { icon: Zap, title: 'Shake Detection', desc: 'Shake your phone to silently trigger an SOS alert when you can\'t reach the screen.', color: 'bg-pink-600', delay: 0.5 },
    { icon: Volume2, title: 'Volume Button SOS', desc: 'Press volume down 3x quickly to trigger SOS instantly — fast, discreet, lifesaving.', color: 'bg-teal-600', delay: 0.6 },
    { icon: PhoneCall, title: 'Fake Call Feature', desc: 'Trigger a fake incoming call to escape unwanted or dangerous situations discreetly.', color: 'bg-orange-600', delay: 0.7 },
  ];

  const SCREENSHOTS = [
    { src: '/sakhi/sakhi1.png', label: 'Stay Safe. Stay Connected.' },
    { src: '/sakhi/sakhi4.png', label: 'One Tap for Help' },
    { src: '/sakhi/sakhi5.png', label: 'All-in-One Safety Companion' },
    { src: '/sakhi/sakhi3.png', label: 'Real-Time Protection' },
  ];

  const STATS = [
    { value: 10000, suffix: '+', label: 'Downloads' },
    { value: 99, suffix: '%', label: 'Uptime' },
    { value: 5, suffix: '', label: 'Star Rating' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  const HOW_IT_WORKS = [
    { num: '1', title: 'Safety Check Timer', desc: 'Set a timer before you go. We alert your contacts if you don\'t check in.', icon: Clock },
    { num: '2', title: 'Shake Detection', desc: 'Can\'t reach your phone? Shake it to trigger an SOS alert instantly.', icon: Zap },
    { num: '3', title: 'Trusted Contacts', desc: 'Add trusted contacts who will be notified during emergencies.', icon: Users },
    { num: '4', title: 'Volume Button SOS', desc: 'Press volume down 3x quickly to trigger SOS — fast and discreet.', icon: Volume2 },
    { num: '5', title: 'Fake Call', desc: 'Stay safe from unwanted situations with a realistic fake incoming call.', icon: PhoneCall },
    { num: '6', title: 'Emergency History', desc: 'Keep track of all your safety activities and alerts history.', icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* ──── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Radial red glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(239,68,68,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(124,58,237,0.15),transparent)]" />
        <FloatingParticles />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              {/* Logo row */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <img src="/sakhi-safety-app.png" alt="Sakhi Safety" className="w-10 h-10 rounded-xl shadow-lg shadow-red-500/30" />
                <div>
                  <p className="text-red-400 text-xs font-semibold tracking-widest uppercase">SecureSakhi</p>
                  <p className="text-slate-400 text-xs">Your Safety, Our Priority</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Protected · Live
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4"
              >
                Stay Safe.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                  Stay Connected.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
              >
                Your all-in-one safety companion for real-time protection, instant alerts, and peace of mind.
              </motion.p>

              {/* Quick features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              >
                {[
                  { icon: Shield, label: 'Instant SOS Alerts', color: 'text-red-400' },
                  { icon: MapPin, label: 'Live Location Sharing', color: 'text-emerald-400' },
                  { icon: Users, label: 'Trusted Emergency Contacts', color: 'text-blue-400' },
                  { icon: Bell, label: 'Real-Time Safety Alerts', color: 'text-amber-400' },
                  { icon: Zap, label: 'Safety Tools & More', color: 'text-violet-400' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className={color} />
                    </div>
                    <span className="text-slate-300 text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Download buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 group"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M3.18 23.76c.33.18.7.22 1.06.12l12.48-7.2-2.82-2.82L3.18 23.76z" fill="#EA4335"/>
                    <path d="M21.54 10.26l-2.76-1.6-3.12 3.12 3.12 3.12 2.8-1.62a1.97 1.97 0 000-3z" fill="#FBBC05"/>
                    <path d="M2.24 1.14A1.97 1.97 0 002 2.16v19.68c0 .35.07.67.24.96l.12.1L13.92 12 2.36 1.02l-.12.12z" fill="#4285F4"/>
                    <path d="M13.92 12L2.36 1.02c.3-.27.7-.44 1.14-.36L16 7.86l-2.08 4.14z" fill="#34A853"/>
                  </svg>
                  <div>
                    <p className="text-white/60 text-[10px] leading-none">GET IT ON</p>
                    <p className="text-white font-bold text-sm">Google Play</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300 group"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
                  </svg>
                  <div>
                    <p className="text-white/60 text-[10px] leading-none">Download on the</p>
                    <p className="text-white font-bold text-sm">App Store</p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Star rating */}
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
                <span className="text-slate-400 text-sm">5.0 · 10,000+ downloads</span>
              </motion.div>
            </div>

            {/* Right: Phone + SOS Animation */}
            <div className="order-1 lg:order-2 flex justify-center items-center relative">
              {/* Animated outer rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[200, 280, 360, 440].map((size, i) => (
                  <motion.div
                    key={size}
                    className="absolute rounded-full border border-red-500/20"
                    style={{ width: size, height: size }}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>

              {/* Phone images stacked */}
              <div className="relative z-10 flex items-end justify-center gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -60, rotate: -8 }}
                  animate={{ opacity: 1, x: 0, rotate: -6 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-44 md:w-52 mb-8"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(239,68,68,0.2))' }}
                >
                  <img src="/sakhi/sakhi1.png" alt="Sakhi Safety dashboard" className="w-full object-contain" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-52 md:w-64 z-10"
                  style={{ filter: 'drop-shadow(0 30px 60px rgba(239,68,68,0.4))' }}
                >
                  <img src="/sakhi/sakhi4.png" alt="Sakhi Safety SOS" className="w-full object-contain" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60, rotate: 8 }}
                  animate={{ opacity: 1, x: 0, rotate: 6 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-44 md:w-52 mb-8"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(239,68,68,0.2))' }}
                >
                  <img src="/sakhi/sakhi3.png" alt="Sakhi Safety location" className="w-full object-contain" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(239,68,68,0.05),transparent)]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4">Everything You Need</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              All-in-One{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Safety</span>{' '}
              Companion
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Real-time protection, instant alerts, and peace of mind — all in one powerful app.
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
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4">Simple & Powerful</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              How It{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Works</span>
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
                <div className="w-11 h-11 rounded-xl bg-red-100 dark:bg-red-600/20 border border-red-200 dark:border-red-500/30 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SHOWCASE IMAGE 2 (Features graphic) ───────────────── */}
      <section className="py-20 overflow-hidden bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-red-500/5 dark:shadow-red-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img src="/sakhi/sakhi2.png" alt="SecureSakhi all features" className="w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ──── REAL-TIME PROTECTION ──────────────────────────────── */}
      <section className="py-28 overflow-hidden bg-white dark:bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-emerald-500 dark:text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Location Tracking</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                Real-Time{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  Protection
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Share live location, track your journey, and stay informed at all times. Your trusted contacts always know where you are.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time GPS tracking with live movement path',
                  'Automatic location sharing during emergencies',
                  'Journey tracking from start to destination',
                  'Secure, private — only your trusted contacts can see',
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={11} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-[280px] lg:max-w-[340px] mx-auto"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
              <PhoneMockup src="/sakhi/sakhi3.png" alt="Live location tracking" delay={0} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── ONE TAP FOR HELP ──────────────────────────────────── */}
      <section className="py-28 overflow-hidden bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 relative max-w-[360px] lg:max-w-[460px] mx-auto"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
              <PhoneMockup src="/sakhi/sakhi4.png" alt="SOS emergency button" delay={0} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4">Emergency SOS</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                One Tap for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Help
                </span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Press the SOS button to instantly alert your trusted contacts with your live location. Fast. Discreet. Lifesaving.
              </p>

              {/* SOS Demo */}
              <div className="flex justify-start mb-8">
                <SOSPulse />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: 'Instant Alert', desc: 'Contacts notified in < 1 second' },
                  { icon: MapPin, label: 'Live Location', desc: 'Precise GPS coordinates sent' },
                  { icon: Volume2, label: 'Volume Trigger', desc: 'Press volume 3x for SOS' },
                  { icon: AlertCircle, label: 'Shake Trigger', desc: 'Shake phone to activate' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-sm dark:shadow-none">
                    <Icon size={16} className="text-red-500 dark:text-red-400 mb-2" />
                    <p className="text-slate-900 dark:text-white font-semibold text-sm mb-0.5">{label}</p>
                    <p className="text-slate-500 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── APP SCREENSHOTS ───────────────────────────────────── */}
      <section className="py-28 bg-slate-100 dark:bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4">App Screenshots</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              See It In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Action</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
              A beautifully designed UI with everything you need, right at your fingertips.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 items-start">
            {SCREENSHOTS.map(({ src, label }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-red-500/25 to-violet-600/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Fixed height container — all images identical */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-white/[0.12] bg-slate-200 dark:bg-white/[0.04] shadow-lg dark:shadow-none" style={{ height: 500 }}>
                  <img
                    src={src}
                    alt={label}
                    className={`w-full h-full object-contain object-center p-2 transition-transform duration-500 ${
                      src.includes('sakhi4') 
                        ? 'scale-[1.2] group-hover:scale-[1.25]' 
                        : 'group-hover:scale-[1.04]'
                    }`}
                  />
                  {/* Always-visible label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <p className="text-white text-[11px] font-semibold text-center leading-snug">{label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── DOWNLOAD CTA ──────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(239,68,68,0.15),transparent)]" />
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
            {/* App icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-red-500/20 blur-2xl animate-pulse" />
                <img src="/sakhi-safety-app.png" alt="Sakhi Safety" className="w-20 h-20 rounded-[22px] relative z-10 shadow-2xl shadow-red-500/40" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Download{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Sakhi Safety
              </span>
            </h2>
            <p className="text-slate-400 text-xl mb-4">
              Free to download. Start staying safe today.
            </p>
            <p className="text-slate-500 text-sm mb-12 italic">"Your Safety, Our Priority"</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 min-w-[220px]"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                  <path d="M3.18 23.76c.33.18.7.22 1.06.12l12.48-7.2-2.82-2.82L3.18 23.76z" fill="#EA4335"/>
                  <path d="M21.54 10.26l-2.76-1.6-3.12 3.12 3.12 3.12 2.8-1.62a1.97 1.97 0 000-3z" fill="#FBBC05"/>
                  <path d="M2.24 1.14A1.97 1.97 0 002 2.16v19.68c0 .35.07.67.24.96l.12.1L13.92 12 2.36 1.02l-.12.12z" fill="#4285F4"/>
                  <path d="M13.92 12L2.36 1.02c.3-.27.7-.44 1.14-.36L16 7.86l-2.08 4.14z" fill="#34A853"/>
                </svg>
                <div className="text-left">
                  <p className="text-black/50 text-[10px] font-normal leading-none">GET IT ON</p>
                  <p className="text-black font-bold text-base leading-tight">Google Play</p>
                </div>
              </motion.a>

              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 min-w-[220px]"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
                </svg>
                <div className="text-left">
                  <p className="text-black/50 text-[10px] font-normal leading-none">Download on the</p>
                  <p className="text-black font-bold text-base leading-tight">App Store</p>
                </div>
              </motion.a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              {[
                { icon: Shield, text: 'Privacy Protected' },
                { icon: Download, text: 'Free Download' },
                { icon: Star, text: '5 Star Rated' },
                { icon: Smartphone, text: 'iOS & Android' },
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
          <button onClick={() => onNavigate('/')} className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
            LexonIT
          </button>
          {' '}· {' '}
          <button onClick={() => onNavigate('/sakhi-privacy')} className="text-slate-500 hover:text-slate-400 transition-colors">
            Privacy Policy
          </button>
        </p>
      </div>
    </div>
  );
};

export default SakhiLandingPage;
