import React from 'react';
import { FaLeaf, FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

export default function Header() {
  const cartItemCount=1;
  return (
    <header className="mt-10 bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen"
            className="bg-[#F1F9F9] rounded-full p-2 pl-4 pr-10 w-[300px] text-sm"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-600" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-20 text-sm">
          <a href="#" className="font-bold text-teal-800 flex items-center space-x-2">
            <FaLeaf className="text-lg text-teal-600" />
            <span>Rezept einlosen</span>
          </a>
          <a href="#" className="font-semibold text-teal-600 flex items-center space-x-2">
            <FaLeaf className="text-lg text-teal-200" />
            <span>Live Bestand</span>
          </a>
          <a href="#" className="font-semibold text-teal-600 flex items-center space-x-2">
          <FaLeaf className="text-lg mr-2 text-teal-200" />
            Videosprechstunde
          </a>
          <a href="#" className="font-semibold text-teal-600 flex items-center space-x-2">
          <FaLeaf className="text-lg mr-2 text-teal-200" />
            FAQs
          </a>
          <a href="#" className="font-semibold text-teal-600 flex items-center space-x-2">
          <FaLeaf className="text-lg mr-2 text-teal-200" />
            Kontakt
          </a>
          <div className='relative'>
            <a href="#" className="font-bold text-teal-600 text-3xl flex items-center">
              <IoCartOutline />
            </a>
            <span className='absolute top-1 -right-2 bg-teal-50 text-teal-600 text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center'>{cartItemCount}</span>
          </div>
          <a
            href="#"
            className="bg-[#c4f757] text-teal-600 rounded-tl-3xl rounded-br-3xl px-4 py-2 font-semibold"
          >
            Anmelden
          </a>
        </div>
      </div>
    </header>
  );
}