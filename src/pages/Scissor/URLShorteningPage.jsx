import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text, Input, Button, Img, SelectBox } from 'components';
import './URLShorteningPage.css';

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const URLShorteningPage = () => {
  const [longURL, setLongURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenURL = async () => {
    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalURL: longURL }),
      });

      if (response.ok) {
        const result = await response.json();
        setShortenedURL(result.shortenedURL);
      } else {
        console.error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Input
          name="frame1000001653"
          placeholder="Paste URL here..."
          className="input"
          wrapClassName="input-wrap"
          size="sm"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />
        <div className="input-group">
          <SelectBox
            className="select-box"
            placeholderClassName="placeholder"
            indicator={<Img className="indicator" src="images/img_arrowdown_blue_a400.svg" alt="arrow_down" />}
            isMulti={false}
            name="dropdown"
            options={dropdownOptionsList}
            isSearchable={false}
            placeholder="Choose Domain"
            color="blue_A400"
            variant="outline"
          />
          <Input
            name="frame1000001654"
            placeholder="Type Alias here"
            className="input"
            wrapClassName="input-wrap"
          />
        </div>
      </div>
      <div className="button-container">
        <Button
          onClick={handleShortenURL}
          className="button"
          rightIcon={<Img className="icon" src="images/img_television.svg" alt="television" />}
          color="blue_700"
          size="sm"
        >
          <div className="text">Trim URL</div>
        </Button>
      </div>
      {shortenedURL && (
        <div className="shortened-url">
          <Text size="txtGilroySemiBold32">Shortened URL:</Text>
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer" className="url">{shortenedURL}</a>
        </div>
      )}
      <Link to="/" className="back-link">Homepage</Link>
    </div>
  );
};

export default URLShorteningPage;

