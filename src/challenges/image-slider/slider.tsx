import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ImageSliderData } from ".";

interface SliderProps {
  data: ImageSliderData[];
  isLoading?: boolean;
}

export default function Slider({ data, isLoading = false }: SliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNextImage() {
    if (currentImageIndex >= data.length - 1) {
      return;
    }
    setCurrentImageIndex(currentImageIndex + 1);
  }

  function handlePreviousImage() {
    if (currentImageIndex <= 0) {
      return;
    }
    setCurrentImageIndex(currentImageIndex - 1);
  }

  function handleGoToImage(imgIndex: number) {
    setCurrentImageIndex(imgIndex);
  }

  if (isLoading) {
    return (
      <div className="w-3xl aspect-video rounded-lg shadow-md bg-gray-300 animate-pulse" />
    );
  }

  return (
    <div className="relative w-3xl aspect-video shadow-md rounded-lg overflow-hidden">
      {data.map((image, index) => (
        <div
          key={image.id}
          data-current={currentImageIndex === index}
          className="absolute inset-0 opacity-0 transition-opacity duration-500 data-[current=true]:opacity-100"
        >
          <img
            className="w-full h-full object-cover"
            src={image.download_url}
          />
        </div>
      ))}

      <button
        className="absolute group focus:outline-none inset-y-0 my-auto cursor-pointer enabled:hover:bg-linear-to-l enabled:hover:from-transparent enabled:hover:to-black/30 transition-colors disabled:hidden"
        disabled={currentImageIndex <= 0}
        onClick={handlePreviousImage}
      >
        <ChevronLeft
          className="text-white group-focus-visible:outline"
          size={42}
        />
        <span className="sr-only">Previous Image</span>
      </button>

      <button
        className="absolute group focus:outline-none inset-y-0 right-0 my-auto cursor-pointer enabled:hover:bg-linear-to-r enabled:hover:from-transparent enabled:hover:to-black/30 transition-colors disabled:hidden"
        disabled={currentImageIndex >= data.length - 1}
        onClick={handleNextImage}
      >
        <ChevronRight
          className="text-white group-focus-visible:outline"
          size={42}
        />
        <span className="sr-only">Next Image</span>
      </button>

      <div className="absolute inset-x-0 bottom-1 w-fit mx-auto flex gap-1">
        {data.map((_, index) => (
          <span
            key={index}
            className="w-3 h-3 rounded-full cursor-pointer drop-shadow-md transition-colors bg-white/50 data-[current=true]:bg-white data-[current=true]:pointer-events-none"
            data-current={currentImageIndex === index}
            onClick={() => handleGoToImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
