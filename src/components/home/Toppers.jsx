import { motion } from 'framer-motion';
import { Crown, Sparkles, Trophy, Medal } from 'lucide-react';
import { heroToppers, distinctionToppers, honourToppers, avatarGradient, initials } from '../../data/mockData';

export default function Toppers() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-amber-50/50 to-white">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4 mx-auto">Hall of Fame · SSC 2026</div>
          <h2 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-midnight-900 leading-[0.95]">
            The faces of<br/><span className="italic text-saffron-700 font-medium">excellence.</span>
          </h2>
        </div>

        {/* Podium — big dramatic top 3 */}
        <div className="flex items-end justify-center gap-4 lg:gap-6 max-w-3xl mx-auto mb-20">
          {/* 2nd place */}
          <PodiumCard topper={heroToppers[1]} rank={2} height="h-48" accent="from-emerald-400 to-teal-500" delay={0.2} />
          {/* 1st place */}
          <PodiumCard topper={heroToppers[0]} rank={1} height="h-64" accent="from-rose-400 to-pink-500" delay={0.1} crown />
          {/* 3rd place */}
          <PodiumCard topper={heroToppers[2]} rank={3} height="h-40" accent="from-purple-400 to-violet-500" delay={0.3} />
        </div>

        {/* Distinction 90+ — flowing avatar grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Medal className="w-5 h-5 text-saffron-600" />
            <h3 className="font-display text-xl font-bold text-midnight-900">Distinction · 90+</h3>
            <div className="flex-1 h-px bg-ink-200" />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-3">
            {distinctionToppers.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -6, scale: 1.08 }} className="text-center group cursor-default">
                <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${avatarGradient(t.name)} flex items-center justify-center text-white text-lg font-display font-bold shadow-elev-1 group-hover:shadow-elev-3 transition-all relative`}>
                  {initials(t.name)}
                  <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-midnight-900 text-saffron-400 text-[10px] font-bold flex items-center justify-center border-2 border-white">{t.marks}</div>
                </div>
                <p className="mt-2 text-[9px] font-bold text-midnight-900 leading-tight truncate">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honour 80–89 — compact strip */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Trophy className="w-4 h-4 text-ink-400" />
            <h3 className="font-display text-lg font-bold text-midnight-900">Honour Roll · 80–89</h3>
            <span className="text-xs text-ink-500">{honourToppers.length} students</span>
            <div className="flex-1 h-px bg-ink-200" />
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {honourToppers.map((t, i) => (
              <motion.div key={t.name + i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.01, 0.6) }}
                className="relative aspect-square rounded-xl flex items-center justify-center text-white text-[10px] font-bold hover:-translate-y-0.5 transition-all"
                style={{ background: `linear-gradient(135deg, ${getGradientColors(avatarGradient(t.name))})` }}
                title={`${t.name} · ${t.marks}/100`}>
                {initials(t.name)}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-midnight-900 text-saffron-400 text-[8px] font-bold flex items-center justify-center border border-white/40">{t.marks}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-saffron-500" />
            <p className="font-display text-2xl lg:text-3xl font-bold text-midnight-900">
              सर्व गुणवंतांचे <span className="text-saffron-700 italic">हार्दिक अभिनंदन!</span>
            </p>
            <Sparkles className="w-5 h-5 text-saffron-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PodiumCard({ topper, rank, height, accent, delay, crown }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.7, delay }} className="flex-1 max-w-[240px]">
      <div className="text-center mb-4">
        <div className="relative inline-block">
          {crown && (
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: delay + 0.3, type: 'spring' }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <Crown className="w-10 h-10 text-saffron-500 fill-saffron-500 drop-shadow-lg" />
            </motion.div>
          )}
          <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-3xl lg:text-4xl font-display font-bold shadow-elev-4 ring-4 ring-white`}>
            {initials(topper.name)}
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-midnight-900 text-saffron-400 text-sm font-display font-bold border-2 border-white shadow-elev-2">
            {topper.marks}/100
          </div>
        </div>
        <h3 className="mt-5 font-display text-base lg:text-lg font-bold text-midnight-900">{topper.name}</h3>
        <p className="text-xs text-ink-500">{topper.nameMarathi}</p>
      </div>
      <div className={`${height} rounded-t-3xl bg-gradient-to-t ${accent} opacity-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-4 inset-x-0 text-center">
          <span className="text-5xl lg:text-6xl font-display font-bold text-midnight-900/20">#{rank}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Helper to extract Tailwind gradient to inline style for honour roll
function getGradientColors(cls) {
  const map = {
    'from-rose-400 to-pink-500': '#fb7185, #ec4899',
    'from-amber-400 to-orange-500': '#fbbf24, #f97316',
    'from-emerald-400 to-teal-500': '#34d399, #14b8a6',
    'from-sky-400 to-indigo-500': '#38bdf8, #6366f1',
    'from-violet-400 to-purple-500': '#a78bfa, #a855f7',
    'from-fuchsia-400 to-pink-500': '#e879f9, #ec4899',
    'from-cyan-400 to-blue-500': '#22d3ee, #3b82f6',
    'from-yellow-400 to-amber-500': '#facc15, #f59e0b',
    'from-lime-400 to-emerald-500': '#a3e635, #10b981',
    'from-red-400 to-rose-500': '#f87171, #f43f5e',
    'from-indigo-400 to-violet-500': '#818cf8, #8b5cf6',
    'from-teal-400 to-cyan-500': '#2dd4bf, #06b6d4',
  };
  return map[cls] || '#fb7185, #ec4899';
}
