
import React, { useState } from 'react';
import { PRICING_PLANS, PRICING_FEATURES, PRICING_FAQS } from '../constants';
import { Button, Card, Badge } from '../components/ui';
import { Check, HelpCircle, Zap, Minus, Info } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper to render values (boolean, string, check)
const FeatureValue = ({ value, highlight }: { value: any, highlight: boolean }) => {
  if (value === true) {
    return (
      <div className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto ${highlight ? 'bg-violet-600 text-white' : 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400'}`}>
        <Check size={14} strokeWidth={3} />
      </div>
    );
  }
  if (value === false || !value) {
    return <Minus size={16} className="mx-auto text-slate-300 dark:text-slate-600" />;
  }
  return <span className={`font-medium text-sm ${highlight ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>{value}</span>;
};

export const PricingPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300 font-sans">
      
      {/* Hero */}
      <section className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Plans & Pricing
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          Whether you're a startup or a global enterprise, we have a plan that scales with you.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium cursor-pointer ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`} onClick={() => setAnnual(false)}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${annual ? 'translate-x-7' : ''}`} />
          </button>
          <span className={`text-sm font-medium cursor-pointer ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`} onClick={() => setAnnual(true)}>
            Yearly <span className="text-emerald-500 text-xs ml-1 font-bold">-20%</span>
          </span>
        </div>
      </section>

      {/* DESKTOP: PRICING TABLE */}
      <section className="hidden lg:block container mx-auto px-6 mb-24 overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Sticky Header Row */}
          <div className="grid grid-cols-5 gap-4 sticky top-20 bg-slate-50/95 dark:bg-black/95 backdrop-blur-md z-20 py-6 border-b border-slate-200 dark:border-slate-800">
            <div className="col-span-1 pt-8">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Features</p>
            </div>
            
            {PRICING_PLANS.map((plan) => {
              const price = typeof plan.price === 'number' 
                ? (annual ? Math.round(plan.price * 0.8) : plan.price)
                : plan.price;

              return (
                <div key={plan.key} className={`col-span-1 flex flex-col items-center text-center relative px-2 ${plan.highlight ? '' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-6 left-0 right-0 bg-violet-600 text-white text-xs font-bold py-1 rounded-t-lg shadow-sm">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-full p-6 rounded-xl transition-all duration-300 h-full flex flex-col justify-between ${plan.highlight ? 'bg-white dark:bg-slate-900 border-2 border-violet-600 shadow-xl' : 'border border-transparent'}`}>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-0.5 mb-1">
                        {typeof price === 'number' ? (
                           <>
                             <span className="text-sm font-medium text-slate-500">$</span>
                             <span className="text-3xl font-bold text-slate-900 dark:text-white">{price}</span>
                           </>
                        ) : (
                           <span className="text-3xl font-bold text-slate-900 dark:text-white">{price}</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mb-4">{typeof price === 'number' ? '/mo per seat' : 'per year'}</p>
                    </div>
                    
                    <Button 
                      variant={plan.highlight ? 'accent' : (plan.key === 'enterprise' ? 'outline' : 'primary')}
                      className={`w-full text-sm py-2 ${plan.highlight ? '' : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black'}`}
                      onClick={() => onNavigate('/contact')}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Body */}
          <div className="space-y-12 mt-8">
            {PRICING_FEATURES.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 px-2 flex items-center gap-2">
                  {section.category}
                </h4>
                <div className="space-y-0">
                  {section.items.map((item: any, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 py-4 border-b border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors rounded-lg">
                      <div className="col-span-1 flex items-center gap-2 px-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                        {item.info && (
                          <div className="group relative">
                             <Info size={14} className="text-slate-400 cursor-help" />
                             <div className="absolute left-full ml-2 bottom-0 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                                {item.info}
                             </div>
                          </div>
                        )}
                      </div>
                      {PRICING_PLANS.map((plan) => (
                        <div key={plan.key} className={`col-span-1 flex items-center justify-center px-2 ${plan.highlight ? 'bg-violet-50/30 dark:bg-violet-900/5 rounded' : ''}`}>
                          <FeatureValue value={item[plan.key]} highlight={plan.highlight} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE: CARDS VIEW */}
      <section className="lg:hidden container mx-auto px-6 mb-24">
        <div className="space-y-8">
          {PRICING_PLANS.map((plan) => {
            const price = typeof plan.price === 'number' 
              ? (annual ? Math.round(plan.price * 0.8) : plan.price)
              : plan.price;

            return (
              <div key={plan.key} className="relative">
                {plan.highlight && (
                  <div className="bg-violet-600 text-white text-center text-xs font-bold py-2 rounded-t-xl">
                    MOST POPULAR
                  </div>
                )}
                <Card className={`p-6 ${plan.highlight ? 'border-violet-500 rounded-t-none border-t-0 shadow-xl' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">
                        {typeof price === 'number' ? price : price}
                      </span>
                      {typeof price === 'number' && <span className="text-slate-500 text-sm">/mo</span>}
                    </div>
                    <p className="text-sm text-slate-500">{plan.description}</p>
                  </div>

                  <Button 
                    variant={plan.highlight ? 'accent' : 'primary'} 
                    className="w-full mb-8"
                    onClick={() => onNavigate('/contact')}
                  >
                    {plan.cta}
                  </Button>

                  {/* Mobile Features List */}
                  <div className="space-y-6">
                    {PRICING_FEATURES.map((section, idx) => (
                      <div key={idx}>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 border-b border-slate-100 dark:border-slate-800 pb-1">
                          {section.category}
                        </p>
                        <ul className="space-y-3">
                          {section.items.map((item: any, i: number) => {
                            const val = item[plan.key];
                            if (!val && val !== 0) return null;
                            return (
                              <li key={i} className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-300">{item.name}</span>
                                <div><FeatureValue value={val} highlight={false} /></div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about our pricing and billing.</p>
        </div>

        <div className="space-y-4">
          {PRICING_FAQS.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
                <div className="p-6">
                  <h3 className="flex items-start gap-3 font-bold text-slate-900 dark:text-white mb-3 text-base">
                    <HelpCircle size={18} className="text-violet-500 mt-0.5 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 pl-8 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2">Still have questions?</h4>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Our team is available to answer any questions about features, trials, or enterprise needs.</p>
          <Button variant="outline" onClick={() => onNavigate('/contact')}>Contact Support</Button>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
