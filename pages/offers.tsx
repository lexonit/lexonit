
import React from 'react';
import { OFFERS } from '../constants';
import { Button, Card, Badge, GlowingCard } from '../components/ui';
import { Check, Zap, Clock } from 'lucide-react';

export const OffersPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-16">
        <Badge variant="purple" className="mb-4">Limited Time</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Accelerate Your Growth</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          High-impact packages designed to get you online and automated in record time.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {OFFERS.map((offer, idx) => {
            const isRec = offer.recommended;
            return (
              <div key={idx} className={`relative ${isRec ? 'lg:-mt-8' : ''}`}>
                {isRec && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold z-20 flex items-center gap-2 shadow-lg">
                    <Zap size={14} fill="white" /> Most Popular
                  </div>
                )}
                
                <GlowingCard containerClassName={`${isRec ? 'border-violet-500 shadow-2xl shadow-violet-500/20' : ''}`}>
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{offer.title}</h3>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                      <Clock size={16} />
                      Delivery: {offer.delivery}
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-3xl font-bold text-slate-900 dark:text-white">{offer.priceRange}</p>
                      <p className="text-slate-500 text-sm mt-1">One-time payment</p>
                    </div>

                    <div className="h-px bg-slate-200 dark:bg-slate-800 mb-8" />

                    <ul className="space-y-4 mb-8 flex-1">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                          <Check size={16} className={`shrink-0 mt-0.5 ${
                            isRec ? 'text-violet-600 dark:text-violet-400' : 'text-slate-400 dark:text-slate-500'
                          }`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={isRec ? 'accent' : 'secondary'} 
                      className="w-full"
                      onClick={() => onNavigate('/contact')}
                    >
                      Select Package
                    </Button>
                  </div>
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24">
        <div className="bg-slate-900 dark:bg-slate-900 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Enterprise Solution?</h3>
            <p className="text-slate-300 max-w-lg">
              We build scalable architectures for large organizations. Let's discuss your specific requirements.
            </p>
          </div>
          <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10 dark:text-white" onClick={() => onNavigate('/contact')}>
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
