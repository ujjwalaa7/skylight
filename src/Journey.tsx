import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

function Journey() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  // Toggle the Calendar visibility
  const toggleCalendar = () => setIsCalendarVisible(!isCalendarVisible);

  return (
    <div className="relative h-screen flex flex-col">
      {/* Logo */}
      <header className="absolute top-5 left-5">
        <img src="/path/to/logo.png" alt="Logo" className="h-12" />
      </header>

      {/* Journey Tasks */}
      <main className="flex flex-grow justify-center items-center">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 1</button>
          <div className="w-12 h-0.5 bg-gray-400"></div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 2</button>
          <div className="w-12 h-0.5 bg-gray-400"></div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 3</button>
          <div className="w-12 h-0.5 bg-gray-400"></div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 4</button>
        </div>
      </main>

      {/* Calendar */}
      <footer className="absolute bottom-5 w-full px-5 flex justify-between">
        <span className="text-2xl font-bold text-gray-600">Day 1</span>
        <button onClick={toggleCalendar} className="focus:outline-none">
          <img src="/path/to/calendar-icon.png" alt="Calendar" className="h-8 w-8" />
        </button>
      </footer>

      {/* Conditionally render Calendar component */}
      {isCalendarVisible && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center">
          <Calendar onClose={toggleCalendar} />
        </div>
      )}
    </div>
  );
}

export default Journey;