
import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import { Home } from './pages';
import { ServicesPage } from './pages/services';
import { OffersPage } from './pages/offers';
import { ContactPage } from './pages/contact';
import { PricingPage } from './pages/pricing';
import { ITProvidersPage } from './pages/services/it-providers';
import { LoginPage } from './pages/login';
import { ServiceDetail } from './pages/service-detail';
import { BlogPage } from './pages/blog';
import { AnimatePresence, motion } from 'framer-motion';
import { TEAM } from './constants';
import { Card, GlowingCard } from './components/ui';
import { User } from 'lucide-react';
import { ChatWidget } from './components/chat-widget';
import AboutPage from './pages/about';

// Simple Router implementation since we are in a single file environment restriction
// In a real Next.js app, this would be handled by the file system routing



const App = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  // Basic SEO Simulation
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'LexonIT | AI & Web Development UAE',
      '/services': 'Services | LexonIT',
      '/pricing': 'Pricing | LexonIT',
      '/offers': 'Offers | LexonIT',
      '/contact': 'Contact Us | LexonIT',
      '/about': 'About | LexonIT',
      '/login': 'Login | LexonIT',
      '/blog': 'Blog | Latest AI Insights'
    };
    
    // Handle Titles for Service Pages
    if (currentPath.startsWith('/services/')) {
       const sub = currentPath.split('/services/')[1];
       if (sub && sub !== 'it-providers') {
          const title = sub.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          document.title = `LexonIT | ${title}`;
       } else if (sub === 'it-providers') {
          document.title = 'LexonIT | For IT Providers';
       } else {
          document.title = 'Services | LexonIT';
       }
    } else {
       document.title = titles[currentPath] || 'LexonIT';
    }
    window.scrollTo(0, 0);
  }, [currentPath]);

  const renderPage = () => {
    if (currentPath === '/login') {
       return <LoginPage onNavigate={setCurrentPath} />;
    }

    if (currentPath === '/services/it-providers') {
       return <ITProvidersPage onNavigate={setCurrentPath} />;
    }
    
    // Match individual service pages (e.g. /services/ai-chat)
    if (currentPath.startsWith('/services/') && currentPath !== '/services') {
       const slug = currentPath.split('/services/')[1];
       if (slug) {
         return <ServiceDetail slug={slug} onNavigate={setCurrentPath} />;
       }
    }

    switch (currentPath) {
      case '/': return <Home onNavigate={setCurrentPath} />;
      case '/services': return <ServicesPage onNavigate={setCurrentPath} />;
      case '/pricing': return <PricingPage onNavigate={setCurrentPath} />;
      case '/offers': return <OffersPage onNavigate={setCurrentPath} />;
      case '/contact': return <ContactPage />;
      case '/about': return <AboutPage onNavigate={setCurrentPath} />;
      case '/blog': return <BlogPage onNavigate={setCurrentPath} />;
      default: return <Home onNavigate={setCurrentPath} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-200 font-sans selection:bg-violet-500/30 transition-colors duration-300">
      {/* Global Chat Widget */}
      <ChatWidget />
      
      {/* Hide navbar on login page for immersive experience */}
      {currentPath !== '/login' && (
        <Navbar 
          onNavigate={setCurrentPath} 
          currentPath={currentPath} 
          theme={theme} 
          onToggleTheme={toggleTheme} 
        />
      )}
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentPath !== '/login' && <Footer onNavigate={setCurrentPath} />}
    </div>
  );
};

export default App;
