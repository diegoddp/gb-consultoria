import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import SobrePage from '@/pages/SobrePage';
import ServicosPage from '@/pages/ServicosPage';
import ContatoPage from '@/pages/ContatoPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';
import { LOCAL_BUSINESS_JSONLD } from '@/lib/seo';

// O roteador fica fora do App: BrowserRouter no navegador (main.jsx) e
// StaticRouter na pré-renderização (entry-server.jsx).
function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_JSONLD)}</script>
      </Helmet>
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
    </>
  );
}

export default App;
