
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Lock, Globe, Users, Bell, RefreshCw, Mail, ChevronRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

const LAST_UPDATED = 'June 22, 2025';

const sections = [
  {
    id: 'information-we-collect',
    icon: Eye,
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide',
        text: 'When you interact with our services, we may collect information you directly provide, including: name, email address, company name, phone number, project requirements, and any other information you submit via our contact forms, booking tools, or audit tools.'
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'When you visit our website, we automatically collect certain technical data including: IP address, browser type and version, pages visited, time spent on pages, referring URLs, device type, operating system, and cookie identifiers. This data helps us improve our services and user experience.'
      },
      {
        subtitle: 'AI Chat Interactions',
        text: 'If you use our AI chatbot or AI demo tools, the messages and queries you submit may be processed to provide responses. We do not permanently store personal chat conversations beyond what is necessary for service delivery.'
      }
    ]
  },
  {
    id: 'how-we-use-your-data',
    icon: Database,
    title: 'How We Use Your Data',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your information to respond to inquiries, provide project quotes, deliver contracted services, and communicate about ongoing projects. Your contact details are used solely for business communication related to your request.'
      },
      {
        subtitle: 'Service Improvement',
        text: 'Aggregated and anonymized usage data helps us understand how visitors interact with our website, which allows us to improve our design, content, and AI tools. We analyze performance metrics to ensure our services meet the highest standards.'
      },
      {
        subtitle: 'Marketing Communications',
        text: 'With your explicit consent, we may send you newsletters, updates about our services, AI industry insights, and promotional offers. You can opt out at any time by clicking the unsubscribe link in any email or contacting us directly.'
      },
      {
        subtitle: 'Legal Compliance',
        text: 'We may process your data to comply with applicable laws and regulations, respond to lawful requests from public authorities, protect our legal rights, and prevent fraud or misuse of our services.'
      }
    ]
  },
  {
    id: 'cookies',
    icon: Globe,
    title: 'Cookies & Tracking Technologies',
    content: [
      {
        subtitle: 'Essential Cookies',
        text: 'These cookies are necessary for the website to function properly. They enable core features such as navigation, security, and access to protected areas. These cannot be disabled without significantly impacting your experience.'
      },
      {
        subtitle: 'Analytics Cookies',
        text: 'We use analytics tools (such as Google Analytics) to collect aggregated, anonymous information about how visitors use our site. This includes page views, session duration, and traffic sources. This data is used solely to improve our website performance.'
      },
      {
        subtitle: 'Preference Cookies',
        text: 'These cookies remember your settings and preferences, such as your chosen display theme (light/dark mode), to provide a more personalized experience on return visits.'
      },
      {
        subtitle: 'Managing Cookies',
        text: 'You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse cookies or alert you when cookies are being sent.'
      }
    ]
  },
  {
    id: 'data-storage',
    icon: Database,
    title: 'Data Storage & Retention',
    content: [
      {
        subtitle: 'Where We Store Data',
        text: 'Your data is stored on secure cloud infrastructure. We primarily use AWS (Amazon Web Services) and Supabase for data storage, both of which maintain industry-leading security certifications including SOC 2 Type II and ISO 27001.'
      },
      {
        subtitle: 'Retention Periods',
        text: 'We retain your personal information only for as long as necessary to provide services and fulfill the purposes outlined in this policy. Contact inquiry data is retained for up to 2 years. Project-related data is retained for the duration of our engagement plus 5 years for legal and accounting purposes. Analytics data is retained for 26 months.'
      },
      {
        subtitle: 'Data Deletion',
        text: 'Upon request, we will delete or anonymize your personal data unless we are required to retain it for legal obligations, dispute resolution, or enforcement of our agreements. Deletion requests will be processed within 30 days.'
      }
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Security',
    content: [
      {
        subtitle: 'Technical Safeguards',
        text: 'We implement robust technical measures to protect your data, including: TLS/SSL encryption for all data in transit, AES-256 encryption for data at rest, secure HTTPS-only access, regular security audits and penetration testing, and multi-factor authentication for our internal systems.'
      },
      {
        subtitle: 'Organizational Measures',
        text: 'Access to personal data is restricted to authorized personnel who require it to perform their job functions. All team members undergo regular privacy and security training. We enforce the principle of least privilege across all systems.'
      },
      {
        subtitle: 'Incident Response',
        text: 'In the event of a data breach that affects your rights and freedoms, we will notify the relevant authorities within 72 hours and inform affected individuals without undue delay, as required by applicable data protection laws.'
      }
    ]
  },
  {
    id: 'third-party',
    icon: Globe,
    title: 'Third-Party Services',
    content: [
      {
        subtitle: 'Service Providers',
        text: 'We work with trusted third-party service providers to operate our business. These include: Supabase (database and authentication), AWS (cloud hosting), Stripe (payment processing), OpenAI (AI model services), Vercel (website hosting), and Google Analytics (website analytics). Each provider is contractually bound to protect your data.'
      },
      {
        subtitle: 'Data Sharing',
        text: 'We do not sell, trade, or rent your personal information to third parties for marketing purposes. We only share data with service providers where necessary to deliver services you have requested, and only the minimum data required for that specific purpose.'
      },
      {
        subtitle: 'International Transfers',
        text: 'Some of our service providers may process data outside your country of residence. When transferring data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission or equivalent mechanisms.'
      }
    ]
  },
  {
    id: 'user-rights',
    icon: Users,
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Portability',
        text: 'You have the right to request a copy of the personal data we hold about you in a structured, commonly used, and machine-readable format. We will provide this information within 30 days of your request.'
      },
      {
        subtitle: 'Correction & Erasure',
        text: 'You can request that we correct inaccurate data or erase your personal information where there is no legitimate reason for us to continue processing it. We will fulfill such requests within 30 days, subject to any legal obligations we may have.'
      },
      {
        subtitle: 'Objection & Restriction',
        text: 'You have the right to object to processing of your personal data for direct marketing at any time. You may also request that we restrict processing while a complaint is being investigated. Opt-out requests will be honored within 10 business days.'
      },
      {
        subtitle: 'How to Exercise Your Rights',
        text: 'To exercise any of these rights, please contact us at hr@lexonit.com with the subject line "Data Rights Request." We may need to verify your identity before processing your request to protect your privacy and security.'
      }
    ]
  },
  {
    id: 'children',
    icon: Shield,
    title: "Children's Privacy",
    content: [
      {
        subtitle: 'Age Restriction',
        text: 'Our services are intended for business use and are not directed at individuals under the age of 16. We do not knowingly collect personal information from children under 16 years of age.'
      },
      {
        subtitle: 'If We Discover Child Data',
        text: 'If we become aware that we have inadvertently collected personal information from a child under 16, we will take immediate steps to delete that information from our systems. If you believe we may have collected information from a child, please contact us immediately at hr@lexonit.com.'
      }
    ]
  },
  {
    id: 'policy-updates',
    icon: RefreshCw,
    title: 'Policy Updates',
    content: [
      {
        subtitle: 'How We Notify You',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you by email or through a prominent notice on our website.'
      },
      {
        subtitle: 'Your Continued Use',
        text: 'Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy. We encourage you to review this page periodically to stay informed about how we protect your data.'
      }
    ]
  }
];

