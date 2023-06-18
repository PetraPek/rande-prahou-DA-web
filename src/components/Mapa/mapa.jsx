import React, { useRef, useEffect, useState, useMemo } from 'react';
import './mapa.css';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Bar } from '../Bar/bar';
import { places } from '../../../places';
import { Activity } from '../../Icons/Activity/activity';
import { Nature } from '../../Icons/Nature/nature';
import { Restaurant } from '../../Icons/Restaurant/restaurant';
import { Coffee } from '../../Icons/Coffee/coffee';
import { Table } from '../Table/table';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGV0cmFwZWt5IiwiYSI6ImNsaXI5MjIxeTBoa2YzZ3BoNG1oc2tnM3IifQ.oU7xdOyHyl-8KO72hqLGBA';

const Marker = ({ place, map }) => {
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
    <div className="marker">
      <Icon onClick={_onClick} />
    </div>
  );
};

export const Mapa = () => {
  const mapContainerRef = useRef(null);

  const [filters, setFilters] = useState([
    'restaurant',
    'nature',
    'cafe',
    'activity',
  ]);
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(1);
  const [markers, setMarkers] = useState([]);

  const map = useMemo(() => {
    if (!mapContainerRef.current) {
      return;
    }

    return new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/petrapeky/clirfvqgf00sj01pfgts66vcx',
      center: center,
      zoom: zoom,
    });
  }, [mapContainerRef.current]);

  useEffect(() => {
    if (!map) {
      return;
    }

    // Animace plynulého přiblížení na cílové místo po 2 vteřinách
    setTimeout(() => {
      map.flyTo({
        center: [14.412, 50.094],
        zoom: 11.8,
        speed: 1.5, // Rychlost animace
        curve: 1.2, // Křivka animace s
        easing: (t) => t, // Easing funkce pro plynulost animace
        essential: true, // Zajišťuje, že animace bude považována za důležitou
      });
      setCenter([14.412, 50.094]);
      setZoom(11.8);
    }, 300); // Přibližování začne po ... vteřinách

    // Add navigation control (the +/- zoom buttons)
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: 'cz',
        zoom: 13.2,
      }),
    );
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(
      new mapboxgl.GeolocateControl({
        trackUserLocation: true,
        showUserHeading: true,
        fitBoundsOptions: { maxZoom: 13 },
      }),
    );
  }, [map]);

  useEffect(() => {
    markers.forEach((oneMarker) => oneMarker.remove());
    setMarkers([]);
    // Render custom marker components
    places
      .filter((place) => filters.includes(place.type))
      .forEach((place) => {
        // Create a React ref
        const ref = React.createRef();
        // Create a new DOM node and save it to the React ref
        ref.current = document.createElement('div');
        // Render a Marker Component on our new DOM node
        ReactDOM.createRoot(ref.current).render(
          <Marker map={map} place={place} />,
        );
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
        const marker = new mapboxgl.Marker(ref.current)
          .setPopup(new mapboxgl.Popup({ offset: 10 }).setDOMContent(popUp))
          .setLngLat(place.coordinates)
          .addTo(map);

        setMarkers((prev) => [...prev, marker]);
      });
  }, [filters, map]);

  return (
    <>
      <Bar filters={filters} setFilters={setFilters} />
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};
