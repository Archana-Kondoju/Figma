import React from 'react';
import Image from 'next/image';

interface Product {
  thc: number,
  cbd:number,
  name: string;
  cultivar: string;
  genetics: string;
  price: string;
  image: string;
  para:string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border bg-transparent border-teal-400 p-0 rounded-tl-3xl rounded-br-3xl shadow hover:shadow-lg transition">
      {/* Updated to use next/image */}
      <div className="flex justify-left">
      <p className='text-lg rounded-xl bg-red-50 text-red-500 font-bold m-4 px-1 left'>{product.para}</p>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-4 h- w-full">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={120} 
        height={100} 
        quality={100}
      />
      </div>
      <div className='bg-teal-300 p-4 m-0 rounded-br-3xl'>
      <div className='flex justify-left'>
        <p className='text-2xl rounded-lg bg-teal-400 text-teal-800 font-extrabold mb-2 px-2 left'>Canify</p>
        </div>
        <div className='flex justify-around'>
        <p className="bg-white text-lg text-teal-600 rounded-lg font-bold mr-2 mt-2 px-4 py-2">THC {product.thc}%</p>
        <p className="text-lg bg-teal-600 text-white rounded-lg font-bold mr-2 mt-2 px-4 py-2">CBD &lt;{product.cbd}%</p>
      </div>
      <h3 className="text-2xl text-teal-800 font-semibold mb-2">{product.name}</h3>
      <div className='flex justify-between'>
        <p className=" text-lg text-teal-600 font-semibold mr-2 mt-2">Kultivar</p>
        <p className=" text-lg text-teal-600 font-semibold mr-2 mt-2">{product.cultivar}</p>
      </div>
      <div className='flex justify-between'>
        <p className=" text-lg text-teal-600 font-semibold mr-2 mt-2">Genetik</p>
        <p className=" text-lg text-teal-600 font-semibold mr-2 mt-2">{product.genetics}</p>
      </div>
      <div className='flex justify-between'>
        <div>
        <p className="text-2xl text-teal-600 font-extrabold mr-2 mt-2">€<span className='text-teal-800'>{product.price}</span></p>
        <p className='text-sm text-gray-600'> pro Gramm</p>
        </div>
      <button className="w-6/12 bg-[#c4f757] text-teal-600 px-4 py-2 right-2 rounded-tl-2xl rounded-br-2xl mt-4  hover:bg-blue-700">
        In den Warenkorb
      </button>
      </div>
      
      </div>
    </div>
  );
};

export default ProductCard;
