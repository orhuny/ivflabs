import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LocaleLayout from './components/LocaleLayout';
import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tr" replace />} />
        <Route path="/treatments" element={<Navigate to="/tr/treatments" replace />} />
        <Route path="/about" element={<Navigate to="/tr/about" replace />} />
        <Route path="/contact" element={<Navigate to="/tr/contact" replace />} />
        <Route path="/blog" element={<Navigate to="/tr/blog" replace />} />
        <Route path="/blog/:postId" element={<Navigate to="/tr/blog/:postId" replace />} />
        <Route path="/:lang" element={<LocaleLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/:lang/treatments" element={<LocaleLayout />}>
          <Route index element={<TreatmentsPage />} />
          <Route path=":slug" element={<TreatmentDetailPage />} />
        </Route>
        <Route path="/:lang/about" element={<LocaleLayout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/:lang/contact" element={<LocaleLayout />}>
          <Route index element={<ContactPage />} />
        </Route>
        <Route path="/:lang/blog" element={<LocaleLayout />}>
          <Route index element={<BlogPage />} />
        </Route>
        <Route path="/:lang/blog/:postId" element={<LocaleLayout />}>
          <Route index element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
