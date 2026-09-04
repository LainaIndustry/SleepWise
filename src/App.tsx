import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Calculators = lazy(() => import('./pages/Calculators'));
const SleepCycle = lazy(() => import('./pages/SleepCycle'));
const Bedtime = lazy(() => import('./pages/Bedtime'));
const WakeUp = lazy(() => import('./pages/WakeUp'));
const SleepDuration = lazy(() => import('./pages/SleepDuration'));
const SleepDebt = lazy(() => import('./pages/SleepDebt'));
const Nap = lazy(() => import('./pages/Nap'));
const JetLag = lazy(() => import('./pages/JetLag'));
const ShiftWork = lazy(() => import('./pages/ShiftWork'));
const SleepDiary = lazy(() => import('./pages/SleepDiary'));
const SleepConsistency = lazy(() => import('./pages/SleepConsistency'));
const SleepEducation = lazy(() => import('./pages/SleepEducation'));
const SleepFAQ = lazy(() => import('./pages/SleepFAQ'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const EditorialPolicy = lazy(() => import('./pages/EditorialPolicy'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/calculators/sleep-cycle" element={<SleepCycle />} />
            <Route path="/calculators/bedtime" element={<Bedtime />} />
            <Route path="/calculators/wake-up" element={<WakeUp />} />
            <Route path="/calculators/sleep-duration" element={<SleepDuration />} />
            <Route path="/calculators/sleep-debt" element={<SleepDebt />} />
            <Route path="/calculators/nap" element={<Nap />} />
            <Route path="/calculators/jet-lag" element={<JetLag />} />
            <Route path="/calculators/shift-work" element={<ShiftWork />} />
            <Route path="/tools/sleep-diary" element={<SleepDiary />} />
            <Route path="/tools/sleep-consistency" element={<SleepConsistency />} />
            <Route path="/education" element={<SleepEducation />} />
            <Route path="/faq" element={<SleepFAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
