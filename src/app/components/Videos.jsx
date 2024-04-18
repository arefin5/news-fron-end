"use client";
// Videos.tsx

import React, { useRef, useEffect } from 'react';


const Videos = ({ src, autoplay, controls, mute, loop }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.autoplay = autoplay;
      video.controls = controls;
      video.muted = mute;
      video.loop = loop;

      // Programatically play the video if autoplay is enabled
      if (autoplay) {
        video.play().catch(error => {
          console.error('Autoplay error:', error);
        });
      }
    }
  }, [autoplay, controls, mute, loop]);

  return (
    <div className="relative max-w-screen-lg mx-auto">
      <video ref={videoRef} className="w-full h-full" controls={controls}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videos;

