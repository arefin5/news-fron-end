"use client";
import { useEffect, useState } from 'react';

const Scroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <style>
      {`
        .hera {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          z-index: 9999;
          background: ${scrolled ? '' : 'transparent'};
        }
        .hera a, .hera a span {
          color: ${scrolled ? '' : 'white'};
        }
        @media only screen and (max-width: 600px) {
          .hera a, .hera a span {
            color: #000;
          }
          .hera .herasvg {
            color: ${scrolled ? '#000' : 'white'};
          }
        }
      `}
    </style>
  );
};

export default Scroll;
