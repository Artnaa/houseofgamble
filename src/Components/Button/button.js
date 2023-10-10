import React, { useState } from 'react';
import './button.css';

function Button({ style, hoverStyle, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={isHovered ? { ...style, ...hoverStyle } : style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
}

export default Button;
