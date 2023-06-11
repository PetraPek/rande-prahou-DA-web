import React, { useRef, useEffect, useState } from 'react';
import './mapa.css';
import ReactDOM from 'react-dom/client';
import mapboxgl from '!mapbox-gl';
import { Bar } from '../Bar/bar';
// import { SimpleMap } from '../SimpleMap/simpleMap';
import { places } from '../../../places';
import { Activity } from '../../Icons/Activity/activity';
import { Nature } from '../../Icons/Nature/nature';
import { Restaurant } from '../../Icons/Restaurant/restaurant';
import { Coffee } from '../../Icons/Coffee/coffee';
import { Table } from '../Table/table';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGV0cmFwZWt5IiwiYSI6ImNsaXI5MjIxeTBoa2YzZ3BoNG1oc2tnM3IifQ.oU7xdOyHyl-8KO72hqLGBA';

const Marker = ({ onClick, children, place, map }) => {
  // const [open, setOpen] = useState(false);
  // const closeWindow = () => {
  //   console.log('closing');
  //   setOpen(false);
  // };
  // useEffect(() => {
  //   console.log('useEffect');
  //   document.addEventListener('closeWindows', closeWindow);
  //   return () => {
  //     document.removeEventListener('closeWindows', closeWindow);
  //   };
  // }, []);

  // const event = new Event('closeWindows');
  // document.dispatchEvent(event);
  // setOpen(true);
  const _onClick = () => {
    map.flyTo({
      center: place.coordinates,
    });
  };
  let Icon;
  if (place.type === 'activity') {
    Icon = Activity;
  }
  if (place.type === 'cafe') {
    Icon = Coffee;
  }
  if (place.type === 'restaurant') {
    Icon = Restaurant;
  }
  if (place.type === 'nature') {
    Icon = Nature;
  }
  return (
    <div className="marker" style={{ zIndex: open ? 5 : 0 }}>
      {/* {open ? <Table /> : null} */}
      <Icon onClick={_onClick} />
    </div>
  );
};

export const Mapa = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/petrapeky/clirfvqgf00sj01pfgts66vcx',
      center: [14.35, 50.06],
      zoom: 11.5,
    });
    // Center the map on the coordinates of any clicked circle from the 'circle' layer.
    // map.on('click', Activity, (e) => {
    //   console.log(e);
    //   map.flyTo({
    //     center: e.places[0].coordinates,
    //   });
    // });
    // console.log(map.getStyle().layers);

    // Render custom marker components
    places.forEach((place) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      ReactDOM.createRoot(ref.current).render(
        <Marker map={map} place={place} />,
      );
      // console.log(place.coordinates);
      const popUp = document.createElement('div');
      ReactDOM.createRoot(popUp).render(
        <Table
          name={place.name}
          type={place.type}
          address={place.address}
          openingHours={place.opening_hours}
          url={place.url}
        />,
      );
      // Create a Mapbox Marker at our new DOM node
      const test = new mapboxgl.Marker(ref.current)
        .setPopup(new mapboxgl.Popup({ offset: 10 }).setDOMContent(popUp))
        .setLngLat(place.coordinates)
        .addTo(map);

      // console.log(test);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, []);

  // const markerClicked = (title) => {
  //   window.alert(title);
  // };

  return (
    <>
      <Bar />
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

// const Marker = ({ onClick, children, place }) => {
//   const _onClick = () => {
//     onClick(place.properties.description);
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
