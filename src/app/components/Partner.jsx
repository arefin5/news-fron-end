import Image from 'next/image';
import React from 'react';



const Partner = ({ sub, items }) => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto md:px-10 px-2 my-16">
      <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-8">
        {sub}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {items.map((item, index) => (
          <div key={index} className='flex justify-center'>
            <Image
                width={145}
                height={75}
                src={item.img}
                alt="Partner"
                className="w-min h-min"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Partner;