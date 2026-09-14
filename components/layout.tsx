
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Button, SparklesCore, Menu, MenuItem, ProductItem, ProductLogoItem, HoveredLink } from './ui';
import { Menu as MenuIcon, X, Sun, Moon, ChevronDown, Mail, ArrowRight, Twitter, Linkedin, Instagram, LogIn, Youtube } from 'lucide-react';

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
      <div className="hidden lg:flex fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo (image from public/) */}
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNav('/')}>
                <img
                  src={theme === 'dark' ? '/logo/logo-light.svg' : '/logo/logo-dark.svg'}
                  alt="LexonIT"
                  className="h-12 md:h-16"
                />
            </div>
            
            {/* Centered Menu */}
            <div className="flex-1 flex justify-center">
                <Menu setActive={setActive}>
                    <div onClick={() => handleNav('/')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath === '/' ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>Home</div>
                    
                    <MenuItem setActive={setActive} active={active} item="Services" isActive={currentPath.startsWith('/services')}>
                        <div className="flex flex-col min-w-[750px]">
                            <div className="grid grid-cols-2 gap-8 p-6">
                                <ProductItem
                                    title="For IT Providers"
                                    href="/services/it-providers"
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
                                    description="Scale your MSP business with AI employees."
                                    onClick={() => handleNav('/services/it-providers')}
                                />
                                <ProductItem
                                    title="Hospital CRM & ERP"
                                    href="/services/hospital-crm-erp"
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
                                    description="End-to-end management for patient data & operations."
                                    onClick={() => handleNav('/services/hospital-crm-erp')}
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
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center px-6">
                                <div className="flex gap-6 items-center">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">More:</span>
                                    <HoveredLink onClick={() => handleNav('/services/ai-workflows')} href="/services/ai-workflows">Workflows</HoveredLink>
                                    <HoveredLink onClick={() => handleNav('/services/ai-dashboards')} href="/services/ai-dashboards">Dashboards</HoveredLink>
                                    <HoveredLink onClick={() => handleNav('/services/ai-email')} href="/services/ai-email">Email Assistant</HoveredLink>
                                </div>
                                <HoveredLink onClick={() => handleNav('/services')} href="/services" className="font-bold text-violet-600 dark:text-violet-400">All Services &rarr;</HoveredLink>
                            </div>
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="Products" isActive={currentPath.startsWith('/products')}>
                        <div className="text-sm p-4">
                            <div className="flex gap-3">
                                <ProductLogoItem
                                    title="Sakhi Safety"
                                    href="/products/sakhi-safety"
                                    src="/sakhi-safety-app.png"
                                    onClick={() => handleNav('/products/sakhi-safety')}
                                />
                                <ProductLogoItem
                                    title="AutoHirU"
                                    href="/products/autohiru"
                                    src="/autohiru-icon.png"
                                    imgFit="contain"
                                    onClick={() => handleNav('/products/autohiru')}
                                />
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10">
                                <HoveredLink onClick={() => handleNav('/products')} href="/products">View All Products →</HoveredLink>
                            </div>
                        </div>
                    </MenuItem>

                    <div onClick={() => handleNav('/clients')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath.startsWith('/clients') ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>Clients</div>
                    <div onClick={() => handleNav('/career')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath.startsWith('/career') ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>Career</div>
                    <div onClick={() => handleNav('/blog')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath.startsWith('/blog') ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>Blog</div>
                    <div onClick={() => handleNav('/about')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath.startsWith('/about') ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>About</div>
                    <div onClick={() => handleNav('/contact')} onMouseEnter={() => setActive(null)} className={`cursor-pointer hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium ${currentPath.startsWith('/contact') ? 'text-violet-600 dark:text-violet-400' : 'text-black dark:text-white'}`}>Contact</div>
                </Menu>
            </div>

            {/* Right Actions */}
            <div className="flex gap-4 items-center">
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
              <a href="https://www.youtube.com/@lexonitsolutions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
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
                    onClick={() => item === 'Blog' ? onNavigate('/blog') : item === 'Careers' ? onNavigate('/career') : onNavigate('/about')}
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
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-violet-600 dark:hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('/sakhi-privacy')} className="hover:text-violet-600 dark:hover:text-white transition-colors">Sakhi Safety Privacy</button>
            <a href="#" className="hover:text-violet-600 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Real WhatsApp glyph (brand icon), used for the floating button and contact CTA
export const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.34.65 4.52 1.78 6.38L4 29l7.82-1.74A11.9 11.9 0 0 0 16.01 27C22.63 27 28 21.63 28 15S22.63 3 16.01 3Zm0 21.8a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-4.64 1.03 1.03-4.52-.23-.37A9.7 9.7 0 0 1 5.2 15c0-5.96 4.85-10.8 10.8-10.8S26.8 9.04 26.8 15 21.96 24.8 16.01 24.8Z"/>
    <path d="M21.6 17.72c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z"/>
  </svg>
);

// Floating WhatsApp Button Component
export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917780181920', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} className="group-hover:animate-pulse" />
    </button>
  );
};
