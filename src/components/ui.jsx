// src/components/ui.jsx
import React from 'react';

// Example of a simple Text component
export const Text = ({ children, className = '', ...props }) => (
  <p className={`text-base ${className}`} {...props}>
    {children}
  </p>
);

// Example of a simple Button component
export const Button = ({ children, onClick, className = '', ...props }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Example of a simple Input component
export const Input = ({ className = '', ...props }) => (
  <input
    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
    {...props}
  />
);

// Example of a simple Img component
export const Img = ({ src, alt, className = '', ...props }) => (
  <img src={src} alt={alt} className={`${className}`} {...props} />
);
