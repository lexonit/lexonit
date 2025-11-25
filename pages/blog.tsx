
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Button, Card, Badge, GlowingCard, Input } from '../components/ui';
import { Calendar, Clock, ArrowRight, User, Tag, Search, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [filter, setFilter] = useState('All');
  const [email, setEmail] = useState('');

  // Derive categories from posts
  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];
  
  // Filter posts
  const filteredPosts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === filter);

  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const otherPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <Badge variant="purple" className="mb-4">Insights & Updates</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Latest AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Intelligence</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          Deep dives into artificial intelligence, software architecture, and the future of work in the UAE.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && filter === 'All' && (
        <section className="container mx-auto px-6 mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl group cursor-pointer hover:border-violet-500 transition-colors">
            <div className="grid lg:grid-cols-2">
               <div className="h-64 lg:h-auto overflow-hidden relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
               </div>
               <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm mb-4">
                     <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300 font-semibold text-xs uppercase tracking-wider">
                        Featured
                     </span>
                     <span className="text-slate-500 flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                     {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed line-clamp-3">
                     {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700">
                           <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-900 dark:text-white">{featuredPost.author.name}</p>
                           <p className="text-xs text-slate-500">{featuredPost.author.role}</p>
                        </div>
                     </div>
                     <div className="text-sm font-medium text-violet-600 dark:text-violet-400 flex items-center gap-1">
                        Read Article <ArrowRight size={16} />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search */}
      <section className="container mx-auto px-6 mb-12 sticky top-20 z-30">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                 <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                       filter === cat 
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-black' 
                          : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
           <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                 type="text" 
                 placeholder="Search articles..." 
                 className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-violet-500 outline-none dark:text-white"
              />
           </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 mb-24">
         {otherPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {otherPosts.map((post) => (
                  <motion.div 
                     key={post.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4 }}
                  >
                     <GlowingCard className="h-full flex flex-col p-0 overflow-hidden group cursor-pointer">
                        <div className="h-48 overflow-hidden relative">
                           <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                           />
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                              <Tag size={12} /> {post.category}
                           </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                           <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                              <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                              <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                              {post.title}
                           </h3>
                           <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                              {post.excerpt}
                           </p>
                           <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                              <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-200">
                                    {post.author.avatar ? (
                                       <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                                    ) : (
                                       <User size={16} className="m-1 text-slate-500" />
                                    )}
                                 </div>
                                 <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{post.author.name}</span>
                              </div>
                              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                     </GlowingCard>
                  </motion.div>
               ))}
            </div>
         ) : (
            <div className="text-center py-20">
               <p className="text-slate-500 dark:text-slate-400">No posts found in this category.</p>
               <Button variant="outline" className="mt-4" onClick={() => setFilter('All')}>View All Posts</Button>
            </div>
         )}
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
         <div className="relative bg-slate-900 rounded-3xl p-12 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
               <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  <Mail size={32} />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
               <p className="text-slate-300 mb-8">
                  Get the latest AI insights, case studies, and tech trends delivered directly to your inbox. No spam, ever.
               </p>
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                     type="email" 
                     placeholder="Enter your email address" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                     required
                  />
                  <Button className="bg-white text-slate-900 hover:bg-slate-100 border-none font-bold">
                     Subscribe
                  </Button>
               </form>
            </div>
         </div>
      </section>

    </div>
  );
};

export default BlogPage;
