import React from 'react';
import './bar.css';
// import { Filter } from 'copy-webpack-plugin';

export const Bar = () => {
  return (
    <div className="bar">
      <div className="address">
        <input type="text" className="input" defaultValue={'Zadejte adresu'} />
        {/* <Filter />
        <Filter />
        <Filter />
        <Filter /> */}
      </div>
      <button class="search">Vyhledat</button>
    </div>
  );
};
