import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import CourseWork from './Components/CourseWork';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <CourseWork/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
