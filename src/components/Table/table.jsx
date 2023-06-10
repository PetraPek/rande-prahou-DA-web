import React from 'react';
import './table.css';
import { places } from '../../../places';

export const Table = () => {
  return (
    <div className="table">
      <div className="colour_part">
        <span className="place_name">"restaurace"</span>
        <span className="place_address">"adresa"</span>
      </div>
      <div className="opening_hours">
        <div className="list">
          <ul>
            <li>Po: </li>
            <li>Út: </li>
            <li>St: </li>
            <li>Čt: </li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>Pá: </li>
            <li>So: </li>
            <li>Ne: </li>
          </ul>
        </div>
      </div>
      {/* {places.map((place) => {
        console.log(place);
        return <a href={place.url} className="place_link" />;
      })} */}
    </div>
  );
};
