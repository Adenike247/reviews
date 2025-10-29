'use client'
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  image: string;
  name: string;
  job: string;
  text: string;
  prevPerson: () => void;
  nextPerson: () => void;
}

const Review: React.FC<ReviewProps> = ({
  image,
  name,
  job,
  text,
  prevPerson,
  nextPerson,
}) => {
  return (
    <div className="rounded-2xl p-8 w-full text-center relative">
      {/* Fixed Image Container */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Image
            src={image}
            alt={name}
            width={96} // Increased for better visibility
            height={96}
            className="rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
          {/* Optional: Quote icon overlay */}
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-sm"></span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-blue-500 text-sm font-medium mb-4 uppercase tracking-wide">{job}</p>
      <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">{text}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={prevPerson}
          className="p-3 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPerson}
          className="p-3 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Next review"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Review;