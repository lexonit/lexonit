
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, GlowingCard, Badge, FloatingDock, LampContainer } from '../components/ui';
import { Button as MovingBorderButton } from '../components/ui/moving-border';
import { ChatDemo, PricingCalculator, AuditTool, WorldMapSection, AnimatedTestimonialsDemo } from '../components/features';
import { SERVICES, TECH_STACK, CASE_STUDIES, TESTIMONIALS, HERO_AVATARS } from '../constants';
import { ArrowRight, Play, Star, CheckCircle, Globe, Code2, FileCode, Wind, Bot, Database, CreditCard, Cloud, Triangle, Move } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const HERO_TITLES = [
  "Business with AI",
  "Workflow with Agents",
  "Growth with Automation",
  "Scale with Intelligence"
];

const techStackItems = [
  { title: "Next.js", icon: <Globe className="h-full w-full text-neutral-800 dark:text-neutral-200" />, href: "#" },
  { title: "React", icon: <Code2 className="h-full w-full text-blue-500" />, href: "#" },
  { title: "TypeScript", icon: <FileCode className="h-full w-full text-blue-600" />, href: "#" },
  { title: "Tailwind", icon: <Wind className="h-full w-full text-cyan-400" />, href: "#" },
  { title: "OpenAI", icon: <Bot className="h-full w-full text-green-600" />, href: "#" },
  { title: "Supabase", icon: <Database className="h-full w-full text-green-500" />, href: "#" },
  { title: "Stripe", icon: <CreditCard className="h-full w-full text-indigo-500" />, href: "#" },
  { title: "AWS", icon: <Cloud className="h-full w-full text-orange-500" />, href: "#" },
  { title: "Vercel", icon: <Triangle className="h-full w-full text-black dark:text-white" />, href: "#" },
  { title: "Motion", icon: <Move className="h-full w-full text-pink-500" />, href: "#" },
];

export const Home = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden bg-slate-50 dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[128px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="purple" className="mb-6">UAE's Leading AI Agency</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 min-h-[160px] md:min-h-[180px]">
              Future-Proof Your <br />
              <AnimatePresence mode="wait">
                <motion.span 
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400"
                >
                  {HERO_TITLES[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              We build intelligent chatbots, automation systems, and high-performance websites that drive growth for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="w-full sm:w-48 h-14 rounded-[1.75rem] text-base font-medium border-slate-300 dark:border-slate-700" 
                onClick={() => onNavigate('/offers')}
              >
                View Our Offers
              </Button>
              <MovingBorderButton
                borderRadius="1.75rem"
                className="bg-slate-900 dark:bg-slate-950 text-white border-slate-800 dark:border-slate-800 font-semibold"
                containerClassName="w-full sm:w-48 h-14"
                onClick={() => onNavigate('/contact')}
              >
                Book a Free Call <ArrowRight className="ml-2" size={18} />
              </MovingBorderButton>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-slate-500 dark:text-slate-500 text-sm font-medium">
              <span>Trusted by innovative companies</span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <ChatDemo />
            </div>
            
            {/* Floating 3D Avatar Team */}
            {HERO_AVATARS.map((avatar, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: avatar.delay }}
                className={`absolute ${avatar.position} z-20 hidden md:block`}
              >
                <div className="relative group cursor-pointer">
                   <div className="w-20 h-20 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl transform transition-transform group-hover:scale-110">
                     <img src={avatar.url} alt={avatar.name} className="w-full h-full object-cover" />
                   </div>
                   {/* Tooltip/Name tag */}
                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg transform translate-y-2 group-hover:translate-y-0">
                      {avatar.name} • {avatar.role}
                   </div>
                   {/* Status Indicator */}
                   <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-black"></span>
                    </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Floating Dock */}
      <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-6">
             <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Powering Next-Gen Applications</p>
             <FloatingDock items={techStackItems} />
          </div>
        </div>
      </section>

      {/* Services Grid (Updated with GlowingCard) */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for the modern UAE market.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service, index) => (
              <motion.div variants={item} key={index} className="h-full">
                <GlowingCard className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-slate-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Success Stories</h2>
              <p className="text-slate-600 dark:text-slate-400">Real results for businesses across the Emirates.</p>
            </div>
            <Button variant="outline" onClick={() => onNavigate('/services')}>View All Case Studies</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <div key={index} className="border-l-2 border-slate-300 dark:border-slate-800 pl-6 hover:border-violet-500 transition-colors py-2">
                <p className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-2">{study.category}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{study.title}</h3>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-3">
                  {study.metric}
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-black transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Instant Price Estimator</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12">Transparency is key. Calculate your project cost in seconds.</p>
          <PricingCalculator />
        </div>
      </section>

      {/* Free Audit */}
      <section className="py-24 container mx-auto px-6">
        <AuditTool />
      </section>

      {/* Testimonials (Updated to AnimatedTestimonials) */}
      <section className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center">Client Voices</h2>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* World Map Section (New) */}
      <WorldMapSection />

      {/* Final Lamp CTA */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Ready for scale? <br /> Join the AI revolution.
        </motion.h1>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="mt-8"
        >
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8" onClick={() => onNavigate('/contact')}>
             Start Your Journey
          </Button>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Home;
