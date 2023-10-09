import './App.css';
import Nav from './Components/Nav/nav';
import Blog from './Components/blog/blog';
import Footer from './Components/footer/footer';
import Slide from './Components/slide/slide';
import Burger from './Components/Burger/burger';
import Menu from './Components/menu/menu';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <img src="./icons/backgroundgradientright1.png" alt="background" className='rightbackgroundwhite' />
      <div className='container'>
        <Nav />
        <Burger toggleMenu={toggleMenu} />
        {isMenuOpen && <Menu />}
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
