import React from 'react';
import {
  Map,
  ZoomControl,
  MouseControl,
  KeyboardControl,
  CompassControl,
  SyncControl,
} from 'react-mapycz';

export const SimpleMap = () => {
  return (
    <Map height="100%" center={{ lat: 50.0755, lng: 14.4378 }}>
      <ZoomControl />
      <CompassControl top={50} />
      <KeyboardControl />
      <MouseControl pan={true} wheel={true} zoom={true} />
      <SyncControl />
    </Map>
  );
};
