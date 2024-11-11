'use client'
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company",
    testimonial:
      "This service is absolutely fantastic! It has revolutionized the way we work.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Head, Business",
    testimonial:
      "The level of support and dedication is beyond compare. Highly recommended!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Product Manager, Startup",
    testimonial:
      "Using this service has been a game-changer for our business growth.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-3">Happy clients</h2>
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={prevSlide}
        >
          &#9664;
        </button>

        <div className="w-full p-6 bg-white rounded-lg shadow-lg text-center transition-transform duration-500">
          <div className="flex flex-col items-center">
           
            <p className="text-lg italic text-gray-600 mb-4">
              "{testimonials[currentIndex].testimonial}"
            </p>
            <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
            <span className="text-gray-500">{testimonials[currentIndex].role}</span>
          </div>
        </div>

        <button
          className="absolute right-0 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={nextSlide}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
