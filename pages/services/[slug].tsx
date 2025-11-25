import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge, MockChatInterface, MockKanban, MockCalendar, MockCalendar as MockGantt } from '../../components/ui';
import { SERVICE_PAGES_CONTENT, ServicePageData } from '../../constants';
import { CheckCircle2, ArrowRight, XCircle, AlertCircle, Sparkles, User } from 'lucide-react';
import { FlipWords } from '../../components/ui/flip-words';
import { useRouter } from 'next/router';

// Map of mockup types to components
const MOCKUPS = {
  kanban: MockKanban,
  chat: MockChatInterface,
  calendar: MockCalendar,
  gantt: MockCalendar, // Placeholder reuse for visual consistency
  dashboard: MockKanban, // Placeholder reuse
  doc: MockChatInterface // Placeholder reuse
};

// Map of theme colors to Tailwind classes
const THEMES = {
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-900/10',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-800',
    gradient: 'from-violet-600 to-indigo-600',
    badge: 'purple'
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    gradient: 'from-blue-600 to-cyan-600',
    badge: 'default'
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-800',
    gradient: 'from-emerald-500 to-teal-500',
    badge: 'default'
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/10',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    gradient: 'from-amber-500 to-orange-500',
    badge: 'default'
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/10',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'border-rose-200 dark:border-rose-800',
    gradient: 'from-rose-500 to-red-500',
    badge: 'default'
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/10',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-800',
    gradient: 'from-cyan-500 to-blue-500',
    badge: 'default'
  }
};

export default function ServiceDetailPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const router = useRouter();
  const { slug } = router.query;
  
  const data: ServicePageData | undefined = slug ? SERVICE_PAGES_CONTENT[slug as string] : undefined;
  
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-slate-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Button onClick={() => onNavigate('/services')}>Back to Services</Button>
      </div>
    );
  }

  const theme = THEMES[data.themeColor];
  const HeroMockup = MOCKUPS[data.heroMockupType];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
         {/* Dynamic Background Gradients */}
         <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br ${theme.gradient} opacity-10 blur-[100px] pointer-events-none`} />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:w-1/2"
               >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6 ${theme.bg} ${theme.text}`}>
                     <data.icon size={16} />
                     <span>For IT Providers</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                     {data.title} <br />
                     <span className={`text-4xl md:text-5xl opacity-80 block mt-2`}>
                        is <FlipWords words={data.flipWords || ['Fast', 'Smart', 'Automated']} className={`${theme.text}`} />
                     </span>
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                     {data.subtitle} <span className="opacity-80">{data.description}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button 
                        size="lg" 
                        className={`bg-gradient-to-r ${theme.gradient} text-white border-none shadow-lg hover:opacity-90`}
                        onClick={() => onNavigate('/contact')}
                     >
                        Get Started
                     </Button>
                     <Button variant="outline" size="lg" onClick={() => onNavigate('/contact')}>
                        Request Demo
                     </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 mt-12">
                     {data.stats.map((stat, i) => (
                        <div key={i} className="border-l-2 border-slate-200 dark:border-slate-800 pl-4">
                           <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                           <div className="text-sm text-slate-500">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:w-1/2 w-full"
               >
                  <div className={`relative p-6 rounded-2xl ${theme.bg} border ${theme.border} shadow-2xl`}>
                     <HeroMockup />
                     {/* Floating Feature Badge */}
                     <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white`}>
                           <Sparkles size={20} />
                        </div>
                        <div>
                           <p className="text-xs text-slate-500 font-bold uppercase">Efficiency</p>
                           <p className="font-bold text-slate-900 dark:text-white">Optimized</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Meet Your AI Partner Section */}
      <section className="py-20 border-y border-slate-100 dark:border-slate-800">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
               <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${data.aiAvatar.imageGradient} opacity-20 blur-[80px] pointer-events-none`} />
                  
                  <div className="shrink-0 relative group">
                     {data.aiAvatar.avatarImage ? (
                        <div className="relative w-32 h-32 transform rotate-3 transition-transform duration-300 group-hover:rotate-0">
                           <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.aiAvatar.imageGradient} opacity-50 blur-lg`} />
                           <img 
                              src={data.aiAvatar.avatarImage} 
                              alt={data.aiAvatar.name} 
                              className="relative w-full h-full rounded-2xl object-cover shadow-xl border-2 border-white dark:border-slate-700"
                           />
                        </div>
                     ) : (
                        <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${data.aiAvatar.imageGradient} flex items-center justify-center shadow-xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0`}>
                           <User size={48} className="text-white" />
                        </div>
                     )}
                     <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-md border border-slate-200 dark:border-slate-700 flex items-center gap-1 z-10">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
                     </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                     <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Meet Your AI Copilot</p>
                     <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{data.aiAvatar.name}</h2>
                     <p className={`text-lg font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient}`}>
                        {data.aiAvatar.role}
                     </p>
                     <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        "{data.aiAvatar.description}"
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why this exists</h2>
               <p className="text-slate-600 dark:text-slate-400">The old way vs. The LexonIT way</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* The Pain */}
               <Card className="p-8 border-red-100 dark:border-red-900/30 bg-white dark:bg-black/40">
                  <div className="flex items-center gap-3 mb-8 text-red-500">
                     <XCircle size={24} />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Struggle</h3>
                  </div>
                  <div className="space-y-8">
                     {data.problems.map((prob, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-1 h-full min-h-[40px] bg-red-200 dark:bg-red-900/50 rounded-full" />
                           <div>
                              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{prob.title}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{prob.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>

               {/* The Solution */}
               <Card className={`p-8 border ${theme.border} bg-white dark:bg-black/40 relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.gradient} opacity-10 rounded-bl-full`} />
                  <div className={`flex items-center gap-3 mb-8 ${theme.text}`}>
                     <CheckCircle2 size={24} />
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Solution</h3>
                  </div>
                  <div className="space-y-8 relative z-10">
                     {data.solutions.map((sol, i) => (
                        <div key={i} className="flex gap-4">
                           <div className={`w-1 h-full min-h-[40px] bg-gradient-to-b ${theme.gradient} rounded-full`} />
                           <div>
                              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{sol.title}</h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{sol.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 container mx-auto px-6">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature, i) => (
               <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-500 transition-colors group">
                  <div className={`w-12 h-12 rounded-lg ${theme.bg} ${theme.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                     <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature}</h3>
                  <p className="text-sm text-slate-500">Fully automated and integrated with your existing stack.</p>
               </div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-r ${theme.gradient}`}>
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your workflow?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
               Join over 1,000 IT providers using LexonIT to automate their daily grind.
            </p>
            <Button 
               size="lg" 
               className="bg-white text-slate-900 hover:bg-slate-100 border-none"
               onClick={() => onNavigate('/contact')}
            >
               Start Free Trial <ArrowRight className="ml-2" size={16} />
            </Button>
         </div>
      </section>

    </div>
  );
}
