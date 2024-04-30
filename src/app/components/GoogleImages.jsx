"use client";
import { useState } from 'react';

const GoogleImages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiKeys = ['AIzaSyAFhGaBtK-2BuAuOHFlJmCwJ3GVbfw8GuQ'];
  const cxIds = ['87ff6731c2e4c4857'];

  const handleSearch = async () => {
    let success = false;
    for (let i = 0; i < apiKeys.length; i++) {
      try {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKeys[i]}&cx=${cxIds[i]}&q=${searchQuery}&searchType=image`);
        const data = await response.json();
        if (data.items) {
          const imageUrls = data.items.map((item) => item.link);
          console.log(imageUrls)
          setSearchResults(imageUrls);
          success = true;
          break;
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
    if (!success) {
      console.error('No successful response received from any API key and cx ID combination.');
      // Handle error or display message to the user
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for images..."
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button onClick={handleSearch} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Search
      </button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {searchResults.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} className="w-full h-auto rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default GoogleImages;
