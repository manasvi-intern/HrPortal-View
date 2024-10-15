import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white shadow-lg p-1 fixed top-0 left-0 w-full z-50 font-bold" style={{ fontFamily: "'Inria Sans', sans-serif", color: '#055484' }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/inknowtech-logo.png" alt="Logo" className="h-8" />
          </a>
        </div>

        <div className="hidden md:flex space-x-6 ml-80">
          <a href="/" className="hover:text-orange-500 ml-80" style={{ fontSize: '15px' }}>Home</a>
          <a href="/" className="hover:text-orange-500" style={{ fontSize: '15px' }}>My Dashboard</a>
          <a href="/jobs/current-jobs" className="hover:text-orange-500" style={{ fontSize: '15px' }}>Current Jobs</a>
          <a href="/jobs/past-jobs" className="hover:text-orange-500" style={{ fontSize: '15px' }}>Past Jobs</a>
        </div>

        <div className="hidden md:block relative group">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <div className="bg-white bg-opacity-20 rounded-full p-1 transition-all duration-200 ease-in-out group-hover:shadow-inner group-hover:shadow-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#055484"
                viewBox="0 0 24 24"
                className="h-8 w-8 rounded-full"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 2.58-8 6v2h16v-2c0-3.42-3.58-6-8-6z" />
              </svg>
            </div>
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <a href="/settings" className="block px-4 py-2 text-sm hover:bg-orange-400">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-sm hover:bg-orange-400">Logout</a>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">Home</a>
          <a href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">My Dashboard</a>
          <a href="/current-jobs" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">Current Jobs</a>
          <a href="/past-jobs" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">Past Jobs</a>
          <a href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">Settings</a>
          <a href="/logout" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-500">Logout</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
