"use client";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';



const Tabs = ({ sub, title, items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-10 px-2 my-16">
        <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-4">
            {sub}
        </h2>
        <h3 className="md:text-4xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-8">
            {title}
        </h3>

        <div className="flex items-center md:justify-center space-x-4 overflow-x-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer flex-none ${
              index === activeTab ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className='md:flex inline-flex items-center p-2 hover:text-blue-700 font-bold text-gray-700'>
                {item.icon && <>{item.icon}</>}
                {item.title}
            </div>
            
          </div>
        ))}
        </div>

        <div className="p-10 mt-4 shadow-xl rounded-xl">
            {items[activeTab].content}
        </div>
    </div>
  );
};

export default Tabs;
