import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrendingTours = ({ tours }) => {
  console.log("ff",tours.length)
  const [currentIndex, setCurrentIndex] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tours.length - 1 ? 4 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 4 ? tours.length - 1 : prevIndex - 1
    );
  };

  function modifyIndex(currentIndex) {
    if (currentIndex < 5) {
      return 0;
    }
    if (currentIndex % 2 === 0) {
      currentIndex -= 1; // If even, subtract 1
    }
    currentIndex = currentIndex / 2; // Divide by 2
    currentIndex -= 1; // Subtract 1
    return currentIndex;
  }
  return (
    <div className="max-w-6xl pb-10 mt-20 mx-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Trending 2024</h1>
        <p className="text-gray-600">Top trending Tibet travel destination</p>
      </div>

      <div className="relative">
        <div className="">
          {/* <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                modifyIndex(currentIndex) * containerRef.current?.clientWidth / 20
              }%)`,
            }}
          > */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="w-full cursor-pointer hover:scale-105 transform transition-transform duration-100"
              >
                <div className="bg-white rounded-lg shadow-lg h-full">
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm text-yellow-500">
                      {tour.rating}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600">
                      {tour.places} Places | {tour.activities} Activities
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {tours.length === 0 && <div className="text-center text-gray-400 col-span-full">No tours available</div>}
          </div>
        </div>
      </div>

      {/* <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default TrendingTours;
