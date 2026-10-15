import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import SobrePage from '@/pages/SobrePage';
import ServicosPage from '@/pages/ServicosPage';
import ContatoPage from '@/pages/ContatoPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <BrowserRouter>
      {/* reducedMotion="user" respeita a preferência do sistema por menos animação */}
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
