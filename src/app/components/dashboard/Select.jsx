"use client";
import React, { useState, useEffect } from 'react';



const Select= ({ sub, title, items }) => {
  const [selectedOption, setSelectedOption] = useState(items[0] || null);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedOption(items[selectedIndex]);
  };

  useEffect(() => {
    // Set the default selected option when the component mounts
    setSelectedOption(items[0] || null);
  }, [items]);

  return (
    <>
      <div className="relative">
        <p className="font-bold">{sub}</p>
        <select
          onChange={handleSelectChange}
          value={selectedOption ? selectedOption.title : ''}
          className="block w-full border p-3 my-1 focus:outline-min"
        >
          {items.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
        </select>
        <label className="block text-sm font-medium text-gray-700">{title}</label>
        {selectedOption && (
          <>{selectedOption.content}</>
        )}
      </div>
    </>
  );
};

export default Select;
