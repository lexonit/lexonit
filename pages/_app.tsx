import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { Navbar, Footer, FloatingWhatsApp } from '../components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Apply theme class to <html>
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const onNavigate = (path: string) => {
    if (!path) return;
    // If path looks like an external URL, use location.href
    if (path.startsWith('http')) {
      window.location.href = path;
      return;
    }
    router.push(path);
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation (fixed) */}
      <Navbar onNavigate={onNavigate} currentPath={router.pathname} theme={theme} onToggleTheme={toggleTheme} />

      {/* Page content - add top padding so fixed navbar doesn't overlap */}
      <div className="pt-20">
        <Component {...pageProps} onNavigate={onNavigate} />
      </div>

      <Footer onNavigate={onNavigate} />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
