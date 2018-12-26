import React, { useState, useEffect } from 'react';
import { searchGIFS } from '../services/giphy/giphy.services';

const GifsPage = () => {
  // States
  const [gifs, setGifs] = useState([]);

  // Common Functions
  const fetchData = async () => {
    const result = await searchGIFS('love');
    setGifs(result.data);
  };

  // Do the initial search
  useEffect(() => {
    fetchData();
    return () => null;
  }, []);

  return (
    <div>
      {gifs.map(g => (
        <>
          <p>{JSON.stringify(g)}</p>
          <hr />
        </>
      ))}
    </div>
  );
};

export default GifsPage;
