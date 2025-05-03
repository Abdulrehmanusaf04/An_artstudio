// 1. Import React and required components
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // If using routing
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css'; // Global styles

// 2. Main App component
function App() {
  return (
    // 3. Wrap with Router if using navigation
    <Router>
      <div className="app">
        {/* 4. Component hierarchy */}
        <Navbar />
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
