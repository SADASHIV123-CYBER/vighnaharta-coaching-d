import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Lazy load pages for code splitting / performance
const Home = lazy(() => import('./pages/Home'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const Login = lazy(() => import('./pages/Login'));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));
const CourseLearning = lazy(() => import('./pages/CourseLearning'));
const QuizInterface = lazy(() => import('./pages/QuizInterface'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-midnight-900 to-midnight-800 shadow-elev-3 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7">
              <path d="M8 6 L16 28 L24 6 L20 6 L16 18 L12 6 Z" fill="#f5840f" />
              <circle cx="16" cy="3" r="1.4" fill="#f5840f" />
            </svg>
          </div>
          <div className="absolute -inset-2 rounded-3xl border-2 border-saffron-500/30 border-t-saffron-500 animate-spin" />
        </div>
        <div className="mt-4 text-sm font-display font-bold text-midnight-900">Vighnaharta</div>
        <div className="text-xs text-ink-500 mt-0.5">Loading your gurukul...</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Route>

        {/* Standalone login */}
        <Route path="/login" element={<Login />} />

        {/* Student LMS */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/learn" element={<CourseLearning />} />
          <Route path="/quiz" element={<QuizInterface />} />
        </Route>

        {/* Admin (full-screen layout) */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}
