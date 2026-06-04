import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Pause, Volume2, Maximize2, Settings, ChevronLeft, ChevronRight, CheckCircle2,
  Lock, PlayCircle, BookOpen, FileText, MessageSquare, Download, Share2, ThumbsUp,
  PenLine, Clock, Award, Bookmark, MoreVertical, Sparkles, Save,
} from 'lucide-react';
import { sampleCourseContent, currentStudent } from '../data/mockData';

export default function CourseLearning() {
  const [activeTab, setActiveTab] = useState('notes');
  const [playing, setPlaying] = useState(false);
  const c = sampleCourseContent;

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* MAIN — Video + Tabs */}
      <div className="lg:col-span-8 space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-500">
          <span>{c.courseTitle}</span>
          <ChevronRight className="w-3 h-3" />
          <span>{c.currentChapter}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-midnight-900 font-bold truncate">{c.currentLesson}</span>
        </div>

        {/* Video player */}
        <div className="card overflow-hidden">
          <div className="relative aspect-video bg-midnight-950 group">
            {/* Premium "thumbnail" */}
            <div className="absolute inset-0 mesh-cool opacity-70" />
            <div className="absolute inset-0 bg-grid-dark opacity-30" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Title overlay */}
            <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 backdrop-blur-sm border border-saffron-400/30 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-200">Live · 28 watching</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">{c.currentLesson}</h2>
                <p className="text-white/65 text-sm mt-1">{c.currentChapter}</p>
              </div>
            </div>

            {/* Center play */}
            <button onClick={() => setPlaying((p) => !p)} className="absolute inset-0 flex items-center justify-center group/play">
              <span className="absolute w-24 h-24 rounded-full bg-saffron-500/30 animate-pulse-ring" />
              <span className="w-20 h-20 rounded-full bg-saffron-500 backdrop-blur shadow-glow-saffron flex items-center justify-center group-hover/play:scale-110 transition-transform">
                {playing ? <Pause className="w-8 h-8 text-white fill-white" /> : <Play className="w-8 h-8 text-white fill-white ml-1" />}
              </span>
            </button>

            {/* Controls bar */}
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 to-transparent">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-white/85 font-mono">{c.currentTime}</span>
                <div className="flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-500 rounded-full" style={{ width: `${c.progress}%` }} />
                </div>
                <span className="text-xs text-white/85 font-mono">{c.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setPlaying((p) => !p)} className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur flex items-center justify-center text-white transition-colors">
                  {playing ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>
                <button className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur flex items-center justify-center text-white transition-colors">
                  <Volume2 className="w-4 h-4" />
                </button>
                <div className="text-white/85 text-xs">1x speed</div>
                <div className="ml-auto flex items-center gap-2">
                  <button className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur flex items-center justify-center text-white transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur flex items-center justify-center text-white transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson info */}
        <div className="card p-5 lg:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-saffron-700">Lesson 1 of 4</div>
              <h1 className="font-display text-xl lg:text-2xl font-bold text-midnight-900 mt-1">{c.currentLesson}</h1>
              <p className="text-sm text-ink-500 mt-1">Prof. Mangesh Jadhav · 24 min · Recorded today, 7:00 AM</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center transition-colors" title="Bookmark">
                <Bookmark className="w-4 h-4 text-ink-700" />
              </button>
              <button className="w-10 h-10 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center transition-colors" title="Helpful">
                <ThumbsUp className="w-4 h-4 text-ink-700" />
              </button>
              <button className="w-10 h-10 rounded-full bg-ink-50 hover:bg-ink-100 flex items-center justify-center transition-colors" title="Share">
                <Share2 className="w-4 h-4 text-ink-700" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-ink-100 -mx-5 lg:-mx-6 px-5 lg:px-6">
            <div className="flex gap-6">
              {[
                { id: 'notes', label: 'My Notes', icon: PenLine },
                { id: 'resources', label: 'Resources', icon: FileText },
                { id: 'discussion', label: 'Discussion', icon: MessageSquare },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative px-1 py-3 text-sm font-display font-bold transition-colors ${
                    activeTab === t.id ? 'text-saffron-700' : 'text-ink-500 hover:text-midnight-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <t.icon className="w-4 h-4" /> {t.label}
                  </div>
                  {activeTab === t.id && <motion.div layoutId="tabline" className="absolute bottom-0 inset-x-0 h-0.5 bg-saffron-500" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tab body */}
          <div className="pt-5">
            <AnimatePresence mode="wait">
              {activeTab === 'notes' && (
                <motion.div key="notes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="space-y-3">
                    {c.notes.map((n, i) => (
                      <div key={i} className="group p-4 rounded-2xl bg-amber-50/60 border border-amber-100 hover:bg-amber-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-7 rounded-md bg-amber-200 text-amber-800 text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                            {n.time}
                          </div>
                          <p className="text-sm text-midnight-900 leading-relaxed flex-1">{n.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-ink-50 border border-ink-100">
                    <textarea
                      placeholder="Write a note at current timestamp..."
                      rows={2}
                      className="w-full bg-transparent text-sm placeholder:text-ink-400 outline-none resize-none"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-ink-500">Timestamp: <span className="font-bold text-midnight-900">{c.currentTime}</span> will be added</span>
                      <button className="px-4 py-1.5 rounded-full bg-midnight-900 hover:bg-saffron-600 text-white text-xs font-display font-bold flex items-center gap-1.5 transition-colors">
                        <Save className="w-3 h-3" /> Save note
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'resources' && (
                <motion.div key="resources" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {c.resources.map((r, i) => {
                      const colors = { PDF: 'bg-rose-100 text-rose-700', DOC: 'bg-sky-100 text-sky-700', MP3: 'bg-purple-100 text-purple-700' };
                      return (
                        <div key={i} className="p-4 rounded-2xl bg-ink-50 hover:bg-ink-100 transition-colors flex items-center gap-3 group cursor-pointer">
                          <div className={`w-12 h-12 rounded-xl ${colors[r.type] || 'bg-ink-200 text-ink-700'} flex items-center justify-center font-bold text-[10px]`}>{r.type}</div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-display font-bold text-midnight-900 truncate">{r.title}</div>
                            <div className="text-xs text-ink-500">{r.size}</div>
                          </div>
                          <Download className="w-4 h-4 text-ink-400 group-hover:text-saffron-700 transition-colors" />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === 'discussion' && (
                <motion.div key="discussion" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center py-10">
                  <MessageSquare className="w-12 h-12 text-ink-300 mx-auto mb-3" />
                  <p className="text-midnight-900 font-display font-bold">Doubt session opens Saturday</p>
                  <p className="text-sm text-ink-500 mt-1">Mangesh sir will answer your questions live · 4:00 PM</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SIDEBAR — Chapter roadmap */}
      <aside className="lg:col-span-4">
        <div className="card overflow-hidden lg:sticky lg:top-24">
          <div className="p-5 border-b border-ink-100">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display font-bold text-midnight-900">Course Roadmap</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-700">{c.progress}% Done</span>
            </div>
            <p className="text-xs text-ink-500">{c.courseTitle}</p>

            <div className="mt-3 h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-saffron-400 to-saffron-500 rounded-full" style={{ width: `${c.progress}%` }} />
            </div>
          </div>

          <div className="max-h-[600px] overflow-y-auto">
            {c.chapters.map((ch, i) => {
              const isActive = ch.active;
              const isLocked = ch.locked;
              const isDone = ch.done === ch.total && !isActive && !isLocked;
              return (
                <div key={ch.title} className="border-b border-ink-100 last:border-0">
                  {/* Chapter header */}
                  <div className={`p-4 ${isActive ? 'bg-saffron-50/60' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isDone ? 'bg-sage-100 text-sage-700' :
                        isActive ? 'bg-saffron-500 text-white shadow-elev-2' :
                        isLocked ? 'bg-ink-100 text-ink-400' :
                        'bg-ink-100 text-ink-700'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> :
                         isLocked ? <Lock className="w-4 h-4" /> :
                         <span className="text-xs font-bold">{i + 1}</span>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-display font-bold text-sm leading-tight ${isLocked ? 'text-ink-400' : 'text-midnight-900'}`}>{ch.title}</h4>
                        <div className="flex items-center gap-2 mt-1 text-[10px] text-ink-500">
                          <span>{ch.total} lessons</span>
                          {!isLocked && <><span className="w-1 h-1 rounded-full bg-ink-300" /><span className="font-bold">{ch.done}/{ch.total} done</span></>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lessons */}
                  {(isActive || isDone) && ch.lessons.length > 0 && (
                    <div className="bg-ink-50/30 px-4 pb-3">
                      {ch.lessons.map((l, j) => (
                        <button
                          key={j}
                          className={`w-full flex items-center gap-3 py-2.5 px-3 -mx-1 rounded-xl text-left transition-colors ${
                            l.current ? 'bg-white shadow-elev-1' : 'hover:bg-white/60'
                          }`}
                        >
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {l.completed ? <CheckCircle2 className="w-4 h-4 text-sage-600" /> :
                             l.current ? <PlayCircle className="w-4 h-4 text-saffron-600" /> :
                             <div className="w-3 h-3 rounded-full border-2 border-ink-300" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs font-medium truncate ${l.current ? 'text-saffron-800' : 'text-ink-700'}`}>{l.title}</div>
                          </div>
                          <span className="text-[10px] text-ink-400 font-mono flex-shrink-0">{l.duration}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 border-t border-ink-100 bg-ink-50/50">
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-midnight-900 hover:bg-saffron-600 text-white text-xs font-display font-bold transition-colors">
              Next Lesson <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
