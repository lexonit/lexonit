import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: any;
}

export const SEO = ({
  title = "Affordable AI Solutions Dubai | Cheap AI Chatbots from AED 499 | Budget AI Development UAE",
  description = "⭐ #1 Affordable AI Agency in Dubai! AI Chatbots from AED 499, Websites from AED 799, Business Automation from AED 2,999. Cheap AI products, premium quality. 48-hour delivery. Budget-friendly AI solutions for startups & SMEs in UAE.",
  keywords = "cheap AI chatbot Dubai, affordable AI solutions UAE, budget AI development, low cost chatbot, AI chatbot price Dubai, cheap website AED 799, affordable business automation, budget AI agency, cheap AI products UAE, affordable GPT chatbot, low price automation Dubai",
  canonical = "https://lexonit.com",
  ogImage = "https://lexonit.com/og-image.jpg",
  noindex = false,
  schema
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

// Pre-configured SEO for specific pages
export const HomePageSEO = () => (
  <SEO
    title="Affordable AI Chatbot Dubai | From AED 499 | Cheap AI Solutions UAE"
    description="💰 Dubai's Most Affordable AI Agency! AI Chatbots AED 499, Professional Websites AED 799, Complete Automation AED 2,999. Premium quality, budget prices. Fast 48hr delivery. Cheap AI products for startups & small business in UAE. WhatsApp chatbot, OpenAI GPT-4, Next.js development."
    keywords="cheap AI chatbot Dubai, affordable AI UAE, AI chatbot AED 499, budget chatbot Dubai, low cost AI assistant, cheap website Dubai AED 799, affordable automation UAE, budget AI agency, cheap GPT chatbot, low price OpenAI Dubai, affordable WhatsApp bot, cheap business automation, budget AI development Dubai, affordable Next.js developer, cheap React developer UAE, low cost AI integration, budget SaaS Dubai, affordable cloud solutions, cheap API development, AI for small business Dubai, startup AI cheap, SME automation affordable"
    canonical="https://lexonit.com"
  />
);

export const PricingPageSEO = () => (
  <SEO
    title="Affordable AI Pricing Dubai | Cheap Plans from AED 499 | Budget-Friendly UAE"
    description="💸 Transparent, affordable pricing! AI Chatbot: AED 499 | Website 48hr: AED 799 | Full Automation: AED 2,999. No hidden fees. Cheapest AI solutions in Dubai. Perfect for startups, SMEs, and budget-conscious businesses in UAE."
    keywords="AI chatbot price Dubai, affordable AI pricing UAE, cheap chatbot cost, budget AI plans Dubai, low cost automation pricing, affordable AI packages UAE, cheap website price Dubai, budget development rates, AI chatbot AED 499, website AED 799, automation AED 2999, affordable monthly plans, cheap AI subscription Dubai"
    canonical="https://lexonit.com/pricing"
  />
);

export const ServicesPageSEO = () => (
  <SEO
    title="Cheap AI Services Dubai | Affordable Chatbot, Website & Automation UAE"
    description="Budget-friendly AI services in Dubai: Cheap AI Chatbots, Affordable Website Development, Low-Cost Business Automation, Budget OpenAI Integration. Premium quality at lowest prices. Best value for startups & SMEs in UAE."
    keywords="cheap AI services Dubai, affordable chatbot development, budget website design UAE, low cost automation services, cheap OpenAI integration Dubai, affordable GPT-4 chatbot, budget Next.js development, cheap React services UAE, affordable AI assistant Dubai, low price WhatsApp bot"
    canonical="https://lexonit.com/services"
  />
);

export const ContactPageSEO = () => (
  <SEO
    title="Contact Affordable AI Agency Dubai | Get Free Quote | Budget AI Solutions UAE"
    description="Get free quote for affordable AI solutions in Dubai! Contact us for cheap AI chatbots (AED 499+), budget websites, and low-cost automation. Fast response, transparent pricing. Best rates for startups & SMEs in UAE."
    keywords="affordable AI agency Dubai contact, cheap AI quote UAE, budget AI consultation Dubai, low cost chatbot inquiry, affordable development quote, cheap AI agency near me Dubai"
    canonical="https://lexonit.com/contact"
  />
);

export const AboutPageSEO = () => (
  <SEO
    title="About LexonIT | AI & Web Development Agency in Dubai, UAE"
    description="LexonIT is a Dubai-based collective of engineers, designers, and AI specialists led by Founder & CEO Laxmi Mahitha Emmadishetty, building affordable AI chatbots, websites, and automation for businesses across the UAE."
    keywords="about LexonIT, LexonIT Dubai, AI agency UAE team, Laxmi Mahitha Emmadishetty, LexonIT founder, AI development company Dubai"
    canonical="https://lexonit.com/about"
  />
);

export const BlogPageSEO = () => (
  <SEO
    title="AI & Tech Blog Dubai | LexonIT Insights on AI, Automation & Web Dev"
    description="Deep dives into artificial intelligence, software architecture, and the future of work in the UAE — AI industry insights, chatbot trends, and automation guides from LexonIT."
    keywords="AI blog Dubai, LexonIT insights, AI industry news UAE, business automation blog, web development blog Dubai"
    canonical="https://lexonit.com/blog"
  />
);

export const CareerPageSEO = () => (
  <SEO
    title="Careers at LexonIT | Full Stack, DevOps & Sales Jobs Dubai"
    description="Join LexonIT's remote-first team building AI products and premium web experiences. Open roles: Full Stack Developer, DevOps Engineer, and Sales Intern. Apply via WhatsApp or email."
    keywords="LexonIT careers, jobs Dubai AI company, full stack developer job UAE, DevOps engineer job Dubai, sales intern job UAE, remote tech jobs Dubai"
    canonical="https://lexonit.com/career"
  />
);

export const ProductsPageSEO = () => (
  <SEO
    title="Our Products | Sakhi Safety & AutoHirU by LexonIT"
    description="Explore LexonIT's in-house products: Sakhi Safety, a personal safety app with SOS alerts and live location sharing, and AutoHirU, an AI tool that auto-applies to jobs across LinkedIn, Naukri and more."
    keywords="LexonIT products, Sakhi Safety app, AutoHirU, AI job application tool, personal safety app UAE"
    canonical="https://lexonit.com/products"
  />
);

export const AutoHiruPageSEO = () => (
  <SEO
    title="AutoHirU | Get Hired on Autopilot — AI Auto-Apply Job Search Tool"
    description="AutoHirU is an AI-powered job search tool that auto-applies to jobs for you across LinkedIn, Naukri, Indeed and other platforms — matched to your profile and tracked in one dashboard. A LexonIT product."
    keywords="AutoHirU, AI job auto apply, auto apply LinkedIn jobs, AI job search tool, job application automation, LexonIT product"
    canonical="https://lexonit.com/products/autohiru"
    ogImage="https://lexonit.com/autohiru-icon.png"
  />
);

export const SakhiSafetyPageSEO = () => (
  <SEO
    title="Sakhi Safety | Personal Safety App with SOS Alerts & Live Location"
    description="Sakhi Safety is an all-in-one personal safety companion with instant SOS alerts, live location sharing, trusted emergency contacts, and real-time protection for iOS & Android. A LexonIT product."
    keywords="Sakhi Safety app, personal safety app, SOS alert app, live location sharing app, women safety app UAE, LexonIT product"
    canonical="https://lexonit.com/products/sakhi-safety"
    ogImage="https://lexonit.com/sakhi-safety-app.png"
  />
);

export const ITProvidersPageSEO = () => (
  <SEO
    title="LexonIT for IT Providers | AI Employees for Project Management"
    description="LexonIT for IT Service Providers: AI employees that prep, schedule, and handle the busywork — from predictive Gantt charts to capacity planning — so your team can focus on delivery."
    keywords="AI project manager, IT service provider software, AI employees for IT providers, project management automation, white label IT tools"
    canonical="https://lexonit.com/services/it-providers"
  />
);

export const PrivacyPolicyPageSEO = () => (
  <SEO
    title="Privacy Policy | LexonIT"
    description="Read LexonIT's Privacy Policy to learn how we collect, use, store, and protect your personal information when you visit our website or use our AI and web development services."
    keywords="LexonIT privacy policy, data protection UAE, privacy policy Dubai AI agency"
    canonical="https://lexonit.com/privacy-policy"
  />
);

export const SakhiPrivacyPageSEO = () => (
  <SEO
    title="Sakhi Safety Privacy Policy | LexonIT"
    description="Sakhi Safety's Privacy Policy explains how the personal safety app collects, uses, stores, and protects your data, including location, trusted contacts, and emergency alert information."
    keywords="Sakhi Safety privacy policy, Sakhi Safety data protection, personal safety app privacy"
    canonical="https://lexonit.com/sakhi-privacy"
  />
);

export const LoginPageSEO = () => (
  <SEO
    title="Sign In | LexonIT"
    description="Sign in to your LexonIT account."
    canonical="https://lexonit.com/login"
    noindex={true}
  />
);
