// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import logo from './assets/logo.jpg'; // Adjust the path to your logo file

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <div className="text-white text-lg">My Website</div>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
