import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleTransitionEnd = () => {
    setShowMainContent(true);
  };

  return (
    <div className="App">
      {!showMainContent && <LandingPage onTransitionEnd={handleTransitionEnd} />}
      {showMainContent && (
        <>
          <Header />
          <main>
            <About />
            <Projects />
            <Resume />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
