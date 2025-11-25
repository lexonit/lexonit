
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Badge, GlowingCard } from '../../components/ui';
import { AI_EMPLOYEES, IT_TESTIMONIALS, IT_FEATURES_GRID } from '../../constants';
import { 
  CheckCircle2, Zap, ArrowRight, Layout, Calendar, 
  FileText, BarChart3, Search, XCircle, AlertCircle, 
  ChevronDown, Layers, Split, Check, Clock
} from 'lucide-react';

// --- UI Mockups for Deep Dive ---
const GanttMockup = () => (
  <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 text-xs font-mono overflow-hidden">
    <div className="flex border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
      <div className="w-1/4 text-slate-500">Task</div>
      <div className="flex-1 flex justify-between text-slate-400">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
      </div>
    </div>
    <div className="space-y-3 relative">
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-red-500/50 z-10" title="Deadline Prediction"></div>
      <div className="flex items-center">
        <div className="w-1/4 truncate pr-2">Backend API</div>
        <div className="flex-1 h-6 bg-slate-100 dark:bg-slate-800 rounded-full relative">
          <div className="absolute left-0 w-[60%] h-full bg-violet-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/4 truncate pr-2">Frontend Integration</div>
        <div className="flex-1 h-6 bg-slate-100 dark:bg-slate-800 rounded-full relative">
          <div className="absolute left-[40%] w-[40%] h-full bg-indigo-500 rounded-full opacity-50"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/4 truncate pr-2">QA Testing</div>
        <div className="flex-1 h-6 bg-slate-100 dark:bg-slate-800 rounded-full relative">
           {/* Delayed Block */}
          <div className="absolute left-[80%] w-[30%] h-full bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute -right-2 -top-2 bg-red-500 text-white px-1 rounded text-[8px]">DELAY RISK</div>
        </div>
      </div>
    </div>
  </div>
);

