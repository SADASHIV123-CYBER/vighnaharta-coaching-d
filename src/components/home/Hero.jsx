import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Trophy, Star, Phone, Sparkles } from 'lucide-react';
import { institute, heroToppers, avatarGradient, initials, distinctionToppers } from '../../data/mockData';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-midnight-950">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
        <div className="absolute inset-0 mesh-cool opacity-80" />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-saffron-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-saffron-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div style={{ y, scale }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-36 pb-24">
        {/* Top badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron-400" />
          </span>
          <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-saffron-300">
            SSC 2026 — 142 Distinction Holders — 100% Pass
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — Minimal dramatic text */}
          <div className="lg:col-span-6">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-[3.5rem] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-[-0.03em] text-white leading-[0.9]">
              The
              <br />
              <span className="text-gradient italic font-medium">Gurukul</span>
              <br />
              <span className="text-white/40">for exams.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="mt-8 text-lg text-white/50 max-w-md leading-relaxed">
              <span className="text-white font-semibold">Mangesh Jadhav sir's</span> coaching institute. 2,400+ students. Vasmat, Maharashtra.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4">
              <Link to="/courses" className="btn-primary text-base">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${institute.phones[0]}`} className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/8 hover:bg-white/12 border border-white/15 backdrop-blur text-white font-display font-semibold text-sm transition-all">
                <Phone className="w-4 h-4 text-saffron-400" /> Call now
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2.5">
                {distinctionToppers.slice(0, 5).map((t) => (
                  <div key={t.name} className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarGradient(t.name)} border-2 border-midnight-900 flex items-center justify-center text-white text-[10px] font-bold`}>
                    {initials(t.name)}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-saffron-500 border-2 border-midnight-900 flex items-center justify-center text-white text-[9px] font-bold">
                  +2.4K
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />)}
                <span className="ml-1 text-sm font-bold text-white">5.0</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Floating result card */}
          <div className="lg:col-span-6 relative">
            <motion.div initial={{ opacity: 0, y: 40, rotateY: -8 }} animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative perspective">

              {/* Glow behind card */}
              <div className="absolute inset-8 bg-saffron-500/30 rounded-[3rem] blur-[60px]" />

              {/* Main card */}
              <div className="relative glass-dark rounded-[2.5rem] p-8 lg:p-10">
                <div className="absolute inset-0 bg-mandala opacity-20 rounded-[2.5rem]" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/20 border border-saffron-500/30">
                      <Trophy className="w-3.5 h-3.5 text-saffron-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-300">Results 2026</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">English · SSC</span>
                  </div>

                  <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                    95<span className="text-saffron-400">/100</span>
                  </h3>
                  <p className="text-white/50 text-sm">Highest score in English</p>

                  {/* 3 toppers */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {heroToppers.map((t, i) => {
                      const accent = ['from-rose-400 to-pink-500', 'from-emerald-400 to-teal-500', 'from-purple-400 to-violet-500'][i];
                      return (
                        <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.12 }} className="text-center group">
                          <div className="relative inline-block mb-3">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xl font-bold shadow-elev-3 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                              {initials(t.name)}
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-saffron-500 text-white text-xs font-bold flex items-center justify-center border-2 border-midnight-900 shadow-elev-2">
                              {t.marks}
                            </div>
                          </div>
                          <p className="text-xs font-bold text-white">{t.name.split(' ')[0]}</p>
                          <p className="text-[10px] text-white/40">{t.nameMarathi}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                    {[
                      { v: '142', l: 'Distinction' },
                      { v: '100%', l: 'Pass rate' },
                      { v: '2,400+', l: 'Students' },
                    ].map((s) => (
                      <div key={s.l} className="text-center">
                        <div className="text-2xl font-display font-bold text-white">{s.v}</div>
                        <div className="text-[9px] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating chip */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-16 glass-dark rounded-2xl p-3 max-w-[180px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-saffron-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] text-white/50 uppercase tracking-widest font-bold">Live</div>
                    <div className="text-[11px] font-bold text-white">28 in class</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
