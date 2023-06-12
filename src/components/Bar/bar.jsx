import React from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';

export const Bar = ({ onFilterChange }) => {
  return (
    <div className="bar">
      <div className="filters">
        <p className="filters__title">Filtr</p>
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

      {/* <button className="search">Vyhledat</button> */}
    </div>
  );
};
