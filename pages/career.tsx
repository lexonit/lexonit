
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Rocket, Sparkles, Users, Heart, Zap, GraduationCap, Home, Award,
  CheckCircle, ArrowRight, Code2, Server, TrendingUp, Mail, MessageCircle,
  MapPin, Clock, Briefcase, ChevronDown, Coffee, Globe2
} from 'lucide-react';
import { CareerPageSEO } from '../components/seo';

const HR_WHATSAPP_NUMBER = '917780181920';
const HR_PHONE_DISPLAY = '+91 77801 81920';
const HR_EMAIL = 'hr@lexonit.com';

const whatsappApplyLink = (role: string) =>
  `https://wa.me/${HR_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in applying for the ${role} position at LexonIT.`)}`;

const mailtoApplyLink = (role: string) =>
  `mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Application for ${role} — LexonIT`)}&body=${encodeURIComponent(`Hi LexonIT team,\n\nI'm interested in applying for the ${role} position. Please find my details/resume attached.\n\nThanks,`)}`;

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
          background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#c084fc' : '#64748b',
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

// ─── Stats counter ────────────────────────────────────────────────
const Counter = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = to / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// ─── Perk card ─────────────────────────────────────────────────────
const PerkCard = ({ icon: Icon, title, desc, delay }: { icon: React.ElementType; title: string; desc: string; delay: number }) => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
};

// ─── Job data ──────────────────────────────────────────────────────
interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  icon: React.ElementType;
  color: string;
  description: string;
  requirements: string[];
  skills: string[];
}

const JOBS: Job[] = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    department: 'Engineering',
    icon: Code2,
    color: 'from-violet-600 to-purple-600',
    description: 'Build and ship end-to-end features across our AI products and client platforms using React, Next.js and Node.js — from database schema to pixel-perfect UI.',
    requirements: [
      '2+ years of experience with React / Next.js',
      'Strong Node.js and REST / GraphQL API skills',
      'Comfortable with SQL and NoSQL databases',
      'Familiar with Git workflows and CI/CD pipelines',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB / PostgreSQL'],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    department: 'Infrastructure',
    icon: Server,
    color: 'from-blue-600 to-cyan-600',
    description: 'Own our CI/CD pipelines, cloud infrastructure and deployment automation across every LexonIT product, keeping releases fast and systems reliable.',
    requirements: [
      'Hands-on experience with AWS / Azure / GCP',
      'Comfortable with Docker and Kubernetes',
      'Experience building CI/CD pipelines (GitHub Actions / Jenkins)',
      'Exposure to Infrastructure as Code (Terraform)',
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    id: 'sales-intern',
    title: 'Sales Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Sales & Growth',
    icon: TrendingUp,
    color: 'from-emerald-600 to-teal-600',
    description: 'Kickstart your sales career by helping us connect with new clients, qualify leads and close deals for our AI and web development solutions.',
    requirements: [
      'Excellent verbal and written communication skills',
      'Self-motivated, target-driven and eager to learn',
      'Basic understanding of B2B sales or lead generation',
      'Currently pursuing or recently completed a degree',
    ],
    skills: ['Communication', 'Lead Generation', 'CRM Tools', 'Negotiation'],
  },
];

