'use client';
import Review from './Review';
import { useState, useEffect } from 'react';
import { people } from '../app/constant';

export default function Home() {
  const [index, setIndex] = useState(0);

  // const nextPerson = () => setIndex((i) => (i + 1) % people.length);
  // const prevPerson = () => setIndex((i) => (i - 1 + people.length) % people.length);
  const nextPerson = () => setIndex((i) => (i + 1) % people.length);
  const prevPerson = () =>
    setIndex((i) => (i + 1 + people.length) % people.length);
  // Auto-rotate reviews (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % people.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  const { image, name, job, text } = people[index];

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 font-sans">
      <main className="w-full max-w-2xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <Review
            image={image}
            name={name}
            job={job}
            text={text}
            nextPerson={nextPerson}
            prevPerson={prevPerson}
          />
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
