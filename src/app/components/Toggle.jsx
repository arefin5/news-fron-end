"use client";
import { useState } from 'react';



const Toggle = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={isActive}
          onChange={toggleHandler}
        />
        <div className={`w-10 h-6 rounded-full p-1 transition ${isActive ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${isActive ? 'translate-x-4' : 'translate-x-0'}`}
          />
        </div>
      </label>
      {/*<span className="ml-2">{isActive ? 'on' : 'off'}</span> */}
    </div>
  );
};

export default Toggle;
