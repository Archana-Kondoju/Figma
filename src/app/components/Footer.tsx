import React from 'react';
import { FaLeaf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-6 mt-20 rounded-tl-xl rounded-tr-xl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="space-y-2 text-sm">
            <p>AGB</p>
            <p>Impressum</p>
            <p>Datenschutz</p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <FaLeaf className="text-white" />
              <span>Rezept einlosen</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <FaLeaf className="text-white" />
              <span>Live Bestand</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <FaLeaf className="text-white" />
              <span>Videosprechstunde</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <FaLeaf className="text-white" />
              <span>FAQs</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <FaLeaf className="text-white" />
              <span>Kontakt</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="text-sm space-y-2 md:text-right">
            <div>
              <p>Standort</p>
              <p>Bergstrase 49 - 57</p>
              <p>69469 Weinheim (3 Glocken Quartier)</p>
            </div>
            <div>
              <p>Telefon:</p>
              <p>0223 545 5250</p>
            </div>
            <div>
              <p>Öffnungszeiten:</p>
              <p>Mo - Fr: 09:00 - 18:00 Uhr</p>
              <p>Sa: 09:00 - 14:00 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
