// import React from 'react';
// import './burger.css';

// function Burger({ toggleMenu }) {
//   return (
//     <div className="burger" onClick={toggleMenu}>
//       <div className="bar">
//         <div className="bar_icon">
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Burger;

import React, { useState } from 'react';
import './burger.css';

function Burger({toggleMenu}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    toggleMenu()

  };

  return (
    <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <div className='bar'>
        <div className='bar_icon'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Burger;

