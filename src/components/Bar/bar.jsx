import React, { useState } from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';

export const Bar = ({ filters, setFilters }) => {
  const [openBar, setOpenBar] = useState(false);
  const handleClick = () => {
    setOpenBar(!openBar);
  };
  return (
    <>
      <svg
        className="filter__icon"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: 'rgba(108, 108, 108, 1)' }}
      >
        <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z" />
      </svg>

      <div className={'bar__desktop ' + (openBar ? 'bar' : 'bar__off')}>
        <div className="filters">
          <p className="filters__title">Filtr</p>
          <br />
          <Filter filters={filters} setFilters={setFilters} />
          <br />
        </div>
      </div>
    </>
  );
};
