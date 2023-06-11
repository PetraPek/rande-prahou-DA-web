import React from 'react';
import './table.css';
import { places } from '../../../places';

export const Table = ({ name, type, address, openingHours, url }) => {
  console.log(openingHours);
  return (
    <div className="table">
      <div
        className={
          type === 'restaurant'
            ? 'colour_part restaurant'
            : type === 'cafe'
            ? 'colour_part coffee'
            : type === 'activity'
            ? 'colour_part activity'
            : 'colour_part nature'
        }
      >
        <a className="place_url" href={url}>
          {name}
        </a>
        <span className="place_address">{address}</span>
        <span></span>
      </div>
      <div className="opening_hours">
        <div className="list">
          <ul>
            <li>Po: {openingHours.Po}</li>
            <li>Út: {openingHours.Út}</li>
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
