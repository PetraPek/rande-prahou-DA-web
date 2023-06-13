import React, { useState } from 'react';
import './bar.css';
import { Filter } from '../Filter/filter';

export const Bar = ({ onFilterChange }) => {
  const [openBar, setOpenBar] = useState(false);
  const handleClick = () => {
    console.log('klik');
    setOpenBar(!openBar);
  };
  return (
    <div className="bar">
      <div className="filter__icon" onClick={handleClick}>
        {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMVJREFUSEvtlFEOwyAIhuFm3W3wFOtOAbdZb+aiKUnTKehsuz3MNxP4P4FfEE4+eLI+XA9g5hkR7yOVxRgfIYQ5abxVICJxRFxziShrVwEa0AvTB34V8ASACQAWIrr1VCAiOdecQRLUwB5ILadq0x6IFWv+gxaIF+N+NEvAEy/atDTUktDmQ5pmcCtQ4N7f+3vNbX8AeCvlN1vEzBMiprVwfAVpfay7CrY75zAXrULLKp5g5umZQW5Jq7BSmwHeS4db9CngBUNtpRlLnXWHAAAAAElFTkSuQmCC" /> */}
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
    </div>
  );
};
