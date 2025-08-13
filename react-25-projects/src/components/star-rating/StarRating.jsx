import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './starRating.css'

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handelClick(getCurrentId) {
    setRating(getCurrentId);
  }

  function handelMouseEnter(getCurrentId) {
    setHover(getCurrentId);

  }

  function handelMouseLeave() {
    setHover(rating);


  }

  console.log()
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handelClick(index)}
            onMouseOver={() => handelMouseEnter(index)}
            onMouseLeave={() => {
              handelMouseLeave();
            }}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
