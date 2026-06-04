import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, PlayCircle, FileQuestion, Bell, Settings, LogOut, BookMarked, Menu, X, Search, ShieldCheck,
} from 'lucide-react';
import Logo from '../components/Logo';
import { currentStudent } from '../data/mockData';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/learn', label: 'Continue Learning', icon: PlayCircle },
  { to: '/quiz', label: 'Tests & Quizzes', icon: FileQuestion },
  { to: '/courses', label: 'Course Library', icon: BookMarked },
];

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-ink-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-ink-100 sticky top-0 h-screen">
        <div className="px-6 py-6 border-b border-ink-100">
          <Link to="/"><Logo size="md" /></Link>
        </div>

        <div className="px-4 py-4 border-b border-ink-100">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-gradient-to-br from-saffron-50 to-saffron-100/50 border border-saffron-100">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {currentStudent.initial}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-display font-bold text-midnight-900 truncate">{currentStudent.name}</div>
              <div className="text-[11px] text-ink-500 truncate">{currentStudent.class}</div>
            </div>
            <ShieldCheck className="w-4 h-4 text-saffron-600 flex-shrink-0" />
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-ink-400">Learning</div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-midnight-900 text-white shadow-elev-2' : 'text-ink-700 hover:bg-ink-50'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}

          <div className="px-3 py-2 mt-4 text-[10px] font-bold uppercase tracking-widest text-ink-400">Account</div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-700 hover:bg-ink-50 transition-colors">
            <Bell className="w-4 h-4" /> Notifications
            <span className="ml-auto text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-bold">4</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-700 hover:bg-ink-50 transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-ink-100">
          <Link to="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-700 hover:bg-rose-50 hover:text-rose-700 transition-colors">
            <LogOut className="w-4 h-4" /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-midnight-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 28, stiffness: 280 }} className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
              <div className="px-6 py-5 border-b border-ink-100 flex items-center justify-between">
                <Logo size="sm" />
                <button onClick={() => setOpen(false)} className="p-2 rounded-xl hover:bg-ink-100"><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex-1 p-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} end={item.to === '/dashboard'} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-midnight-900 text-white' : 'text-ink-700 hover:bg-ink-50'}`}>
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-xl border-b border-ink-100">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-ink-100"><Menu className="w-5 h-5" /></button>
              <div className="hidden md:block">
                <div className="text-xs text-ink-500">Vighnaharta · Learning Platform</div>
                <div className="text-sm font-display font-bold text-midnight-900 -mt-0.5 capitalize">
                  {location.pathname.split('/')[1] || 'dashboard'}
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                <input type="text" placeholder="Search lessons, tests, notes..." className="w-full pl-10 pr-4 py-2 rounded-full bg-ink-50 border border-transparent focus:bg-white focus:border-saffron-300 focus:ring-4 focus:ring-saffron-100 outline-none text-sm transition-all" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="relative p-2.5 rounded-xl hover:bg-ink-100 transition-colors">
                <Bell className="w-5 h-5 text-ink-700" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-elev-2">
                {currentStudent.initial}
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
