import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { func } from "prop-types";
import PropTypes from "prop-types";

export const Rating = ({
  numOfStars = 5,
  rating,
  onRatingChange,
  editable,
}) => {
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    if (editable) {
      onRatingChange(getCurrentIndex);
    }
  }

  function handleMouseEnter(getCurrentIndex) {
    if (editable) {
      setHover(getCurrentIndex);
    }
  }

  function handleMouseLeave() {
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
            size={30}
            style={{ cursor: editable ? "pointer" : "default" }}
          />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  numOfStars: PropTypes.number,
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
};
// När du importerar funktionen ange prop numOfStar efter closing tag. Ange sedan antal stjärnor du önskar dig.
