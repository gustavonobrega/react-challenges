import StarfieldButton from "./starfield-button";

export default function StarfieldButtonDemo() {
  return (
    <div className="min-h-svh grid justify-items-center bg-zinc-50">
      <article className="h-fit mt-12 space-y-6 text-center">
        <div className="text-zinc-800 space-y-2">
          <h1 className="font-bold text-4xl">Starfield Button</h1>
          <h3 className="text-base">Press and hold the key to trigger the button.</h3>
        </div>
        <div className="space-x-2">
          <StarfieldButton
            letter="x"
            handleActivation={() => alert("X")}
          />
          <StarfieldButton
            letter="e"
            handleActivation={() => alert("E")}
          />
        </div>
      </article>
    </div>
  );
}

// <div className='min-h-svh grid justify-items-center bg-zinc-50'>
//   <article className='h-fit mt-12 space-y-3 text-center'>
//     <h3 className='font-bold text-2xl pb-3'>Star Rating Challenge</h3>
//     <p>Rating: {rating} / {NUM_OF_STARS}</p>

//     <StarRating size={40} numOfStars={NUM_OF_STARS} rating={rating} onSetRating={onSetRating} />
//   </article>

// </div>
