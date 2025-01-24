// app/components/FlightSearch.tsx
import { Form } from "@remix-run/react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Search,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import TrendingTours from "./TrendingTours";

export default function About() {
  const locations = [
    {
      id: 1,
      name: "Treebo Tryst",
      description: "Blue Mountain Country Club and Resort",
      temperature: "-02°C",
      weatherDesc: "Very Cold",
      image: "/assets/potala.png",
    },
    {
      id: 2,
      name: "Mountain View Resort",
      description: "Pine Valley Golf Club",
      temperature: "15°C",
      weatherDesc: "Pleasant",
      image: "/assets/blue-lake.png",
    },
    {
      id: 3,
      name: "Lakeside Retreat",
      description: "Crystal Lake Country Club",
      temperature: "22°C",
      weatherDesc: "Warm",
      image: "/assets/everest-base-camp.png",
    },
    {
      id: 4,
      name: "Mountain View Resort",
      description: "Pine Valley Golf Club",
      temperature: "15°C",
      weatherDesc: "Pleasant",
      image: "/assets/mount-kalash.png",
    },
  ];

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tours based on the search term
  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setDirection("left");
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, locations.length]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection("right");
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, locations.length]);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 4000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoplay, handleNext]);

  const currentLocation = locations[currentIndex];

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % locations.length;
    const img = new Image();
    img.src = locations[nextIndex].image;
  }, [currentIndex, locations]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white flex items-center justify-between">
        <div className="font-bold text-xl text-black">KTravels</div>
        <div className="flex items-center space-x-6">
          {/* <a href="#" className="text-gray-600">
            Destination
          </a>
          <a href="#" className="text-gray-600">
            Bookings
          </a>
          <a href="#" className="text-gray-600">
            Activities
          </a>
          <button className="p-2">
            <Search className="w-5 h-5 text-gray-600" />
          </button> */}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#footer"
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            Contact us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-2 md:mx-10 bg-gray-50 rounded-lg shadow-lg space-y-5 ">
        <div className="max-w-6xl mx-auto flex max-sm:flex-col-reverse h-fit sm:h-[400px] relative">
          {/* Content Section */}
          <div className="flex-1 flex flex-col px-6 py-4 sm:py-12 h-full ">
            <div
              className={`flex-1 flex-shrink transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="text-gray-500 mb-4">
                {currentLocation.description}
              </div>
              <h1 className="text-6xl font-bold mb-6 text-gray-500">
                {currentLocation.name}
              </h1>
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-lg text-gray-400">
                  {currentLocation.temperature}
                </span>
                <span className="text-gray-500">
                  {currentLocation.weatherDesc}
                </span>
              </div>
            </div>

            <div className="flex-1 flex space-x-4 items-center">
              <button
                className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
                onClick={handlePrevious}
                disabled={isTransitioning}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="text-gray-400" />
              </button>
              <button
                className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
                onClick={handleNext}
                disabled={isTransitioning}
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="text-gray-400" />
              </button>

              {/* Autoplay toggle */}
              <button
                className={`ml-4 px-4 py-2 rounded-full border transition-colors ${
                  isAutoplay ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={() => setIsAutoplay(!isAutoplay)}
              >
                {isAutoplay ? "Pause" : "Play"}
              </button>

              {/* Slide indicators */}
              <div className="flex space-x-2 ml-4">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-black" : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setDirection(index > currentIndex ? "right" : "left");
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 h-full relative overflow-hidden rounded-t-lg sm:rounded-r-lg ">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={currentLocation.image}
              alt={currentLocation.name}
              onLoad={handleImageLoad}
              className={`max-sm:max-h-24 h-full w-full object-cover transition-transform duration-500 ${
                isTransitioning
                  ? direction === "right"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Search Form */}
        <div className="translate-y-1/2 flex items-center justify-center space-x-2 relative md:px-10 p-2">
          <input
            type="text"
            placeholder="Search Your Destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 px-5 py-6 md:py-10 text-md focus:outline-none text-black rounded-lg shadow-sm bg-white"
          />

          <button
            type="submit"
            className="p-4 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors max-md:hidden"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      <TrendingTours tours={filteredTours} />
    </div>
  );
}
