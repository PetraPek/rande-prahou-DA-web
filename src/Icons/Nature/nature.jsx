import React from 'react';
export const Nature = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="35"
      height="35"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="57" height="57" rx="10" fill="#F8CE6D" />
      <path
        d="M44.5 23.8L28 5L11.5 23.8H19.75L6 42.6H25.25V52H30.75V42.6H50L36.25 23.8H44.5Z"
        fill="white"
      />
    </svg>
  );
};
