import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Programs from './pages/Programs';
import Publications from './pages/Publications';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import ArticleDetail from './pages/ArticleDetail';
import ProgramDetail from './pages/ProgramDetail';
import EventDetail from './pages/EventDetail';
import EventRegistration from './pages/EventRegistration';

function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<ArticleDetail />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:id" element={<ProgramDetail />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/events/:id/register" element={<EventRegistration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </Router>
      </NotificationProvider>
    </LanguageProvider>
  );
}

export default App;