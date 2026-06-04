import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flame, TrendingUp, Clock, Trophy, PlayCircle, BookMarked, Calendar, FileQuestion, Bell,
  ChevronRight, Sparkles, ArrowRight, CheckCircle2, AlertCircle, Info, Award, Target,
} from 'lucide-react';
import {
  currentStudent, enrolledCourses, continueLearning, upcomingTests, notifications, getAccent,
} from '../data/mockData';
import AnimatedCounter from '../components/AnimatedCounter';

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900 rounded-3xl p-6 lg:p-10 text-white overflow-hidden"
      >
        <div className="absolute inset-0 mesh-cool opacity-60" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-saffron-500/25 rounded-full blur-3xl" />

        <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/15 border border-saffron-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-saffron-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-300">Rank #{currentStudent.rank} of {currentStudent.totalStudents}</span>
            </div>
            <h1 className="font-display text-3xl lg:text-5xl font-bold leading-[1.1]">
              Namaste, <span className="italic text-saffron-400 font-medium">{currentStudent.name.split(' ')[0]}</span> 🙏
            </h1>
            <p className="mt-4 text-white/65 text-base lg:text-lg max-w-xl">
              You're on a <strong className="text-saffron-300">{currentStudent.streak}-day</strong> streak. Keep going — every page you read brings you one step closer.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/learn" className="btn-primary text-sm !py-2.5">
                Continue Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/quiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white text-sm font-display font-semibold transition-all">
                <FileQuestion className="w-4 h-4" /> Today's Test
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              { icon: Flame, label: 'Day streak', value: currentStudent.streak, accent: 'text-orange-400' },
              { icon: Clock, label: 'Hours/week', value: currentStudent.weeklyHours, decimals: 1, accent: 'text-sky-400' },
              { icon: Trophy, label: 'Class rank', value: currentStudent.rank, accent: 'text-saffron-400' },
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm">
                <s.icon className={`w-4 h-4 ${s.accent} mb-2`} />
                <div className="text-2xl font-display font-bold text-white">
                  <AnimatedCounter value={s.value} decimals={s.decimals || 0} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/55 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BookMarked, label: 'Enrolled Courses', value: enrolledCourses.length, accent: 'saffron', sub: 'Active programmes' },
          { icon: PlayCircle, label: 'Lessons Completed', value: 193, accent: 'sage', sub: 'of 248 total' },
          { icon: Trophy, label: 'Avg. Test Score', value: 88, suffix: '%', accent: 'midnight', sub: 'Last 5 tests' },
          { icon: Target, label: 'Goals This Week', value: 4, suffix: '/5', accent: 'rose', sub: 'On track' },
        ].map((s, i) => {
          const acc = getAccent(s.accent);
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${acc.solid} flex items-center justify-center shadow-elev-1`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <ChevronRight className="w-4 h-4 text-ink-300" />
              </div>
              <div className="text-3xl font-display font-bold text-midnight-900">
                <AnimatedCounter value={s.value} suffix={s.suffix || ''} />
              </div>
              <div className="text-sm text-ink-700 font-medium mt-0.5">{s.label}</div>
              <div className="text-[11px] text-ink-400 mt-0.5">{s.sub}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Grid: Continue Learning + My Courses */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Continue learning */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-xl font-bold text-midnight-900">Continue Learning</h2>
              <p className="text-sm text-ink-500">Pick up exactly where you left off</p>
            </div>
            <Link to="/learn" className="text-xs font-display font-bold text-saffron-700 hover:gap-2 inline-flex items-center gap-1 transition-all">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            {continueLearning.map((c, i) => {
              const acc = getAccent(c.accent);
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="card p-4 flex items-center gap-4 group cursor-pointer"
                >
                  <Link to="/learn" className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-16 h-16 rounded-2xl ${acc.solid} flex items-center justify-center text-white flex-shrink-0 shadow-elev-2`}>
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-ink-400 font-bold">{c.course}</div>
                      <div className="font-display font-bold text-midnight-900 group-hover:text-saffron-700 transition-colors truncate">{c.title}</div>
                      <div className="text-xs text-ink-500 mt-0.5">by {c.instructor} · {c.duration}</div>
                      {/* Progress */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                          <div className={`h-full ${acc.solid} rounded-full transition-all`} style={{ width: `${c.progress}%` }} />
                        </div>
                        <span className="text-[11px] text-ink-500 font-bold w-9 text-right">{c.progress}%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-ink-300 group-hover:text-saffron-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* My Courses */}
          <div className="mt-8 flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-xl font-bold text-midnight-900">My Courses</h2>
              <p className="text-sm text-ink-500">{enrolledCourses.length} enrolled programmes</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {enrolledCourses.map((c, i) => {
              const acc = getAccent(c.accent);
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-5 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${acc.solid}`} />
                  <div className={`inline-block px-2 py-0.5 rounded-md ${acc.bg} ${acc.text} text-[10px] font-bold uppercase tracking-widest mb-2`}>
                    {c.completed}/{c.totalLessons} lessons
                  </div>
                  <h3 className="font-display font-bold text-midnight-900 leading-tight">{c.title}</h3>
                  <p className="text-xs text-ink-500 mt-1">by {c.instructor}</p>

                  <div className="mt-4 mb-2 flex items-center justify-between text-xs">
                    <span className="text-ink-500">Progress</span>
                    <span className="font-bold text-midnight-900">{c.progress}%</span>
                  </div>
                  <div className="h-2 bg-ink-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${c.progress}%` }} transition={{ duration: 1, delay: 0.3 }} className={`h-full ${acc.solid} rounded-full`} />
                  </div>

                  <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between gap-2">
                    <div className="text-[11px] text-ink-500 min-w-0">
                      <div className="font-bold text-midnight-900 truncate">{c.nextClass}</div>
                      <div className="truncate">{c.nextTopic}</div>
                    </div>
                    <Link to="/learn" className={`w-9 h-9 rounded-full ${acc.solid} text-white flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0`}>
                      <PlayCircle className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Upcoming Tests */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-bold text-midnight-900">Upcoming Tests</h2>
              <Link to="/quiz" className="text-xs font-display font-bold text-saffron-700">All</Link>
            </div>
            <div className="card divide-y divide-ink-100 overflow-hidden">
              {upcomingTests.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 hover:bg-ink-50/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-saffron-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-saffron-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">{t.type}</div>
                      <h4 className="font-display font-bold text-sm text-midnight-900 leading-tight truncate">{t.title}</h4>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-ink-500">
                        <span>{t.date}</span>
                        <span className="w-1 h-1 rounded-full bg-ink-300" />
                        <span>{t.duration}</span>
                        <span className="w-1 h-1 rounded-full bg-ink-300" />
                        <span className="font-bold text-midnight-900">{t.marks}m</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-bold text-midnight-900">Notifications</h2>
              <Bell className="w-4 h-4 text-ink-400" />
            </div>
            <div className="card overflow-hidden divide-y divide-ink-100">
              {notifications.map((n, i) => {
                const iconColor = { info: 'bg-sky-100 text-sky-700', success: 'bg-sage-100 text-sage-700', warning: 'bg-amber-100 text-amber-700' }[n.type];
                const Icon = { info: Info, success: CheckCircle2, warning: AlertCircle }[n.type];
                return (
                  <motion.div key={n.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }} className="p-3.5 hover:bg-ink-50/60 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl ${iconColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-midnight-900 truncate">{n.title}</div>
                        <div className="text-xs text-ink-500 truncate">{n.detail}</div>
                        <div className="text-[10px] text-ink-400 mt-1">{n.time}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
