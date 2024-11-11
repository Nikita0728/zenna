import React from "react";
import tee from "@/app/assets/TEE.jpg"
import Image from "next/image";

const ShoppingCart = () => {
  const items = [
    {
      id: 1,
      name: "Basic Tee",
      color: "Sienna",
      size: "Large",
      price: 32.0,
      image: tee,
      status: "In stock",
    },

    {
        id: 1,
        name: "Basic Tee",
        color: "Sienna",
        size: "Large",
        price: 32.0,
        image: tee,
        status: "In stock",
      },
      
      {
        id: 1,
        name: "Basic Tee",
        color: "Sienna",
        size: "Large",
        price: 32.0,
        image: tee,
        status: "In stock",
      },

    {
      id: 2,
      name: "Basic White Tee",
      color: "Black",
      size: "Large",
      price: 32.0,
      image: tee,
      status: "Ships in 3-4 weeks",
    },
    {
      id: 3,
      name: "Nomad Tumbler",
      color: "White",
      size: "",
      price: 35.0,
      image: tee,
      status: "In stock",
    },
  ];

  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="flex flex-col lg:flex-row p-6">
      {/* Left Section: Cart Items */}
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
            <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.color} {item.size && ` - ${item.size}`}</p>
              <p className="text-sm font-medium">NPR {item.price.toFixed(2)}</p>
              <p className="text-sm text-green-500">{item.status}</p>
            </div>
            <div className="flex items-center">
              <select className="border rounded p-1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="ml-4 text-gray-500 hover:text-red-500">×</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Order Summary */}
      <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg lg:ml-8 mt-8 lg:mt-0">
        <h2 className="text-lg font-bold mb-4">Order summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>NPR {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="flex items-center">
            Shipping estimate
            <span className="ml-1 text-gray-400 text-sm">?</span>
          </span>
          <span>NPR {shippingEstimate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="flex items-center">
            Tax estimate
            <span className="ml-1 text-gray-400 text-sm">?</span>
          </span>
          <span>NPR {taxEstimate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Order total</span>
          <span>NPR {orderTotal.toFixed(2)}</span>
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
