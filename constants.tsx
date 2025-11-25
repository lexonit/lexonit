
import { 
  Bot, Code2, Cpu, Globe, MessageSquare, 
  Smartphone, BarChart, ShoppingCart, Zap, 
  Building2, HeartPulse, GraduationCap, Gavel, 
  Briefcase, Wrench, UserCog, Megaphone, ClipboardCheck, Users, Headphones, Search,
  Layout, Calendar, FileText, BarChart3, Mail, Plug, Shield, Clock, Database
} from 'lucide-react';
import { NavItem, Service, Offer, Industry, Testimonial, CaseStudy, TeamMember, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Services', 
    path: '/services',
    children: [
      { label: 'Overview', path: '/services' },
      { label: 'For IT Providers (Hub)', path: '/services/it-providers' },
      // Standalone Service Pages
      { label: 'AI Project Manager', path: '/services/ai-project-manager' },
      { label: 'AI Gantt Chart', path: '/services/ai-gantt-chart' },
      { label: 'AI Workflows', path: '/services/ai-workflows' },
      { label: 'AI Task Manager', path: '/services/ai-task-manager' },
      { label: 'AI Calendar', path: '/services/ai-calendar' },
      { label: 'AI Meeting Assistant', path: '/services/ai-meeting-assistant' },
      { label: 'AI Chat', path: '/services/ai-chat' },
      { label: 'AI Meeting Notetaker', path: '/services/ai-meeting-notetaker' },
      { label: 'AI Dashboards', path: '/services/ai-dashboards' },
      { label: 'AI Docs Assistant', path: '/services/ai-docs-assistant' },
      { label: 'AI Sheets', path: '/services/ai-sheets' },
      { label: 'AI Email', path: '/services/ai-email' },
      { label: 'Integrations', path: '/services/integrations' },
    ]
  },
  { label: 'Offers', path: '/offers' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'AI Chatbots & Agents',
    description: 'Intelligent conversational agents that work 24/7 to handle support, sales, and booking.',
    icon: MessageSquare,
    features: ['WhatsApp Integration', 'Natural Language Processing', 'Booking Automation']
  },
  {
    title: 'Next.js Development',
    description: 'Blazing fast, SEO-optimized web applications built on the modern React stack.',
    icon: Globe,
    features: ['Server Side Rendering', 'Dynamic Content', 'High Performance']
  },
  {
    title: 'Business Automation',
    description: 'Streamline your operations with custom workflows connecting your favorite tools.',
    icon: Zap,
    features: ['CRM Sync', 'Automated Invoicing', 'Lead Nurturing']
  },
  {
    title: 'Custom AI Models',
    description: 'Fine-tuned LLMs trained specifically on your business data for precise insights.',
    icon: Cpu,
    features: ['Private Data Training', 'Custom APIs', 'Secure Deployment']
  },
  {
    title: 'eCommerce Solutions',
    description: 'High-conversion online stores with AI-powered product recommendations.',
    icon: ShoppingCart,
    features: ['Stripe/Payment Integration', 'Inventory Management', 'AI Search']
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for iOS and Android using React Native.',
    icon: Smartphone,
    features: ['Push Notifications', 'Offline Mode', 'Biometric Auth']
  }
];

