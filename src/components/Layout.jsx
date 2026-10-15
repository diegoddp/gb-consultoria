import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import BackToTop from '@/components/BackToTop';
import { WHATSAPP_URL } from '@/lib/contact';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      {/* Link de pular para o conteúdo: aparece só ao navegar por teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-green focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <Footer />

      <BackToTop />

      {/* Botão flutuante de WhatsApp, visível em todas as páginas e tamanhos de tela */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
};

export default Layout;
