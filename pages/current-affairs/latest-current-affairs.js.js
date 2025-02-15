// pages/latest-current-affairs.js

import { useEffect, useState } from 'react';

export default function LatestCurrentAffairs() {
  const [currentAffairs, setCurrentAffairs] = useState([]);

  useEffect(() => {
    // Fetch current affairs data from the API
    fetch('/api/current-affairs')
      .then((res) => res.json())
      .then((data) => setCurrentAffairs(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Latest Current Affairs</h1>
      <ul>
        {currentAffairs.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <small>{item.date}</small>
            <br />
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
