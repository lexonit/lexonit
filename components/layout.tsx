
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Button, SparklesCore, Menu, MenuItem, ProductItem, HoveredLink } from './ui';
import { Menu as MenuIcon, X, Sun, Moon, ChevronDown, Mail, ArrowRight, Twitter, Linkedin, Instagram, LogIn, MessageCircle, Youtube } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  theme: string;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath, theme, onToggleTheme }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navbar (Refactored for Responsiveness) */}
      <div className="hidden lg:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <div className="w-full max-w-7xl px-6 flex items-center justify-between relative">
            
            {/* Logo (image from public/) */}
            <div className="pointer-events-auto flex items-center gap-1 cursor-pointer" onClick={() => handleNav('/')}>
                <img
                  src={theme === 'dark' ? '/logo/logo-light.svg' : '/logo/logo-dark.svg'}
                  alt="LexonIT"
                  className="h-20 md:h-20"
                />
            </div>
            
            {/* Centered Menu */}
            <div className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2">
                <Menu setActive={setActive}>
                    <div onClick={() => handleNav('/')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Home</div>
                    
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4 min-w-[550px]">
                            <ProductItem
                                title="For IT Providers"
                                href="/services/it-providers"
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
                                description="Scale your MSP business with AI employees."
                                onClick={() => handleNav('/services/it-providers')}
                            />
                            <ProductItem
                                title="AI Project Manager"
                                href="/services/ai-project-manager"
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop"
                                description="Stop babysitting tickets. Let AI manage workflow."
                                onClick={() => handleNav('/services/ai-project-manager')}
                            />
                            <ProductItem
                                title="AI Chatbots"
                                href="/services/ai-chat"
                                src="/other/chatbot.png"
                                description="24/7 Customer support agents."
                                onClick={() => handleNav('/services/ai-chat')}
                            />
                             <div className="flex flex-col space-y-2 justify-center">
                                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">More Solutions</h4>
                                <HoveredLink onClick={() => handleNav('/services')} href="/services">All Services</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-workflows')} href="/services/ai-workflows">Automation Workflows</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-dashboards')} href="/services/ai-dashboards">AI Dashboards</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-email')} href="/services/ai-email">Email Assistant</HoveredLink>
                            </div>
                        </div>
                    </MenuItem>

                    <div onClick={() => handleNav('/offers')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Offers</div>
                    <div onClick={() => handleNav('/pricing')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Pricing</div>
                    <div onClick={() => handleNav('/blog')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Blog</div>
                    <div onClick={() => handleNav('/about')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">About</div>
                    <div onClick={() => handleNav('/contact')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Contact</div>
                </Menu>
            </div>

            {/* Right Actions */}
            <div className="pointer-events-auto flex gap-4 items-center">
                <button 
                    onClick={() => handleNav('/login')} 
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white transition-colors hidden xl:block"
                >
                    Login
                </button>
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Navbar (Hamburger) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 transition-all">
           <div className="flex items-center gap-2" onClick={() => handleNav('/')}>
             <img src="/logo/logo-dark.svg" alt="LexonIT" className="h-15 block dark:hidden" />
             <img src="/logo/logo-light.svg" alt="LexonIT" className="h-15 hidden dark:block" />
           </div>
          <div className="flex items-center gap-4">
             <button onClick={onToggleTheme} className="text-slate-900 dark:text-white">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 dark:text-white">
                {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
             </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-20 px-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 py-3">
                  <button
                    onClick={() => item.children ? toggleDropdown(item.label) : handleNav(item.path)}
                    className={`text-left text-lg font-medium ${
                      currentPath === item.path || (item.children && currentPath.startsWith(item.path))
                        ? 'text-violet-600 dark:text-violet-400' 
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <button onClick={() => toggleDropdown(item.label)} className="p-2">
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''} text-slate-500`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="flex flex-col gap-2 pl-4 bg-slate-50 dark:bg-white/5 rounded-lg my-2 p-2">
                    {item.children.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => handleNav(child.path)}
                        className="text-left py-2 text-base text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2">
               <button onClick={() => handleNav('/login')} className="w-full text-left py-3 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 border-b border-slate-100 dark:border-white/5 mb-4">
                  Login
               </button>
               <Button className="w-full" variant="accent" onClick={() => handleNav('/contact')}>
                  Book Consultation
               </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <footer className="relative bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-300 overflow-hidden">
      {/* Aceternity Sparkles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#a78bfa" // Violet-400 ish
        />
        {/* Mask to fade sparkles at the top */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <img src="/logo/logo-dark.svg" alt="LexonIT" className="h-8 block dark:hidden" />
                <img src="/logo/logo-light.svg" alt="LexonIT" className="h-15 hidden dark:block" />
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Empowering businesses with next-generation AI automation and web development solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/105326567/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://x.com/LEXONITSOLUTION" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
                <Twitter size={16} />
              </a>
              <a href="https://www.instagram.com/lexonitsolutions/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@lexonitservices" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Partners', 'Blog'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => item === 'Blog' ? onNavigate('/blog') : onNavigate('/about')} 
                    className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['AI Chatbots', 'Web Development', 'Automation', 'For IT Providers'].map((item) => (
                <li key={item}>
                  <button onClick={() => item === 'For IT Providers' ? onNavigate('/services/it-providers') : onNavigate('/services')} className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <Mail size={16} className="text-violet-500" />
                <span>hr@lexonit.com</span>
              </li>
              <li>
                <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('/contact')}>
                  Get a Quote <ArrowRight size={14} className="ml-2" />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 LexonIT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-600 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-violet-600 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Floating WhatsApp Button Component
export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9720588230538', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </button>
  );
};
