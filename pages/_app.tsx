import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { Navbar, Footer, FloatingWhatsApp } from '../components/layout';
import { PageSkeleton, TopProgressBar } from '../components/skeleton';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isNavigating, setIsNavigating] = useState(false);

  // Initialize theme from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Pre-fetch all primary routes for instant 0ms transitions
  useEffect(() => {
    const topRoutes = [
      '/',
      '/services',
      '/services/it-providers',
      '/services/hospital-crm-erp',
      '/services/ai-project-manager',
      '/services/ai-chat',
      '/products',
      '/products/sakhi-safety',
      '/offers',
      '/pricing',
      '/blog',
      '/about',
      '/contact'
    ];
    topRoutes.forEach((route) => {
      try {
        router.prefetch(route);
      } catch (e) {
        // Silently catch prefetch errors
      }
    });
  }, [router]);

  // Track router navigation events to show skeleton loader
  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        setIsNavigating(true);
      }
    };
    const handleComplete = () => {
      setIsNavigating(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    const handleError = () => setIsNavigating(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  const onNavigate = (path: string) => {
    if (!path) return;
    // If path looks like an external URL, use location.href
    if (path.startsWith('http')) {
      window.location.href = path;
      return;
    }
    if (path !== router.asPath) {
      setIsNavigating(true);
      router.push(path);
    }
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LexonIT - Smart IT Solutions</title>
        <link rel="icon" type="image/svg+xml" href="/logo/logo-dark.svg" />
      </Head>

      {/* Navigation (fixed) */}
      <Navbar onNavigate={onNavigate} currentPath={router.pathname} theme={theme} onToggleTheme={toggleTheme} />

      {/* Top progress indicator bar */}
      {isNavigating && <TopProgressBar />}

      {/* Page content with Skeleton fallback on navigation */}
      <div className="pt-20">
        {isNavigating ? (
          <PageSkeleton />
        ) : (
          <Component {...pageProps} onNavigate={onNavigate} />
        )}
      </div>

      <Footer onNavigate={onNavigate} />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}

