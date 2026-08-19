import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OurWork from './pages/OurWork'; // Workplace ko OurWork se connect kiya
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white flex flex-col justify-between">
        <Navbar />
        
        {/* Main section wrapper layout flex grow karega */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workplace" element={<OurWork />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}