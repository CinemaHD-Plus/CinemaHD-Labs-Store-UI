
import React from 'react';
import { StarIcon } from './icons';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1 > 0;
  const emptyStars = totalStars - fullStars - (partialStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-4 h-4 text-brand-secondary" />
      ))}
      {partialStar && (
         <div className="relative">
             <StarIcon className="w-4 h-4 text-gray-600" />
             <div style={{ width: `${(rating % 1) * 100}%`}} className="absolute top-0 left-0 h-full overflow-hidden">
                <StarIcon className="w-4 h-4 text-brand-secondary" />
             </div>
         </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-600" />
      ))}
    </div>
  );
};
