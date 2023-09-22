import { useState } from "react";

const starRatingComponentStyle = {
  background: "#FFFFFF",
  padding: "3rem",
  borderRadius: "10px",
  fontFamily: "sans-serif",
  textAlign: "center",
};

const heading = {
  fontSize: "1rem",
  fontWeight: "bold",
};

const starContainerStyle = {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  margin: "2rem",
};

const starStyle = {
  margin: "0.5rem",
  display: "inline",
  cursor: "pointer",
};

const messageStyle = {
  fontSize: "1rem",
  width: "30rem",
};

export default function StarRating({ maxStars = 5 }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    console.log(rating);
  }

  return (
    <div>
      {/* <h1>Star Rating Component</h1> */}
      <div style={starRatingComponentStyle}>
        <h2 style={heading}>
          How many stars would you give to our <br /> Online Code Editor?
        </h2>
        <div style={starContainerStyle}>
          {Array.from({ length: maxStars }, (_, i) => (
            <Star key={i} onRate={() => handleRating(i + 1)} 
            full={rating >= i + 1} />
          ))}
        </div>
        <Message rating={rating}/>
      </div>
    </div>
  );
}

function Star({ onRate, full }) {
  return (
    <span style={starStyle} role="button" onClick={onRate}>
      {full ? (
        <svg
          width="40"
          height="40"
          fill="#FBCD16"
          // stroke="#000"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          fill="#E3E8F0"
          // stroke="#000"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
        </svg>
      )}
    </span>
  );
}


// 1. 5-star rating: Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.
// 2. 4-star rating: Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.
// 3. 3-star rating: Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.
// 4. 2-star rating: We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.
// 5. 1-star rating: We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.

function Message({ rating }) {
  const messages = {
    1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    4: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.",
  }
 

  return <div style={messageStyle}>{rating ? messages[rating] : "Rate us😊"}</div>; 
}
   