
import React from 'react';
import { SERVICES, INDUSTRIES } from '../constants';
import { Card, Button, Badge, GlowingCard } from '../components/ui';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export const ServicesPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          We blend creative design with powerful AI engineering to deliver software that doesn't just work—it thinks.
        </p>
      </div>

      {/* IT Providers Promo Banner */}
      <div className="container mx-auto px-6 mb-24">
        <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 overflow-hidden border border-slate-800 shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                 <Badge variant="purple" className="mb-4">New Solution</Badge>
                 <h2 className="text-3xl font-bold text-white mb-2">Are you an IT Service Provider?</h2>
                 <p className="text-slate-300 max-w-lg text-lg">
                    Discover LexonIT for Providers. AI employees that prep, schedule, and do the busywork so you can focus on delivery.
                 </p>
              </div>
              <Button 
                onClick={() => onNavigate('/services/it-providers')} 
                className="bg-white text-slate-900 hover:bg-slate-100 border-none shrink-0"
                size="lg"
              >
                 Explore IT Solution <Sparkles size={16} className="ml-2 text-violet-600" />
              </Button>
           </div>
        </div>
      </div>

      {/* Main Services List */}
      <div className="container mx-auto px-6 space-y-24">
        {SERVICES.map((service, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-400">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{service.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-4" onClick={() => onNavigate('/contact')}>
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 group shadow-lg dark:shadow-none">
                 {/* Abstract visual representation */}
                 <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 dark:from-violet-900/20 to-slate-100 dark:to-slate-900 z-0" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon size={64} className="text-slate-300 dark:text-white/10 group-hover:text-violet-500/40 dark:group-hover:text-violet-500/20 transition-all duration-500 transform group-hover:scale-125" />
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-200 dark:from-black to-transparent opacity-50 dark:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industries Section (Updated to GlowingCard) */}
      <div className="mt-32 bg-white dark:bg-slate-900/50 py-24 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Industries We Serve</h2>
            <p className="text-slate-600 dark:text-slate-400">Tailored AI solutions for every sector.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <GlowingCard key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm dark:shadow-none">
                    <ind.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{ind.name}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{ind.description}</p>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
