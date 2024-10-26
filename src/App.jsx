import React from 'react';
import { About, Experience, Navbar, Profile, Projects } from './components/index.js';
import './index.css'; // or wherever Tailwind is configured


function App() {
  return (
    <div className="App">
      <div className='h-screen'>
        <Navbar />
        <Profile />
      </div>
      <Experience />
      <Projects />
      <About />
    </div>
  );
}

export default App;
