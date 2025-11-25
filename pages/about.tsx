import { GlowingCard } from "@/components/ui";
import { TEAM } from "@/constants";
import { User } from "lucide-react";

const AboutPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => (
  <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">We Are LexonIT</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          A collective of engineers, designers, and AI specialists. 
          Our mission is to democratize artificial intelligence for businesses of all sizes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left mb-20">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400">To be the catalyst for the digital transformation, fostering a future where technology amplifies human potential.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Approach</h3>
            <p className="text-slate-600 dark:text-slate-400">We don't just write code; we solve business problems. Every line of code and every AI model is optimized for ROI and user experience.</p>
          </div>
        </div>
      </div>

      {/* Team Section (Updated with GlowingCard) */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, index) => (
            <GlowingCard key={index}>
              <div className="h-32 -mx-6 -mt-6 overflow-hidden bg-gradient-to-r from-violet-500/10 to-indigo-500/10 dark:from-violet-900/20 dark:to-indigo-900/20 relative mb-6">
                {/* Optional background pattern or effect */}
              </div>
              <div className="text-center relative -mt-16">
                <div className="w-32 h-32 mx-auto rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-md mb-4 bg-white dark:bg-slate-800">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <User size={40} />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-violet-600 dark:text-violet-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 border border-slate-200 dark:border-white/10 rounded-2xl bg-gradient-to-r from-violet-100/50 to-indigo-100/50 dark:from-violet-900/20 dark:to-indigo-900/20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Partner With Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['Discovery', 'Planning', 'Development', 'Launch'].map((step, i) => (
                <div key={i} className="text-center relative">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white flex items-center justify-center mx-auto mb-3 font-bold z-10 relative shadow-sm dark:shadow-none">
                        {i + 1}
                    </div>
                    {i !== 3 && <div className="hidden md:block absolute top-5 left-[50%] w-full h-px bg-slate-200 dark:bg-white/10" />}
                    <p className="text-slate-600 dark:text-slate-300 font-medium">{step}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);
export default AboutPage;