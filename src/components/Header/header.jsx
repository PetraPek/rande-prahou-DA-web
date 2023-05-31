import React from 'react';
import { Link } from 'react-router-dom';
// import { Home } from '../Home/home';
// import { Johana } from '../Johana/johana';
// import { Petra } from '../Petra/petra';

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1 className="title__main">Rande Prahou</h1>
      </div>

      {/* <div className="hamburger">
        <div className="hamburger__line">
          <a href="index.html"></a>
        </div>
        <div className="hamburger__line">
          <a href="johana.html"></a>
        </div>
        <div className="hamburger__line">
          <a href="petra.html"></a>
        </div>
      </div> */}

      <nav className="menu">
        <a href="/">O projektu</a>
        <a href="/johana">Kdo je Johanka?</a>
        <a href="/petra">Kdo je Peťa?</a>
      </nav>
      {/* <nav className="menu">
        <Link to="/">O projektu</Link>
        <Link to="/johana">Kdo je Johanka?</Link>
        <Link to="/petra">Kdo je Peťa?</Link>
      </nav> */}
    </header>
  );
};
