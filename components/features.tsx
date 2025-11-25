
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Input, Label, Badge } from './ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { WorldMap } from './ui/world-map';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { Button as MovingBorderButton } from './ui/moving-border';

// --- Pricing Calculator ---
export const PricingCalculator = () => {
  const [type, setType] = useState('landing');
  const [features, setFeatures] = useState<string[]>([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let base = type === 'landing' ? 1500 : type === 'ecommerce' ? 4500 : 8000;
    if (features.includes('ai-chat')) base += 800;
    if (features.includes('seo')) base += 500;
    if (features.includes('automation')) base += 1200;
    setPrice(base);
  }, [type, features]);

  const toggleFeature = (id: string) => {
    setFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-12 mt-4">
          <div className="space-y-6 mt-6 md:mt-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Estimate Your Project</h3>
            
            <div className="space-y-3">
              <Label>Project Type</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'landing', label: 'Landing' },
                  { id: 'ecommerce', label: 'E-Commerce' },
                  { id: 'custom', label: 'Custom App' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setType(opt.id)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      type === opt.id 
                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Add-ons</Label>
              <div className="space-y-2">
                {[
                  { id: 'ai-chat', label: 'AI Chatbot Integration', price: '+800' },
                  { id: 'seo', label: 'Advanced SEO Pack', price: '+500' },
                  { id: 'automation', label: 'Workflow Automation', price: '+1200' },
                ].map(item => (
                  <div 
                    key={item.id}
                    onClick={() => toggleFeature(item.id)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer border transition-all ${
                      features.includes(item.id)
                        ? 'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/50 text-violet-900 dark:text-white'
                        : 'bg-slate-50 dark:bg-black/20 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        features.includes(item.id) ? 'border-violet-500 bg-violet-500' : 'border-slate-400 dark:border-slate-500'
                      }`}>
                        {features.includes(item.id) && <CheckCircle2 size={12} className="text-white" />}
                      </div>
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <span className="text-xs font-mono opacity-70">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-8 flex flex-col justify-center items-center text-center border border-slate-200 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />
            <span className="text-slate-500 dark:text-slate-400 mb-2 font-medium">Estimated Cost</span>
            <motion.div 
              key={price}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold text-slate-900 dark:text-white mb-2"
            >
              AED {price.toLocaleString()}
            </motion.div>
            <p className="text-xs text-slate-500 mb-8 max-w-[200px]">
              *This is a rough estimate. Final pricing may vary based on specific requirements.
            </p>
            <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200">
              Get Exact Quote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// --- AI Chat Demo (Now Functional) ---
export const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am LexonAI. How can I help automate your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
       const apiMessages = messages.concat({ role: 'user', text: userText }).slice(-6).map(m => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.text
       }));

       const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages }),
       });

       if (!response.ok) throw new Error('API Error');
       
       const data = await response.json();
       setMessages(prev => [...prev, { role: 'assistant', text: data.message }]);
    } catch (e) {
       console.error(e);
       setMessages(prev => [...prev, { role: 'assistant', text: "I'm having a bit of trouble connecting right now. Try the chat button in the corner!" }]);
    } finally {
       setIsTyping(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto h-[400px] flex flex-col bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-2xl shadow-violet-900/20">
      <div className="p-4 border-b border-slate-100 dark:border-white/5 flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50">
        <div className="relative">
          <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Lexon Assistant</h4>
          <p className="text-xs text-green-500 dark:text-green-400">Online</p>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-white dark:bg-slate-950">
        {messages.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-violet-600 text-white rounded-br-none' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex gap-1 pl-2">
            {[0, 1, 2].map(d => (
              <motion.div
                key={d}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: d * 0.1 }}
                className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-3 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-slate-950">
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about our services..."
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full py-2.5 pl-4 pr-10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 transition-colors"
          />
          <button 
            onClick={handleSend}
            className="absolute right-1.5 top-1.5 p-1.5 bg-violet-600 rounded-full text-white hover:bg-violet-500 transition-colors"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </Card>
  );
};

// --- Audit Tool ---
export const AuditTool = () => {
  const [url, setUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setComplete(true);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-black p-8 rounded-2xl border border-slate-200 dark:border-white/10 text-center shadow-lg dark:shadow-none">
      <div className="mb-8 flex justify-center">
        <div className="w-16 h-16 bg-violet-100 dark:bg-violet-500/10 rounded-full flex items-center justify-center border border-violet-200 dark:border-violet-500/20">
          <Sparkles className="text-violet-600 dark:text-violet-400" size={32} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free AI Website Audit</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
        Enter your website URL to check its performance, SEO score, and AI-readiness.
      </p>
      
      {!complete ? (
        <form onSubmit={handleAudit} className="flex justify-between items-center flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <Input 
            placeholder="https://yourbusiness.com" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-white dark:bg-black/50"
            required
          />
          <Button style={{ width: '250px' }} type="submit" variant="accent" disabled={analyzing}>
            {analyzing ? 'Scanning...' : 'Analyze Now'}
          </Button>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 p-4 rounded-xl text-green-800 dark:text-green-400 flex items-center justify-center gap-3"
        >
          <CheckCircle2 size={24} />
          <div className="text-left">
            <p className="font-bold text-green-900 dark:text-white">Scan Complete!</p>
            <p className="text-sm">Your detailed report has been generated. Check your email.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// --- World Map Section ---
export function WorldMapSection() {
  return (
    <div className="py-24 dark:bg-black bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="font-bold text-2xl md:text-4xl dark:text-white text-black tracking-tight">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      {/* <div className="max-w-5xl mx-auto mt-10 px-4">
          <WorldMap
            lineColor="#8b5cf6"
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
      </div> */}
    </div>
  );
}

export function AnimatedTestimonialsDemo() {
  const testimonials = [

    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Naveen Yelluru",
      designation: "Founder (TechieMaya FZE) ",
      src: "/testimonials/Naveen_Yelluru.jpeg",
    },
    {
      quote:
        "Working with Lexon IT was an absolute game-changer for our business. Their team provided us with a custom web solution that not only met our needs but exceeded our expectations. From the initial consultation to the final product, their professionalism and attention to detail were outstanding. They took the time to understand our vision and delivered a seamless, user-friendly website that has significantly enhanced our online presence.",
      name: "MORLA BRAHMAIAH",
      designation: "Managing Director, Infinitisolar Int.Ltd",
      src: "/testimonials/MORLA_BRAHMAIAH.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export function MovingBorderDemo() {
  return (
    <div>
      <MovingBorderButton
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </MovingBorderButton>
    </div>
  );
}
