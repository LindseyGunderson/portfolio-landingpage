import Nav from './components/nav/Nav';

import Intro from './components/intro/Intro';

import Works from './components/works/Works';

import Portfolio from './components/portfolio/Portfolio';

import Contact from './components/contact/Contact';

import Sidebar from './components/sidebar/Sidebar';

import './app.scss';

import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="app">
    <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

    <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
    
      <div className="sections">

        <Intro />

        <Works />

        <Portfolio />

        <Contact />

       

      </div>

    </div>
  );
}

export default App;
