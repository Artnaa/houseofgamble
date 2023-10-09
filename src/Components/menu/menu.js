import React from 'react';
import Button from '../Button/button';
import './menu.css'

function Menu() {
  const bluebuttonStyle = {
    borderRadius: '24px',
    background: 'var(--main-blue-478-bf-9, #478BF9)',

  };
  return (
    <div className="menu">
      <div className="menu_list">
        <button >About us</button>
        <button>Brands</button>
        <button>Commissions</button>
        <button>News</button>
        <button>Contact us</button>
        <button>Careers</button>
      </div>
      <div className="menu_register">
        <button>Log in</button>
        <Button style={bluebuttonStyle}
          text="Sign up" />
      </div>
    </div>
  );
}

export default Menu;
