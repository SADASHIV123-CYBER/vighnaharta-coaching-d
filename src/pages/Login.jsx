import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Smartphone, Eye, EyeOff, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Lock, Mail, Trophy, Users, Phone,
} from 'lucide-react';
import Logo from '../components/Logo';
import { institute, heroToppers, avatarGradient, initials } from '../data/mockData';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-midnight-950 flex">
      {/* Left — Branded panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden text-white">
        <div className="absolute inset-0 mesh-cool" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-saffron-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-saffron-500/20 rounded-full blur-3xl" />

        <div className="relative w-full p-12 flex flex-col">
          <Link to="/"><Logo size="lg" variant="light" /></Link>

          <div className="flex-1 flex flex-col justify-center max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/15 border border-saffron-500/30 mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-saffron-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-300">Student Portal · v2026</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-[1.1]">
              Welcome back<br />
              to your<br />
              <span className="italic text-saffron-400 font-medium">Gurukul.</span>
            </h1>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Continue where you left off. Your lessons, tests, and progress are waiting.
            </p>

            {/* Social proof */}
            <div className="mt-12 p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-5 h-5 text-saffron-400" />
                <span className="text-sm font-display font-bold">Recent Achievers</span>
              </div>
              <div className="flex items-center gap-3">
                {heroToppers.map((t, i) => {
                  const accent = { rose: 'from-rose-400 to-pink-500', emerald: 'from-emerald-400 to-teal-500', purple: 'from-purple-400 to-violet-500' }[t.tone];
                  return (
                    <div key={t.name} className="text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20`}>
                        {initials(t.name)}
                      </div>
                      <p className="mt-2 text-[10px] text-white/65 leading-tight">{t.name.split(' ')[0]}</p>
                      <p className="text-[10px] text-saffron-400 font-bold">{t.marks}/100</p>
                    </div>
                  );
                })}
                <div className="text-center ml-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white/20">+139</div>
                  <p className="mt-2 text-[10px] text-white/65 leading-tight">more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-white/45">
            © 2026 {institute.name} · Built with care
          </div>
        </div>
      </div>

      {/* Right — Login form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="lg:hidden"><Logo size="sm" /></Link>
          <Link to="/" className="ml-auto inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-midnight-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to website
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md py-8">
            <div className="mb-8">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-midnight-900">Sign in</h2>
              <p className="mt-2 text-ink-500">Access your learning dashboard</p>
            </div>

            {/* Auth toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-ink-100 rounded-2xl mb-6">
              <button className="px-4 py-2.5 rounded-xl bg-white shadow-elev-1 text-sm font-display font-bold text-midnight-900">Student</button>
              <button className="px-4 py-2.5 rounded-xl text-sm font-display font-bold text-ink-500 hover:text-midnight-900 transition-colors">
                Parent
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-ink-600 mb-2">
                  Mobile / Email / Roll No.
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                  <input type="text" defaultValue="VCC-2026-014" className="input pl-11" placeholder="98xxx xxxxx" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-ink-600">Password</label>
                  <button type="button" className="text-[11px] text-saffron-700 hover:underline">Forgot password?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                  <input type={showPassword ? 'text' : 'password'} defaultValue="vighnaharta@2026" className="input pl-11 pr-12" placeholder="Enter password" />
                  <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-ink-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-ink-300 text-saffron-500 focus:ring-saffron-500" />
                Keep me signed in on this device
              </label>

              <button type="button" onClick={() => navigate('/dashboard')} className="btn-primary w-full">
                Sign in to dashboard <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-ink-500">
                Not registered? <a href={`tel:${institute.phones[0]}`} className="text-saffron-700 font-bold hover:underline">Call admission office</a>
              </p>
            </form>

            {/* Security badges */}
            <div className="mt-8 pt-6 border-t border-ink-100 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <ShieldCheck className="w-4 h-4 text-sage-600" /> 256-bit encryption
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <Smartphone className="w-4 h-4 text-sage-600" /> Single device login
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <CheckCircle2 className="w-4 h-4 text-sage-600" /> Anti-piracy protection
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <Users className="w-4 h-4 text-sage-600" /> Verified accounts
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