// ─── Job card ──────────────────────────────────────────────────────
const JobCard = ({ job, delay }: { job: Job; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(false);
  const Icon = job.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-shadow duration-300"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${job.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
              <Icon size={26} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
              <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">{job.department}</p>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-semibold whitespace-nowrap">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-5">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {job.skills.map((s) => (
            <span key={s} className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-2"
        >
          {expanded ? 'Hide' : 'View'} requirements
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <ul className="space-y-2.5 pt-2 pb-1">
            {job.requirements.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={15} className="text-violet-500 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <motion.a
            href={whatsappApplyLink(job.title)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#25D366]/25 transition-colors"
          >
            <MessageCircle size={17} /> Apply via WhatsApp
          </motion.a>
          <motion.a
            href={mailtoApplyLink(job.title)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-white rounded-xl font-semibold text-sm transition-colors"
          >
            <Mail size={16} /> Email Application
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

interface CareerPageProps {
  onNavigate: (path: string) => void;
}

const CareerPage: React.FC<CareerPageProps> = ({ onNavigate }) => {
  const PERKS = [
    { icon: Home, title: 'Remote-First Culture', desc: 'Work from anywhere — we care about output, not office hours.' },
    { icon: GraduationCap, title: 'Growth & Mentorship', desc: 'Learn directly from senior engineers and leadership on real AI products.' },
    { icon: Zap, title: 'Cutting-Edge Projects', desc: 'Ship AI chatbots, automation and platforms used by real businesses.' },
    { icon: Award, title: 'Competitive Compensation', desc: 'Pay that reflects your impact, with room to grow fast.' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Own your schedule — deliver great work on your own time.' },
    { icon: Heart, title: 'Collaborative Team', desc: 'A tight-knit, supportive team that celebrates every win together.' },
  ];

  const PROCESS = [
    { num: '1', title: 'Apply', desc: 'Send your details via WhatsApp or email — takes two minutes.', icon: Briefcase },
    { num: '2', title: 'Screening Call', desc: 'A quick chat to understand your background and goals.', icon: MessageCircle },
    { num: '3', title: 'Interview', desc: 'Meet the team and walk through relevant skills or a task.', icon: Users },
    { num: '4', title: 'Offer & Onboarding', desc: 'Get an offer and start building with us — fast and simple.', icon: Rocket },
  ];

  const STATS = [
    { value: JOBS.length, suffix: '', label: 'Open Positions' },
    { value: 15, suffix: '+', label: 'Team Members' },
    { value: 100, suffix: '%', label: 'Remote Friendly' },
    { value: 5, suffix: '+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 overflow-x-hidden">
      <CareerPageSEO />
      {/* ──── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-[480px] h-[480px] bg-violet-400/20 dark:bg-violet-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[130px]" />
        </div>
        <FloatingParticles />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6"
          >
            <Rocket size={14} /> We're Hiring
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Build the Future{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Join a fast-moving team building AI products and premium web experiences for businesses around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              View Open Positions <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">
                  <Counter to={value} suffix={suffix} />
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── WHY JOIN US ───────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Why LexonIT</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              A Place to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Do Your Best Work</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              We're small enough to move fast and big enough to build things that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p, i) => (
              <PerkCard key={p.title} {...p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── OPEN POSITIONS ────────────────────────────────────── */}
      <section id="openings" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Careers</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Open{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Positions</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
              {JOBS.length} roles open right now — apply directly, no lengthy forms.
            </p>
          </motion.div>

          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <JobCard key={job.id} job={job} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── HIRING PROCESS ────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Simple & Fast</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              How To{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Get Hired</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ num, title, desc, icon: Icon }, i) => (
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
                <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-600/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── HR CONTACT CTA ────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(139,92,246,0.18),transparent)]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <FloatingParticles />

        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
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
                <div className="absolute -inset-4 rounded-[32px] bg-violet-500/20 blur-2xl animate-pulse" />
                <div className="w-20 h-20 rounded-[22px] bg-gradient-to-br from-violet-600 to-purple-600 relative z-10 shadow-2xl shadow-violet-500/40 flex items-center justify-center">
                  <Sparkles size={32} className="text-white" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Don't See Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Role?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              We're always open to meeting talented people. Reach out to our HR team directly — no application needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <motion.a
                href={`https://wa.me/${HR_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd love to explore career opportunities at LexonIT.")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-bold shadow-2xl shadow-[#25D366]/25 transition-all duration-300 min-w-[240px] justify-center"
              >
                <MessageCircle size={20} /> {HR_PHONE_DISPLAY}
              </motion.a>
              <motion.a
                href={`mailto:${HR_EMAIL}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl font-bold transition-all duration-300 min-w-[240px] justify-center"
              >
                <Mail size={18} /> {HR_EMAIL}
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              {[
                { icon: Globe2, text: 'Remote-Friendly' },
                { icon: Coffee, text: 'Fast Response' },
                { icon: Heart, text: 'People-First Culture' },
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
    </div>
  );
};

export default CareerPage;
