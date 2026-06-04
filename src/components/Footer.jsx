import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, ArrowUpRight, Send } from 'lucide-react';
import Logo from './Logo';
import { institute } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="relative bg-midnight-950 text-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron-500/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4">
            <Logo size="lg" variant="light" />
            <p className="mt-6 text-white/65 leading-relaxed max-w-sm">
              {institute.taglineMarathi} <span className="font-display italic text-saffron-300">{institute.tagline}</span>
            </p>
            <p className="mt-3 text-white/55 leading-relaxed max-w-sm text-sm">
              SSC, HSC, English Speaking and Competitive Exam preparation. Where dedication meets excellence.
            </p>

            <div className="flex gap-3 mt-6">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3 }} className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center hover:bg-white/5 hover:border-saffron-500/50 transition-colors">
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Learn</h4>
            <ul className="space-y-2.5">
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">All Courses</Link></li>
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">Class 5-7 Foundation</Link></li>
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">Class 8-10 SSC</Link></li>
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">Class 11-12 Science</Link></li>
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">English Speaking</Link></li>
              <li><Link to="/courses" className="text-white/65 hover:text-white text-sm transition-colors">Scholarship Guide</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/login" className="text-white/65 hover:text-white text-sm transition-colors">Student Login</Link></li>
              <li><Link to="/dashboard" className="text-white/65 hover:text-white text-sm transition-colors">Dashboard</Link></li>
              <li><Link to="/learn" className="text-white/65 hover:text-white text-sm transition-colors">Learning Hub</Link></li>
              <li><Link to="/quiz" className="text-white/65 hover:text-white text-sm transition-colors">Test Series</Link></li>
              <li><Link to="/admin" className="text-white/65 hover:text-white text-sm transition-colors">Admin Console</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  <div>{institute.address}</div>
                  <div className="text-white/50 text-xs mt-0.5">{institute.addressMarathi}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${institute.phones[0]}`} className="text-white/70 hover:text-white block">+91 {institute.phones[0]}</a>
                  <a href={`tel:${institute.phones[1]}`} className="text-white/70 hover:text-white block">+91 {institute.phones[1]}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron-400 flex-shrink-0" />
                <a href={`mailto:${institute.email}`} className="text-white/70 hover:text-white text-sm">{institute.email}</a>
              </li>
            </ul>

            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-saffron-500/15 to-saffron-500/5 border border-saffron-500/25">
              <p className="text-xs font-bold text-saffron-300 uppercase tracking-widest">Admission Open · 2026-27</p>
              <p className="text-sm text-white/85 mt-1.5">Limited seats. Direct meeting with Mangesh sir.</p>
              <Link to="/courses" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-300 hover:text-saffron-200">
                Reserve a seat <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-sm">© 2026 Vighnaharta Coaching Classes. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="text-white/45 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/45 hover:text-white transition-colors">Terms</a>
            <span className="text-white/45">
              Crafted with <Send className="w-3 h-3 inline -mt-0.5 mx-0.5 text-saffron-400" /> by <span className="text-saffron-300 font-semibold">Shiv IT Solutions</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
