import React from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';

export const Bar = ({ onFilterChange }) => {
  return (
    <div className="bar">
      <input type="text" className="input" defaultValue={'Zadejte adresu'} />

      <div className="filters">
        <br />
        <Filter onFilterChange={onFilterChange} />
        <br />
        {/* <Filter />
        <br />
        <Filter />
        <br />
        <Filter />
        <br /> */}
      </div>
      <button className="select__all">Vybrat vše</button>
      <button className="search">Vyhledat</button>
    </div>
  );
};
