// App.js
import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/nav';
import Blog from './Components/blog/blog';
import Footer from './Components/footer/footer';
import Slide from './Components/slide/slide';
import Menu from './Components/menu/menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      {/* <img src="./icons/backgroundgradientright1.png" alt="background" className='rightbackgroundwhite' /> */}
      <div className='container'>
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        {isMenuOpen && <Menu />}
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
