
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Star, Users, Globe2, Award, Sparkles,
  GraduationCap, Bot, Building2, Sun, Briefcase, Lightbulb, MessageSquare,
  Layers, Calendar, ShoppingCart, ClipboardList
} from 'lucide-react';

interface ClientsPageProps {
  onNavigate: (path: string) => void;
}

interface Client {
  id: string;
  name: string;
  url: string;
  logo: string;
  industry: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  color: string;
}

const CLIENTS: Client[] = [
  {
    id: 'jks-learning',
    name: 'JKS Learning',
    url: 'https://jks-learning-ui.vercel.app/',
    logo: '/clients/jks-learning.png',
    industry: 'EdTech · IT Upskilling',
    icon: GraduationCap,
    description: 'A career-ready IT upskilling platform offering structured Full Stack (Java, .NET, Frontend), Cloud and SAP training — with anti-skip video protection and adaptive AI mock interviews that prepare learners for real tier-1 job offers.',
    highlights: ['8,000+ learners trained', '87% course completion rate', '22,000+ AI mock interviews run'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'techiemaya',
    name: 'TechieMaya',
    url: 'https://techiemaya.com/',
    logo: '/clients/techiemaya.png',
    industry: 'IT Consulting · PMaaS',
    icon: Briefcase,
    description: 'A technology consulting company delivering Project-Management-as-a-Service (PMaaS) and cutting-edge IT solutions that help growing businesses automate routine tasks and streamline day-to-day operations.',
    highlights: ['Cutting-edge PMaaS solutions', 'Enterprise workflow automation', 'Full-stack platform build'],
    color: 'from-fuchsia-600 to-violet-600',
  },
  {
    id: 'mrlad',
    name: 'Mr LAD',
    url: 'https://www.mrlads.com/',
    logo: '/clients/mrlad.png',
    industry: 'AI Sales · SaaS',
    icon: Bot,
    description: 'An AI Sales Employee platform that prospects, holds real conversations, and books meetings autonomously across LinkedIn, WhatsApp, Instagram, email and voice — doing the work of an entire sales team as a single AI hire.',
    highlights: ['500+ active businesses', '95% success rate', '10x faster deal closures'],
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 'dycnity',
    name: 'Dycnity',
    url: 'https://www.dycnity.com/',
    logo: '/clients/dycnity.png',
    industry: 'IT Consulting · Enterprise',
    icon: Building2,
    description: 'An IT consulting and digital transformation firm empowering organizations to modernize with world-class technology consulting, enterprise-grade solutions, and scalable digital platforms.',
    highlights: ['Enterprise digital transformation', 'Scalable platform architecture', 'End-to-end consulting'],
    color: 'from-violet-600 to-purple-600',
  },
  {
    id: 'infinitisolar',
    name: 'Infiniti Solars',
    url: 'https://infinitisolars.com/',
    logo: '/clients/infinitisolar.png',
    industry: 'Renewable Energy · Solar',
    icon: Sun,
    description: "South India's leading residential & commercial rooftop solar installer, based in Nellore District, Andhra Pradesh — helping homeowners and businesses generate their own electricity for the next 30 years.",
    highlights: ['#1 rooftop solar installer, South India', 'Residential & commercial installs', '30-year energy solutions'],
    color: 'from-emerald-600 to-teal-500',
  },
];

const IDEAS = [
  { icon: MessageSquare, title: 'AI Customer Support Agent', desc: 'A trained chatbot that resolves tickets, answers FAQs, and escalates only when it truly needs to.' },
  { icon: Layers, title: 'Custom LMS Platform', desc: 'Course builder, progress tracking, and certification — tailored to your training business, like JKS Learning.' },
  { icon: ClipboardList, title: 'CRM & Sales Pipeline Tool', desc: 'An AI-assisted CRM that qualifies leads and reminds your team before deals go cold.' },
  { icon: Calendar, title: 'Booking & Scheduling SaaS', desc: 'Client booking, reminders, and calendar sync for service businesses of any size.' },
  { icon: ShoppingCart, title: 'E-commerce Storefront', desc: 'A fast, conversion-focused storefront with inventory, payments, and analytics built in.' },
  { icon: Lightbulb, title: 'Your Idea Here', desc: "Got something else in mind? We've shipped EdTech, AI sales tools, and solar platforms — tell us what you're building." },
];

// ─── Auto-scrolling logo marquee ────────────────────────────────
const LogoMarquee = () => {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex items-center gap-16"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((c, i) => (
          <a
            key={`${c.id}-${i}`}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img src={c.logo} alt={`${c.name} logo`} className="h-9 w-auto object-contain" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

// ─── Client card ─────────────────────────────────────────────────
const ClientCard = ({ client, index }: { client: Client; index: number }) => {
  const Icon = client.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-shadow duration-300"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${client.color}`} />
      <div className="p-7">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="h-12 flex items-center">
            <img src={client.logo} alt={`${client.name} logo`} className="h-8 w-auto object-contain" />
          </div>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${client.color} text-white text-[11px] font-semibold whitespace-nowrap`}>
            <Icon size={12} /> {client.industry}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{client.name}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
          {client.description}
        </p>

        <ul className="space-y-2 mb-6">
          {client.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Star size={11} className="text-amber-400 fill-amber-400 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
        >
          Visit Website <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};

const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  const STATS = [
    { value: '5+', label: 'Businesses Served' },
    { value: '4', label: 'Industries' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <>
      <Head>
        <title>Our Clients | LexonIT — Real Products for Real Businesses</title>
        <meta
          name="description"
          content="See the businesses LexonIT has built for — JKS Learning, TechieMaya, Mr LAD, Dycnity, and Infiniti Solars. Real products, real industries, real results."
        />
        <meta property="og:title" content="Our Clients | LexonIT" />
        <meta
          property="og:description"
          content="Real products built for real businesses — EdTech, AI sales, IT consulting, and renewable energy."
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'LexonIT Clients',
              itemListElement: CLIENTS.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.name,
                url: c.url,
              })),
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 overflow-x-hidden">
        {/* ──── HERO ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-16 pb-16">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-[480px] h-[480px] bg-violet-400/20 dark:bg-violet-600/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[130px]" />
          </div>

          <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6"
            >
              <Users size={14} /> Trusted By Growing Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
                Clients
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12"
            >
              From EdTech platforms to AI sales agents and solar energy — real products we've shipped for ambitious teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">{value}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ──── LOGO MARQUEE ──────────────────────────────────── */}
        <section className="py-6 border-y border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/50">
          <LogoMarquee />
        </section>

        {/* ──── CLIENT GRID ───────────────────────────────────── */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Case Studies</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Products We've{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Shipped</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Every client came with a different problem. Here's what we understood, and what we built.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIENTS.map((client, i) => (
                <ClientCard key={client.id} client={client} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ──── WHAT TO BUILD NEXT ────────────────────────────── */}
        <section className="py-24 bg-white dark:bg-slate-950/50 border-y border-slate-200 dark:border-white/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">Got An Idea?</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                What Should We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Build Next?</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                A few directions we'd love to explore with a new client — or bring your own idea.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {IDEAS.map((idea, i) => (
                <motion.div
                  key={idea.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                    <idea.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2">{idea.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{idea.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── CONNECT CTA ───────────────────────────────────── */}
        <section className="py-32 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(139,92,246,0.18),transparent)]" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />

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
                Let's Build Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Next Product
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Whether it's a platform, an AI agent, or something nobody's built yet — tell us about it.
              </p>

              <motion.button
                onClick={() => onNavigate('/contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
              >
                Connect With Us <ArrowRight size={18} />
              </motion.button>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-slate-500 text-sm">
                {[
                  { icon: Globe2, text: 'Remote-Friendly' },
                  { icon: Award, text: 'Proven Track Record' },
                  { icon: Users, text: 'Real Client Results' },
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
    </>
  );
};

export default ClientsPage;
