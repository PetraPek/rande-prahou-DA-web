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
        <table>
          <ul>
            <li>Po: </li>
            <li>Út: </li>
            <li>St: </li>
            <li>Čt: </li>
          </ul>
        </table>
        <table>
          <ul>
            <li>Pá: </li>
            <li>So: </li>
            <li>Ne: </li>
          </ul>
        </table>
      </div>
      {/* {places.map((place) => {
        console.log(place);
        return <a href={place.url} className="place_link" />;
      })} */}
    </div>
  );
};
