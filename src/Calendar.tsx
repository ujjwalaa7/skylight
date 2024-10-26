import React from 'react';
import logo from './logo.svg';
import './App.css';

interface CalendarProps {
    onClose: () => void;
  }

function Calendar({ onClose }: CalendarProps) {
  return (
    <div className="p-5 bg-white rounded shadow-lg relative">
    {/* Close Button */}
    <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-lg font-bold">
      X
    </button>
    <h2 className="text-xl font-bold mb-4">Calendar</h2>
    {/* Calendar stuff here */}
  </div>
  );
}

export default Calendar;