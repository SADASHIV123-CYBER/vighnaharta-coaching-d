import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import { institute, stats } from '../../data/mockData';

export default function Overview() {
  return (
    <>
      {/* Stats strip — bold numbers only */}
      <section className="relative py-6 bg-midnight-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...stats, ...stats].map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-10">
                <span className="text-3xl lg:text-4xl font-display font-bold text-saffron-400">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs font-display font-bold uppercase tracking-widest text-white/40">{s.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/15 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote — visual, no paragraph */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-saffron-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-saffron-200 fill-saffron-200 mx-auto mb-8" />
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-midnight-900 leading-[1.15] tracking-tight">
            We don't teach subjects.
            <br />
            We teach <span className="italic text-saffron-600 font-medium">students.</span>
          </motion.blockquote>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-midnight-900 flex items-center justify-center text-saffron-400 text-lg font-display font-bold shadow-elev-3">MJ</div>
            <div className="text-left">
              <div className="font-display font-bold text-midnight-900">{institute.director.name}</div>
              <div className="text-sm text-ink-500">{institute.director.role} · {institute.director.qualification}</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
