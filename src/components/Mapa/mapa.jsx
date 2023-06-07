import React from 'react';
import './mapa.css';
import { Bar } from '../Bar/bar';
import {
  Map,
  ZoomControl,
  MouseControl,
  KeyboardControl,
  CompassControl,
  SyncControl,
} from 'react-mapycz';

export const Mapa = () => {
  return (
    <div className="map">
      <Map height="400px" center={{ lat, lng }} zoom={zoom}>
        <ZoomControl />
        <CompassControl top={50} />
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
      </Map>
      <Bar />
    </div>
  );
};
