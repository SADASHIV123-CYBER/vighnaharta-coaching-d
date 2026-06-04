import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { institute } from '../../data/mockData';

export default function Contact() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-50 overflow-hidden">
      <div className="absolute inset-0 mesh-warm opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-midnight-900 leading-[0.95]">
              Let's <span className="italic text-saffron-700 font-medium">talk.</span>
            </h2>
            <p className="mt-4 text-ink-500 max-w-sm">Visit us. Sit through a free demo class. Meet Mangesh sir.</p>

            <div className="mt-10 space-y-5">
              <a href={`tel:${institute.phones[0]}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-saffron-500 flex items-center justify-center flex-shrink-0 shadow-elev-2 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-midnight-900">+91 {institute.phones[0]}</div>
                  <div className="text-sm text-ink-500">+91 {institute.phones[1]}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-midnight-900 flex items-center justify-center flex-shrink-0 shadow-elev-2">
                  <MapPin className="w-6 h-6 text-saffron-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-midnight-900">{institute.address}</div>
                  <div className="text-xs text-ink-500">{institute.addressMarathi}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sage-500 flex items-center justify-center flex-shrink-0 shadow-elev-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-midnight-900">7 AM — 9 PM · All days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-500 to-amber-400 rounded-[2.5rem] rotate-[1.5deg] opacity-90" />
              <div className="relative bg-white rounded-[2.5rem] p-8 shadow-elev-4">
                <h3 className="font-display text-2xl font-bold text-midnight-900 mb-1">Request a callback</h3>
                <p className="text-sm text-ink-500 mb-6">We'll call within 30 minutes.</p>
                <div className="space-y-3">
                  <input type="text" placeholder="Student name" className="input" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="tel" placeholder="Mobile" className="input" />
                    <select className="input"><option>Class 5</option><option>Class 8</option><option>Class 10</option><option>Class 12</option><option>English Speaking</option></select>
                  </div>
                  <button type="button" className="btn-primary w-full">Request callback <Send className="w-4 h-4" /></button>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-ink-500 mt-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" /> Your details stay private.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
