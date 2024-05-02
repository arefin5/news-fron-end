"use client";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';



const menuItems = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    id: 2,
    name: 'All Articles',
    url: '/dashboard/articles',
    submenus: [
      { id: 21, name: 'Articles', url: '/dashboard/articles' },
      { id: 22, name: 'AI articles add', url: '/dashboard/articles/add' },
    ],
  },
  {
    id: 3,
    name: 'Messenger',
    url: '/dashboard/messenger',
    submenus: [
      {
        id: 31,
        name: 'Messenger List',
        url: '/dashboard/messenger' },
      {
        id: 32,
        name: 'Settings',
        url: '/dashboard/messenger/settings'
      },
    ],
  },
  {
    id: 111,
    name: 'Integrations',
    url: '/dashboard/integrations',
  },
  {
    id: 1111,
    name: 'Publications',
    url: '/dashboard/publications',
  },
];

const Sidebar= () => {
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenSubmenuId((prevId) => (prevId === id ? null : id));
  };

  const [popupSide, setPopupSide] = useState(null);

  const togglePopup = (side) => {
    setPopupSide(popupSide === side ? null : side);
  };

  const closePopup = () => {
    setPopupSide(null);
  };

  return (
    <div className="bg-bg relative md:h-screen">
        
          <div className='flex z-50 items-center justify-between shadow-lg'>
            <Icon
              icon="solar:hamburger-menu-broken"
              onClick={() => togglePopup('left')}
              className='cursor-pointer md:hidden block m-2'
              fontSize={25}
            />
            <Link
              href="/dashboard"
            >
              <Image
                src="/logo.png"
                width={240}
                height={70}
                alt='hero'
                className=''
              />
            </Link>
            <Icon
              icon="lets-icons:user-light"
              onClick={() => togglePopup('right')}
              className='cursor-pointer md:hidden block m-2'
              fontSize={25}
            />        
          </div>
          
          <div>
            <ul
              className={`text-base
              ${ popupSide === 'left' ? 'fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto' : ' hidden md:block'}`}
            >
              <Icon
                icon="iconoir:cancel"
                onClick={closePopup}
                className='cursor-pointer md:hidden block p-2'
                fontSize={40}
              />
              {menuItems.map((menuItem) => (
                <li key={menuItem.id} className="text-gray-700">
                  <div className={`flex justify-between items-center hover:bg-gray-200 ${openSubmenuId === menuItem.id ? 'bg-gray-200 text-gray-700' : ''}`}>
                    <Link
                      href={menuItem.url}
                      className="block py-2 px-4"
                      onClick={() => toggleSubmenu(menuItem.id)}
                    >
                      {menuItem.name}
                    </Link>
                    {menuItem.submenus && (
                      <button
                        onClick={() => toggleSubmenu(menuItem.id)}
                        className="focus:outline-none py-2 px-4 text-gray-700 hover:text-gray-800"
                      >
                        <svg
                          className={`h-4 w-4 transition-transform transform ${openSubmenuId === menuItem.id ? 'rotate-90' : ''}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {menuItem.submenus && openSubmenuId === menuItem.id && (
                    <ul className='text-sm'>
                      {menuItem.submenus.map((submenu) => (
                        <li key={submenu.id} className="text-gray-700">
                          <Link href={submenu.url} className="block py-2 pl-4 hover:bg-gray-200 hover:text-gray-800 rounded">
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        

          <div
            className={`text-base
            ${ popupSide === 'right' ? 'fixed top-0 left-0 right-0 bottom-0 bg-white' : ' hidden md:block'}`}
          >
            <Icon
              icon="iconoir:cancel"
              onClick={closePopup}
              className='cursor-pointer md:hidden block p-2'
              fontSize={40}
            />
            <Link
              href="/dashboard/prices"
              className='bg-gray-700 text-white flex items-center py-2 px-4'
            >
              <Icon
                icon="game-icons:two-coins"
                fontSize={20}
              />
              <span className='ml-1 font-light'>
                <b>3</b> credits left
              </span>
            </Link>
            <Link
              href="/"
              className='flex hover:bg-gray-200 items-center py-2 px-4'
            >
              <Icon
                icon="academicons:ideas-repec"
                fontSize={20}
              />
              <span className='ml-1 font-light'>
                Request feature
              </span>
            </Link>
            <Link
              href="/"
              className='flex hover:bg-gray-200 items-center py-2 px-4'
            >
              <Icon
                icon="arcticons:vivo-appstore"
                fontSize={20}
              />
              <span className='ml-1 font-light'>
                Whats New
              </span>
            </Link>
            <Link
              href="/"
              className='flex hover:bg-gray-200 items-center py-2 px-4'
            >
              <Icon
                icon="circum:logout"
                fontSize={20}
              />
              <span className='ml-1 font-light'>
                Logout
              </span>
            </Link>
          </div>
    </div>
  );
};

export default Sidebar;
