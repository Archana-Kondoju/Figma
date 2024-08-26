// components/Sidebar.tsx
"use client";
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import CBDSlider from './CBDslider';
import {  RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Sidebar: React.FC = () => {

  const [checkedItems, setCheckedItems] = useState<string[]>(['avaay', 'bedrocan']);

  // List of options
  const options = [
    { id: 'adrexpharma', label: 'ADREXpharma' },
    { id: 'aurora', label: 'Aurora' },
    { id: 'avaay', label: 'Avaay' },
    { id: 'bedrocan', label: 'Bedrocan' },
    { id: 'cannamedical', label: 'Cannamedical' },
  ];

  // Handle checkbox change
  const handleCheckboxChange = (id:string) => {
    setCheckedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id) // Uncheck if already checked
        : [...prev, id] // Check if unchecked
    );
  };

  return (
    <aside className="w-full md:w-1/4 mb-20 bg-teal-50 shadow-md">
      <h2 className="text-3xl  bg-teal-100 rounded-md text-center text-teal-900 font-semibold">Filter</h2>
      
      {/* Price Filter */}
      <div className="mb-6">
        <CBDSlider heading={{ name: "Preis",symbol:" €", min:5, max:10 ,mini:0, maxi:10}}/>
      </div>
      <hr className='mx-3 border-teal-500'/>
      {/* Manufacturer Filter */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium text-teal-800 mt-6 text-center flex items-center justify-center space-x-10">
          <span>Hersteller</span>
          <RiArrowUpSLine className="text-2xl text-teal-600" />  
        </h3>
        <ul className="space-y-2">
      {options.map((option) => (
        <li key={option.id}>
          <input
            type="checkbox"
            id={option.id}
            className="form-checkbox rounded-lg text-teal-600 bg-teal-50 border-teal-600 h-5 w-5"
            checked={checkedItems.includes(option.id)} // Check if the item is in the checkedItems array
            onChange={() => handleCheckboxChange(option.id)} // Toggle the checked state
          />
          <label htmlFor={option.id} className="text-teal-800 text-xl cursor-pointer ml-2">
            {option.label}
          </label>
        </li>
      ))}
    </ul>
        <h4 className="text-xl font-medium text-teal-800 mt-6 text-center border border-[#c4f757] rounded-tl-3xl rounded-br-3xl">mehr anzelgen</h4>
      </div>
      <hr className='mx-3 border-teal-500'/>
      {/* THC Content Filter */}
      <div className="mb-8">
         <CBDSlider heading={{ name: "THC Gehalt", symbol:"%", min:11 , max:18,mini:0, maxi:35}}/>
        <div className="flex justify-between items-center mb-4">
      </div>

      </div>
      <hr className='mx-3 border-teal-500'/>
      {/* CBD Content Filter */}
      <div className="mb-6">
        <CBDSlider heading={{ name: "CBD Gehalt", symbol:"%", min:1, max:5,mini:0, maxi:10 }}/>
      </div>
      <hr className='mx-3 border-teal-500'/>
      <div className='mb-6'>
        <h3 className='text-2xl font-medium text-teal-800 mt-6 text-center'>Genetic</h3>
        <div className='mx-8 my-4 item-center'>
            <button className='bg-teal-500 text-teal px-4 py-1 rounded hover:bg-teal-600 mr-1'>Indica</button>
            <button className='bg-teal-300 text-teal-800 px-4 py-1 rounded hover:bg-teal-600 mr-1'>Sativa</button>
            <button className='bg-teal-300 text-teal-800 px-4 py-1 rounded hover:bg-teal-600 mr-1'>Hybrid</button>
        </div>
      </div>
      <hr className='mx-3 border-teal-500'/>
      <div className='mb-6'>
        <h3 className='text-2xl font-medium text-teal-800 mt-6 text-center'>Bestrahitung</h3>
        <div className='mx-8 my-4 item-center'>
            <button className='text-lg bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600 mr-1'>bestrahit</button>
            <button className='text-lg bg-teal-300 text-teal-800 px-4 py-1 rounded hover:bg-teal-600 mr-1'>nicht bestrahit</button>
        </div>
      </div>
      <hr className='mx-3 border-teal-500'/>
      <div className='mb-6'>
        <h3 className="text-2xl font-medium text-teal-800 mt-6 text-center flex items-center justify-center space-x-10">
          <span>Terpene</span>
          <RiArrowDownSLine className="text-2xl text-teal-600" />  
        </h3>
      </div>
      <hr className='mx-3 border-teal-500'/>
      <div className='mb-6 relative'>
        <h3 className='text-2xl font-medium text-teal-800 mt-6 flex justify-center space-x-2'>
        <RxCross2 className='text-2xl top-1.5 font-extrabold'/>
          <span>alle Filter zurucksetzen</span>
        </h3>
      </div>
    </aside>
  );
};

export default Sidebar;
