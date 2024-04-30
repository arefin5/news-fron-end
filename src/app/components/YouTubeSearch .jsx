"use client";
import { useState } from 'react';

const API_KEYS = [
  'AIzaSyBc1E1hH2j-DTJhbivn9qIWL6Vz_aGiRbM',
  'AIzaSyBc1E1hH2j-DTJhbivn9qIWL6Vz_aGiRbN',
  'AIzaSyBc1E1hH2j-DTJhbivn9qIWL6Vz_aGiRbK'
];

const YouTubeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSearch = async () => {
    let success = false;
    for (const apiKey of API_KEYS) {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${apiKey}`);
        const data = await response.json();
        const videoId = data.items[0]?.id?.videoId;
        if (videoId) {
          setVideoUrl(`https://www.youtube.com/watch?v=${videoId}`);
          success = true;
          break;
        }
      } catch (error) {
        console.error('Error searching YouTube with API key:', apiKey, error);
      }
    }
    if (!success) {
      console.error('Failed to retrieve video URL from YouTube with all API keys');
      setVideoUrl('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-l"
          placeholder="Search YouTube..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>
      {videoUrl && (
        <div className="mt-4">
          <p className="font-bold">First video matching your search:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">{videoUrl}</a>
        </div>
      )}
    </div>
  );
};

export default YouTubeSearch;
