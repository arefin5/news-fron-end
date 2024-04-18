"use client";
import { useEffect, useState } from 'react';

// Define the type for Fingerprint2
// declare const Fingerprint2: {
//   new (): {
//     get(callback: (result: string) => void): void;
//   };
// };

const UserInfo = () => {
  const [deviceID, setDeviceID] = useState('');
  const [ipInfo, setIpInfo] = useState(null); // Define type based on your JSON response

  useEffect(() => {
    const loadFingerprint = async () => {
      const script = document.createElement('script');
      script.src = '/fingerprint2.min.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Use the Fingerprint2 type definition
        new Fingerprint2().get(function (result) {
          setDeviceID(result);
        });
      };

      // Fetch IP information
      fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
          setIpInfo(data);
        })
        .catch(error => console.error('Error fetching IP information:', error));
    };

    loadFingerprint();
  }, []);

  const detectDeviceType = () => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent;
      if (/android/i.test(userAgent)) {
        return 'Android Phone';
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'iPhone';
      } else if (/tablet/i.test(userAgent)) {
        return 'Tablet';
      } else if (/mobile/i.test(userAgent)) {
        return 'Mobile';
      } else {
        return 'Desktop or Laptop';
      }
    } else {
      return 'Desktop or Laptop'; // Assume desktop or laptop for server-side rendering
    }
  };
  

  return (
    <div className=' max-w-screen-xl md:px-10 px-2 my-20 mx-auto'>
      <p><strong>Device ID:</strong> {deviceID}</p>
      {ipInfo && (
        <>
          <p><strong>IP:</strong> {ipInfo.ip}</p>
          <p><strong>City:</strong> {ipInfo.city}</p>
          <p><strong>Region:</strong> {ipInfo.region}</p>
          <p><strong>Country:</strong> {ipInfo.country}</p>
          <p><strong>Location:</strong> {ipInfo.loc}</p>
          <p><strong>Organization:</strong> {ipInfo.org}</p>
          <p><strong>Postal Code:</strong> {ipInfo.postal}</p>
          <p><strong>Timezone:</strong> {ipInfo.timezone}</p>
        </>
      )}
      <p><strong>Device Type:</strong> {detectDeviceType()}</p>
    </div>
  );
};

export default UserInfo;