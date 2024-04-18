"use client";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import React, { useState, ChangeEvent } from 'react';

const MessengerApp = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDiv = () => {
    setIsDivVisible(!isDivVisible);
    if (isDivVisible) {
      setTimeout(() => {
        setIsDivVisible(false);
      }, 1000); // Reset the visibility after 1 second
    }
  };

  return (
    <>
      <div className="flex flex-col items-center py-12 bg-gradient-to-r from-[#26C281] to-[#09e072] text-white leading-8">
        <Image
          width={112}
          height={112}
          alt='logo'
          className='w-28 h-28 mb-3'
          src="/user/logo.png" 
        />
        <h2 className='text-2xl font-bold'>WhatsApp</h2>
        <p>WhatsApp Chat Modules Next.js Tailwindcss</p>
        <div className="p-8 m-auto text-center">
          <select
            className="mb-4 text-gray-700 outline-0 p-3"
            onChange={handleOptionChange}
            value={selectedOption}
          >
            <option value="">Choose an option</option>
            <option value="wa-1">Button Style-1</option>
            <option value="wa-2">Button Style-2</option>
            <option value="wa-3">Button Style-3</option>
            <option value="wa-4">Button Style-4</option>
            <option value="wa-5">Button Style-5</option>
            <option value="wa-6">Button Style-6</option>
            <option value="wa-7">Button Style-7</option>
            <option value="wa-8">Button Style-8</option>
            <option value="wa-9">Button Style-9</option>
            <option value="wa-10">Button Style-10</option>
          </select>

          {selectedOption && (
            <div className="mt-4 text-gray-800">
              {selectedOption === 'wa-1' && (
                <div className="flex flex-col items-end fixed right-6 bottom-4">
                  {isDivVisible && (
                    <div className="flex flex-wrap flex-col shadow-[0px_3px_7px_rgba(12,12,12,0.18)] w-[300px] mb-4 duration-1000 transition-transform delay-1000">
                      <div className='bg-gradient-to-r from-[#26C281] to-[#09e072] text-white p-4 text-center rounded-t-xl'>
                        <strong>Need Help?</strong>
                        <p className='flex items-center justify-center mt-2 text-sm'>
                        <Icon
                          icon="ic:baseline-whatsapp"
                          className='mr-1'
                          fontSize={15}
                        />
                        Chat with us on WhatsApp</p>
                      </div>
                      <div className='bg-white p-4 rounded-b-2xl'>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_01.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-left">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <Icon
                                icon="ic:baseline-whatsapp"
                                className='text-[#09e072] absolute right-3 top-[20px] opacity-50'
                                fontSize={30}
                              />
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_02.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-left">
                              <span>Sahar Darya</span>
                              <p className='text-xs'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <Icon
                                icon="ic:baseline-whatsapp"
                                className='text-[#09e072] absolute right-3 top-[20px] opacity-50'
                                fontSize={30}
                              />
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_03.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-left">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <Icon
                                icon="ic:baseline-whatsapp"
                                className='text-[#09e072] absolute right-3 top-[20px] opacity-50'
                                fontSize={30}
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={toggleDiv}
                    className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-full hover:shadow-[0px_0px_10px_rgba(12,12,12,0.5)] shadow-[0_0_10px_rgba(12,12,12,0.3)]`}
                    
                    >
                    <Icon
                      icon="ic:baseline-whatsapp"
                      className={`text-white duration-500 ${
                        !isDivVisible && "rotate-[360deg]"
                      }`}
                      fontSize={30}
                    />
                  </button>
                </div>
              )}
              {selectedOption === 'wa-2' && (
                <div className="flex flex-row items-end fixed right-6 bottom-4">
                  {isDivVisible && (
                    <div className="flex flex-wrap flex-row duration-1000 transition-transform delay-1000">
                        <a href="#">
                          <div className="flex items-center relative group">
                            <Image
                              width={50}
                              height={50}
                              alt='user'
                              className="w-12 h-12 rounded-full border-2 border-[#09e072] hover:rotate-[360deg] duration-500"
                              src="/user/profile_01.jpg"
                            />
                            <span className="relative flex h-3 w-3 bottom-[-20px] left-[-15px]">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                            </span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center relative">
                            <Image
                              width={50}
                              height={50}
                              alt='user'
                              className="w-12 h-12 rounded-full border-2 border-[#09e072] hover:rotate-[360deg] duration-500"
                              src="/user/profile_02.jpg"
                            />
                            <span className="relative flex h-3 w-3 bottom-[-20px] left-[-15px]">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                            </span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center relative">
                            <Image
                              width={50}
                              height={50}
                              alt='user'
                              className="w-12 h-12 rounded-full border-2 border-[#09e072] hover:rotate-[360deg] duration-500"
                              src="/user/profile_03.jpg"
                            />
                            <span className="relative flex h-3 w-3 bottom-[-20px] left-[-15px]">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                            </span>
                          </div>
                        </a>
                    </div>
                  )}
                  <button
                    onClick={toggleDiv}
                    className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-full hover:shadow-xl`}
                    
                    >
                    <Icon
                      icon="ic:baseline-whatsapp"
                      className={`text-white duration-500 ${
                        !isDivVisible && "rotate-[360deg]"
                      }`}
                      fontSize={30}
                    />
                  </button>
                </div>
              )}
              {selectedOption === 'wa-3' && (
                <div>
                  <button
                    className="fixed bottom-4 right-4 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-3xl hover:shadow-[0_0px_10px_#6c6b6b] shadow-[0_0px_2px_#6c6b6b] border-2 border-white"
                  >
                    <Icon
                      icon="ic:baseline-whatsapp"
                      className="text-white"
                      fontSize={25}
                    />
                    <span className='text-sm pl-2 font-medium'>Need Help?</span>
                  </button>
                </div>
              )}
              {selectedOption === 'wa-4' && (
                <div
                  className={`flex flex-row md:flex-row-reverse items-center fixed right-0  duration-1000 transition-transform delay-1000 
                  ${!isDivVisible ? 'top-[50%]' : 'top-[30%]'}`}
                >
                  <div
                    className={`${
                      !isDivVisible ? 'hidden' : 'block'
                    }`}
                  >
                    <div className="flex flex-wrap flex-col shadow-[0px_3px_7px_rgba(12,12,12,0.18)] w-[300px] mb-4">
                      <div className='bg-gradient-to-r from-[#26C281] to-[#09e072] text-white p-4 text-center rounded-tl-xl'>
                        <strong>Need Help?</strong>
                        <p className='flex items-center justify-center mt-2 text-xs'>
                        <svg className='fill-white mr-1' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                          Chat with us on WhatsApp</p>
                      </div>
                      <div className='bg-white p-4 rounded-bl-xl'>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_01.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="wc-user-info">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <svg className='fill-[#09e072] absolute right-3 top-[20px] opacity-50' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_02.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="wc-user-info">
                              <span>Sahar Darya</span>
                              <p className='text-xs'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <svg className='fill-[#09e072] absolute right-3 top-[20px] opacity-50' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 mb-2 group relative">
                            <div className="relative flex items-end">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full"
                                src="/user/profile_03.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="wc-user-info">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sahar left 7 mins ago</p>
                            </div>
                            <div className="hidden group-hover:block">
                              <svg className='fill-[#09e072] absolute right-3 top-[20px] opacity-50' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleDiv}
                    className={`w-12 h-12 flex items-center justify-center bg-white rounded-l-xl hover:shadow-[0px_0px_10px_rgba(12,12,12,0.5)] shadow-[0_0_10px_rgba(12,12,12,0.3)]`}
                    
                    >
                    <svg 
                    className={`fill-[#26C281] duration-500 ${
                      !isDivVisible && "rotate-[360deg]"
                    }`}
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                  </button>
                </div>
              )}
              {selectedOption === 'wa-5' && (
                <div>
                  <div className='fixed right-0 top-[40%]'>
                    <a href="#">
                      <div className="flex items-center bg-white p-0 mb-2 relative shadow-[0px_0px_10px_#ccc] right-[-130px] hover:right-0 duration-600 delay-100">
                        <div className="relative flex items-end">
                          <Image
                            width={50}
                            height={50}
                            alt='user'
                            className="w-14 h-14 border-2 border-[#26C281]"
                            src="/user/profile_01.jpg"
                          />
                          <span className="relative flex h-3 w-3 bottom-0 left-[-10px]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                          </span>
                        </div>
                        <div className="text-left">
                          <span>Sahar Darya</span>
                          <p className='text-xs	'>Sahar left 7 mins ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex items-center bg-white p-0 mb-2 relative shadow-[0px_0px_10px_#ccc] right-[-130px] hover:right-0 duration-600 delay-100">
                        <div className="relative flex items-end">
                          <Image
                            width={50}
                            height={50}
                            alt='user'
                            className="w-14 h-14 border-2 border-[#26C281]"
                            src="/user/profile_02.jpg"
                          />
                          <span className="relative flex h-3 w-3 bottom-0 left-[-10px]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                          </span>
                        </div>
                        <div className="text-left">
                          <span>Sahar Darya</span>
                          <p className='text-xs	'>Sahar left 7 mins ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="flex items-center bg-white p-0 mb-2 relative shadow-[0px_0px_10px_#ccc] right-[-130px] hover:right-0 duration-600 delay-100">
                        <div className="relative flex items-end">
                          <Image
                            width={50}
                            height={50}
                            alt='user'
                            className="w-14 h-14 border-2 border-[#26C281]"
                            src="/user/profile_03.jpg"
                          />
                          <span className="relative flex h-3 w-3 bottom-0 left-[-10px]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                          </span>
                        </div>
                        <div className="text-left">
                          <span>Sahar Darya</span>
                          <p className='text-xs	'>Sahar left 7 mins ago</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
              {selectedOption === 'wa-6' && (
                <div className="flex flex-col items-end fixed right-6 bottom-4">
                  {isDivVisible && (
                    <div className="flex flex-wrap flex-col shadow-[0px_3px_7px_rgba(12,12,12,0.18)] w-[300px] mb-4 duration-1000 transition-transform delay-1000">
                      <div className='bg-gradient-to-r from-[#26C281] to-[#09e072] text-white p-4 text-center rounded-t-xl'>
                        <strong>Need Help?</strong>
                        <p className='flex items-center justify-center mt-2 text-xs'>
                        <svg className='fill-white mr-1' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                          Chat with us on WhatsApp</p>
                      </div>
                      <div className='bg-white p-4 rounded-b-2xl grid grid-cols-2'>
                        <a href="#">
                          <div className="flex flex-col items-center p-2 mb-2 group relative">
                            <div className="relative flex items-end mb-2">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 rounded-full border-2 border-[#69f9b0] shadow-[0_0_14px_#69f9b0] transition delay-150 duration-300 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110"
                                src="/user/profile_01.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-center">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sales Support</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex flex-col items-center p-2 mb-2 group relative">
                            <div className="relative flex items-end mb-2">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 group-hover:rotate-[360deg] rounded-full border-2 border-[#b1b1b1] shadow-[0_0_14px_#b1b1b1] transition delay-150 duration-300 ease-in-out group-hover:scale-110"
                                src="/user/profile_02.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-center">
                              <span>Sahar Darya</span>
                              <p className='text-xs'>Techincal Support</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex flex-col items-center p-2 mb-2 group relative">
                            <div className="relative flex items-end mb-2">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 group-hover:rotate-[360deg] rounded-full border-2 border-[#69f9b0] shadow-[0_0_14px_#69f9b0] transition delay-150 duration-300 ease-in-out group-hover:scale-110"
                                src="/user/profile_03.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-center">
                              <span>Sahar Darya</span>
                              <p className='text-xs	'>Sales Support</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex flex-col items-center p-2 mb-2 group relative">
                            <div className="relative flex items-end mb-2">
                              <Image
                                width={50}
                                height={50}
                                alt='user'
                                className="w-14 h-14 group-hover:rotate-[360deg] rounded-full border-2 border-[#b1b1b1] shadow-[0_0_14px_#b1b1b1] transition delay-150 duration-300 ease-in-out group-hover:scale-110"
                                src="/user/profile_04.jpg"
                              />
                              <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                              </span>
                            </div>
                            <div className="text-center">
                              <span>Sahar Darya</span>
                              <p className='text-xs'>Techincal Support</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={toggleDiv}
                    className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-full hover:shadow-[0px_0px_10px_rgba(12,12,12,0.5)] shadow-[0_0_10px_rgba(12,12,12,0.3)]`}
                    
                    >
                    <svg 
                    className={`fill-white duration-500 ${
                      !isDivVisible && "rotate-[360deg]"
                    }`}
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                  </button>
                </div>
              )}
              {selectedOption === 'wa-7' && (
                <div className="flex flex-col items-end fixed right-6 bottom-4">
                {isDivVisible && (
                  <div className="flex flex-wrap flex-col shadow-[0px_3px_7px_rgba(12,12,12,0.18)] w-[300px] mb-4 duration-1000 transition-transform delay-1000">
                    <div className='bg-gradient-to-r from-[#26C281] to-[#09e072] text-white p-4 text-center rounded-t-xl'>
                      <div className="flex items-center group relative">
                        <div className="relative flex items-end">
                          <Image
                            width={50}
                            height={50}
                            alt='user'
                            className="w-14 h-14 rounded-full p-1 border-2 border-white group-hover:rotate-[360deg] duration-700"
                            src="/user/profile_01.jpg"
                          />
                          <span className="relative flex h-3 w-3 bottom-[3px] left-[-10px]">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26C281] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#09e072]"></span>
                          </span>
                        </div>
                        <div className="text-left">
                          <span>Sahar Darya</span>
                          <p className='text-xs	'>Sahar left 7 mins ago</p>
                        </div>
                        <div className="hidden group-hover:block">
                          <svg className='fill-[#09e072] absolute right-3 top-[20px] opacity-50' stroke="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[rgb(230,221,212)] p-4 relative overflow-hidden">
                        <Image
                            width={50}
                            height={50}
                            alt='user'
                            className="absolute left-0 right-0 top-0 bottom-0 opacity-10 bg-repeat"
                            src="/user/bg.png"
                        />
                        <div className="relative m-3">
                          <div className="table leading-7 bg-white px-4 py-2 text-left">
                              <span className='text-[rgba(0,0,0,0.4)] font-bold'>Sahar Darya</span>
                              <p className='pl-3'>Hello there 👋</p>
                              <p className='pl-3'>How can I help you?</p>
                          </div>
                          <div className="absolute border-[22px] border-[#fff_transparent_transparent_transparent] left-[-20px] top-0"></div>
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-b-xl">
                      <button
                        className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-3xl"
                        >
                        <svg 
                        className="fill-white"
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                        <span className='text-sm pl-2 font-medium'>Chat</span>
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={toggleDiv}
                  className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#26C281] to-[#09e072] text-white rounded-full hover:shadow-[0px_0px_10px_rgba(12,12,12,0.5)] shadow-[0_0_10px_rgba(12,12,12,0.3)]`}
                  
                  >
                  <svg 
                  className={`fill-white duration-500 ${
                    !isDivVisible && "rotate-[360deg]"
                  }`}
                  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" version="1.1" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
                </button>
              </div>
              )}
              {selectedOption === 'wa-8' && (
                <div></div>
              )}
              {selectedOption === 'wa-9' && (
                <div></div>
              )}
              {selectedOption === 'wa-10' && (
                <div className="">
                  {isDivVisible && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
                      This is the div that gets shown or hidden.
                    </div>
                  )}
                  <button
                    onClick={toggleDiv}
                    className={`fixed bottom-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md ${
                      isDivVisible ? 'rotate-[360deg]' : ''
                    }`}
                    
                  >
                    Toggle Div
                  </button>
                  
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MessengerApp;
