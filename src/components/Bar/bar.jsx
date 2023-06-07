import React from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';

export const Bar = () => {
  return (
    <div className="bar">
      <input type="text" className="input" defaultValue={'Zadejte adresu'} />

      <div className="filters">
        <br />
        <Filter />
        <br />
        <Filter />
        <br />
        <Filter />
        <br />
        <Filter />
        <br />
      </div>

      <button class="search">Vyhledat</button>
    </div>
  );
};
