import { useState } from 'react'
import StarRating from './star-rating'

const NUM_OF_STARS = 5

export default function StarRatingDemo() {
  const [rating, setRating] = useState(0)

  function onSetRating(newRating: number) {
    setRating(newRating)
  }

  return (    
    <div className='min-h-svh grid justify-items-center bg-zinc-50'>
      <article className='h-fit mt-12 space-y-3 text-center'>
        <h3 className='font-bold text-2xl pb-3'>Star Rating Challenge</h3>
        <p>Rating: {rating} / {NUM_OF_STARS}</p>

        <StarRating size={40} numOfStars={NUM_OF_STARS} rating={rating} onSetRating={onSetRating} />
      </article>

    </div>
  )
}
