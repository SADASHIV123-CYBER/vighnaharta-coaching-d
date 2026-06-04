import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Flag, Trophy, Target,
  RotateCw, BarChart2, Award, X, Sparkles, ArrowRight,
} from 'lucide-react';
import { sampleQuiz } from '../data/mockData';

export default function QuizInterface() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sampleQuiz.duration * 60);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setTimeLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const q = sampleQuiz.questions[current];
  const total = sampleQuiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([qNum, a]) => sampleQuiz.questions.find((q) => q.number === Number(qNum))?.correct === a).length;
  const scoreObtained = sampleQuiz.questions.reduce((acc, qu) => acc + (answers[qu.number] === qu.correct ? qu.marks : 0), 0);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  if (submitted) return <ResultScreen answers={answers} correctCount={correctCount} scoreObtained={scoreObtained} timeUsed={sampleQuiz.duration * 60 - timeLeft} onRetry={() => { setSubmitted(false); setAnswers({}); setMarked(new Set()); setCurrent(0); setTimeLeft(sampleQuiz.duration * 60); }} />;

  return (
    <div className="min-h-[calc(100vh-9rem)] grid lg:grid-cols-12 gap-6">
      {/* Main question area */}
      <div className="lg:col-span-9">
        {/* Quiz header */}
        <div className="card p-5 lg:p-6 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-saffron-700">{sampleQuiz.subject}</div>
              <h1 className="font-display text-xl lg:text-2xl font-bold text-midnight-900 mt-1">{sampleQuiz.title}</h1>
              <p className="text-xs text-ink-500 mt-1">by {sampleQuiz.instructor} · {total} questions · {sampleQuiz.totalMarks} marks</p>
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold ${
              timeLeft < 300 ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-midnight-900 text-white shadow-elev-2'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{mins}:{secs}</span>
            </div>
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="card p-6 lg:p-10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-midnight-900 text-saffron-400 flex items-center justify-center font-display font-bold">{q.number}</div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ink-500 font-bold">Question {current + 1} of {total}</div>
                  <div className="text-xs font-bold text-midnight-900">{q.marks} marks · MCQ</div>
                </div>
              </div>
              <button
                onClick={() => {
                  const newSet = new Set(marked);
                  marked.has(current) ? newSet.delete(current) : newSet.add(current);
                  setMarked(newSet);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors ${
                  marked.has(current) ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                }`}
              >
                <Flag className="w-3 h-3" /> {marked.has(current) ? 'Marked' : 'Mark for review'}
              </button>
            </div>

            <p className="font-display text-xl lg:text-2xl text-midnight-900 leading-relaxed">{q.question}</p>

            <div className="mt-8 space-y-3">
              {q.options.map((opt, i) => {
                const isSelected = answers[q.number] === i;
                return (
                  <motion.button
                    key={i}
                    whileHover={{ x: 4 }}
                    onClick={() => setAnswers({ ...answers, [q.number]: i })}
                    className={`w-full text-left p-4 lg:p-5 rounded-2xl border-2 transition-all ${
                      isSelected ? 'border-saffron-500 bg-saffron-50' : 'border-ink-100 bg-white hover:border-ink-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                        isSelected ? 'bg-saffron-500 text-white' : 'bg-ink-100 text-ink-600'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className={`text-base flex-1 ${isSelected ? 'text-midnight-900 font-medium' : 'text-ink-700'}`}>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-saffron-600 flex-shrink-0" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={() => setCurrent((p) => Math.max(0, p - 1))}
                disabled={current === 0}
                className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              {current === total - 1 ? (
                <button onClick={() => setSubmitted(true)} className="btn-primary">
                  Submit Test <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={() => setCurrent((p) => Math.min(total - 1, p + 1))} className="btn-dark">
                  Next Question <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side palette */}
      <aside className="lg:col-span-3">
        <div className="card p-5 lg:sticky lg:top-24">
          <h3 className="font-display font-bold text-midnight-900 mb-1">Question Palette</h3>
          <p className="text-xs text-ink-500 mb-4">Click to navigate</p>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mb-5 text-[10px]">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-sage-500" /> Answered</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-400" /> Marked</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-saffron-500" /> Current</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded border border-ink-300" /> Unseen</div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-5 gap-2">
            {[...Array(total)].map((_, i) => {
              const isAnswered = answers[i + 1] !== undefined;
              const isMarked = marked.has(i);
              const isCurrent = i === current;
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                    isCurrent ? 'bg-saffron-500 text-white shadow-elev-2 scale-110' :
                    isMarked ? 'bg-amber-400 text-amber-900' :
                    isAnswered ? 'bg-sage-500 text-white' :
                    'border border-ink-200 text-ink-700 hover:border-ink-400'
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-5 pt-5 border-t border-ink-100 space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-ink-500">Answered</span><span className="font-bold text-midnight-900">{answeredCount}/{total}</span></div>
            <div className="flex justify-between"><span className="text-ink-500">Marked</span><span className="font-bold text-midnight-900">{marked.size}</span></div>
            <div className="flex justify-between"><span className="text-ink-500">Remaining</span><span className="font-bold text-midnight-900">{total - answeredCount}</span></div>
          </div>

          <button onClick={() => setSubmitted(true)} className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-display font-bold transition-colors">
            Submit Test
          </button>
        </div>
      </aside>
    </div>
  );
}

// ============= RESULT SCREEN =============
function ResultScreen({ correctCount, scoreObtained, timeUsed, onRetry }) {
  const total = sampleQuiz.questions.length;
  const totalMarks = sampleQuiz.questions.reduce((s, q) => s + q.marks, 0);
  const percentage = Math.round((scoreObtained / totalMarks) * 100);
  const isPassed = percentage >= 50;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
      {/* Hero result */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden"
      >
        <div className="absolute inset-0 mesh-cool opacity-60" />
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-saffron-500/30 rounded-full blur-3xl" />

        <div className="relative text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center mx-auto shadow-elev-4 ring-8 ring-white/10">
              {isPassed ? <Trophy className="w-12 h-12 text-white" /> : <Target className="w-12 h-12 text-white" />}
            </div>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-500/15 border border-saffron-500/30">
            <Sparkles className="w-3.5 h-3.5 text-saffron-300" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-saffron-300">Test Complete</span>
          </div>

          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold leading-none">
            {percentage}<span className="text-saffron-400">%</span>
          </h1>
          <p className="mt-3 text-white/65 text-lg">
            {isPassed ? 'Well done!' : 'Good attempt — review and try again!'}<br />
            <span className="text-sm">You scored <strong className="text-white">{scoreObtained}</strong> out of <strong className="text-white">{totalMarks}</strong> marks</span>
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { label: 'Correct', value: correctCount, accent: 'text-sage-400' },
              { label: 'Wrong', value: total - correctCount, accent: 'text-rose-400' },
              { label: 'Accuracy', value: `${Math.round((correctCount / total) * 100)}%`, accent: 'text-saffron-400' },
              { label: 'Time Used', value: `${Math.round(timeUsed / 60)}m`, accent: 'text-sky-400' },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm">
                <div className={`text-2xl font-display font-bold ${s.accent}`}>{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/55 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={onRetry} className="btn-primary text-sm">
              <RotateCw className="w-4 h-4" /> Retake Test
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur text-white text-sm font-display font-bold transition-all">
              <BarChart2 className="w-4 h-4" /> Detailed Analysis
            </button>
          </div>
        </div>
      </motion.div>

      {/* Performance breakdown */}
      <div className="card p-6 lg:p-8 mt-6">
        <h2 className="font-display text-xl font-bold text-midnight-900">Question-wise breakdown</h2>
        <p className="text-sm text-ink-500 mb-5">Review each answer</p>

        <div className="space-y-3">
          {sampleQuiz.questions.map((q) => {
            const userAnswer = answers[q.number];
            const isCorrect = userAnswer === q.correct;
            const isAttempted = userAnswer !== undefined;
            return (
              <div key={q.number} className="p-4 rounded-2xl bg-ink-50 border border-ink-100">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    isCorrect ? 'bg-sage-500 text-white' : isAttempted ? 'bg-rose-500 text-white' : 'bg-ink-200 text-ink-600'
                  }`}>
                    {q.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-midnight-900 leading-relaxed">{q.question}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      <span className="text-ink-500">
                        Your answer: <strong className={isCorrect ? 'text-sage-700' : 'text-rose-700'}>{isAttempted ? q.options[userAnswer] : 'Not attempted'}</strong>
                      </span>
                      {!isCorrect && (
                        <span className="text-ink-500">
                          Correct: <strong className="text-sage-700">{q.options[q.correct]}</strong>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`text-xs font-bold flex-shrink-0 ${isCorrect ? 'text-sage-700' : isAttempted ? 'text-rose-700' : 'text-ink-400'}`}>
                    {isCorrect ? `+${q.marks}` : '0'}/{q.marks}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
