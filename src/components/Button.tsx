import React, { useState } from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  icon?: string | React.ReactNode;
  hoverIcon?: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  iconWidth?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, hoverIcon, onClick, className, disabled = false, iconWidth }) => {
  const [currentIcon, setCurrentIcon] = useState(icon);

  const handleMouseEnter = () => {
    if (hoverIcon) {
      setCurrentIcon(hoverIcon);
    }
  };

  const handleMouseLeave = () => {
    setCurrentIcon(icon);
  };

  return (
    <button
      onClick={onClick}
      className={`${className} button`}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {typeof currentIcon === 'string' ? (
        <img src={currentIcon} alt="icon" className={`${iconWidth} w-4 h-4 bg-transparent`} />
      ) : (
        currentIcon && <span>{currentIcon}</span>
      )}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
