import { useState } from "react";
import { range } from "../../utils/range";
import { Star } from "lucide-react";

interface StarRatingProps {
  numOfStars?: number;
  rating: number;
  onSetRating: (newRating: number) => void;
  size?: number
}

export default function StarRating({
  numOfStars = 5,
  rating,
  onSetRating,
  size = 38
}: StarRatingProps) {
  const [hoverStars, setHoverStars] = useState(0);

  function handleRating(newRating: number) {
    onSetRating(newRating);
  }

  return (
    <div>
      {range(numOfStars).map((star) => {
        star += 1;

        return (
          <button
            className="cursor-pointer"
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoverStars(star)}
            onMouseLeave={() => setHoverStars(0)}
          >
            <Star size={size} fill={(hoverStars || rating) >= star ? "yellow" : "white"} />
          </button>
        );
      })}
    </div>
  );
}
