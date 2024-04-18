"use client";
import { useState } from 'react';



const Accordion = ({ sub, items }) => {
  const [openIndices, setOpenIndices] = useState([0]);

  const handleItemClick = (number) => {
    if (openIndices.includes(index)) {
      // If item is already open, close it
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // If item is closed, open it
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className=" max-w-screen-xl mx-auto md:px-10 px-2">
      <h2 className="text-xl font-semibold mb-2">{sub}</h2>
      <div className=' divide-y border'>
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center cursor-pointer bg-bg p-2"
              onClick={() => handleItemClick(index)}
            >
              <div className='flex items-center'>
                <p className='w-3 h-3 bg-min mr-1'></p>
                <h1 className="font-normal text-base">{item.title}</h1>
              </div>
              <svg
                  className={`w-5 h-5 transition-transform transform ${openIndices.includes(index) ? 'rotate-90' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 6l6 6l-6 6"/>
              </svg>
            </div>
            {openIndices.includes(index) &&
              <div className="p-4">
                {item.content}
              </div>
            }
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Accordion;
