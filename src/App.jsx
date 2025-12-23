import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
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
    <Router>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen flex flex-col ${showPreloader ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




