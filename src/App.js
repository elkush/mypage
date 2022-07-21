import React from 'react';
import Navbar from './components/Navbar';
import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <Projects />
      <Footer />
    </div>
  

  );
}

export default App;
