import React from 'react';
import './table.css';
import { places } from '../../../places';

export const Table = ({ name, type, address, openingHours, url }) => {
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
        {/* <span className="place_name">{name}</span> */}

        <span className="link">
          <a className="place_name" target="_blank" href={url}>
            {name}
          </a>
          <svg
            className="link_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: 'rgba(255, 255, 255, 1)' }}
          >
            <path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path>
            <path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path>
          </svg>
        </span>
        <span className="place_address">{address}</span>
      </div>
      <div className="opening_hours">
        <div className="list">
          <ul>
            <li>Po: {openingHours.Mon}</li>
            <li>Út: {openingHours.Tue}</li>
            <li>St: {openingHours.Wed}</li>
            <li>Čt: {openingHours.Thu}</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>Pá: {openingHours.Fri}</li>
            <li>So: {openingHours.Sat}</li>
            <li>Ne: {openingHours.Sun}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// kód pro ternární operátor s možností odlišného zobrazení otevíracích hodin
// {openingHours.Mon === 'Dle programu kina' ? (
//   <span>Po - Ne: dle programu kina</span>
// ) : openingHours.Mon === 'Otevřeno 24 hodin' ? (
//   <span>Po - Ne: Otevřeno 24 hodin</span>
// ) : (
//   <>
//     <div className="list">
//       <ul>
//         <li>Po: {openingHours.Mon}</li>
//         <li>Út: {openingHours.Tue}</li>
//         <li>St: {openingHours.Wed}</li>
//         <li>Čt: {openingHours.Thu}</li>
//       </ul>
//     </div>
//     <div className="list">
//       <ul>
//         <li>Pá: {openingHours.Fri}</li>
//         <li>So: {openingHours.Sat}</li>
//         <li>Ne: {openingHours.Sun}</li>
//       </ul>
//     </div>
//   </>
// )}
