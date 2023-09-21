import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    console.log(rating)
  }

  return (
    <div>
      {/* <h1>Star Rating Component</h1> */}
      <div className="star-rating">
        <h2 className="heading">
          How many stars would you give to our <br /> Online Code Editor?
        </h2>
        <Stars rating={rating} handleRating={handleRating} />
        <Message />
      </div>
    </div>
  );
}

function Stars({ rating, handleRating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} rating={rating} onRate={() => handleRating(i+1)}/> 
      ))}
      {/* <Star rating={rating}/>
      <Star rating={rating}/>
      <Star rating={rating}/>
      <Star rating={rating}/>
      <Star rating={rating}/> */}
    </div>
  );
}

function Star({ rating, onRate }) {
  return (
    <div className="star" onClick={onRate}>
      <svg
        width="40"
        height="40"
        // fill="currentColor"
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
      </svg>
    </div>
  );
}

function Message() {
  return <div className="message">MESSAGE</div>;
}
