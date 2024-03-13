import React, { useState, useEffect } from 'react';
import { Text, Img } from 'components';

const FeaturesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
    };
  
    useEffect(() => {
      document.addEventListener('click', closeDropdown);
      return () => {
        document.removeEventListener('click', closeDropdown);
      };
    }, []);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center justify-center">
        <Text className="hover:text-blue-A700 text-gray-900 text-lg" size="txtGilroyMedium18">Features</Text>
        <Img className="h-6 ml-1 w-6" src="images/img_arrowdown.svg" alt="arrowdown" />
      </button>
      {isOpen && (
        <div className="dropdown-menu absolute bg-white shadow-md mt-2 py-2 px-3 rounded-md">
          {/* Dropdown menu items */}
          <a href="/url-shortener" className="block py-2">URL Shortening</a>
          <a href="/qr-code" className="block py-2">QR Code Generator</a>
          <a href="/analytics" className="block py-2">Analytics</a>
          {/* Add more links as needed */}
        </div>
      )}
    </div>
  );
};

export default FeaturesDropdown;