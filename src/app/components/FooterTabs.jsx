"use client";
import { useState } from 'react';



const FooterTabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Set initial value to 0

    const handleAccordionToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
    <>
        <div className="md:block hidden md:border-y">
            <div className="md:py-20 px-2 flex flex-wrap text-white">
                {items.map((item, index) => (
                    <div key={index} className={`block ${item.col}`}>
                        <h1 className={`font-bold text-lg mb-2 ${index === 0 ? 'hidden' : ''}`}>
                            {item.tab}
                        </h1>
                        {item.sub}
                    </div>
                ))}
            </div>
        </div>
        <div className="md:hidden block divide-y text-white">
            {items.map((item, index) => (
            <div key={index} className="w-full px-3">
                <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => handleAccordionToggle(index)}
                >
                <h1 className="text-lg font-medium">{item.tab}</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${activeIndex === index ? 'duration-500 rotate-180' : 'duration-500'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>
                {activeIndex === index && (
                <div className="leading-6">{item.sub}</div>
                )}
            </div>
            ))}
        </div>
    </>
    
  );
};

export default FooterTabs;
