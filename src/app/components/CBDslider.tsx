// components/DualRangeSlider.tsx
import { useState } from 'react';

interface DualRangeSliderProps {
  heading: {
    name: string;
    symbol:string;
    min:number;
    max:number;
    mini:number;
    maxi:number;
  };
}
export default function DualRangeSlider({ heading }: DualRangeSliderProps) {
  const [minValue, setMinValue] = useState<number>(heading.min);
  const [maxValue, setMaxValue] = useState<number>(heading.max);

  const handleMinChange = (value: number) => {
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (value: number) => {
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 w-full">
      <p className="text-2xl text-teal-800 font-semibold mb-2">{heading.name}</p>
      <div className="relative w-11/12">
        {/* Track */}
        <div className="h-1 bg-teal-300 rounded-lg relative"></div>

        {/* Selected Range */}
        <div
          className="absolute h-1 bg-teal-500 -top-0.5 rounded-none"
          style={{
            left: `${((minValue - heading.mini) / (heading.maxi - heading.mini)) * 100}%`,
            width: `${((maxValue - minValue) / (heading.maxi - heading.mini)) * 100}%`,
          }}
        ></div>

        {/* Min Handle */}
        <input
          type="range"
          min={heading.min}
          max={heading.max}
          value={minValue}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="absolute w-8/12 h-2 appearance-none"
          style={{
            zIndex: 2,
            pointerEvents: 'auto',
            background: 'transparent',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
          }}
        />
        <div
          className="absolute w-4 h-4 bg-teal-500 rounded-tl-xl rounded-br-xl -translate-x-1/2 -top-1.5"
          style={{
            left: `${((minValue - heading.mini) / (heading.maxi - heading.mini)) * 100}%`,
          }}
        ></div>

        {/* Max Handle */}
        <input
          type="range"
          min={heading.min}
          max={heading.max}
          value={maxValue}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="absolute w-full h-2 appearance-none"
          style={{
            zIndex: 3,
            pointerEvents: 'auto',
            background: 'transparent',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
          }}
        />
        <div
          className="absolute w-4 h-4 bg-teal-500 rounded-tl-xl rounded-br-xl -translate-x-1/2 -top-1.5"
          style={{
            left: `${((maxValue - heading.mini) / (heading.maxi - heading.mini)) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between w-full text-teal-800 mt-4">
        <span className='bg-gray-300 px-6 py-1 rounded-2xl ml-3'>{minValue}{heading.symbol}</span> -
        <span className='bg-gray-300 px-6 py-1 rounded-2xl mr-3'>{maxValue}{heading.symbol}</span>
      </div>
    </div>
  );
}
