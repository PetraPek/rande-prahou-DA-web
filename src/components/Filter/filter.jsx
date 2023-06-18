import React, { useState, useEffect } from 'react';
import './filter.css';

export const Filter = ({ filters, setFilters }) => {
  const [selectedAll, setSelectedAll] = useState(true);
  const items = ['restaurant', 'nature', 'cafe', 'activity'];

  useEffect(() => {
    setSelectedAll(items.every((item) => filters.includes(item)));
  }, [filters]);

  const handleClick = (type) => {
    if (filters.includes(type)) {
      setFilters((prev) => prev.filter((item) => item !== type));
    } else {
      setFilters((prev) => [...prev, type]);
    }
  };

  return (
    <>
      <div className="grid__container">
        <div
          className={
            'filter ' +
            (filters.includes('restaurant') ? 'restaurant' : 'unselected')
          }
          onClick={() => handleClick('restaurant')}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJxJREFUSEvtlN0NgCAMhO8mUydTJ9PNMBIhFX9OTTAm0idISb+W9kpkNmaOj/cBzjk3V0XSw9V9edMBaAH0JOdztE0FKuCOfwBQh4ghsXhPe/BFgP/SnBX8FaAEmI7x7R4IwEiysTq5AwiiOWNEQYWxvgwwyqysgAxtpdZHAJt6Kryjso7eyWVXAOWL4lA9niK1MpRf9kAFUP7sgAlH48wZr6VTKwAAAABJRU5ErkJggg==" />
          <div className="typeOfPlace">restaurace</div>
        </div>
        <div
          className={
            'filter ' + (filters.includes('nature') ? 'nature' : 'unselected')
          }
          onClick={() => handleClick('nature')}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtlVEOwyAMQ/HN1pN1O9l6s3SZQEIZSRyp/Rs//QG/YjsC7eaFm/VbCSAiT/0hAN8vs2iAiDxaa+8uugE4rgaouEJ0HQC2ywDdmt0IvhirUosc8cFKISHA+O45EuaRAWbfPUCYhwtIrLEw1yomg7metPDYyABCmwCEGlkGOrG2nqVbRBlE1liI26QIwDRogNwmLQHFBoVD9wMgh2s5E6vAV4CKNWngaU1nBRGR/h7Q5+iNKvwHMA9UeU8pg7L658AJn7hdGZ+tzQQAAAAASUVORK5CYII=" />
          <div className="typeOfPlace">příroda</div>
        </div>
        <div
          className={
            'filter ' + (filters.includes('cafe') ? 'coffee' : 'unselected')
          }
          onClick={() => handleClick('cafe')}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEvtlUsKgDAMRJObeTP1ZOrJRkas9Cc0pS0IZuWi5jWZZKrSObRzfhkPALCIyGysbFVV/pdEUgEAGJNfx1U1241mAO9SQTU9AGQ9kGYAtsjXz7WsKYBXdxr+gHTee2sQEdtPkWUPNhGZjNtssgomJ6Q43mzispC3LAWmt3Njbx/idzbG23VxXwoPBhUAqBE4QMV6xICax8YHJNOUM7saCEU+cq/a90U+AbXTYxkIMYpEAAAAAElFTkSuQmCC" />
          <div className="typeOfPlace">kavárna</div>
        </div>
        <div
          className={
            'filter ' +
            (filters.includes('activity') ? 'activity' : 'unselected')
          }
          onClick={() => handleClick('activity')}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvtlLFNxFAQRN8UQAE0QBEkcCRkiA5ogARCErgECQJIqISMBO4SGqKAQWv9//XtM7ZP1hHdD63dmZ3ZWYsdP+0Ynz3BqMP/a5HtB+AEOB0d7e+CpaTAaV5RkMDvZwDXrYWkJnCqaE2wDWE15ErSoqugIZA0ay+2WzgbCoLA9g3wkqb/Ae4kvdVqbF8Dj8BB+n4r6XUqQbarYHaVZaCaNA03rAA4BK6AC+AY+AA+JT1nMNtHwCVwBpwD38C7pKdJCrZZbLd2iOAr5X8hadXxO+4iIpzvYwlEUvrqAqeEpV5yJoimiGrTbDtAm6aeVyKd6vIQvXcwBBTYhXjsKOtAbGS+pzmA1/X5J2Xd30q2q6hvHdqcxQ71zrraKUPtCUZd2rlFv6lMjRleDHXzAAAAAElFTkSuQmCC" />
          <div className="typeOfPlace">aktivita</div>
        </div>
        <button
          className={'select__all ' + (selectedAll ? 'button__off' : '')}
          onClick={() => {
            if (filters.length === items.length) {
              setFilters([]);
            } else {
              setFilters(items);
            }
          }}
        >
          {selectedAll ? 'Odebrat vše' : 'Vybrat vše'}
        </button>
      </div>
    </>
  );
};
