'use client';
import React, { useEffect, useState } from "react";


export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) + " " +
        now.toLocaleTimeString('en-US', { hour12: false })
      );
    };

    // Initial call to set the time immediately
    updateDateTime();

    // Set interval to update the time every second
    const interValid = setInterval(updateDateTime, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interValid);

  }, []);  // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <header className="bg-black text-white body-font gap-5 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        {/* Logo Section */}
       

        {/* DateTime with Margin for spacing */}
        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <span>{currentDateTime}</span>
        </div>

        {/* Navbar Links */}
       

        {/* Button */}
        <button className="inline-flex items-center bg-blue-400 border-0 py-2 px-4 focus:outline-none hover:bg-amber-500 rounded text-white mt-4 md:ml-0 transition-colors duration-300">
          Youtube
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24">
            <path d="M12 2v20M6 12l6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
