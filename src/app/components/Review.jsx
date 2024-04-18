"use client";
import Image from 'next/image';
import { Icon } from '@iconify/react';


const Review = ({ sub, title, items }) => {

  return (
    <>
      <div className='from-[#9ec4fa] bg-gradient-to-t py-20 overflow-hidden' id='story'>
        <h2 className='text-shadow text-xl text-center mb-4 uppercase'>{sub}</h2>
        <h1 className='text-shadow text-4xl font-bold text-center mb-6' dangerouslySetInnerHTML={{ __html: title }} />
        <div className="inline-flex space-x-4 review w-full">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="w-[450px] h-[250px] flex flex-col justify-between p-8 rounded-xl bg-gray-700 text-white group-hover:text-gray-700 group-hover:bg-white">
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Image
                      width={50}
                      height={50}
                      src={item.img}
                      alt={`item-${index}`}
                      className='p-1 border border-blue-500 rounded-full mr-2'
                    />
                    <div className='flex flex-col space-y-1'>
                      <h3 className='font-semibold text-blue-500'>{item.title}</h3>
                      <p>
                      MOBILY SPURNÝ s.r.o.
                      </p>
                    </div>
                    
                  </div>
                  <p className='flex items-center bg-blue-500 text-white rounded-xl px-4 py-1'>
                    5
                    <Icon icon="twemoji:star" className='ml-1' fontSize={15}/>
                  </p>
                </div>
                <div className='text-sm'>
                  <Icon icon="fa:quote-left" className='mr-1 float-left' fontSize={15}/>
                    {item.sub}
                  <Icon icon="fa:quote-right" className='ml-1' fontSize={15}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
    
  );
};

export default Review;

