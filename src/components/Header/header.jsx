import React from 'react';
import { Link } from 'react-router-dom';
// import { Home } from '../Home/home';
// import { Johana } from '../Johana/johana';
// import { Petra } from '../Petra/petra';
import { HamburgerMenu } from '../Hamburger/hamburger';

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <a href="/">
          <h1 className="title__main">Rande Prahou</h1>
        </a>
      </div>
      <HamburgerMenu />
      <nav className="rowMenu">
        <a className="rowMenu__elm" href="/">
          O projektu
        </a>
        <a className="rowMenu__elm" href="/mapa">
          Mapa
        </a>
        <a className="rowMenu__elm" href="/johana">
          Kdo je Johanka?
        </a>
        <a className="rowMenu__elm" href="/petra">
          Kdo je Peťa?
        </a>
      </nav>
    </header>
  );
};
