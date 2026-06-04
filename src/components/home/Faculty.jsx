import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { faculty, getAccent } from '../../data/mockData';

export default function Faculty() {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight-950 text-white overflow-hidden">
      <div className="absolute inset-0 mesh-cool opacity-50" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-white/5 border-white/15 text-[10px] font-display font-bold uppercase tracking-[0.2em] text-saffron-300 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-400" /> The Mentors
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            Faculty who <span className="italic text-saffron-400 font-medium">care.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {faculty.map((f, i) => {
            const acc = getAccent(f.accent);
            return (
              <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm overflow-hidden group">
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${acc.solid} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${acc.solid} flex items-center justify-center text-white text-xl font-display font-bold shadow-elev-3 mb-5`}>
                    {f.initial}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{f.name}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{f.nameMarathi}</p>
                  <p className="text-saffron-400 text-xs font-medium mt-2">{f.qualification}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {f.subjects.slice(0, 3).map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md bg-white/8 text-white/60 text-[9px] font-medium">{s}</span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-xs text-white/55">{f.experience}</div>
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 fill-saffron-400 text-saffron-400" />
                      <span className="font-bold text-white">{f.rating}</span>
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
