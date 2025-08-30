import { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const DateRangePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState();
  const dropdownRef = useRef(null);

  const displayDate = () => {
    if (range?.from) {
      if (range.to) {
        return `${format(range.from, 'dd MMM yyyy')} - ${format(range.to, 'dd MMM yyyy')}`;
      }
      return format(range.from, 'dd MMM yyyy');
    }
    return 'Filter by Date';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 w-full md:min-w-[300px] border border-gray-300 rounded-lg flex items-center justify-start gap-2 text-gray-600 hover:bg-gray-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <span>{displayDate()}</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={1}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;