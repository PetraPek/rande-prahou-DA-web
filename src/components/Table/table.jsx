import React from 'react';
import './table.css';
import { places } from '../../../places';

export const Table = ({ type, address, openingHours, coordinates }) => {
  console.log(openingHours);
  return (
    <div className="table">
      <div className="colour_part">
        <span className="place_name">{type}</span>
        <span className="place_address">{address}</span>
      </div>
      <div className="opening_hours">
        <div className="list">
          <ul>
            <li>Út: {openingHours.Po}</li>
            <li>Út: {openingHours.Út}</li>
            <li>Po: {openingHours.Po}</li>
            <li>St: {openingHours.St}</li>
            <li>Čt: {openingHours.Čt}</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>Pá: {openingHours.Pá}</li>
            <li>So: {openingHours.So}</li>
            <li>Ne: {openingHours.Ne}</li>
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
