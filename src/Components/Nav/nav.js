import Burger from '../Burger/burger'
import Menu from '../menu/menu'
import { useState } from 'react';
import './nav.css'

function Nav({ toggleMenu, isMenuOpen }) {
  
  
  return (
    <nav>
      <Burger toggleMenu={toggleMenu} />
      {isMenuOpen}
      <h1>Logo</h1>

      <div>
        <ul>
          <li>About us</li>
          <li>Brands</li>
          <li>Commissions</li>
          <li>News</li>
          <li>Contact us</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className='user_profile'>
        <button className='d-flex align-center language'>
          <img src="../icons/langugages.svg" alt="planet" />
          EN
        </button>
        <button className='d-flex align-center justify-center languge_planet '>
          <img src="../icons/langugages.svg" alt="planet" />
        </button>
        <button>LOG IN</button>
        <button>SIGN UP</button>
        
      </div>
    </nav>
  )
}
export default Nav