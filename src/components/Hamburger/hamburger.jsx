import React, { useState } from 'react';

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div
        className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isMenuOpen && (
        <div className="menu">
          <a href="/">O projektu</a>
          <a href="/mapa">Mapa</a>
          <a href="/johana">O nás</a>
          {/* <a href="/petra">Kdo je Peťa?</a> */}
        </div>
      )}
    </div>
  );
};
