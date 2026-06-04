import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials, getAccent } from '../../data/mockData';

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000); return () => clearInterval(t); }, []);
  const t = testimonials[i];
  const acc = getAccent(t.accent);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-saffron-100/40 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="eyebrow mb-8 mx-auto">Student voices</div>

        <AnimatePresence mode="wait">
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <Quote className="w-10 h-10 text-saffron-300 fill-saffron-300 mx-auto mb-6" />
            <p className="font-display text-2xl lg:text-4xl xl:text-5xl font-bold text-midnight-900 leading-[1.2] tracking-tight italic text-balance">
              "{t.quote}"
            </p>

            <div className="mt-8 inline-flex items-center gap-4 mx-auto">
              <div className={`w-12 h-12 rounded-xl ${acc.solid} flex items-center justify-center text-white text-sm font-display font-bold shadow-elev-2`}>{t.initial}</div>
              <div className="text-left">
                <div className="font-display font-bold text-midnight-900">{t.name}</div>
                <div className="text-xs text-ink-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-white border border-ink-200 hover:bg-ink-50 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, j) => (
              <button key={j} onClick={() => setI(j)}
                className={`h-2 rounded-full transition-all ${j === i ? 'w-10 bg-saffron-500' : 'w-2 bg-ink-200'}`} />
            ))}
          </div>
          <button onClick={() => setI((p) => (p + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-midnight-900 text-white hover:bg-midnight-800 flex items-center justify-center transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
