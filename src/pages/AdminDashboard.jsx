import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Users, BookOpen, FileQuestion, ShieldCheck, IndianRupee, TrendingUp, TrendingDown,
  MoreVertical, ArrowUpRight, ArrowDownRight, Check, X, Trophy, Star, ChevronRight, Sparkles, Bell, Search,
  Calendar, Eye, Download, Plus, Smartphone, MapPin, Clock, Filter,
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import Logo from '../components/Logo';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  adminMetrics, adminRevenueData, adminCourseEnrolment, adminRecentStudents, deviceRequests, topPerformers,
  getAccent, avatarGradient, initials,
} from '../data/mockData';

const sidebarItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Students', icon: Users, count: 412 },
  { label: 'Courses', icon: BookOpen, count: 6 },
  { label: 'Tests & Quizzes', icon: FileQuestion },
  { label: 'Device Approvals', icon: ShieldCheck, count: 8, highlight: true },
  { label: 'Revenue', icon: IndianRupee },
  { label: 'Analytics', icon: TrendingUp },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-ink-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-midnight-950 text-white sticky top-0 h-screen">
        <div className="p-5 border-b border-white/10">
          <Link to="/"><Logo size="md" variant="light" /></Link>
          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-saffron-500/15 border border-saffron-500/30">
            <Sparkles className="w-2.5 h-2.5 text-saffron-300" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-saffron-300">Admin Console</span>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white/40">Management</div>
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                item.active ? 'bg-saffron-500 text-white shadow-elev-2' : 'text-white/65 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.count !== undefined && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  item.highlight ? 'bg-rose-500 text-white' :
                  item.active ? 'bg-white/20 text-white' : 'bg-white/10 text-white/65'
                }`}>{item.count}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-saffron-500 flex items-center justify-center text-white text-xs font-bold">MJ</div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">Mangesh Jadhav</div>
                <div className="text-[10px] text-white/55 truncate">Director · Admin</div>
              </div>
            </div>
          </div>
          <Link to="/" className="mt-3 block text-center text-[11px] text-white/45 hover:text-white transition-colors">Back to website →</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/85 backdrop-blur-xl border-b border-ink-100">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-ink-500">Welcome back, Mangesh sir</div>
              <div className="font-display font-bold text-midnight-900">Institute overview</div>
            </div>

            <div className="flex-1 max-w-md hidden md:block">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                <input type="text" placeholder="Search students, courses, tests..." className="w-full pl-10 pr-4 py-2 rounded-full bg-ink-50 border border-transparent focus:bg-white focus:border-saffron-300 focus:ring-4 focus:ring-saffron-100 outline-none text-sm transition-all" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden sm:inline-flex btn-secondary text-xs !py-2 !px-4">
                <Download className="w-3.5 h-3.5" /> Report
              </button>
              <button className="btn-primary text-xs !py-2 !px-4">
                <Plus className="w-3.5 h-3.5" /> Add Student
              </button>
              <button className="relative p-2.5 rounded-xl hover:bg-ink-100 transition-colors">
                <Bell className="w-5 h-5 text-ink-700" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              icon={IndianRupee}
              label="Total Revenue"
              value={adminMetrics.totalRevenue}
              prefix="₹"
              growth={adminMetrics.revenueGrowth}
              accent="saffron"
              sub="Lifetime earnings"
            />
            <MetricCard
              icon={TrendingUp}
              label="This Month"
              value={adminMetrics.monthlyRevenue}
              prefix="₹"
              growth={adminMetrics.revenueGrowth}
              accent="midnight"
              sub="February 2026"
            />
            <MetricCard
              icon={Users}
              label="Active Students"
              value={adminMetrics.activeStudents}
              growth={adminMetrics.studentGrowth}
              accent="sage"
              sub="All courses"
            />
            <MetricCard
              icon={Star}
              label="Avg. Rating"
              value={adminMetrics.averageRating}
              decimals={1}
              accent="rose"
              suffix="/5"
              sub="From 800+ reviews"
            />
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue chart */}
            <div className="lg:col-span-2 card p-6">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h3 className="font-display text-lg font-bold text-midnight-900">Revenue & Enrollment Trend</h3>
                  <p className="text-xs text-ink-500">Last 8 months · Monthly view</p>
                </div>
                <select className="px-3 py-1.5 rounded-full border border-ink-200 text-xs font-medium bg-white">
                  <option>Last 8 months</option>
                  <option>This year</option>
                </select>
              </div>

              <div className="h-72 mt-4 -mx-3">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={adminRevenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f5840f" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#f5840f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
                    <XAxis dataKey="month" stroke="#78716c" style={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#78716c" style={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                      formatter={(value, name) => name === 'revenue' ? [`₹${value.toLocaleString('en-IN')}`, 'Revenue'] : [value, 'New students']}
                      labelStyle={{ fontWeight: 700, color: '#1c1917' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#f5840f" strokeWidth={2.5} fill="url(#revGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Mini student trend */}
              <div className="flex items-end gap-1.5 mt-4 px-3">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold mb-1">New students per month</div>
                  <div className="flex items-end gap-1 h-12">
                    {adminRevenueData.map((d, i) => {
                      const max = Math.max(...adminRevenueData.map((x) => x.students));
                      const h = (d.students / max) * 100;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-midnight-900 rounded-t" style={{ height: `${h}%`, minHeight: 8 }} />
                          <div className="text-[9px] text-ink-400 font-medium">{d.students}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Course enrolment pie */}
            <div className="card p-6">
              <h3 className="font-display text-lg font-bold text-midnight-900">Course Distribution</h3>
              <p className="text-xs text-ink-500 mb-3">Students per programme</p>

              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={adminCourseEnrolment} dataKey="value" innerRadius={48} outerRadius={75} paddingAngle={3}>
                      {adminCourseEnrolment.map((entry, i) => (
                        <Cell key={i} fill={entry.accent} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e7e5e4', fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2 mt-2">
                {adminCourseEnrolment.map((c) => (
                  <div key={c.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: c.accent }} />
                      <span className="text-ink-700 truncate">{c.name}</span>
                    </div>
                    <span className="font-bold text-midnight-900 flex-shrink-0">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent students + Device approvals */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Recent enrolments */}
            <div className="lg:col-span-3 card overflow-hidden">
              <div className="p-5 border-b border-ink-100 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-midnight-900">Recent Enrolments</h3>
                  <p className="text-xs text-ink-500">Last 7 days</p>
                </div>
                <button className="text-xs font-display font-bold text-saffron-700 inline-flex items-center gap-1 hover:gap-2 transition-all">
                  View all <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="divide-y divide-ink-100 max-h-[420px] overflow-y-auto">
                {adminRecentStudents.map((s) => (
                  <div key={s.name + s.joined} className="px-5 py-3.5 flex items-center gap-3 hover:bg-ink-50/50 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${avatarGradient(s.name)} flex items-center justify-center text-white text-xs font-bold shadow-elev-1`}>{s.initial}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-midnight-900 truncate">{s.name}</div>
                      <div className="text-xs text-ink-500 truncate">{s.course}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-display font-bold text-midnight-900">₹{s.amount.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] text-ink-500">{s.joined}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      s.status === 'active' ? 'bg-sage-100 text-sage-700' : 'bg-amber-100 text-amber-700'
                    }`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device approval */}
            <div className="lg:col-span-2 card overflow-hidden">
              <div className="p-5 border-b border-ink-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-midnight-900">Device Approvals</h3>
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold">4 pending</span>
                    </div>
                    <p className="text-xs text-ink-500">Approve student device changes</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-sage-600" />
                </div>
              </div>

              <div className="p-3 space-y-2 max-h-[420px] overflow-y-auto">
                {deviceRequests.map((d) => (
                  <div key={d.student + d.requested} className="p-3 rounded-2xl border border-ink-100 hover:border-saffron-200 hover:bg-saffron-50/30 transition-colors">
                    <div className="flex items-start gap-2.5">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${avatarGradient(d.student)} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                        {initials(d.student)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-midnight-900 truncate">{d.student}</div>
                        <div className="text-[10px] text-ink-500 truncate">{d.course}</div>
                        <div className="flex items-center gap-2 mt-1 text-[10px] text-ink-500">
                          <Smartphone className="w-2.5 h-2.5 flex-shrink-0" />
                          <span className="truncate">{d.device}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-ink-500">
                          <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                          <span className="truncate">{d.city}</span>
                          <Clock className="w-2.5 h-2.5 ml-1 flex-shrink-0" />
                          <span className="truncate">{d.requested}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1.5">
                      <button className="flex-1 py-1.5 rounded-lg bg-sage-500 hover:bg-sage-600 text-white text-[10px] font-bold inline-flex items-center justify-center gap-1 transition-colors">
                        <Check className="w-3 h-3" /> Approve
                      </button>
                      <button className="flex-1 py-1.5 rounded-lg bg-ink-100 hover:bg-rose-100 hover:text-rose-700 text-ink-700 text-[10px] font-bold inline-flex items-center justify-center gap-1 transition-colors">
                        <X className="w-3 h-3" /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top performers + Course management */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Top performers */}
            <div className="lg:col-span-2 card overflow-hidden">
              <div className="p-5 border-b border-ink-100 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-midnight-900">Top Performers</h3>
                  <p className="text-xs text-ink-500">This batch (SSC 2026)</p>
                </div>
                <Trophy className="w-5 h-5 text-saffron-500" />
              </div>
              <div className="divide-y divide-ink-100">
                {topPerformers.map((p, i) => {
                  const acc = getAccent(p.accent);
                  return (
                    <div key={p.name} className="px-5 py-3 flex items-center gap-3 hover:bg-ink-50/50 transition-colors">
                      <div className={`w-8 h-8 rounded-lg ${i === 0 ? 'bg-gradient-to-br from-saffron-400 to-saffron-600' : 'bg-ink-100'} flex items-center justify-center font-display font-bold text-xs ${i === 0 ? 'text-white' : 'text-ink-700'}`}>
                        {i + 1}
                      </div>
                      <div className={`w-10 h-10 rounded-xl ${acc.solid} flex items-center justify-center text-white text-xs font-bold`}>{p.initial}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-midnight-900 truncate">{p.name}</div>
                        <div className="text-[10px] text-ink-500">{p.batch}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-saffron-700">{p.marks}/100</div>
                        <div className="text-[9px] text-ink-500 uppercase tracking-widest">English</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick action cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              <QuickActionCard
                icon={Plus}
                title="Create Course"
                description="Set up a new programme with chapters, videos, tests"
                accent="saffron"
              />
              <QuickActionCard
                icon={FileQuestion}
                title="Manage Tests"
                description="Build MCQs, schedule exams, view submissions"
                accent="midnight"
              />
              <QuickActionCard
                icon={Users}
                title="Bulk Upload"
                description="Import students from Excel · Assign batches"
                accent="sage"
              />
              <QuickActionCard
                icon={BookOpen}
                title="Content Library"
                description="Upload PDFs, videos, notes · 380+ hours stored"
                accent="rose"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ============= Components =============
function MetricCard({ icon: Icon, label, value, prefix = '', suffix = '', growth, accent, sub, decimals = 0 }) {
  const acc = getAccent(accent);
  const isUp = growth >= 0;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl ${acc.solid} flex items-center justify-center shadow-elev-2`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        {growth !== undefined && (
          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
            isUp ? 'bg-sage-100 text-sage-700' : 'bg-rose-100 text-rose-700'
          }`}>
            {isUp ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
            {Math.abs(growth)}%
          </div>
        )}
      </div>
      <div className="font-display text-2xl lg:text-3xl font-bold text-midnight-900">
        {prefix}
        <AnimatedCounter value={value} decimals={decimals} />
        {suffix}
      </div>
      <div className="text-sm text-ink-700 font-medium mt-0.5">{label}</div>
      <div className="text-[10px] text-ink-400 mt-0.5">{sub}</div>
    </motion.div>
  );
}

function QuickActionCard({ icon: Icon, title, description, accent }) {
  const acc = getAccent(accent);
  return (
    <motion.button
      whileHover={{ y: -4 }}
      className="card p-5 text-left group cursor-pointer w-full"
    >
      <div className={`w-12 h-12 rounded-2xl ${acc.solid} flex items-center justify-center shadow-elev-2 mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-display font-bold text-midnight-900">{title}</h3>
      <p className="text-xs text-ink-500 mt-1 leading-relaxed">{description}</p>
      <div className={`mt-3 inline-flex items-center gap-1 text-xs font-display font-bold ${acc.text} group-hover:gap-2 transition-all`}>
        Open <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.button>
  );
}
