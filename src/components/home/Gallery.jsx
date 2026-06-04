import { motion } from 'framer-motion';
import { GraduationCap, Trophy, BookOpen, Users, Sparkles, Library } from 'lucide-react';

const items = [
  { caption: 'SSC 2026 Felicitation', icon: Trophy, accent: 'from-saffron-500 to-amber-500', span: 'col-span-2 row-span-2' },
  { caption: 'English Class', icon: GraduationCap, accent: 'from-midnight-800 to-midnight-900' },
  { caption: 'Foundation Batch', icon: Users, accent: 'from-emerald-500 to-teal-600' },
  { caption: 'Annual Day', icon: Sparkles, accent: 'from-rose-500 to-pink-600' },
  { caption: 'Saturday Doubts', icon: BookOpen, accent: 'from-amber-500 to-saffron-600' },
  { caption: 'Study Hall', icon: Library, accent: 'from-midnight-700 to-midnight-900' },
];

export default function Gallery() {
  return (
    <section className="relative py-16 lg:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-midnight-900">
            Inside <span className="italic text-saffron-700 font-medium">Vighnaharta</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] lg:auto-rows-[200px] gap-3 lg:gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.03 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${it.span || ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${it.accent}`} />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 group-hover:text-white/20 transition-all duration-700" strokeWidth={1} />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display font-bold text-white text-sm lg:text-base">{it.caption}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
