import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Preloader from './components/Preloader';


function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen flex flex-col ${showPreloader ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Stats />
          <Gallery />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;




