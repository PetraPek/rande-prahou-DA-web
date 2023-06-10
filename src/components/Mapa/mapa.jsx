import React, { useRef, useEffect, useState } from 'react';
import './mapa.css';
import mapboxgl from '!mapbox-gl';
import { Bar } from '../Bar/bar';
import { SimpleMap } from '../SimpleMap/simpleMap';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9oYW5hcG9rb3JuYSIsImEiOiJjbGlwMTdleWMwNDF5M2dvNWc1NWwzNXprIn0.hEIF0JDNVVOQUXffkpgyxg';

export const Mapa = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div className="map">
      <Bar />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