export const OFFERS: Offer[] = [
  {
    title: '48-Hour Website',
    priceRange: 'AED 799 - 1,299',
    delivery: '48 Hours',
    features: ['5-Page Professional Site', 'Hosting & Domain Setup', 'SEO Basics', 'Mobile Responsive', 'WhatsApp Button'],
    color: 'blue'
  },
  {
    title: 'Website + AI Automation',
    priceRange: 'AED 2,999 - 7,999',
    delivery: '1-2 Weeks',
    features: ['Premium Website', 'Custom AI Chatbot', 'Lead Capture Automation', 'Payment Gateway', 'CRM Integration'],
    recommended: true,
    color: 'green'
  },
  {
    title: 'AI Chatbot Setup',
    priceRange: 'AED 499 - 999',
    delivery: '3 Days',
    features: ['WhatsApp & Web Support', 'Custom Knowledge Base', '24/7 Auto-Reply', 'Human Handover', 'Conversation Analytics'],
    color: 'purple'
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'Real Estate', icon: Building2, description: 'Automate property viewings and inquiries.' },
  { name: 'Healthcare', icon: HeartPulse, description: 'Patient scheduling and FAQ assistance.' },
  { name: 'Education', icon: GraduationCap, description: 'Student support and course information.' },
  { name: 'Legal', icon: Gavel, description: 'Client intake automation and document drafting.' },
  { name: 'Finance', icon: BarChart, description: 'Automated reporting and data analysis.' },
  { name: 'Automotive', icon: Wrench, description: 'Service booking and inventory queries.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'CEO',
    company: 'Skyline Real Estate',
    content: 'LexonIT transformed how we handle leads. The AI chatbot increased our viewing bookings by 43% in just one month.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Oasis Wellness',
    content: 'We needed a website fast. They delivered a stunning 5-page site in 48 hours, fully optimized. Incredible speed and quality.',
    rating: 5
  },
  {
    name: 'Faisal Khan',
    role: 'Founder',
    company: 'TechFlow Logistics',
    content: 'The automation workflow they set up saves us 20 hours a week on manual data entry. Highly recommended for UAE startups.',
    rating: 5
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Real Estate Chatbot',
    category: 'AI Automation',
    metric: '+43% Leads',
    description: 'Implemented a WhatsApp bot that pre-qualifies tenants and schedules viewings automatically.'
  },
  {
    title: 'Dubai Bistro Launch',
    category: 'Web Development',
    metric: '2k+ Visitors',
    description: 'Launched a high-speed Next.js site in 48 hours for a grand opening, handling massive traffic spikes.'
  },
  {
    title: 'Legal Firm Workflow',
    category: 'Process Automation',
    metric: '-70% Calls',
    description: 'Automated client intake forms reduced reception workload and improved data accuracy.'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Anshul Bhaduria',
    role: 'Software Engineer',
    bio: 'Full-stack developer with expertise in Next.js, React, and AI integration. Passionate about building scalable web applications.',
    image: '/team/Anshul Bhaduria.jpg'
  },
  {
    name: 'Imran',
    role: 'Software Engineer',
    bio: 'Backend specialist focused on scalable architectures and API development. Expert in Node.js and microservices.',
    image: '/team/BeastImran.jpg'
  },
  {
    name: 'Mitali Ravali',
    role: 'Software Engineer',
    bio: 'Frontend developer passionate about user experience and modern UI frameworks. Skilled in React and TypeScript.',
    image: '/team/Mitali Ravali.jpg'
  },
  {
    name: 'Ravali Nara',
    role: 'Software Engineer',
    bio: 'AI/ML engineer specializing in chatbot development and natural language processing solutions.',
    image: '/team/Ravali Nara.jpg'
  },
  {
    name: 'Ravi',
    role: 'Software Engineer',
    bio: 'DevOps engineer ensuring seamless deployment and infrastructure management. Expert in cloud platforms.',
    image: '/team/ravi.jpeg'
  },
  {
    name: 'Shaik Sadhik',
    role: 'Software Engineer',
    bio: 'Mobile app developer with React Native expertise. Creates cross-platform solutions for iOS and Android.',
    image: '/team/Shaik Sadhik.jpeg'
  },
  {
    name: 'Suraj Baride',
    role: 'Software Engineer',
    bio: 'Cloud solutions architect and automation expert. Specializes in AWS, Azure, and CI/CD pipelines.',
    image: '/team/suraj baride.jpeg'
  },
  {
    name: 'Varish',
    role: 'Software Engineer',
    bio: 'Security-focused developer and code optimization specialist. Ensures best practices and performance.',
    image: '/team/varish.jpeg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Rise of Autonomous AI Agents in Enterprise',
    excerpt: 'How 2024 became the year of the agent, and why your business needs to move beyond simple chatbots to task-executing AI.',
    date: 'Oct 24, 2024',
    author: {
      name: 'David Chen',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
    },
    category: 'AI News',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    title: 'Next.js 15: A Game Changer for Web Performance',
    excerpt: 'Exploring the new caching strategies and partial prerendering features that make Next.js 15 the fastest framework yet.',
    date: 'Oct 18, 2024',
    author: {
      name: 'James Wilson',
      role: 'Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
    },
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop',
    readTime: '8 min read',
    featured: false
  },
  {
    id: '3',
    title: 'How We Built a Chatbot That Reduced Support Tickets by 70%',
    excerpt: 'A deep dive into the RAG architecture and prompt engineering techniques we used for a leading UAE real estate firm.',
    date: 'Oct 12, 2024',
    author: {
      name: 'Sarah Al-Fayed',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    readTime: '6 min read',
    featured: false
  },
  {
    id: '4',
    title: 'The Future of Web Design: Generative UI',
    excerpt: 'Why static interfaces are dying and how AI is enabling personalized, generated user interfaces on the fly.',
    date: 'Oct 05, 2024',
    author: {
      name: 'Amina Reza',
      role: 'Head of Design',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
    },
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    readTime: '4 min read',
    featured: false
  },
  {
    id: '5',
    title: 'Understanding RAG (Retrieval-Augmented Generation)',
    excerpt: 'A non-technical guide to how AI models can "read" your company data without hallucinating.',
    date: 'Sep 28, 2024',
    author: {
      name: 'David Chen',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
    },
    category: 'AI Explained',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    readTime: '7 min read',
    featured: false
  }
];

export const TECH_STACK = [
  'Next.js', 'React', 'TypeScript', 'Tailwind', 'OpenAI', 'Supabase', 'Stripe', 'AWS', 'Vercel', 'Framer Motion'
];

export const IT_TESTIMONIALS = [
  {
    text: "LexonIT automates the productivity strategies I already use. It’s way more effective to work this way and it eliminates quite a bit of manual work.",
    author: "Tamara Hamai",
    role: "President, Hamai Consulting"
  },
  {
    text: "Each day, I didn't know exactly what I should do next. Now LexonIT picks that for me. I never have to open a list and scan through 20 items.",
    author: "Juan Pablo Sarmiento",
    role: "Director of Engineering, Zenysis"
  },
  {
    text: "Software fatigue is real. It’s really nice to have tasks and projects in one place. LexonIT is all in one place.",
    author: "Andra Vomir",
    role: "Co-Founder, Efficient App"
  },
  {
    text: "In other tools, my to-do list gets longer and longer. With LexonIT, it doesn’t. Each day, I finish everything that’s important.",
    author: "Christoph Krachten",
    role: "CEO, United Creators OLP"
  }
];

export const IT_FEATURES_GRID = [
  {
    category: 'PROJECT MANAGEMENT',
    items: [
      { title: 'AI Project Manager', icon: ClipboardCheck, desc: 'Plan and manage projects automatically' },
      { title: 'AI Gantt Chart', icon: BarChart3, desc: 'Visualize projects over time with auto-scheduling' },
      { title: 'AI Workflows', icon: Zap, desc: 'Automate repeatable projects and SOPs' }
    ]
  },
  {
    category: 'TIME MANAGEMENT',
    items: [
      { title: 'AI Task Manager', icon: ClipboardCheck, desc: 'Organize and prioritize your tasks' },
      { title: 'AI Calendar', icon: Calendar, desc: 'Auto-plan your day with smart scheduling' },
      { title: 'AI Meeting Assistant', icon: MessageSquare, desc: 'Simplify meeting scheduling and booking links' }
    ]
  },
  {
    category: 'KNOWLEDGE MANAGEMENT',
    items: [
      { title: 'AI Chat', icon: MessageSquare, desc: 'The fastest way to go from question to done' },
      { title: 'AI Meeting Notetaker', icon: FileText, desc: 'Auto-capture meeting notes and summaries' },
      { title: 'AI Dashboards', icon: BarChart, desc: 'Track project progress in one view' },
      { title: 'AI Docs Assistant', icon: FileText, desc: 'Help writing and organizing docs faster' }
    ]
  },
  {
    category: 'AND MORE',
    items: [
      { title: 'AI Sheets', icon: Layout, desc: 'AI intelligence, spreadsheet flexibility, and automation efficiency combined' },
      { title: 'AI Email', icon: Mail, desc: 'Automate inbox organization, email drafting, and messages' },
      { title: 'Integrations', icon: Plug, desc: 'Connect your favorite tools to LexonIT' }
    ]
  }
];

export const AI_EMPLOYEES = [
    {
      name: 'Chip',
      role: 'AI Sales Rep',
      icon: Briefcase,
      description: 'Land more accounts. Chip helps you win more clients. He books intro calls 24/7, follows up with prospects, updates your CRM, and generates personalized outreach.',
      color: 'bg-blue-500'
    },
    {
      name: 'Alfred',
      role: 'AI Executive Assistant',
      icon: UserCog,
      description: 'Nail every client meeting. Alfred drafts agendas, surfaces urgent issues, prepares summaries, captures notes, and turns action items into tickets.',
      color: 'bg-amber-500'
    },
    {
      name: 'Suki',
      role: 'AI Marketing Associate',
      icon: Megaphone,
      description: 'Get marketing help without headcount. Suki drafts case studies, writes blog posts, creates client updates, and pulls competitor insights in your firm’s voice.',
      color: 'bg-pink-500'
    },
    {
      name: 'Millie',
      role: 'AI Project Manager',
      icon: ClipboardCheck,
      description: 'Hit every deadline. Millie turns agreements into project plans, schedules tasks, predicts completion dates, and creates client-ready status reports.',
      color: 'bg-indigo-500'
    },
    {
      name: 'Dot',
      role: 'AI Recruiter',
      icon: Users,
      description: 'Grow your talent pool. Dot screens IT candidates, sends personalized outreach, schedules interviews, and grades assessments quickly.',
      color: 'bg-teal-500'
    },
    {
      name: 'Clide',
      role: 'AI Support Specialist',
      icon: Headphones,
      description: 'Respond faster. Clide drafts plain-English updates with the "why + what’s next," responds to support requests, and escalates issues when needed.',
      color: 'bg-green-500'
    },
    {
      name: 'Spec',
      role: 'AI Researcher',
      icon: Search,
      description: 'Spot trends early. Spec aggregates security advisories, tracks compliance updates, surfaces vendor changes, and compiles industry signals.',
      color: 'bg-cyan-500'
    }
];

export const HERO_AVATARS = [
  {
    name: 'Millie',
    role: 'Project Manager',
    url: '/assets/avatar/Millie.png',
    position: '-top-8 -left-8 md:-left-12',
    delay: 0
  },
  {
    name: 'Marcus',
    role: 'Strategist',
    url: '/assets/avatar/Marcus.png',
    position: 'top-12 -right-4 md:-right-16',
    delay: 1.5
  },
  {
    name: 'Sage',
    role: 'Knowledge',
    url: '/assets/avatar/Sage.png',
    position: '-bottom-8 -left-4 md:-left-16',
    delay: 0.8
  },
  {
    name: 'Alfred',
    role: 'Assistant',
    url: '/assets/avatar/Alfred.png',
    position: 'bottom-8 -right-2 md:-right-12',
    delay: 2.2
  }
];

export const PRICING_PLANS = [
  {
    key: 'starter',
    name: 'Lexon Starter',
    price: 49,
    description: 'For individuals & freelancers',
    highlight: false,
    cta: 'Try for free',
    color: 'blue',
    credits: '1,000 credits'
  },
  {
    key: 'growth',
    name: 'Lexon Standard',
    price: 299,
    description: 'For growing teams',
    highlight: true,
    cta: 'Try for free',
    color: 'purple',
    credits: '100,000 credits'
  },
  {
    key: 'business',
    name: 'Lexon Plus',
    price: 599,
    description: 'For power users & agencies',
    highlight: false,
    cta: 'Try for free',
    color: 'blue',
    credits: '250,000 credits'
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom deployment & SLA',
    highlight: false,
    cta: 'Contact sales',
    color: 'slate',
    credits: 'Unlimited'
  },
];

export const PRICING_FEATURES = [
  {
    category: 'Core Platform',
    items: [
      { name: 'Seats Included', info: 'Number of user seats included in the base price.', starter: '1 Seat', growth: '10 Seats', business: '25 Seats', enterprise: 'Unlimited' },
      { name: 'AI Chat', info: 'Access to standard LLM chat interface.', starter: true, growth: true, business: true, enterprise: true },
      { name: 'Projects & Tasks', info: 'Unlimited projects and task tracking.', starter: true, growth: true, business: true, enterprise: true },
    ]
  },
  {
    category: 'AI Capabilities',
    items: [
      { name: 'AI Calendar', info: 'Smart auto-scheduling.', starter: true, growth: true, business: true, enterprise: true },
      { name: 'AI Docs & Wiki', info: 'Generative document creation.', starter: true, growth: true, business: true, enterprise: true },
      { name: 'AI Sheets', info: 'Data enrichment & analysis.', starter: 'Basic', growth: true, business: true, enterprise: true },
      { name: 'Dashboards & Reports', info: 'Auto-generated BI dashboards.', starter: false, growth: true, business: true, enterprise: true },
    ]
  },
  {
    category: 'Advanced Features',
    items: [
      { name: 'Integration Connections', info: 'Number of 3rd party apps you can sync.', starter: '3', growth: '20', business: '50', enterprise: 'Unlimited' },
      { name: 'iOS & Android App', info: 'Full mobile access.', starter: true, growth: true, business: true, enterprise: true },
      { name: 'Executive Assistant', info: 'Email triage & meeting prep.', starter: false, growth: true, business: true, enterprise: true },
      { name: 'Customer Support', info: 'Response time SLA.', starter: 'Standard', growth: 'Priority', business: 'Priority', enterprise: 'Dedicated' },
    ]
  }
];

export const PRICING_FAQS = [
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, our standard plans are billed monthly. You can cancel at any time without penalty. We also offer annual plans with a 20% discount."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, the Starter and Growth plans come with a 14-day free trial so you can experience the power of LexonIT before committing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex) and Stripe. For Enterprise plans, we also accept wire transfers."
  }
];

