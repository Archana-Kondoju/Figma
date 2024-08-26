// pages/index.tsx

import React from 'react';
import Layout from './components/layout';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

const products = [
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
  {
    thc:25,
    cbd:1,
    name: 'Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify',
    cultivar: 'Pink Kush',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● sofort lieferbar"
  },
  {
    thc:25,
    cbd:1,
    name: 'Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify',
    cultivar: 'Pink Kush',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● sofort lieferbar"
  },
  {
    thc:25,
    cbd:1,
    name: 'Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify',
    cultivar: 'Pink Kush',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● sofort lieferbar"
  },
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
  {
    thc:18,
    cbd:1,
    name: 'Cannabis Flos 18/1 PT Mango',
    cultivar: 'Mango',
    genetics: 'Hybrid',
    price: "11,66",
    image: '/product.jpg', 
    para: "● nicht lieferbar"
  },
];

const Home: React.FC = () => {
  return (
    <Layout>
      <div className='relative'>
      <div className="ml-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="absolute -bottom-12 right-0 mt-4">
          <Pagination />
      </div>
      </div>
    </Layout>
  );
};

export default Home;
