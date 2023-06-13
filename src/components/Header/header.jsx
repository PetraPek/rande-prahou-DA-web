import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Home } from '../Home/home';
// import { Johana } from '../Johana/johana';
// import { Petra } from '../Petra/petra';
import { HamburgerMenu } from '../Hamburger/hamburger';

export const Header = () => {
  const [openMenuItem, setOpenMenuItem] = useState(null);
  const handleClick = (openItem) => {
    console.log('klik');
    setOpenMenuItem(openItem);
  };
  return (
    <header className="header">
      <div className="title">
        <a href="/">
          <h1 className="title__main">Rande Prahou</h1>
        </a>
      </div>
      <HamburgerMenu />
      <nav className="rowMenu">
        <a
          className={'rowMenu__elm ' + (openMenuItem === '' ? 'active' : '')}
          href="/"
          onClick={() => handleClick('')}
        >
          O projektu
        </a>
        <a
          className={
            'rowMenu__elm ' + (openMenuItem === 'mapa' ? 'active' : '')
          }
          href="/mapa"
          onClick={() => handleClick('mapa')}
        >
          Mapa
        </a>

        <a
          className={
            'rowMenu__elm ' + (openMenuItem === 'johana' ? 'active' : '')
          }
          href="/johana"
          onClick={() => handleClick('johana')}
        >
          O nás
        </a>
        {/* <a
          className={'rowMenu__elm ' + (openMenuItem === '' ? 'active' : '')}
          href="/petra"
          onClick={() => handleClick}
        >
          Kdo je Peťa?
        </a> */}
      </nav>
    </header>
  );
};
