import { motion } from 'framer-motion';

/**
 * Vighnaharta brandmark.
 * The mark riffs on the institute's Ganesh logo without literally redrawing it:
 * a "V" rising into a flame / lotus shape, sitting in a deep midnight medallion
 * with saffron flame accents. Reads as both a "V" and a deity-flame.
 */
export default function Logo({ size = 'md', variant = 'dark' }) {
  const sizes = {
    sm: { box: 'h-9 w-9', title: 'text-base', sub: 'text-[9px]' },
    md: { box: 'h-11 w-11', title: 'text-lg', sub: 'text-[10px]' },
    lg: { box: 'h-14 w-14', title: 'text-2xl', sub: 'text-[11px]' },
  }[size];

  const isLight = variant === 'light';

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400 }} className="flex items-center gap-2.5">
      <div className={`${sizes.box} relative rounded-2xl bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900 shadow-elev-3 overflow-hidden flex items-center justify-center`}>
        {/* Saffron ember in corner */}
        <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-saffron-500/70 blur-md" />
        {/* Mandala lines */}
        <div className="absolute inset-0 bg-mandala opacity-30" />
        {/* Flame V mark */}
        <svg viewBox="0 0 32 32" className="relative z-10 h-3/5 w-3/5">
          <defs>
            <linearGradient id="flame" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#fcc150" />
              <stop offset="50%" stopColor="#f5840f" />
              <stop offset="100%" stopColor="#b4400b" />
            </linearGradient>
          </defs>
          <path
            d="M8 6 L16 28 L24 6 L20 6 L16 18 L12 6 Z"
            fill="url(#flame)"
            stroke="#fcc150"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* Tilak dot */}
          <circle cx="16" cy="3" r="1.4" fill="#f5840f" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${sizes.title} font-display font-bold tracking-tight ${isLight ? 'text-white' : 'text-midnight-900'}`}>
          Vighnaharta
        </span>
        <span className={`${sizes.sub} font-medium uppercase tracking-[0.12em] ${isLight ? 'text-white/60' : 'text-ink-500'}`}>
          Since 2022 · Vasmat
        </span>
      </div>
    </motion.div>
  );
}
