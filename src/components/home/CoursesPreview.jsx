import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, FlaskConical, MessageCircle, Sparkles, Target, ArrowRight, Star, Users } from 'lucide-react';
import { courses, getAccent } from '../../data/mockData';

const iconMap = { BookOpen, Trophy, FlaskConical, MessageCircle, Sparkles, Target };

export default function CoursesPreview() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">6 Programmes</div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight text-midnight-900 leading-[0.95]">
              Your child's<br/><span className="italic text-saffron-700 font-medium">path starts here.</span>
            </h2>
          </div>
          <Link to="/courses" className="btn-secondary">All courses <ArrowRight className="w-4 h-4" /></Link>
        </div>

        {/* Bento grid — first 2 large, rest small */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => {
            const Icon = iconMap[c.icon] || BookOpen;
            const acc = getAccent(c.accent);
            const isFeatured = c.featured;
            return (
              <motion.div key={c.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl ${isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}`}>

                {/* Colored header */}
                <div className={`relative ${acc.solid} p-6 pb-12 overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-dark opacity-25" />
                  <Icon className="absolute -bottom-6 -right-6 w-32 h-32 text-white/10" strokeWidth={1} />
                  <div className="relative">
                    {c.badge && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-bold uppercase tracking-widest mb-3">
                        <Trophy className="w-2.5 h-2.5" /> {c.badge}
                      </div>
                    )}
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white leading-tight">{c.title}</h3>
                    <p className="text-white/60 text-[11px] mt-1 italic">{c.titleMarathi}</p>
                  </div>
                </div>

                {/* Info bottom */}
                <div className="bg-white p-5 -mt-6 rounded-t-3xl relative">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.subjects.slice(0, 4).map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md bg-ink-100 text-ink-700 text-[10px] font-medium">{s}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-ink-500">
                      <div className="flex items-center gap-1"><Star className="w-3 h-3 fill-saffron-500 text-saffron-500" /><b className="text-midnight-900">{c.rating}</b></div>
                      <div className="flex items-center gap-1"><Users className="w-3 h-3" />{c.students}</div>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-lg font-bold text-midnight-900">₹{c.price.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-ink-400 line-through">₹{c.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
