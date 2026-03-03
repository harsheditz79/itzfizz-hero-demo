import React from 'react';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollProgress />
      <HeroSection />
    </div>
  );
}

export default App;