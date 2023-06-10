import React, { useRef, useEffect, useState } from 'react';
import './mapa.css';
import ReactDOM from 'react-dom';
import mapboxgl from '!mapbox-gl';
import { Bar } from '../Bar/bar';
// import { SimpleMap } from '../SimpleMap/simpleMap';
import { places, nature, restaurant, cafe } from '../../../places';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9oYW5hcG9rb3JuYSIsImEiOiJjbGlwMTdleWMwNDF5M2dvNWc1NWwzNXprIn0.hEIF0JDNVVOQUXffkpgyxg';

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

export const Mapa = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [14.35, 50.06],
      zoom: 10,
    });

    // Render custom marker components
    places.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current,
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

// const Marker = ({ onClick, children, feature }) => {
//   const _onClick = () => {
//     onClick(feature.properties.description);
//   };

//   return (
//     <button onClick={_onClick} className="marker">
//       {children}
//     </button>
//   );
// };

// export const Mapa = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(14.35);
//   const [lat, setLat] = useState(50.1);
//   const [zoom, setZoom] = useState(10);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });

//   return (
//     <div className="map">
//       <Bar />
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// };
