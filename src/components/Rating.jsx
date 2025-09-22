import React from "react";
import { Star } from "lucide-react";

const Rating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex gap-1 flex-wrap justify-center">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          // Full star
          return (
            <Star
              key={index}
              size={24}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        } else if (rating > starValue - 1 && rating < starValue) {
          // Partial star (decimal part)
          const fillPercent = (rating - (starValue - 1)) * 100;

          return (
            <div key={index} className="relative w-6 h-6">
              {/* base */}
              <Star size={24} className="text-gray-300" />
              {/* Filled overlay */}
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${fillPercent}%` }}
              >
                <Star size={24} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          // Empty star
          return <Star key={index} size={24} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

export default Rating;
