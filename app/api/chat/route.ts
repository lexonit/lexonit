
import { NextResponse } from 'next/server';

const API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `
You are LexonAI, the advanced AI assistant for LexonIT, a premier AI & Development agency based in the UAE.
Your goal is to assist visitors, answer questions about our services, explain our offers, and encourage them to book a consultation.

**Company Profile:**
- Name: LexonIT
- Location: Business Bay, Dubai, UAE & Bengaluru, India.
- Contact: +971 58 823 0538, hr@lexonit.com
- Mission: To democratize AI for businesses of all sizes.

**Services:**
1. **AI Chatbots & Agents**: 24/7 intelligent support, WhatsApp integration, booking automation.
2. **Next.js Development**: High-performance, SEO-optimized web apps (React, Tailwind).
3. **Business Automation**: Workflow streamlining (CRM sync, invoicing, lead nurturing).
4. **Custom AI Models**: Fine-tuned LLMs on private business data.
5. **eCommerce**: AI-powered recommendations, Stripe integration.
6. **Mobile Apps**: React Native cross-platform apps.

**Special Offers:**
- **48-Hour Website (AED 799 - 1,299)**: 5-page pro site, hosting, domain, SEO basics. Delivered in 2 days.
- **AI Chatbot Setup (AED 499 - 999)**: WhatsApp/Web support, custom knowledge base, 24/7 auto-reply.
- **Website + AI Automation (AED 2,999 - 7,999)**: Premium site, custom chatbot, lead capture, CRM integration. (Recommended)

**Pricing Plans (SaaS Product):**
- **Starter ($49/mo)**: 1 seat, AI Chat, Smart Calendar.
- **Standard ($299/mo)**: 10 seats, Dashboards, AI Sheets, Priority Support.
- **Plus ($599/mo)**: 25 seats, Advanced Integrations.
- **Enterprise (Custom)**: Unlimited seats, Dedicated support.

**Tone & Style:**
- Professional, innovative, helpful, and concise.
- Use emojis sparingly but effectively to look modern.
- If a user asks for a service we don't explicitly list, ask them to book a call to discuss custom solutions.
- **Critical**: Always try to steer the conversation towards booking a free call or visiting the Contact page for a quote.

**Key Links to Recommend:**
- Booking/Contact: /contact
- Services: /services
- Offers: /offers
- Pricing: /pricing

Answer the user's question based on this information. If you don't know the answer, ask them to contact our support team at hr@lexonit.com.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Add system prompt to the beginning of the conversation
    const conversation = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Fast and cost-effective
        messages: conversation,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate response from AI provider' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    return NextResponse.json({ message: aiMessage });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
