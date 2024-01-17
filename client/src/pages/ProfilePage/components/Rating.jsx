import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { func } from "prop-types";
export const Rating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            //Default size. Du kan ändra sen om stjärnorna är för stora
          />
        );
      })}
    </div>
  );
};
// När du importerar funktionen ange prop numOfStar efter closing tag. Ange sedan antal stjärnor du önskar dig.
