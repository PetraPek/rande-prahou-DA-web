import React from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';
import { Check } from '../../Icons/Check search/check';

export const Bar = ({ onFilterChange }) => {
  return (
    <div className="bar">
      <input type="text" className="input" defaultValue={'Zadejte adresu'} />
      <Check onClick={() => console.log('Hledej')} />
      <div className="filters">
        <p className="filters__title">Vyber</p>
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
