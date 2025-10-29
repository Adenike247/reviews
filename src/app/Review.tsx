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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center relative">
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 relative">
            <Image
              src={image}
              alt={name}
              fill
              className="rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-500 text-sm mb-3 uppercase">{job}</p>
        <p className="text-gray-600 text-sm italic mb-6">{text}</p>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prevPerson}
            className="p-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextPerson}
            className="p-2 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
