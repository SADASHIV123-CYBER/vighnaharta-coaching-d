import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-3xl ${alignClass} mb-12 lg:mb-16`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-display font-bold uppercase tracking-[0.18em] mb-5 ${
            dark
              ? 'bg-white/5 border-white/15 text-saffron-300'
              : 'bg-saffron-50 border-saffron-100 text-saffron-700'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-saffron-400' : 'bg-saffron-500'}`} />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance leading-[1.05] ${
          dark ? 'text-white' : 'text-midnight-900'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-5 text-lg lg:text-xl text-balance leading-relaxed ${dark ? 'text-white/65' : 'text-ink-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
