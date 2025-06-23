import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-space-grotesk">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;