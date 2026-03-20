import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;