const PolicySection = ({ section, index }: { section: typeof sections[0]; index: number }) => {
  const Icon = section.icon;
  return (
    <motion.div
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mt-1">
          <Icon size={20} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white pt-2">
          {section.title}
        </h2>
      </div>

      <div className="ml-14 space-y-5">
        {section.content.map((item, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
              <ChevronRight size={14} className="text-violet-500 flex-shrink-0" />
              {item.subtitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PrivacyPolicyPage = ({ onNavigate }: PrivacyPolicyPageProps) => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Background decorative blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield size={14} />
            Legal Document
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400">
              Policy
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            At LexonIT, your privacy is fundamental to everything we do. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <span className="flex items-center gap-1.5">
              <RefreshCw size={13} />
              Last Updated: {LAST_UPDATED}
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Mail size={13} />
              Questions? Email us at hr@lexonit.com
            </span>
          </div>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-12 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
            Quick Navigation
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-700 dark:hover:text-violet-400 transition-colors"
                >
                  <Icon size={14} className="text-violet-500 flex-shrink-0" />
                  {section.title}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 border border-violet-200 dark:border-violet-800/30 rounded-2xl p-8 mb-12"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            1. Introduction
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              LexonIT ("we," "our," or "us") is a UAE-based technology company providing AI automation, web development, and digital solutions. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at{' '}
              <span className="font-semibold text-violet-600 dark:text-violet-400">lexonit.com</span>{' '}
              or engage with our services.
            </p>
            <p>
              This policy applies to all users of our website and clients of our services. By accessing or using our services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services.
            </p>
            <p>
              We are committed to complying with applicable data protection laws, including the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and the EU General Data Protection Regulation (GDPR) where applicable.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={section.id}>
              <div className="border-b border-slate-200 dark:border-slate-800 pb-12 mb-0">
                <PolicySection section={section} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-black border border-slate-700 rounded-2xl p-8 text-center"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center mx-auto mb-4">
            <Mail size={22} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">
            If you have questions about this Privacy Policy, wish to exercise your data rights, or have a privacy concern, please reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="bg-white/10 rounded-xl px-5 py-3 text-slate-300">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Email</span>
              <span className="font-semibold text-white">hr@lexonit.com</span>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-slate-300">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Company</span>
              <span className="font-semibold text-white">LexonIT</span>
            </div>
            <div className="bg-white/10 rounded-xl px-5 py-3 text-slate-300">
              <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">Location</span>
              <span className="font-semibold text-white">UAE</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            We aim to respond to all privacy-related inquiries within 5 business days.
          </p>
        </motion.div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-slate-400 dark:text-slate-600">
          <p>© 2025 LexonIT. All rights reserved.</p>
          <p className="mt-2">
            This Privacy Policy is effective as of {LAST_UPDATED}.{' '}
            <button
              onClick={() => onNavigate('/sakhi-privacy')}
              className="text-violet-500 hover:text-violet-400 underline underline-offset-2 ml-1"
            >
              View Sakhi Safety Privacy Policy →
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
