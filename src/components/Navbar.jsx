import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { institute } from '../data/mockData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/login', label: 'Student Login' },
];

const dashboardLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/learn', label: 'Learning' },
  { to: '/quiz', label: 'Test Series' },
  { to: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-elev-1' : 'bg-midnight-950/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/"><Logo size="md" variant={scrolled ? 'dark' : 'light'} /></Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-display font-semibold rounded-full transition-colors ${
                      isActive
                        ? scrolled ? 'text-saffron-700' : 'text-saffron-300'
                        : scrolled ? 'text-ink-700 hover:text-midnight-900' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 -z-10 rounded-full ${scrolled ? 'bg-saffron-50 border border-saffron-100' : 'bg-white/10 border border-white/15'}`}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Demo dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setDemoOpen(true)}
                  onMouseLeave={() => setDemoOpen(false)}
                  onClick={() => setDemoOpen((s) => !s)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-display font-semibold rounded-full transition-colors"
                  style={{ color: scrolled ? '#44403c' : 'rgba(255,255,255,0.7)' }}
                >
                  Platform <ChevronDown className={`w-4 h-4 transition-transform ${demoOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {demoOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      onMouseEnter={() => setDemoOpen(true)}
                      onMouseLeave={() => setDemoOpen(false)}
                      className="absolute top-full right-0 mt-2 w-64 p-2 bg-white rounded-2xl border border-ink-100 shadow-elev-4"
                    >
                      <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-ink-400">Explore the LMS</div>
                      {dashboardLinks.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          onClick={() => setDemoOpen(false)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-saffron-50 text-sm font-medium text-ink-800 transition-colors"
                        >
                          {l.label}
                          <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${institute.phones[0]}`} className={`btn-ghost ${scrolled ? '' : '!text-white/70 hover:!bg-white/10'}`}>
                <Phone className="w-4 h-4" /> {institute.phones[0]}
              </a>
              <Link to="/courses" className="btn-primary text-sm !py-2.5 !px-5">
                Admission Open
              </Link>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'hover:bg-ink-100 text-ink-800' : 'hover:bg-white/10 text-white'}`}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-midnight-900/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[86%] max-w-sm bg-white shadow-2xl pt-20 px-6 pb-8 overflow-y-auto"
            >
              <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-ink-400">Main</div>
              <nav className="flex flex-col gap-1.5 mb-6">
                {links.map((l, i) => (
                  <motion.div key={l.to} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3.5 rounded-2xl font-display font-semibold transition-all ${
                          isActive ? 'bg-saffron-50 text-saffron-700 border border-saffron-100' : 'text-ink-700 hover:bg-ink-50'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-ink-400">LMS Platform</div>
              <nav className="flex flex-col gap-1.5 mb-6">
                {dashboardLinks.map((l, i) => (
                  <motion.div key={l.to} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: (i + 3) * 0.05 }}>
                    <NavLink to={l.to} className={({ isActive }) => `flex items-center px-4 py-3.5 rounded-2xl font-display font-semibold transition-all ${isActive ? 'bg-midnight-900 text-white' : 'text-ink-700 hover:bg-ink-50'}`}>
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <Link to="/courses" className="btn-primary w-full">Admission Open</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
