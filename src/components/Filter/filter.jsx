import React from 'react';
import './filter.css';

export const Filter = () => {
  return (
    <>
      <div className="grid__container">
        <div className="filter restaurant">
          {/* <input type="radio" /> */}
          {/* <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z" />
      </svg> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJxJREFUSEvtlN0NgCAMhO8mUydTJ9PNMBIhFX9OTTAm0idISb+W9kpkNmaOj/cBzjk3V0XSw9V9edMBaAH0JOdztE0FKuCOfwBQh4ghsXhPe/BFgP/SnBX8FaAEmI7x7R4IwEiysTq5AwiiOWNEQYWxvgwwyqysgAxtpdZHAJt6Kryjso7eyWVXAOWL4lA9niK1MpRf9kAFUP7sgAlH48wZr6VTKwAAAABJRU5ErkJggg==" />
          <div className="typeOfPlace">restaurace</div>
        </div>
        <div className="filter nature">
          {/* <input type="radio" /> */}
          {/* <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z" />
        </svg> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtlVEOwyAMQ/HN1pN1O9l6s3SZQEIZSRyp/Rs//QG/YjsC7eaFm/VbCSAiT/0hAN8vs2iAiDxaa+8uugE4rgaouEJ0HQC2ywDdmt0IvhirUosc8cFKISHA+O45EuaRAWbfPUCYhwtIrLEw1yomg7metPDYyABCmwCEGlkGOrG2nqVbRBlE1liI26QIwDRogNwmLQHFBoVD9wMgh2s5E6vAV4CKNWngaU1nBRGR/h7Q5+iNKvwHMA9UeU8pg7L658AJn7hdGZ+tzQQAAAAASUVORK5CYII=" />
          <div className="typeOfPlace">příroda</div>
        </div>
        <div className="filter coffee">
          {/* <input type="radio" /> */}
          {/* <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z" />
          </svg> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEvtlUsKgDAMRJObeTP1ZOrJRkas9Cc0pS0IZuWi5jWZZKrSObRzfhkPALCIyGysbFVV/pdEUgEAGJNfx1U1241mAO9SQTU9AGQ9kGYAtsjXz7WsKYBXdxr+gHTee2sQEdtPkWUPNhGZjNtssgomJ6Q43mzispC3LAWmt3Njbx/idzbG23VxXwoPBhUAqBE4QMV6xICax8YHJNOUM7saCEU+cq/a90U+AbXTYxkIMYpEAAAAAElFTkSuQmCC" />
          <div className="typeOfPlace">kavárna</div>
        </div>
        <div className="filter activity">
          {/* <input type="radio" /> */}
          {/* <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z" />
            </svg> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvtlLFNxFAQRN8UQAE0QBEkcCRkiA5ogARCErgECQJIqISMBO4SGqKAQWv9//XtM7ZP1hHdD63dmZ3ZWYsdP+0Ynz3BqMP/a5HtB+AEOB0d7e+CpaTAaV5RkMDvZwDXrYWkJnCqaE2wDWE15ErSoqugIZA0ay+2WzgbCoLA9g3wkqb/Ae4kvdVqbF8Dj8BB+n4r6XUqQbarYHaVZaCaNA03rAA4BK6AC+AY+AA+JT1nMNtHwCVwBpwD38C7pKdJCrZZbLd2iOAr5X8hadXxO+4iIpzvYwlEUvrqAqeEpV5yJoimiGrTbDtAm6aeVyKd6vIQvXcwBBTYhXjsKOtAbGS+pzmA1/X5J2Xd30q2q6hvHdqcxQ71zrraKUPtCUZd2rlFv6lMjRleDHXzAAAAAElFTkSuQmCC" />
          <div className="typeOfPlace">aktivita</div>
        </div>
      </div>
    </>
  );
};
