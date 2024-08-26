import React from 'react';
import { MdArrowBack, MdArrowForward, MdArrowForwardIos } from 'react-icons/md';

export default function Pagination() {
  return (
    <div className="flex justify-end mt-8 mr-8">
      <div className="flex items-center space-x-2">
        {/* Previous Page Button */}
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">
          <MdArrowBack />
        </button>

        {/* Page Numbers */}
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">1</button>
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">2</button>
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">3</button>
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">...</button>
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">12</button>

        {/* Next Page Button */}
        <button className="px-3 py-1 text-teal-600  text-2xl font-bold hover:bg-teal-50">
          <MdArrowForward/>
        </button>
      </div>
    </div>
  );
}