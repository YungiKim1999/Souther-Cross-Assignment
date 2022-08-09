import React from 'react';

export function Button({
  text,
  className,
  onClick,
}) {
  return (
    <button
      className= {`transition duration-150 ease-out hover:ease-in py-2 hover:bg-sky-900 hover:text-white bg-white rounded-md text-sc-blue ${className ? className : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}