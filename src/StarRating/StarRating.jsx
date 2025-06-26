import { FaStar } from "react-icons/fa";

import { useState } from "react";

const StarRating = ({ starCount = 4 }) => {
  // a star count
  const [rating, setRating] = useState(0); // rating and its setter
  const [hover, setHover] = useState(0); // hover state and setHover

  function handleClick(getCurrentIndex) {
    // get the current index of star
    setRating(getCurrentIndex); // set the rating Count as the current index Count of star
  }

  function handleMouseEnter(getCurrentIndex) {
    // when the mouse enters over a star, get the current index of the star
    setHover(getCurrentIndex); // While Hovering, set the rating Count as the current index Count of star
  }
  function handleMouseLeave() {
    setHover(rating); //   when the mouse leaves the star, set the star count as the rating count
  }

  return (
    <div className="star-rating">
      {[...Array(starCount)].map((_, index) => (
        // Create an array of length = starCount and map through it to render that many stars (icons)
        <FaStar
          key={index} // // Render each star icon with a unique key using index
          className={index <= (hover || rating) ? "active" : "inactive"}
          // If current index is less than or equal to hover or rating, apply 'active' class; else 'inactive'

          onClick={() => handleClick(index)}
          // When star is clicked, set the rating to the current index
          onMouseEnter={() => handleMouseEnter(index)}
          // When mouse enters a star, update hover state to show temporary highlight
          onMouseLeave={() => handleMouseLeave(index)}
          // When mouse leaves a star, reset the hover value back to current rating
          size={"40px"}
        />
      ))}
    </div>
  );
};

export default StarRating;
