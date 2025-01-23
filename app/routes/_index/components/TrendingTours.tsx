import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrendingTours = () => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const tours = [
    {
      id: 1,
      title: "Mountain Hiking Tour",
      image: "/assets/potala.png",
      rating: 4.4,
      places: 12,
      activities: 3,
    },
    {
      id: 2,
      title: "Train Tour Skyline",
      image: "/assets/meditaion.png",
      rating: 3.8,
      places: 12,
      activities: 2,
    },
    {
      id: 4,
      title: "Mountain Hiking Tour",
      image: "/assets/potala.png",
      rating: 4.4,
      places: 12,
      activities: 3,
    },
    {
      id: 5,
      title: "Train Tour Skyline",
      image: "/assets/meditaion.png",
      rating: 3.8,
      places: 12,
      activities: 2,
    },
    {
      id: 3,
      title: "Forest Wild Life",
      image: "/assets/mount-kalash.png",
      rating: 4.6,
      places: 12,
      activities: 3,
    },
    {
      id: 6,
      title: "Forest Wild Life",
      image: "/assets/mount-kalash.png",
      rating: 4.6,
      places: 12,
      activities: 3,
    },
  ];

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
  console.log("width", containerRef.current?.clientWidth,currentIndex);
  return (
    <div className="max-w-6xl mx-auto px-4 pb-10 mt-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Trending 2024</h1>
        <p className="text-gray-600">Top trending Tibet travel destination</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                modifyIndex(currentIndex) * containerRef.current?.clientWidth / 20
              }%)`,
            }}
          >
            <div className="flex space-x-4 h-full border">
              {tours.map((tour) => (
                <div key={tour.id} className="w-60 h-full px-2">
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="relative">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm text-yellow-500">
                        {tour.rating}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-black">
                        {tour.title}
                      </h3>
                      <p className="text-gray-600">
                        {tour.places} Places | {tour.activities} Activities
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
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
        </button>
      </div>
    </div>
  );
};

export default TrendingTours;
