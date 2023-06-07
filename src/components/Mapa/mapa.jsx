import React from 'react';
import './mapa.css';
// import { Bar } from '../Bar/bar';
import { SimpleMap } from '../SimpleMap/simpleMap';

export const Mapa = () => {
  return (
    <div className="map">
      <SimpleMap />
      {/* <Bar /> */}
    </div>
  );
};
