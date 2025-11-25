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
