import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, BookOpen, Trophy, FlaskConical, MessageCircle, Sparkles, Target, X, Check,
  Star, Users, Clock, CheckCircle2, Calendar, FileText, Award, ArrowRight, Phone,
  ChevronRight, Tag, Heart, Filter,
} from 'lucide-react';
import { courses, getAccent } from '../data/mockData';

const iconMap = { BookOpen, Trophy, FlaskConical, MessageCircle, Sparkles, Target };
const tracks = ['All Courses', 'Foundation', 'School', 'Higher Secondary', 'Skill', 'Special', 'Competitive'];
const sortOptions = ['Most enrolled', 'Top rated', 'Price: low to high', 'Price: high to low'];

export default function CoursesPage() {
  const [query, setQuery] = useState('');
  const [track, setTrack] = useState('All Courses');
  const [sortBy, setSortBy] = useState('Most enrolled');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = useMemo(() => {
    let r = courses.filter((c) => {
      const matchQ = c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase());
      const matchT = track === 'All Courses' || c.track === track;
      return matchQ && matchT;
    });
    if (sortBy === 'Top rated') r.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'Price: low to high') r.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: high to low') r.sort((a, b) => b.price - a.price);
    else r.sort((a, b) => b.students - a.students);
    return r;
  }, [query, track, sortBy]);

  return (
    <div className="bg-ink-50 min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-warm" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow mb-5 mx-auto">All Programmes</div>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-midnight-900 leading-[1.05]">
            Find the perfect course for<br />
            <span className="italic text-saffron-700 font-medium">your journey.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-500 max-w-2xl mx-auto">
            6 carefully designed programmes · Bilingual delivery · Personal mentor for every student
          </p>

          {/* Search */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, subjects, skills..."
                className="w-full pl-14 pr-5 py-5 rounded-2xl bg-white border border-ink-200 shadow-elev-2 focus:border-saffron-400 focus:ring-4 focus:ring-saffron-100 outline-none text-base font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-6 bg-white border-y border-ink-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
            <div className="flex flex-wrap gap-2 -mx-1 overflow-x-auto pb-1">
              {tracks.map((t) => (
                <button
                  key={t}
                  onClick={() => setTrack(t)}
                  className={`px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    track === t ? 'bg-midnight-900 text-white shadow-elev-2' : 'bg-ink-50 text-ink-700 hover:bg-ink-100 border border-ink-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-ink-500 hidden sm:block">Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 rounded-full border border-ink-200 bg-white text-xs font-medium focus:border-saffron-400 outline-none cursor-pointer">
                {sortOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-ink-500">
              <strong className="text-midnight-900">{filtered.length}</strong> {filtered.length === 1 ? 'course' : 'courses'} found
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filtered.map((c, i) => {
                  const Icon = iconMap[c.icon] || BookOpen;
                  const acc = getAccent(c.accent);
                  return (
                    <motion.div
                      key={c.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      onClick={() => setSelectedCourse(c)}
                      whileHover={{ y: -6 }}
                      className="card cursor-pointer overflow-hidden group"
                    >
                      {/* Header banner */}
                      <div className={`relative h-40 ${acc.solid} p-6 overflow-hidden`}>
                        <div className="absolute inset-0 bg-grid-dark opacity-30" />
                        <Icon className="absolute -bottom-4 -right-4 w-40 h-40 text-white/15" strokeWidth={1} />

                        <div className="relative flex items-start justify-between">
                          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest">
                            {c.track}
                          </div>
                          <button className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <Heart className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>

                        <div className="absolute bottom-4 left-6 right-6 text-white">
                          {c.badge && <div className="text-[10px] font-bold uppercase tracking-widest text-white/85 mb-1">{c.badge}</div>}
                          <h3 className="font-display text-xl font-bold leading-tight line-clamp-2">{c.title}</h3>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-xs text-ink-400 italic mb-3">{c.titleMarathi}</p>
                        <p className="text-sm text-ink-500 line-clamp-3 mb-4">{c.description}</p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {c.subjects.slice(0, 3).map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded-md bg-ink-100 text-ink-700 text-[10px] font-medium">{s}</span>
                          ))}
                          {c.subjects.length > 3 && <span className="px-2 py-0.5 rounded-md bg-ink-100 text-ink-700 text-[10px] font-medium">+{c.subjects.length - 3}</span>}
                        </div>

                        <div className="flex items-center justify-between text-xs text-ink-500 pb-4 border-b border-ink-100">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-saffron-500 text-saffron-500" />
                              <span className="font-bold text-midnight-900">{c.rating}</span>
                            </div>
                            <div className="flex items-center gap-1"><Users className="w-3 h-3" /> {c.students}</div>
                            <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {c.duration}</div>
                          </div>
                        </div>

                        <div className="flex items-end justify-between pt-4">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-display text-xl font-bold text-midnight-900">₹{c.price.toLocaleString('en-IN')}</span>
                              <span className="text-xs text-ink-400 line-through">₹{c.originalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="text-[10px] font-bold text-sage-600 mt-0.5">
                              Save ₹{(c.originalPrice - c.price).toLocaleString('en-IN')}
                            </div>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); setSelectedCourse(c); }} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-midnight-900 hover:bg-saffron-600 text-white text-xs font-display font-bold transition-colors">
                            Details <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-ink-100">
              <div className="w-16 h-16 rounded-full bg-ink-100 mx-auto flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-ink-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-midnight-900">No courses found</h3>
              <p className="text-sm text-ink-500 mt-1">Try a different search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Course detail modal */}
      <AnimatePresence>
        {selectedCourse && <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
      </AnimatePresence>
    </div>
  );
}

// ============= Course Detail Modal =============
function CourseDetailModal({ course, onClose }) {
  const Icon = iconMap[course.icon] || BookOpen;
  const acc = getAccent(course.accent);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div className="absolute inset-0 bg-midnight-950/70 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.96 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="relative w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-elev-4 max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className={`relative ${acc.solid} text-white p-8 lg:p-10 sm:rounded-t-3xl overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <Icon className="absolute -bottom-8 -right-8 w-56 h-56 text-white/10" strokeWidth={1} />

          <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-colors z-10">
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest mb-4">
              {course.track}
            </div>
            <h2 className="font-display text-2xl lg:text-4xl font-bold leading-tight">{course.title}</h2>
            <p className="text-white/85 mt-1 text-sm italic">{course.titleMarathi}</p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs">
              <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white" /> <span className="font-bold">{course.rating}</span> rating</div>
              <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {course.students} enrolled</div>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</div>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {course.classesPerWeek} classes/week</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 lg:p-10">
          <p className="text-base lg:text-lg text-ink-600 leading-relaxed">{course.description}</p>

          {/* Highlights */}
          <div className="mt-8">
            <h3 className="font-display text-base font-bold text-midnight-900 mb-4">What you'll get</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 p-3 rounded-2xl bg-ink-50">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-ink-700">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-8">
            <h3 className="font-display text-base font-bold text-midnight-900 mb-3">Subjects covered</h3>
            <div className="flex flex-wrap gap-2">
              {course.subjects.map((s) => (
                <span key={s} className={`px-3 py-1.5 rounded-full ${acc.bg} ${acc.text} text-sm font-medium border ${acc.border}`}>{s}</span>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-ink-50">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">Medium</div>
              <div className="text-sm font-display font-bold text-midnight-900 mt-1">{course.medium}</div>
            </div>
            <div className="p-4 rounded-2xl bg-ink-50">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">Study Material</div>
              <div className="text-sm font-display font-bold text-midnight-900 mt-1">{course.studyMaterial ? 'Included' : 'Optional'}</div>
            </div>
            <div className="p-4 rounded-2xl bg-ink-50">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">Tests</div>
              <div className="text-sm font-display font-bold text-midnight-900 mt-1">Weekly</div>
            </div>
            <div className="p-4 rounded-2xl bg-ink-50">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">PTM</div>
              <div className="text-sm font-display font-bold text-midnight-900 mt-1">{course.parentTeacherMeet}</div>
            </div>
          </div>

          {/* Pricing + CTA */}
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-saffron-50 to-amber-50 border border-saffron-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-saffron-700 font-bold mb-1">Course fee</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-midnight-900">₹{course.price.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-ink-400 line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-xs text-sage-700 font-bold mt-1">You save ₹{(course.originalPrice - course.price).toLocaleString('en-IN')}</div>
                <div className="text-xs text-ink-500 mt-1">EMI options available · Sibling discount 10%</div>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <Link to="/login" className="btn-primary justify-center w-full sm:w-auto">
                  Enroll now <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:9763291819" className="btn-secondary justify-center w-full sm:w-auto">
                  <Phone className="w-4 h-4" /> Talk to us
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
