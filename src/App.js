// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import About from './components/about';
import Projects from './components/projects';
import ContactForm from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Hero/>
     <Skills/>
     <About/>
     <Projects/>
     <ContactForm/>
    </div>
  );
}

export default App;
