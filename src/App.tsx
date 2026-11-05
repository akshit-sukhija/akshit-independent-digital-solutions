/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProcessPage } from './pages/ProcessPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';
import { EnquirePage } from './pages/EnquirePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#11100E] text-[#F2EBDD]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C9A24B] focus:text-[#11100E] focus:rounded font-mono text-xs"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/enquire" element={<EnquirePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
