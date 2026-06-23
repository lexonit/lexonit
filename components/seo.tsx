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
  title = "Affordable AI Solutions Bengaluru | Cheap AI Chatbots from IND 499 | Budget AI Development India",
  description = "⭐ #1 Affordable AI Agency in Bengaluru! AI Chatbots from IND 499, Websites from IND 799, Business Automation from IND 2,999. Cheap AI products, premium quality. 48-hour delivery. Budget-friendly AI solutions for startups & SMEs in India.",
  keywords = "cheap AI chatbot Bengaluru, affordable AI solutions India, budget AI development, low cost chatbot, AI chatbot price Bengaluru, cheap website IND 799, affordable business automation, budget AI agency, cheap AI products India, affordable GPT chatbot, low price automation Bengaluru",
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
    title="Affordable AI Chatbot Bengaluru | From IND 499 | Cheap AI Solutions India"
    description="💰 Bengaluru's Most Affordable AI Agency! AI Chatbots IND 499, Professional Websites IND 799, Complete Automation IND 2,999. Premium quality, budget prices. Fast 48hr delivery. Cheap AI products for startups & small business in India. WhatsApp chatbot, OpenAI GPT-4, Next.js development."
    keywords="cheap AI chatbot Bengaluru, affordable AI India, AI chatbot IND 499, budget chatbot Bengaluru, low cost AI assistant, cheap website Bengaluru IND 799, affordable automation India, budget AI agency, cheap GPT chatbot, low price OpenAI Bengaluru, affordable WhatsApp bot, cheap business automation, budget AI development Bengaluru, affordable Next.js developer, cheap React developer India, low cost AI integration, budget SaaS Bengaluru, affordable cloud solutions, cheap API development, AI for small business Bengaluru, startup AI cheap, SME automation affordable"
    canonical="https://lexonit.com"
  />
);

export const PricingPageSEO = () => (
  <SEO
    title="Affordable AI Pricing Bengaluru | Cheap Plans from IND 499 | Budget-Friendly India"
    description="💸 Transparent, affordable pricing! AI Chatbot: IND 499 | Website 48hr: IND 799 | Full Automation: IND 2,999. No hidden fees. Cheapest AI solutions in Bengaluru. Perfect for startups, SMEs, and budget-conscious businesses in India."
    keywords="AI chatbot price Bengaluru, affordable AI pricing India, cheap chatbot cost, budget AI plans Bengaluru, low cost automation pricing, affordable AI packages India, cheap website price Bengaluru, budget development rates, AI chatbot IND 499, website IND 799, automation IND 2999, affordable monthly plans, cheap AI subscription Bengaluru"
    canonical="https://lexonit.com/pricing"
  />
);

export const ServicesPageSEO = () => (
  <SEO
    title="Cheap AI Services Bengaluru | Affordable Chatbot, Website & Automation India"
    description="Budget-friendly AI services in Bengaluru: Cheap AI Chatbots, Affordable Website Development, Low-Cost Business Automation, Budget OpenAI Integration. Premium quality at lowest prices. Best value for startups & SMEs in India."
    keywords="cheap AI services Bengaluru, affordable chatbot development, budget website design India, low cost automation services, cheap OpenAI integration Bengaluru, affordable GPT-4 chatbot, budget Next.js development, cheap React services India, affordable AI assistant Bengaluru, low price WhatsApp bot"
    canonical="https://lexonit.com/services"
  />
);

export const ContactPageSEO = () => (
  <SEO
    title="Contact Affordable AI Agency Bengaluru | Get Free Quote | Budget AI Solutions India"
    description="Get free quote for affordable AI solutions in Bengaluru! Contact us for cheap AI chatbots (IND 499+), budget websites, and low-cost automation. Fast response, transparent pricing. Best rates for startups & SMEs in India."
    keywords="affordable AI agency Bengaluru contact, cheap AI quote India, budget AI consultation Bengaluru, low cost chatbot inquiry, affordable development quote, cheap AI agency near me Bengaluru"
    canonical="https://lexonit.com/contact"
  />
);