const CapacityMockup = () => (
  <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 text-xs">
    <div className="flex justify-between items-center mb-4">
      <span className="font-bold">Team Capacity</span>
      <span className="text-green-500">Balanced</span>
    </div>
    <div className="space-y-3">
      {[
        { name: 'Sarah (Dev)', load: 95, color: 'bg-red-500' },
        { name: 'Mike (Design)', load: 45, color: 'bg-green-500' },
        { name: 'Jessica (PM)', load: 70, color: 'bg-yellow-500' }
      ].map((person, i) => (
        <div key={i}>
          <div className="flex justify-between mb-1">
            <span>{person.name}</span>
            <span>{person.load}%</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${person.load}%` }}
              className={`h-full ${person.color}`}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 p-2 bg-violet-50 dark:bg-violet-900/20 rounded text-violet-700 dark:text-violet-300 text-[10px] flex gap-2 items-center">
      <Zap size={12} />
      <span>LexonIT Suggestion: Reassign 2 tasks from Sarah to Mike.</span>
    </div>
  </div>
);

const getTextColor = (bgClass: string) => {
  const colorMap: Record<string, string> = {
    'bg-blue-500': 'text-blue-600 dark:text-blue-400',
    'bg-amber-500': 'text-amber-600 dark:text-amber-400',
    'bg-pink-500': 'text-pink-600 dark:text-pink-400',
    'bg-indigo-500': 'text-indigo-600 dark:text-indigo-400',
    'bg-teal-500': 'text-teal-600 dark:text-teal-400',
    'bg-green-500': 'text-green-600 dark:text-green-400',
    'bg-cyan-500': 'text-cyan-600 dark:text-cyan-400',
  };
  return colorMap[bgClass] || 'text-violet-600 dark:text-violet-400';
};

export const ITProvidersPage = ({ onNavigate, initialTab }: { onNavigate: (path: string) => void, initialTab?: string }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'AI Project Manager');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Helper to find the current feature icon and desc
  const currentFeature = IT_FEATURES_GRID.flatMap(g => g.items).find(i => i.title === activeTab);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white pt-20 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge variant="purple" className="mb-6 px-4 py-1 text-sm uppercase tracking-wider">For IT Service Providers</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Wow clients. <br />
            Meet every commitment.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Never miss a handoff — with AI employees who prep, schedule, and do the busywork.
            Equip every technician with AI trained on your workflows. Deliver like a provider twice your size.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" variant="primary" onClick={() => onNavigate('/contact')}>Start Free Trial</Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('/contact')}>Contact Sales</Button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Dropdown & Content */}
      <section className="py-10 bg-white dark:bg-black border-y border-slate-200 dark:border-slate-800">
         <div className="container mx-auto px-6">
            
            {/* Feature Dropdown Menu */}
            <div className="relative max-w-md mx-auto mb-16 z-20">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:border-violet-500 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {currentFeature && <currentFeature.icon className="text-violet-600 dark:text-violet-400" size={24} />}
                  <span className="font-bold text-lg">{activeTab}</span>
                </div>
                <ChevronDown className={`text-slate-400 group-hover:text-violet-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden max-h-[60vh] overflow-y-auto scrollbar-hide z-30"
                  >
                    {IT_FEATURES_GRID.map((category, idx) => (
                       <div key={idx} className="p-4 border-b border-slate-100 dark:border-slate-800 last:border-none">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 ml-3">{category.category}</h4>
                          <div className="grid gap-1">
                            {category.items.map((item, i) => (
                               <button
                                  key={i}
                                  onClick={() => {
                                    setActiveTab(item.title);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`text-left px-3 py-3 rounded-lg text-sm transition-colors flex items-center gap-3 ${
                                    activeTab === item.title 
                                      ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 font-medium' 
                                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                                  }`}
                               >
                                  <item.icon size={18} className={activeTab === item.title ? 'text-violet-600 dark:text-violet-400' : 'text-slate-400'} />
                                  {item.title}
                               </button>
                            ))}
                          </div>
                       </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tab Content Area */}
            <div className="min-h-[600px]">
              <AnimatePresence mode="wait">
                {activeTab === 'AI Project Manager' ? (
                  <motion.div 
                    key="pm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-24"
                  >
                    {/* PM Header */}
                    <div className="text-center max-w-4xl mx-auto">
                      <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-bold mb-6">
                        <XCircle size={16} /> Stop Babysitting Tickets
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Get work done with <span className="text-violet-600 dark:text-violet-400">90% less admin.</span>
                      </h2>
                      <p className="text-xl text-slate-600 dark:text-slate-400">
                         LexonIT's AI Project Architect maximizes efficiency, eliminates the "check-in" email, creates radical accountability, and reduces stress for every technician.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                       {[
                          { label: 'Faster Completion', val: '32%' },
                          { label: 'Fewer Meetings', val: '-5hr/wk' },
                          { label: 'Capacity Clarity', val: '100%' },
                          { label: 'Client Trust', val: 'High' }
                       ].map((stat, i) => (
                          <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center border border-slate-200 dark:border-slate-800">
                             <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.val}</div>
                             <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
                          </div>
                       ))}
                    </div>

                    {/* Problem / Solution 1: Auto-Moving Projects */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-slate-200 dark:border-slate-800 pt-24">
                       <div className="order-2 lg:order-1 relative">
                          <div className="absolute inset-0 bg-violet-500/5 blur-3xl rounded-full"></div>
                          <Card className="relative p-8 border-violet-200 dark:border-violet-900/50 bg-violet-50/50 dark:bg-violet-900/10">
                             <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-600/20">
                                   <Zap size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">The LexonIT Way</h3>
                             </div>
                             <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-4">
                                Self-Driving Projects.
                             </p>
                             <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                In LexonIT, projects move forward automatically. When a task is done, the next assignee is notified instantly. Dependencies unlock themselves. Nothing gets stuck.
                             </p>
                             <div className="flex items-center gap-4 text-sm font-semibold text-violet-700 dark:text-violet-400">
                                <CheckCircle2 size={18} /> Works cross-department
                             </div>
                          </Card>
                       </div>
                       <div className="order-1 lg:order-2 space-y-6">
                          <div className="inline-flex items-center gap-2 text-slate-500 font-medium uppercase tracking-wider text-xs">
                             <AlertCircle size={14} /> The Problem
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                             You are babysitting your current software.
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg">
                             Your current tool (or Excel sheet) requires you to manually update statuses, nag people for handoffs, and push dates around. You are working for the tool, not the other way around.
                          </p>
                          <div className="pl-4 border-l-2 border-red-200 dark:border-red-900/50 text-slate-500 italic">
                             "I spend 2 hours a day just moving cards in Trello."
                          </div>
                       </div>
                    </div>

                    {/* Problem / Solution 2: Prioritization */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-slate-200 dark:border-slate-800 pt-24">
                       <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 text-slate-500 font-medium uppercase tracking-wider text-xs">
                             <AlertCircle size={14} /> The Problem
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                             Priorities change. Plans break.
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg">
                             You have daily standups just to re-plan the week. When one task runs late, you have to manually shift every other task for that person. It's a domino effect of manual labor.
                          </p>
                       </div>
                       <div className="relative">
                          <Card className="p-8 bg-white dark:bg-black border-slate-200 dark:border-slate-800">
                             <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                   <Split size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dynamic AI Scheduling</h3>
                             </div>
                             <p className="text-slate-600 dark:text-slate-400 mb-6">
                                LexonIT's engine optimizes everyone's schedule in real-time. If a task takes longer, the AI automatically shuffles the rest of the day (and week) instantly.
                             </p>
                             <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-mono">
                                <div className="flex gap-2 items-center text-green-600 mb-2">
                                   <Check size={12} /> Plan optimized for 5 users
                                </div>
                                <div className="flex gap-2 items-center text-green-600">
                                   <Check size={12} /> 12 conflicts resolved
                                </div>
                             </div>
                          </Card>
                       </div>
                    </div>

                    {/* Feature 3: Predictive Gantt */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-slate-200 dark:border-slate-800 pt-24">
                       <div className="order-2 lg:order-1 relative">
                          <GanttMockup />
                       </div>
                       <div className="order-1 lg:order-2 space-y-6">
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                             See into the future.
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg">
                             How do you know if a project will miss the deadline? Usually, you find out too late.
                             <br/><br/>
                             LexonIT predicts exactly when a project will finish based on your team's actual velocity. It alerts you to risks <i>weeks</i> in advance.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                               <CheckCircle2 size={16} className="text-green-500" /> Accurate timeline estimates
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                               <CheckCircle2 size={16} className="text-green-500" /> Buffer management
                            </li>
                          </ul>
                       </div>
                    </div>

                    {/* Feature 4: Capacity Planning */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-slate-200 dark:border-slate-800 pt-24">
                       <div className="space-y-6">
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                             Prevent Burnout & Idle Time.
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg">
                             Resource allocation is a balancing act. LexonIT matches supply (employee hours) with demand (tasks).
                             Spot who is over-capacity and who is free, instantly.
                          </p>
                       </div>
                       <div className="relative">
                          <CapacityMockup />
                       </div>
                    </div>

                    {/* Consolidation Section */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 mt-24">
                       <h3 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Consolidate your Tech Stack</h3>
                       <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                          LexonIT isn't just another tool. It replaces the fragmentation of 5 other apps.
                       </p>
                       
                       <div className="grid md:grid-cols-3 gap-8">
                          <div className="bg-white dark:bg-black p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-400 transition-colors group">
                             <div className="text-slate-400 group-hover:text-red-500 mb-4 flex justify-center"><XCircle size={32} /></div>
                             <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Replace To-Do Lists</h4>
                             <p className="text-sm text-slate-500">No more sticky notes or Todoist.</p>
                          </div>
                          <div className="bg-white dark:bg-black p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-400 transition-colors group">
                             <div className="text-slate-400 group-hover:text-red-500 mb-4 flex justify-center"><Layers size={32} /></div>
                             <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Replace Jira/Monday</h4>
                             <p className="text-sm text-slate-500">Stop paying for manual PM tools.</p>
                          </div>
                          <div className="bg-white dark:bg-black p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-400 transition-colors group">
                             <div className="text-slate-400 group-hover:text-red-500 mb-4 flex justify-center"><Calendar size={32} /></div>
                             <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Replace Calendly</h4>
                             <p className="text-sm text-slate-500">Meeting scheduling is built-in.</p>
                          </div>
                       </div>
                    </div>

                    {/* Integration Marquee */}
                    <div className="pt-12">
                      <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">Seamlessly Integrates With</p>
                      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                         {['Slack', 'Teams', 'Zoom', 'GitHub', 'Salesforce', 'HubSpot', 'Outlook', 'Gmail'].map((tech) => (
                           <span key={tech} className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 cursor-default">
                             {tech}
                           </span>
                         ))}
                      </div>
                      <div className="text-center mt-8">
                         <a href="#" className="text-violet-600 dark:text-violet-400 font-medium hover:underline inline-flex items-center gap-1">
                            View API Documentation <ArrowRight size={14} />
                         </a>
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div 
                    key="other"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-24 text-center"
                  >
                     <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                        {currentFeature ? <currentFeature.icon size={40} className="text-violet-500" /> : <Layout size={40} className="text-slate-400" />}
                     </div>
                     <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{activeTab}</h3>
                     <p className="text-slate-500 max-w-lg mb-8 text-lg">
                        {currentFeature?.desc || `Explore the advanced capabilities of our ${activeTab} module in the full demo.`}
                     </p>
                     <Button onClick={() => setActiveTab('AI Project Manager')}>
                        Back to AI Project Manager
                     </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
         </div>
      </section>

      {/* AI Team Grid (Updated with GlowingCard) */}
      <section className="py-24 container mx-auto px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet your AI team</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            They remember every detail, automate the admin, and make you look sharp to clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AI_EMPLOYEES.map((emp, i) => (
            <motion.div key={i} className="h-full">
              <GlowingCard>
                <div className={`w-12 h-12 ${emp.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                   <emp.icon className={getTextColor(emp.color)} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">{emp.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{emp.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {emp.description}
                </p>
              </GlowingCard>
            </motion.div>
          ))}
          
          {/* Custom Card */}
          <div className="h-full">
             <Card className="h-full p-6 border-dashed border-2 border-slate-300 dark:border-slate-700 bg-transparent flex flex-col justify-center items-center text-center hover:border-violet-500 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                   <Zap size={24} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Custom AI Employee</h3>
                <p className="text-sm text-slate-500">Build your own. Train them on your specific company knowledge.</p>
             </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 container mx-auto px-6 bg-slate-50 dark:bg-black">
         <div className="grid md:grid-cols-2 gap-8">
            {IT_TESTIMONIALS.map((t, i) => (
               <div key={i} className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-2xl text-violet-500 mb-4">“</div>
                  <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 italic">
                     {t.text}
                  </p>
                  <div>
                     <p className="font-bold text-slate-900 dark:text-white">{t.author}</p>
                     <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-indigo-600 text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">The future of work is here now.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="bg-white text-violet-600 hover:bg-slate-100" onClick={() => onNavigate('/contact')}>Try LexonIT Free</Button>
               <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10" onClick={() => onNavigate('/contact')}>Contact Sales</Button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ITProvidersPage;
