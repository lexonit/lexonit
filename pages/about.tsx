import { GlowingCard } from "@/components/ui";
import { TEAM } from "@/constants";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.2 }
};

const AboutPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => (
  <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">We Are LexonIT</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
          A collective of engineers, designers, and AI specialists. 
          Our mission is to democratize artificial intelligence for businesses of all sizes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left mb-20">
          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400">To be the catalyst for the digital transformation, fostering a future where technology amplifies human potential.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.6 }} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Approach</h3>
            <p className="text-slate-600 dark:text-slate-400">We don't just write code; we solve business problems. Every line of code and every AI model is optimized for ROI and user experience.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CEO Section */}
      <motion.div {...fadeUp} className="mb-24 flex flex-col md:flex-row items-center gap-12 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-sm">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-slate-50 dark:border-slate-800 shadow-xl">
            <img 
              src="/team/laxmi-mahitha.jpg" 
              alt="Laxmi Mahitha Emmadishetty" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Laxmi Mahitha Emmadishetty</h2>
          <p className="text-xl text-violet-600 dark:text-violet-400 font-medium mb-6">Founder & CEO</p>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
            <p>
              With over 10 years of deep-rooted experience in the IT sector, Laxmi is driving LexonIT's vision to revolutionize the technology landscape.
            </p>
            <p>
              Her goal is to build an innovative AI startup that delivers world-class, high-quality products while empowering talent and businesses in Tier-3 cities, bringing cutting-edge technology outside of traditional tech hubs.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div {...fadeUp} className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">Meet Our Team</h2>
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, index) => (
            <motion.div key={index} variants={{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
              <GlowingCard>
                <div className="h-32 -mx-6 -mt-6 overflow-hidden bg-gradient-to-r from-violet-500/10 to-indigo-500/10 dark:from-violet-900/20 dark:to-indigo-900/20 relative mb-6">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div {...fadeUp} className="max-w-4xl mx-auto p-8 border border-slate-200 dark:border-white/10 rounded-2xl bg-gradient-to-r from-violet-100/50 to-indigo-100/50 dark:from-violet-900/20 dark:to-indigo-900/20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Partner With Us</h2>
        <div className="relative mt-12 mb-8">
            {/* Background static line */}
            <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 dark:bg-white/10 z-0">
                {/* Animated filling line */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]" 
                />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {['Discovery', 'Planning', 'Development', 'Launch'].map((step, i) => (
                    <div key={i} className="text-center relative">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.4 }}
                            viewport={{ once: true }}
                            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-violet-500 text-slate-900 dark:text-white flex items-center justify-center mx-auto mb-3 font-bold shadow-sm"
                        >
                            {i + 1}
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.4 + 0.2 }}
                            viewport={{ once: true }}
                            className="text-slate-600 dark:text-slate-300 font-medium"
                        >
                            {step}
                        </motion.p>
                    </div>
                ))}
            </div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default AboutPage;
