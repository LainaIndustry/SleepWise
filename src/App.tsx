import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ui/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';

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

// Education pages
const EducationIndex = lazy(() => import('./pages/Education/Index'));
const SleepCycles = lazy(() => import('./pages/Education/SleepCycles'));
const SleepHygiene = lazy(() => import('./pages/Education/SleepHygiene'));
const SleepSchedule = lazy(() => import('./pages/Education/SleepSchedule'));
const CaffeineSleep = lazy(() => import('./pages/Education/CaffeineSleep'));
const SleepMyths = lazy(() => import('./pages/Education/SleepMyths'));
const ScreenTime = lazy(() => import('./pages/Education/ScreenTime'));
const ExerciseSleep = lazy(() => import('./pages/Education/ExerciseSleep'));
const TravelSleep = lazy(() => import('./pages/Education/TravelSleep'));
const ShiftWorkEducation = lazy(() => import('./pages/Education/ShiftWork'));
const ChildrenSleep = lazy(() => import('./pages/Education/ChildrenSleep'));
const TeenSleep = lazy(() => import('./pages/Education/TeenSleep'));
const AdultSleep = lazy(() => import('./pages/Education/AdultSleep'));
const Napping = lazy(() => import('./pages/Education/Napping'));
const JetLagEducation = lazy(() => import('./pages/Education/JetLag'));

// Tools pages
const SleepScheduleTool = lazy(() => import('./pages/Tools/SleepSchedule'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <LoadingSpinner size="lg" />
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
              <Route path="/tools/sleep-schedule" element={<SleepScheduleTool />} />
              <Route path="/education" element={<EducationIndex />} />
              <Route path="/education/sleep-cycles" element={<SleepCycles />} />
              <Route path="/education/sleep-hygiene" element={<SleepHygiene />} />
              <Route path="/education/sleep-schedule" element={<SleepSchedule />} />
              <Route path="/education/caffeine-sleep" element={<CaffeineSleep />} />
              <Route path="/education/sleep-myths" element={<SleepMyths />} />
              <Route path="/education/screen-time" element={<ScreenTime />} />
              <Route path="/education/exercise-sleep" element={<ExerciseSleep />} />
              <Route path="/education/travel-sleep" element={<TravelSleep />} />
              <Route path="/education/shift-work" element={<ShiftWorkEducation />} />
              <Route path="/education/children-sleep" element={<ChildrenSleep />} />
              <Route path="/education/teen-sleep" element={<TeenSleep />} />
              <Route path="/education/adult-sleep" element={<AdultSleep />} />
              <Route path="/education/napping" element={<Napping />} />
              <Route path="/education/jet-lag" element={<JetLagEducation />} />
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
    </ErrorBoundary>
  );
}

export default App;
