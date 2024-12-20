import React from 'react';
import Image from 'next/image';
import dress from '@/app/assets/dress.jpg'
// Sample data (replace this with your dynamic data source)
import heels from '@/app/assets/heels-ezgif.com-webp-to-png-converter.png'
import purse from '@/app/assets/purse.jpg'
const products = [
  {
    id: 1,
    name: 'DRAWSTRING DRESS',
    oldPrice: 730.00,
    newPrice: 159.99,
    rating: 4,
    reviews: 3,
    description: 'Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.',
    imageUrl: dress,
    isOnSale: true,
  },
  {
    id: 2,
    name: 'YSL Heels',
    price: 190.00,
    rating: 3,
    reviews: 3,
    description: 'Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.',
    imageUrl: heels,
    isOnSale: false,
  },
  {id: 3,
    name: 'MESH GREEN PURSE',
    price: 190.00,
    rating: 4,
    reviews: 3,
    description: 'Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.',
    imageUrl: purse,
    isOnSale: false},
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col md:flex-row mb-8 border-b pb-4">
        
          <div className="md:w-3/4 md:pl-4">
            <h2 className="text-xl font-bold">{product.name} </h2>
           
          <Image 
              src={product.imageUrl}
              alt={product.name} 
              width={100} // Replace with desired width
              height={100} // Replace with desired height
               
            />
            {product.oldPrice && (
              <p className="text-gray-500 line-through">NPR.{product.oldPrice.toFixed(2)}</p>
            )}
            {/* <p className="text-red-500 text-lg">
              ${product.newPrice ? product.newPrice.toFixed(2) : product.price.toFixed(2)}
            </p> */}
            <div className="flex items-center mb-2">
           
              <span className="text-yellow-500">
                {'★'.repeat(product.rating)}
                {'☆'.repeat(5 - product.rating)}
              </span>
              <p className="ml-2 text-gray-600">{product.reviews} Reviews</p>
            </div>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-4 bg-black text-white px-4 py-2">ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
