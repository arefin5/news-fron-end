"use client";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Hero= () => {
  const words = [
    'ze slov umění,',
    'z obrázků příběh,',
    'a z chatu zábavu!',
  ];

  const [displayedText, setDisplayedText] = useState('');

  let i = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 30;
  const speed = 150;

  const wordflick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      const part = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setDisplayedText(part);
    }, speed);
  };

  useEffect(() => {
    wordflick();
  }, []);

  return (
    <>
    <div className="relative bg-[#1b1b3b] overflow-hidden">
      <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -top-2/4 -left-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-n.png')]"></div>
      <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -bottom-2/4 -right-1/4 w-[1000px] h-[1000px] bg-[url('/bg/blur-o.png')]"></div>
      <div className="max-w-screen-xl relative mx-auto md:px-10 px-2 pb-20 pt-24">
          <div className="flex items-center flex-wrap md:flex-row-reverse">
              <div className="w-full md:w-2/4 p-6 pt-0">
                  <Image
                      src="/f.png"
                      width={600}
                      height={600}
                      alt='hero'
                      className=''
                  />
              </div>
              <div className="w-full md:w-2/4 space-y-6">
                  <h1 className="md:text-[3.5rem] text-3xl text-center md:text-left text-white font-extrabold leading-snug block">
                  Artificial intelligence <br />
                  that will do it for you
                  </h1>
                  <div className="flex items-center justify-center md:justify-start md:text-[3.5rem] text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold leading-snug">
                      {displayedText}
                      <div className="word h-10 ml-1"></div>
                  </div>

                  
                  <p className="md:text-sm text-xs text-center md:text-left text-white font-normal leading-snug">
                  Enter a new era of content creation! Thanks to artificial intelligence, you can look forward to excellent blog posts, articles and social media posts effortlessly.
                  </p>
                  <div className='flex flex-wrap space-y-4 md:space-y-0 md:space-x-10'>
                      <Link
                          href="/"
                          className="bg-min text-white text-2xl w-full md:w-auto md:px-16 rounded-md py-3 flex justify-center items-center space-x-2"
                      >
                          <Icon icon="material-symbols:bolt" className='mr-2' fontSize={25} />
                          Try it for FREE
                      </Link>
                      <Link
                          href="/"
                          className="bg-white text-min px-6 py-3 w-full md:w-auto rounded-md flex justify-center items-center space-x-2"
                      >
                          <Icon icon="ph:presentation-light" className='mr-2' fontSize={25} />
                          Examples of use
                      </Link>
                  </div>
                  <p className="text-sm text-white font-normal leading-snug flex justify-center md:justify-start items-center">
                      <Icon icon="bi:credit-card" className='mr-2 text-cyan-300' fontSize={25} />
                      It does not require payment card details
                  </p>
                  <div className='flex items-center md:justify-start justify-center'>
                      <div className='flex items-center mr-2'>
                          <Icon icon="twemoji:star" className='mr-1' fontSize={20}/>
                          <Icon icon="twemoji:star" className='mr-1' fontSize={20}/>
                          <Icon icon="twemoji:star" className='mr-1' fontSize={20}/>
                          <Icon icon="twemoji:star" className='mr-1' fontSize={20}/>
                          <Icon icon="twemoji:star" className='mr-1' fontSize={20}/>
                      </div>
                      <p className="md:text-lg text-xs text-white font-normal leading-snug">
                          Based on user reviews
                      </p>
                  </div>
                  <div className='flex items-center'>
                      <Image
                          src="/reviews/fb.png"
                          width={110}
                          height={30}
                          alt='hero'
                      />
                      <Image
                          src="/reviews/gg.png"
                          width={110}
                          height={30}
                          alt='hero'
                      />
                      <Image
                          src="/reviews/f.png"
                          width={110}
                          height={30}
                          alt='hero'
                      />
                  </div>
              </div>
          </div>
      </div>
    </div>
    </>
    
  );
};

export default Hero;


