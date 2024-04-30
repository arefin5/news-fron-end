import React, { useState } from 'react';


const Questions = ({ sub, title, items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="bg-[url('/bg.svg')] bg-center bg-cover bg-no-repeat" id='faqs'>
        <div className="max-w-3xl mx-auto md:py-20 px-10">
            <div className="mb-6">
                <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-4">
                    {sub}
                </h2>
                <h3 className="md:text-4xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-8">
                    {title}
                </h3>
                {items.map((item, index) => (
                <div key={index} className='bg-white'>
                    <div
                    className={`flex justify-between items-center cursor-pointer p-3 font-light ${
                        openIndex === index ? 'bg-min/10 shadow-md' : 'border-y'
                        }`}
                    onClick={() => handleToggle(index)}
                    >
                        <h4 className="text-base">{item.title}</h4>
                        <svg
                            className={`w-4 h-4 transition-transform transform ${
                            openIndex === index ? 'rotate-180' : 'rotate-0'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                        >
                            <path fill="currentColor"
                             d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"/>
                        </svg>
                    </div>
                    {openIndex === index && (
                    <p className="text-gray-700 p-4">{item.content}</p>
                    )}
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Questions;