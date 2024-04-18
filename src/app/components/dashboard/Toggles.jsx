"use client";
// Toggles.tsx

import { useState } from 'react';



const Toggles = ({ option }) => {
  const [isEnabled, setIsEnabled] = useState(option === 'enable');

  const toggleOption = () => {
    setIsEnabled((prev) => !prev);
  };

  return (
    <label className="cursor-pointer flex items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isEnabled}
        onChange={toggleOption}
      />
      <div className={`w-10 h-6 rounded-full p-1 transition ${isEnabled ? 'bg-min' : 'bg-gray-300'}`}>
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${isEnabled ? 'translate-x-4' : 'translate-x-0'}`}
        />
      </div>
      <span className="ml-2 text-base">{isEnabled ? 'Enable' : 'Disable'}</span>
    </label>
  );
};

export default Toggles;


