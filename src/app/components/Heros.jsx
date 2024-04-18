"use client";
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Heros = () => {

  return (
    <>
    <div className="max-w-screen-xl mx-auto md:px-10 px-2">
        <div className="py-20 px-6 relative bg-[#1b1b3b] overflow-hidden rounded-2xl">
          <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -top-2/4 -left-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-n.png')]"></div>
          <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -bottom-2/4 -right-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-o.png')]"></div>
          <div className="flex items-center relative flex-col">
            <h2 className="md:text-lg text-sm font-semibold text-blue-700">
            INCREASE YOUR WRITING PRODUCTIVITY
            </h2>
            <h1 className="md:text-4xl mb-10 text-center text-3xl text-white font-extrabold leading-snug block">
              Artificial Intelligence: <br />
              Start writing faster today
            </h1>                    
            <p className="md:text-xl text-xs text-center text-white font-light leading-snug">
            It is like having access to a team of copywriting experts who will write <br /> quality sales text for you in one click.
            </p>
            <Link
                href="/"
                className="bg-min mt-20 mb-10 text-white text-lg w-full md:w-auto font-light rounded-md p-3 px-6 flex justify-center items-center space-x-2"
            >
                Try it for FREE
                <Icon icon="maki:arrow" className='ml-2' fontSize={20} />
            </Link>
            <ul className="flex flex-wrap md:justify-center items-center gap-3 md:max-w-screen-sm text-white">
              <li>
                <Icon
                  icon="tabler:circle-check-filled"
                  className='mr-2 text-blue-500 float-left'
                  fontSize={25}
                />
                <span>
                It does not require payment card details
                </span>
              </li>
              <li>
                <Icon
                  icon="tabler:circle-check-filled"
                  className='mr-2 text-blue-500 float-left'
                  fontSize={25}
                />
                <span>
                dozens of tools for creation
                </span>
              </li>
              <li>
                <Icon
                  icon="tabler:circle-check-filled"
                  className='mr-2 text-blue-500 float-left'
                  fontSize={25}
                />
                <span>
                support for +35 languages
                </span>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </>
    
  );
};

export default Heros;


