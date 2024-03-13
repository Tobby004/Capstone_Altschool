// AnalyticsPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'components';

const AnalyticsPage = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Fetch analytics data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/analytics');
        if (response.ok) {
          const result = await response.json();
          setClickCount(result.clickCount);
        } else {
          console.error('Failed to fetch analytics data');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Text size="txtGilroySemiBold32">Analytics</Text>
      <p>Click Count: {clickCount}</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default AnalyticsPage;
