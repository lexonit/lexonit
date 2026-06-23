
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star, Smartphone } from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

const PRODUCTS = [
  {
    id: 'sakhi-safety',
    name: 'Sakhi Safety',
    tagline: 'Your Safety, Our Priority',
    description: 'An all-in-one personal safety companion with instant SOS alerts, live location sharing, trusted emergency contacts, and real-time protection.',
    icon: '/sakhi-safety-app.png',
    badge: 'Live',
    badgeColor: 'bg-emerald-500',
    platform: 'iOS & Android',
    features: ['Instant SOS Alerts', 'Live Location Sharing', 'Trusted Contacts', 'Safety Check Timer'],
    path: '/products/sakhi-safety',
  }
];

const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-rose-400/10 dark:bg-rose-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
            <Smartphone size={14} />
            Built by LexonIT
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              Products
            </span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world applications built with cutting-edge technology to solve meaningful problems.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-rose-500/10 dark:hover:shadow-rose-500/20 transition-all duration-500"
              onClick={() => onNavigate(product.path)}
            >
              {/* Card glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl" />

              {/* App Icon Section */}
              <div className="relative p-8 pb-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-3 rounded-3xl border border-dashed border-red-400/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-6 rounded-[2rem] border border-dashed border-violet-400/20"
                  />
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    src={product.icon}
                    alt={product.name}
                    className="w-24 h-24 rounded-[22px] shadow-2xl shadow-red-500/30 relative z-10 object-cover"
                  />
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${product.badgeColor} text-white text-xs font-semibold mb-3`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {product.badge}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-1">
                  {product.name}
                </h2>
                <p className="text-sm text-red-500 font-medium mb-4 text-center">{product.tagline}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm text-center leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Feature pills */}
              <div className="px-8 pb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platform & CTA */}
              <div className="px-8 pb-8 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Smartphone size={12} />
                  {product.platform}
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors"
                  onClick={(e) => { e.stopPropagation(); onNavigate(product.path); }}
                >
                  Explore <ArrowRight size={14} />
                </motion.button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}

          {/* Coming Soon */}
          <motion.div
            variants={cardVariant}
            className="relative bg-white/50 dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-4">
              <Star size={28} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-500 dark:text-slate-500 mb-2">More Coming Soon</h3>
            <p className="text-sm text-slate-400 dark:text-slate-600 max-w-48">
              We're building more innovative products. Stay tuned.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-4">Have an idea for a product?</p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            Let's Build Together <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