// --- NEW DATA FOR INDIVIDUAL SERVICE PAGES ---

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  themeColor: 'violet' | 'blue' | 'emerald' | 'amber' | 'rose' | 'cyan';
  icon: any;
  heroMockupType: 'kanban' | 'chat' | 'calendar' | 'gantt' | 'dashboard' | 'doc';
  stats: { label: string; value: string }[];
  problems: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  features: string[];
  flipWords?: string[]; // Added for Hero FlipWords animation
  aiAvatar: {
    name: string;
    role: string;
    description: string;
    imageGradient: string;
    avatarImage?: string;
  };
}

export const SERVICE_PAGES_CONTENT: Record<string, ServicePageData> = {
  'ai-project-manager': {
    title: 'AI Project Manager',
    subtitle: '90% Less Admin. 100% Clarity.',
    description: 'Maximizes efficiency, eliminates busywork, creates visibility & accountability, and reduces stress for every team.',
    themeColor: 'blue',
    icon: ClipboardCheck,
    heroMockupType: 'kanban',
    flipWords: ['Efficiency', 'Clarity', 'Speed'],
    stats: [
      { label: 'Faster Delivery', value: '32%' },
      { label: 'Less Planning', value: '-10hr/wk' }
    ],
    problems: [
      { title: 'Manual Updates', desc: 'You spend hours moving cards and asking for status updates.' },
      { title: 'Dropped Balls', desc: 'Tasks slip through the cracks when handoffs aren\'t clear.' }
    ],
    solutions: [
      { title: 'Auto-Pilot Projects', desc: 'Tasks move themselves. When one is done, the next assignee is notified instantly.' },
      { title: 'Risk Detection', desc: 'AI flags projects at risk of missing deadlines weeks in advance.' }
    ],
    features: ['Automated Handoffs', 'Critical Path Analysis', 'Workload Balancing', 'Project Templates'],
    aiAvatar: {
      name: 'Millie',
      role: 'Project Architect',
      description: 'Millie predicts delays before they happen. She nudges team members for updates so you don\'t have to.',
      imageGradient: 'from-indigo-400 to-blue-500',
      avatarImage: '/assets/avatar/Millie.png'
    }
  },
  'ai-gantt-chart': {
    title: 'Predictive AI Gantt Chart',
    subtitle: 'See the Future of Your Projects.',
    description: 'Visualize complex timelines with a Gantt chart that auto-adjusts based on team velocity and real-world delays.',
    themeColor: 'emerald',
    icon: BarChart3,
    heroMockupType: 'gantt',
    flipWords: ['Planning', 'Forecasting', 'Timeline'],
    stats: [
      { label: 'Accuracy', value: '98%' },
      { label: 'Visibility', value: 'Total' }
    ],
    problems: [
      { title: 'Static Timelines', desc: 'Excel and traditional Gantt charts are obsolete the moment you export them.' },
      { title: 'Resource Conflicts', desc: 'Double-booking key staff leads to burnout and delays.' }
    ],
    solutions: [
      { title: 'Living Timelines', desc: 'Dependencies update automatically. If a task is late, the whole chart shifts instantly.' },
      { title: 'Capacity Heatmaps', desc: 'See exactly who is overloaded and rebalance with one click.' }
    ],
    features: ['Auto-Scheduling', 'Dependency Tracking', 'Milestone Management', 'Export to PDF'],
    aiAvatar: {
      name: 'Marcus',
      role: 'Timeline Strategist',
      description: 'Marcus constantly simulates project scenarios. He tells you the impact of a delay instantly.',
      imageGradient: 'from-emerald-400 to-teal-500',
      avatarImage: '/assets/avatar/Marcus.png'
    }
  },
  'ai-workflows': {
    title: 'AI Workflows',
    subtitle: 'Automate Your Standard Operating Procedures.',
    description: 'Turn repeatable processes into self-driving workflows. Perfect for onboarding, approvals, and content pipelines.',
    themeColor: 'amber',
    icon: Zap,
    heroMockupType: 'dashboard',
    flipWords: ['Automation', 'Consistency', 'Scale'],
    stats: [
      { label: 'Efficiency', value: '5x' },
      { label: 'Errors', value: '0%' }
    ],
    problems: [
      { title: 'Process Bottlenecks', desc: 'Approvals sit in inboxes for days, stalling progress.' },
      { title: 'Inconsistency', desc: 'Every team member executes the process slightly differently.' }
    ],
    solutions: [
      { title: 'Smart Triggers', desc: 'Workflows start automatically based on forms, emails, or dates.' },
      { title: 'AI Decision Nodes', desc: 'The AI can approve low-risk items or route high-risk ones to humans.' }
    ],
    features: ['Visual Builder', 'Conditional Logic', 'Multi-App Sync', 'Audit Logs'],
    aiAvatar: {
      name: 'Otto',
      role: 'Automation Engineer',
      description: 'Otto handles the boring stuff. He routes documents, chases approvals, and updates records.',
      imageGradient: 'from-amber-400 to-orange-500'
    }
  },
  'ai-task-manager': {
    title: 'AI Task Manager',
    subtitle: 'Your Personal Productivity Architect.',
    description: 'It doesn\'t just list tasks; it prioritizes them based on deadlines, your work habits, and team dependencies.',
    themeColor: 'blue',
    icon: ClipboardCheck,
    heroMockupType: 'kanban',
    flipWords: ['Focus', 'Priority', 'Flow'],
    stats: [
      { label: 'Focus', value: '+40%' },
      { label: 'Overdue', value: '-80%' }
    ],
    problems: [
      { title: 'Decision Fatigue', desc: 'Spending 20 minutes every morning deciding what to do first.' },
      { title: 'Overwhelm', desc: 'A massive backlog of 100+ tasks that feels impossible to clear.' }
    ],
    solutions: [
      { title: 'Smart Sorting', desc: 'LexonIT surfaces the 3 things you MUST do today. Hides the rest.' },
      { title: 'Time Blocking', desc: 'Automatically reserves time on your calendar for deep work tasks.' }
    ],
    features: ['Priority Algorithm', 'Subtasks', 'Recurring Tasks', 'Focus Mode'],
    aiAvatar: {
      name: 'Tess',
      role: 'Focus Coach',
      description: 'Tess ruthlessly prioritizes your day. She ensures you work on high-impact tasks first.',
      imageGradient: 'from-blue-400 to-indigo-500'
    }
  },
  'ai-calendar': {
    title: 'AI Calendar',
    subtitle: 'Defend Your Time Automatically.',
    description: 'The world\'s first calendar that optimizes itself. It groups meetings, protects focus time, and resolves conflicts.',
    themeColor: 'rose',
    icon: Calendar,
    heroMockupType: 'calendar',
    flipWords: ['Scheduling', 'Time', 'Focus'],
    stats: [
      { label: 'Deep Work', value: '+2hr/day' },
      { label: 'Conflicts', value: 'Auto-Fixed' }
    ],
    problems: [
      { title: 'Swiss Cheese Schedule', desc: 'Awkward 30-minute gaps between meetings where no work gets done.' },
      { title: 'Meeting Overload', desc: 'Back-to-back calls leave no time for actual execution.' }
    ],
    solutions: [
      { title: 'Dynamic Rescheduling', desc: 'If a meeting runs long, the AI shifts your next task automatically.' },
      { title: 'Smart Grouping', desc: 'Stacks meetings together to create long blocks of uninterrupted focus time.' }
    ],
    features: ['Smart Booking Links', 'Conflict Resolution', 'Time Zone Sync', 'Meeting Buffers'],
    aiAvatar: {
      name: 'Luna',
      role: 'Time Guardian',
      description: 'Luna plays Tetris with your schedule. She finds time you didn’t know you had.',
      imageGradient: 'from-rose-400 to-pink-500'
    }
  },
  'ai-chat': {
    title: 'AI Chat Assistant',
    subtitle: 'From Question to Action in Seconds.',
    description: 'An enterprise-grade chat interface that knows your company data, can execute tasks, and answer complex queries.',
    themeColor: 'violet',
    icon: MessageSquare,
    heroMockupType: 'chat',
    flipWords: ['Answers', 'Knowledge', 'Instant'],
    stats: [
      { label: 'Response', value: '<1s' },
      { label: 'Knowledge', value: 'Unified' }
    ],
    problems: [
      { title: 'Information Silos', desc: 'Searching through Slack, Drive, and Email to find one policy document.' },
      { title: 'Context Switching', desc: 'Leaving your workflow to ask a colleague a simple question.' }
    ],
    solutions: [
      { title: 'Unified Search', desc: 'Ask "What is the refund policy?" and get the answer cited from your docs.' },
      { title: 'Actionable Chat', desc: 'Tell the AI "Create a task for John to review this" and it happens.' }
    ],
    features: ['RAG Technology', 'Context Awareness', 'Multi-Modal Input', 'Secure & Private'],
    aiAvatar: {
      name: 'Sage',
      role: 'Knowledge Keeper',
      description: 'Sage knows everything your company knows. She instantly retrieves policies, data, and history.',
      imageGradient: 'from-violet-400 to-purple-500',
      avatarImage: '/assets/avatar/Sage.png'
    }
  },
  'ai-meeting-assistant': {
    title: 'AI Meeting Assistant',
    subtitle: 'Never Ask "When are you free?" Again.',
    description: 'A scheduling powerhouse that negotiates times with external guests and prepares you for every call.',
    themeColor: 'cyan',
    icon: Clock,
    heroMockupType: 'calendar',
    flipWords: ['Scheduling', 'Briefing', 'Coordination'],
    stats: [
      { label: 'Scheduling', value: '-90% Time' },
      { label: 'No-Shows', value: '-50%' }
    ],
    problems: [
      { title: 'Email Ping Pong', desc: '7 emails just to find a 30-minute slot next Tuesday.' },
      { title: 'Unpreparedness', desc: 'Jumping into calls without knowing the agenda or context.' }
    ],
    solutions: [
      { title: 'One-Click Scheduling', desc: 'Send a magic link that shows your true availability, considering workload.' },
      { title: 'Pre-Meeting Briefs', desc: 'Receive a 1-page summary of the attendee and past interactions before the call.' }
    ],
    features: ['Personal Booking Page', 'Group Polling', 'CRM Lookup', 'Reminders'],
    aiAvatar: {
      name: 'Alfred',
      role: 'Executive Assistant',
      description: 'Alfred handles the logistics. He books the room, sends the invites, and preps the agenda.',
      imageGradient: 'from-cyan-400 to-blue-500',
      avatarImage: '/assets/avatar/Alfred.png'
    }
  },
  'ai-meeting-notetaker': {
    title: 'AI Note Taker',
    subtitle: 'Perfect Recall for Every Conversation.',
    description: 'Joins your Zoom/Teams/Meet calls, records, transcribes, and extracts action items automatically.',
    themeColor: 'violet',
    icon: Headphones,
    heroMockupType: 'doc',
    flipWords: ['Notes', 'Summary', 'Action'],
    stats: [
      { label: 'Accuracy', value: 'Human-Level' },
      { label: 'Savings', value: '5hr/wk' }
    ],
    problems: [
      { title: 'Distracted Listening', desc: 'Trying to type notes while maintaining eye contact and engagement.' },
      { title: 'Lost Action Items', desc: 'Verbal agreements during calls often get forgotten immediately.' }
    ],
    solutions: [
      { title: 'Speaker Identification', desc: 'Knows exactly who said what.' },
      { title: 'Auto-CRM Entry', desc: 'Pushes the summary and action items directly into your project management tool.' }
    ],
    features: ['Multi-Language', 'Sentiment Analysis', 'Clip Sharing', 'Topic Detection'],
    aiAvatar: {
      name: 'Lyric',
      role: 'Lead Scribe',
      description: 'Lyric listens intently. She converts hour-long ramblings into concise, actionable summaries.',
      imageGradient: 'from-violet-400 to-fuchsia-500'
    }
  },
  'ai-dashboards': {
    title: 'AI Dashboards',
    subtitle: 'Your Business Pulse at a Glance.',
    description: 'Self-constructing dashboards that visualize KPIs across marketing, sales, and development in real-time.',
    themeColor: 'blue',
    icon: Layout,
    heroMockupType: 'dashboard',
    flipWords: ['Insights', 'Data', 'Decisions'],
    stats: [
      { label: 'Setup Time', value: 'Seconds' },
      { label: 'Data Sources', value: '50+' }
    ],
    problems: [
      { title: 'Data Blindness', desc: 'Making decisions based on gut feeling because reports take too long to build.' },
      { title: 'Stale Data', desc: 'Weekly reports are already outdated by the time you read them.' }
    ],
    solutions: [
      { title: 'Natural Language Query', desc: 'Just type "Show me revenue by region last month" to build a chart.' },
      { title: 'Anomaly Alerts', desc: 'Get notified instantly when a metric deviates from the norm.' }
    ],
    features: ['Drag-and-Drop', 'Real-Time Sync', 'PDF Reports', 'Executive Mode'],
    aiAvatar: {
      name: 'Vea',
      role: 'Visual Analyst',
      description: 'Vea loves data. She monitors your metrics 24/7 and alerts you only when something needs attention.',
      imageGradient: 'from-blue-400 to-cyan-500'
    }
  },
  'ai-docs-assistant': {
    title: 'AI Docs Assistant',
    subtitle: 'Write Better, Faster, Together.',
    description: 'An intelligent writing partner that helps draft proposals, clean up technical specs, and organize your wiki.',
    themeColor: 'amber',
    icon: FileText,
    heroMockupType: 'doc',
    flipWords: ['Writing', 'Clarity', 'Docs'],
    stats: [
      { label: 'Writing Speed', value: '3x' },
      { label: 'Clarity', value: 'Enhanced' }
    ],
    problems: [
      { title: 'Blank Page Syndrome', desc: 'Staring at a cursor for 20 minutes before writing the first sentence.' },
      { title: 'Messy Documentation', desc: 'Wikis that are impossible to navigate and full of duplicate info.' }
    ],
    solutions: [
      { title: 'Generative Drafting', desc: 'Turn bullet points into a full professional proposal in one click.' },
      { title: 'Auto-Linking', desc: 'The AI suggests links to related documents as you write to build a knowledge graph.' }
    ],
    features: ['Tone Adjustment', 'Grammar Check', 'Summarization', 'Template Library'],
    aiAvatar: {
      name: 'Penn',
      role: 'Documentation Lead',
      description: 'Penn is an articulate writer. He helps you phrase things perfectly and keeps your wiki organized.',
      imageGradient: 'from-amber-400 to-yellow-500'
    }
  },
  'ai-sheets': {
    title: 'AI Sheets',
    subtitle: 'Spreadsheets That Think.',
    description: 'Combine the flexibility of a spreadsheet with the power of a database and AI. Clean data, generate formulas, and enrich rows automatically.',
    themeColor: 'emerald',
    icon: Database,
    heroMockupType: 'dashboard',
    flipWords: ['Analysis', 'Data', 'Formulas'],
    stats: [
      { label: 'Data Entry', value: '-90%' },
      { label: 'Formula Errors', value: '0' }
    ],
    problems: [
      { title: 'Formula Nightmares', desc: 'Spending hours debugging complex VLOOKUPs and Index/Matches.' },
      { title: 'Manual Enrichment', desc: 'Copy-pasting data from LinkedIn or Google into rows one by one.' }
    ],
    solutions: [
      { title: 'AI Columns', desc: 'Ask AI to "Categorize this feedback" or "Find the CEO of this company" for every row.' },
      { title: 'Plain English Formulas', desc: 'Describe what you want to calculate, and AI writes the function.' }
    ],
    features: ['Data Enrichment', 'Auto-Classification', 'Visualizations', 'SQL Support'],
    aiAvatar: {
      name: 'Axel',
      role: 'Data Wizard',
      description: 'Axel crunches numbers. He can find missing data, clean up messy rows, and write complex formulas.',
      imageGradient: 'from-emerald-400 to-green-500'
    }
  },
  'ai-email': {
    title: 'AI Email Assistant',
    subtitle: 'Inbox Zero on Autopilot.',
    description: 'Triage your inbox, draft replies in your voice, and summarize long threads instantly.',
    themeColor: 'violet',
    icon: Mail,
    heroMockupType: 'chat',
    flipWords: ['Inbox Zero', 'Replies', 'Triage'],
    stats: [
      { label: 'Email Time', value: '-1hr/day' },
      { label: 'Response Rate', value: '+20%' }
    ],
    problems: [
      { title: 'Email Overload', desc: 'Returning from vacation to find 500 unread messages.' },
      { title: 'Generic Replies', desc: 'Using rigid templates that sound robotic and impersonal.' }
    ],
    solutions: [
      { title: 'Smart Priority', desc: 'Separates urgent client emails from newsletters and noise.' },
      { title: 'Contextual Drafting', desc: 'Drafts replies referencing previous conversations and attachments.' }
    ],
    features: ['Auto-Triage', 'Smart Snooze', 'Sentiment Detection', 'Follow-up Reminders'],
    aiAvatar: {
      name: 'Kit',
      role: 'Inbox Manager',
      description: 'Kit guards your attention. She filters out the noise and drafts replies so you just hit send.',
      imageGradient: 'from-violet-400 to-purple-500'
    }
  },
  'integrations': {
    title: 'Integrations',
    subtitle: 'Connects with Everything You Use.',
    description: 'LexonIT plays nice with your existing stack. Two-way sync with 2,000+ tools.',
    themeColor: 'blue',
    icon: Plug,
    heroMockupType: 'dashboard',
    flipWords: ['Connection', 'Sync', 'Harmony'],
    stats: [
      { label: 'Connectors', value: '2000+' },
      { label: 'Setup', value: '1-Click' }
    ],
    problems: [
      { title: 'Data Silos', desc: 'Customer data lives in HubSpot, but project data lives in Jira.' },
      { title: 'Double Entry', desc: 'Manually typing the same info into three different systems.' }
    ],
    solutions: [
      { title: 'Universal Sync', desc: 'Update a status in LexonIT, and it updates in Jira/Salesforce instantly.' },
      { title: 'Webhooks & API', desc: 'Robust developer tools for building custom connections.' }
    ],
    features: ['Zapier Support', 'Native API', 'Webhooks', 'SSO'],
    aiAvatar: {
      name: 'Sync',
      role: 'Connectivity Expert',
      description: 'Sync speaks every language. He ensures all your tools talk to each other in real-time.',
      imageGradient: 'from-blue-400 to-indigo-500'
    }
  }
};
