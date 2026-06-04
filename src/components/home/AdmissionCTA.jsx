import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { institute } from '../../data/mockData';

export default function AdmissionCTA() {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-midnight-950 px-8 py-20 lg:px-20 lg:py-28 text-center">
          <div className="absolute inset-0 mesh-cool opacity-60" />
          <div className="absolute inset-0 bg-grid-dark opacity-25" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-saffron-500/25 rounded-full blur-[120px]" />

          <div className="relative">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-saffron-500 flex items-center justify-center mx-auto mb-8 shadow-glow-saffron">
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="font-display text-4xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[0.9]">
              Next topper
              <br />
              <span className="italic text-saffron-400 font-medium">could be yours.</span>
            </h2>

            <p className="mt-6 text-lg text-white/50 max-w-lg mx-auto">Limited seats · 2026-27 batch</p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/courses" className="btn-primary text-base">Reserve a seat <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${institute.phones[0]}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/8 hover:bg-white/12 border border-white/15 backdrop-blur text-white font-display font-semibold text-base transition-all">
                <Phone className="w-4 h-4 text-saffron-400" /> +91 {institute.phones[0]}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
