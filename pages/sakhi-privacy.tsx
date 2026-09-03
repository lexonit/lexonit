
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, MapPin, Users, Bell, Lock, Database, Eye,
  RefreshCw, Mail, ChevronRight, AlertTriangle, Smartphone,
  Key, Globe, Trash2, CheckCircle, ExternalLink, Building2
} from 'lucide-react';

const LAST_UPDATED = 'June 22, 2025';
const APP_ID = 'com.sakhisafety.app';

interface Section {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  badge?: string;
  children: React.ReactNode;
}

const SakhiPrivacyPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-rose-400/10 dark:bg-rose-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* ─── Hero Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* App Product Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 ring-4 ring-rose-500/20">
                <img
                  src="/sakhi-safety-app.png"
                  alt="Sakhi Safety App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                <Shield size={18} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Brand label */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-semibold uppercase tracking-widest">
              <Smartphone size={12} />
              Android App
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest">
              <Building2 size={12} />
              A LexonIT Product
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Sakhi Safety{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600 dark:from-rose-400 dark:to-violet-400">
              Privacy Policy
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Sakhi Safety is your trusted personal safety companion developed by{' '}
            <span className="font-semibold text-violet-600 dark:text-violet-400">LexonIT</span>.
            Your privacy and safety are our highest priority. This policy explains exactly how we handle your data.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-500">
            <span className="flex items-center gap-1.5">
              <RefreshCw size={12} />
              Last Updated: {LAST_UPDATED}
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Smartphone size={12} />
              App ID: {APP_ID}
            </span>
            <span className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Globe size={12} />
              Platform: Android
            </span>
          </div>
        </motion.div>

        {/* ─── About the App ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rose-50 to-violet-50 dark:from-rose-900/20 dark:to-violet-900/20 border border-rose-200/50 dark:border-rose-800/30 rounded-2xl p-8 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center mt-1">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">About Sakhi Safety</h2>
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong>Sakhi Safety</strong> is a personal safety application developed and published by{' '}
                  <strong>LexonIT</strong>, a UAE-based technology company. The app is designed to empower users —
                  particularly women, students, and solo travellers — with instant emergency tools including one-tap SOS,
                  real-time location sharing, trusted contact alerts, safety timers, and more.
                </p>
                <p>
                  This Privacy Policy governs the collection, use, storage, and sharing of personal data by the Sakhi Safety
                  mobile application (Android, Package ID: <code className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-1.5 py-0.5 rounded">{APP_ID}</code>).
                  By installing or using Sakhi Safety, you agree to the terms of this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── TL;DR Quick Summary ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-10 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-5">
            At a Glance
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', text: 'Location data is used ONLY for emergency alerts and is never sold' },
              { icon: Users, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'Trusted contact details are stored securely and used only for SOS alerts' },
              { icon: Lock, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', text: 'All data is encrypted in transit and at rest using industry standards' },
              { icon: Trash2, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20', text: 'You can delete your account and all associated data at any time' },
              { icon: Globe, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'We do not sell, share, or use your data for advertising' },
              { icon: CheckCircle, color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20', text: 'Background location access is strictly for emergency and safety purposes' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${item.bg}`}>
                  <Icon size={16} className={`${item.color} flex-shrink-0 mt-0.5`} />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Main Policy Content ─── */}
        <div className="space-y-8">

          {/* Section 1: Data We Collect */}
          <PolicyBlock
            id="data-collected"
            number="1"
            icon={Eye}
            title="Information We Collect"
            color="rose"
          >
            <SubSection title="Account Information" icon={Key}>
              <p>When you create an account, we collect:</p>
              <ul>
                <li><strong>Full name</strong> — used to personalize your experience</li>
                <li><strong>Email address</strong> — for authentication, account recovery, and service communications</li>
                <li><strong>Password</strong> — stored as a securely hashed value using bcrypt; we never store plaintext passwords</li>
                <li><strong>Account creation timestamp and last login time</strong></li>
              </ul>
            </SubSection>

            <SubSection title="Location Data" icon={MapPin}>
              <p>Location is the core of Sakhi Safety's emergency features. We collect:</p>
              <ul>
                <li><strong>Precise GPS coordinates</strong> (latitude and longitude) when you trigger an SOS or when the Safety Timer expires</li>
                <li><strong>Background location updates</strong> approximately every 15 seconds while the app is running, stored to our secure database to enable real-time tracking during emergencies</li>
                <li><strong>Location accuracy and speed data</strong> from device sensors to improve tracking precision</li>
              </ul>
              <div className="mt-3 p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/30 rounded-xl">
                <p className="text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-2">
                  <AlertTriangle size={13} />
                  Important: Location data is used exclusively for safety features. It is never used for advertising, analytics beyond safety purposes, or shared with any party other than your designated trusted contacts during an emergency.
                </p>
              </div>
            </SubSection>

            <SubSection title="Trusted Contact Data" icon={Users}>
              <p>You may add up to 5 trusted contacts. For each contact, we store:</p>
              <ul>
                <li>Full name, phone number, email address, and relationship type</li>
                <li>This information is stored in our secure database linked to your account</li>
                <li>This data is used exclusively to send emergency alerts on your behalf</li>
              </ul>
            </SubSection>

            <SubSection title="Emergency & Safety Logs" icon={AlertTriangle}>
              <p>When an emergency is triggered, we log:</p>
              <ul>
                <li>Timestamp of the emergency event</li>
                <li>Your GPS coordinates at the time of triggering</li>
                <li>The method of triggering (tap, shake, volume button, timer expiry)</li>
                <li>Alert delivery status (sent / failed)</li>
                <li>Safety timer sessions including start time, set duration, and completion status</li>
              </ul>
            </SubSection>

            <SubSection title="Device & Technical Information" icon={Smartphone}>
              <p>We may automatically collect technical data including:</p>
              <ul>
                <li>Device model, operating system version, and Android API level</li>
                <li>App version number</li>
                <li>Crash reports and diagnostic data (if the app encounters an error)</li>
                <li>Network connection type (for optimizing data upload during emergencies)</li>
              </ul>
            </SubSection>
          </PolicyBlock>

          {/* Section 2: How We Use Data */}
          <PolicyBlock
            id="how-we-use"
            number="2"
            icon={Database}
            title="How We Use Your Information"
            color="violet"
          >
            <SubSection title="Emergency Alert System" icon={AlertTriangle}>
              <p>Your data is primarily used to operate the emergency alert system:</p>
              <ul>
                <li>When SOS is triggered, your real-time GPS location is retrieved and sent to all your trusted contacts via email</li>
                <li>Emergency log entries are created to maintain your emergency history and help law enforcement if required</li>
                <li>When the Safety Timer expires without a check-in, an automatic SOS is triggered using the same process</li>
              </ul>
            </SubSection>

            <SubSection title="Authentication & Account Management" icon={Key}>
              <ul>
                <li>Email and password are used to verify your identity and secure access to your account</li>
                <li>Magic link authentication sends a one-time login link to your email address</li>
                <li>Password reset codes are sent via email upon request</li>
              </ul>
            </SubSection>

            <SubSection title="Real-Time Safety Tracking" icon={MapPin}>
              <ul>
                <li>Continuous background location tracking enables real-time location sharing during active emergency situations</li>
                <li>Location history for the past 24 hours is retained to provide a movement trail to emergency contacts</li>
                <li>Route monitoring features use location data to detect potential deviations from expected paths</li>
              </ul>
            </SubSection>

            <SubSection title="App Performance & Safety" icon={Shield}>
              <ul>
                <li>Diagnostic data helps us identify and fix crashes or failures, especially in the emergency alert pipeline</li>
                <li>Usage patterns help us improve the reliability of safety features</li>
                <li>We do not use your data for profiling, targeted advertising, or any commercial purpose beyond delivering safety services</li>
              </ul>
            </SubSection>
          </PolicyBlock>

          {/* Section 3: Permissions */}
          <PolicyBlock
            id="permissions"
            number="3"
            icon={Smartphone}
            title="App Permissions"
            color="amber"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
              Sakhi Safety requests the following Android permissions. Each permission is necessary for a specific safety feature. We do not request permissions beyond what is strictly required.
            </p>

            <div className="space-y-3">
              {[
                {
                  permission: 'ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION',
                  icon: MapPin,
                  color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
                  reason: 'To obtain your precise GPS coordinates when you trigger an SOS or use the Live Map feature. Required for accurate emergency location reporting.'
                },
                {
                  permission: 'ACCESS_BACKGROUND_LOCATION',
                  icon: MapPin,
                  color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
                  reason: 'To continuously track your location even when the app is in the background. This enables the real-time location tracking feature and ensures SOS works even when your phone screen is off.'
                },
                {
                  permission: 'ACTIVITY_RECOGNITION',
                  icon: Smartphone,
                  color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
                  reason: 'To detect physical motion patterns for the shake detection feature (SOS trigger by shaking your phone).'
                },
                {
                  permission: 'FOREGROUND_SERVICE & FOREGROUND_SERVICE_SPECIAL_USE',
                  icon: Shield,
                  color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
                  reason: 'To keep the Safety Guardian service running in the background so SOS can be triggered at any time, even when the app is not actively open.'
                },
                {
                  permission: 'POST_NOTIFICATIONS',
                  icon: Bell,
                  color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                  reason: 'To show safety status notifications, active timer alerts, and critical emergency event notifications on your device.'
                },
                {
                  permission: 'RECEIVE_BOOT_COMPLETED',
                  icon: Smartphone,
                  color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
                  reason: 'To automatically restart the Guardian safety service after your phone reboots, ensuring continuous protection without manual intervention.'
                },
                {
                  permission: 'VIBRATE & WAKE_LOCK',
                  icon: Bell,
                  color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
                  reason: 'To provide haptic feedback during emergency activation and to keep the processor awake during critical alert transmission to ensure successful delivery.'
                },
                {
                  permission: 'INTERNET',
                  icon: Globe,
                  color: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
                  reason: 'Required to communicate with our secure backend servers (Supabase) for account authentication, saving emergency logs, and delivering email alerts to trusted contacts.'
                },
                {
                  permission: 'Accessibility Service (Optional)',
                  icon: Key,
                  color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                  reason: 'The optional Guardian Accessibility Service monitors the physical volume buttons to enable volume-button SOS triggering even when the screen is locked. This permission is entirely optional and requires explicit user consent through Android Accessibility Settings.'
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 ${item.color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1 font-mono">
                        {item.permission}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </PolicyBlock>

          {/* Section 4: Data Storage */}
          <PolicyBlock
            id="data-storage"
            number="4"
            icon={Database}
            title="Data Storage & Infrastructure"
            color="blue"
          >
            <SubSection title="Cloud Infrastructure" icon={Globe}>
              <p>All Sakhi Safety data is securely stored on <strong>Supabase</strong> — an open-source backend platform built on PostgreSQL. Supabase is hosted on AWS (Amazon Web Services) infrastructure with data centers that maintain SOC 2 Type II compliance.</p>
              <p className="mt-2">The data tables we maintain include:</p>
              <ul>
                <li><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">user_locations</code> — real-time location coordinates</li>
                <li><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">trusted_contacts</code> — your emergency contacts</li>
                <li><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">emergency_logs</code> — history of triggered alerts</li>
                <li><code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">safety_checks</code> — safety timer sessions</li>
              </ul>
            </SubSection>

            <SubSection title="Encryption" icon={Lock}>
              <ul>
                <li><strong>In transit:</strong> All data transmitted between the app and our servers is encrypted using TLS 1.3</li>
                <li><strong>At rest:</strong> Database storage is encrypted using AES-256 at the infrastructure level</li>
                <li><strong>Authentication tokens:</strong> Session tokens are cryptographically signed JWTs with automatic expiration</li>
                <li><strong>Passwords:</strong> Stored as bcrypt hashes; never accessible in plaintext</li>
              </ul>
            </SubSection>

            <SubSection title="Data Retention" icon={RefreshCw}>
              <ul>
                <li><strong>Location data:</strong> Rolling 24-hour history retained for emergency tracking; older data is automatically purged</li>
                <li><strong>Emergency logs:</strong> Retained indefinitely within your account for your personal reference and potential legal use</li>
                <li><strong>Trusted contacts:</strong> Retained until you delete them or your account</li>
                <li><strong>Account data:</strong> Retained until account deletion is requested</li>
              </ul>
            </SubSection>
          </PolicyBlock>

          {/* Section 5: Data Sharing */}
          <PolicyBlock
            id="data-sharing"
            number="5"
            icon={Users}
            title="Data Sharing & Disclosure"
            color="green"
          >
            <SubSection title="Trusted Contacts — Emergency Alerts" icon={Users}>
              <p>
                During an emergency event, we share the following with your trusted contacts via email:
              </p>
              <ul>
                <li>Your name and a Google Maps link to your current GPS location</li>
                <li>A brief emergency message identifying that an SOS has been triggered</li>
              </ul>
              <p className="mt-2">
                This is the only sharing that occurs with real individuals, and it happens exclusively on your request (by triggering an SOS).
              </p>
            </SubSection>

            <SubSection title="Service Providers" icon={Globe}>
              <p>We use the following third-party services to operate Sakhi Safety. Each is contractually bound to protect your data:</p>
              <ul>
                <li><strong>Supabase</strong> — Database, authentication, and backend functions</li>
                <li><strong>AWS (Amazon Web Services)</strong> — Underlying cloud infrastructure</li>
                <li><strong>Gmail API / SMTP</strong> — Delivery of emergency email alerts to trusted contacts</li>
              </ul>
            </SubSection>

            <SubSection title="What We NEVER Do" icon={Shield}>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-xl">
                <ul className="space-y-2">
                  {[
                    'We never sell your personal data to any third party',
                    'We never share your location data with advertisers',
                    'We never use your data for targeted advertising or behavioral profiling',
                    'We never share your trusted contact information for marketing purposes',
                    'We never provide your data to law enforcement without a valid legal order',
                    'We do not use third-party analytics SDKs that track users across apps',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-800 dark:text-green-300">
                      <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SubSection>

            <SubSection title="Legal Disclosure" icon={Key}>
              <p>
                We may disclose your information if required to do so by law, court order, or lawful request from a governmental authority, or when we believe disclosure is necessary to protect the safety of any person or to prevent illegal activity.
              </p>
            </SubSection>
          </PolicyBlock>

          {/* Section 6: Security */}
          <PolicyBlock
            id="security"
            number="6"
            icon={Lock}
            title="Security Practices"
            color="indigo"
          >
            <SubSection title="Technical Security" icon={Shield}>
              <ul>
                <li>Row-level security (RLS) policies in Supabase ensure users can only access their own data</li>
                <li>All API endpoints require valid authenticated sessions; unauthorized requests are rejected</li>
                <li>Emergency alert functions run in isolated serverless environments (Supabase Edge Functions)</li>
                <li>Database access is restricted to whitelisted service accounts only</li>
              </ul>
            </SubSection>

            <SubSection title="Application Security" icon={Lock}>
              <ul>
                <li>Sessions are invalidated upon logout and after periods of inactivity</li>
                <li>The app uses secure storage for authentication tokens on device</li>
                <li>Critical operations (SOS, account deletion) require authenticated sessions</li>
                <li>No sensitive data is stored in application logs or error reports</li>
              </ul>
            </SubSection>

            <SubSection title="Incident Response" icon={AlertTriangle}>
              <p>
                In the unlikely event of a data breach involving personal data, we will notify affected users as promptly as possible, and report the incident to relevant data protection authorities within the timeframe required by applicable law (typically 72 hours). We maintain an incident response plan specifically for our safety-critical systems.
              </p>
            </SubSection>
          </PolicyBlock>

          {/* Section 7: User Rights */}
          <PolicyBlock
            id="user-rights"
            number="7"
            icon={Users}
            title="Your Rights & Controls"
            color="teal"
          >
            <SubSection title="Access Your Data" icon={Eye}>
              <p>You can view all your trusted contacts, emergency history, and account information directly within the Sakhi Safety app. You may also request a complete export of your personal data by contacting us at <strong>hr@lexonit.com</strong>.</p>
            </SubSection>

            <SubSection title="Edit or Delete Your Data" icon={Trash2}>
              <ul>
                <li><strong>Trusted contacts</strong> can be added or removed at any time within the app</li>
                <li><strong>Account deletion:</strong> Contact us at hr@lexonit.com to permanently delete your account and all associated data. We will process this request within 30 days. Note: Emergency logs may be retained for legal purposes in limited circumstances.</li>
              </ul>
            </SubSection>

            <SubSection title="Location Permission Controls" icon={MapPin}>
              <ul>
                <li>You can revoke location permissions at any time through your Android device settings (Settings &gt; Apps &gt; Sakhi Safety &gt; Permissions)</li>
                <li>Revoking location access will disable real-time tracking and location-based SOS features, but the app will still function for manual SOS and contact management</li>
              </ul>
            </SubSection>

            <SubSection title="Notifications" icon={Bell}>
              <p>You can manage notification preferences through your device's Android notification settings. Note: Disabling notifications may prevent you from receiving critical safety alerts.</p>
            </SubSection>

            <SubSection title="Shake Detection" icon={Smartphone}>
              <p>The shake-to-SOS feature can be toggled on or off directly within the app's Safety Dashboard. Your preference is stored locally on your device.</p>
            </SubSection>
          </PolicyBlock>

          {/* Section 8: Children's Privacy */}
          <PolicyBlock
            id="children"
            number="8"
            icon={Shield}
            title="Children's Privacy"
            color="rose"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sakhi Safety is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13 years of age. If a parent or guardian believes that their child under 13 has created an account, please contact us immediately at <strong>hr@lexonit.com</strong> and we will promptly delete the account and all associated data.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              Users between 13–18 years of age must have parental consent to use Sakhi Safety. By registering, users under 18 confirm they have obtained this consent. We strongly encourage parents to discuss app usage with their children and help them understand how emergency features work.
            </p>
          </PolicyBlock>

          {/* Section 9: Third-Party Links */}
          <PolicyBlock
            id="third-party"
            number="9"
            icon={Globe}
            title="Third-Party Links & Services"
            color="amber"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The Sakhi Safety app may include links to third-party services such as Google Maps (for location display in emergency alerts) and emergency helpline websites in the Helpline Directory feature. These third-party services have their own privacy policies which we encourage you to review. LexonIT is not responsible for the privacy practices of these external services.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              Emergency alerts sent to trusted contacts via email may contain links to Google Maps for location viewing. By using the SOS feature, you acknowledge that a Google Maps link containing your GPS coordinates will be shared with your designated trusted contacts.
            </p>
          </PolicyBlock>

          {/* Section 10: International Transfers */}
          <PolicyBlock
            id="international"
            number="10"
            icon={Globe}
            title="International Data Transfers"
            color="blue"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Your data is processed and stored on servers operated by Supabase (backed by AWS infrastructure). These servers may be located outside your country of residence. By using Sakhi Safety, you consent to the transfer of your data to these servers.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              We ensure that all international data transfers comply with applicable data protection laws. Our service providers are contractually required to maintain data protection standards equivalent to those in your jurisdiction. Where required, we rely on Standard Contractual Clauses or equivalent mechanisms for cross-border data transfers.
            </p>
          </PolicyBlock>

          {/* Section 11: Policy Updates */}
          <PolicyBlock
            id="policy-updates"
            number="11"
            icon={RefreshCw}
            title="Policy Updates"
            color="violet"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We may update this Privacy Policy from time to time as our app features evolve or legal requirements change. When we make material changes, we will update the "Last Updated" date and, if the changes are significant, we will notify you through an in-app notification or by email. We encourage you to review this policy periodically.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              The most current version of this Privacy Policy is always available within the Sakhi Safety app and on the LexonIT website. Continued use of Sakhi Safety after any changes constitutes your acceptance of the updated policy.
            </p>
          </PolicyBlock>

          {/* Section 12: Contact */}
          <PolicyBlock
            id="contact"
            number="12"
            icon={Mail}
            title="Contact Us"
            color="green"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us using the information below. We are committed to addressing all privacy inquiries within 5 business days.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Data Controller', value: 'LexonIT', icon: Building2 },
                { label: 'App Name', value: 'Sakhi Safety', icon: Smartphone },
                { label: 'App Package ID', value: APP_ID, icon: Key },
                { label: 'Email', value: 'hr@lexonit.com', icon: Mail },
                { label: 'Platform', value: 'Google Play Store (Android)', icon: Globe },
                { label: 'Company Location', value: 'UAE', icon: MapPin },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </PolicyBlock>
        </div>

        {/* ─── Footer Note ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
            <Shield size={14} className="text-rose-500" />
            <span className="text-xs text-slate-600 dark:text-slate-400">
              This Privacy Policy is compliant with Google Play Store requirements
            </span>
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-600 mb-3">
            Effective Date: {LAST_UPDATED} · Package: {APP_ID}
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-600 mb-6">
            Sakhi Safety is a product of{' '}
            <button
              onClick={() => onNavigate('/')}
              className="text-violet-500 hover:text-violet-400 underline underline-offset-2"
            >
              LexonIT
            </button>
            {' '}— UAE's Leading AI & Software Development Company
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-1"
            >
              LexonIT Website Privacy Policy
              <ExternalLink size={11} />
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Contact Us
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              onClick={() => onNavigate('/')}
              className="text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              LexonIT Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Helper Components ─── */

interface PolicyBlockProps {
  id: string;
  number: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  color: 'rose' | 'violet' | 'amber' | 'blue' | 'green' | 'indigo' | 'teal';
  children: React.ReactNode;
}

const colorMap: Record<PolicyBlockProps['color'], { bg: string; text: string; border: string; number: string }> = {
  rose:   { bg: 'bg-rose-100 dark:bg-rose-900/30',   text: 'text-rose-600 dark:text-rose-400',   border: 'border-rose-200 dark:border-rose-800/30',   number: 'bg-rose-500' },
  violet: { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-800/30', number: 'bg-violet-500' },
  amber:  { bg: 'bg-amber-100 dark:bg-amber-900/30',  text: 'text-amber-600 dark:text-amber-400',  border: 'border-amber-200 dark:border-amber-800/30',  number: 'bg-amber-500' },
  blue:   { bg: 'bg-blue-100 dark:bg-blue-900/30',    text: 'text-blue-600 dark:text-blue-400',    border: 'border-blue-200 dark:border-blue-800/30',    number: 'bg-blue-500' },
  green:  { bg: 'bg-green-100 dark:bg-green-900/30',  text: 'text-green-600 dark:text-green-400',  border: 'border-green-200 dark:border-green-800/30',  number: 'bg-green-500' },
  indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800/30', number: 'bg-indigo-500' },
  teal:   { bg: 'bg-teal-100 dark:bg-teal-900/30',    text: 'text-teal-600 dark:text-teal-400',    border: 'border-teal-200 dark:border-teal-800/30',    number: 'bg-teal-500' },
};

const PolicyBlock = ({ id, number, icon: Icon, title, color, children }: PolicyBlockProps) => {
  const c = colorMap[color];
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-slate-900/80 border ${c.border} rounded-2xl overflow-hidden shadow-sm`}
    >
      <div className={`flex items-center gap-4 px-6 py-5 border-b ${c.border}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${c.number} flex items-center justify-center`}>
          <span className="text-white text-sm font-bold">{number}</span>
        </div>
        <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
          <Icon size={18} className={c.text} />
        </div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      <div className="px-6 py-6 space-y-5">
        {children}
      </div>
    </motion.div>
  );
};

interface SubSectionProps {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}

const SubSection = ({ title, icon: Icon, children }: SubSectionProps) => (
  <div>
    <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
      <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
      {title}
    </h3>
    <div className="ml-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2 [&_ul]:space-y-1.5 [&_ul]:list-none [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-['•'] [&_ul_li]:before:text-slate-400 [&_ul_li]:before:flex-shrink-0 [&_ul_li]:before:mt-0.5">
      {children}
    </div>
  </div>
);

export default SakhiPrivacyPage;
