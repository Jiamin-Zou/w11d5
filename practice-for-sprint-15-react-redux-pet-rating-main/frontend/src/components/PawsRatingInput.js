import { useState, useEffect } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const [activeRating, setActiveRating] = useState(rating)

  useEffect( () => setActiveRating(rating)
  , [rating])

  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
      />
      <div className="rating-input" onMouseLeave={() => setActiveRating(rating)}>
        <div className={activeRating >= 1 ? "filled" : "empty"}
          onMouseEnter={() => disabled ? null : setActiveRating(1)}
          onClick = {() => onChange(1)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 2 ? "filled" : "empty"}
          onMouseEnter={() => disabled ? null : setActiveRating(2)}
          onClick = {() => onChange(2)}
          >
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 3 ? "filled" : "empty"}
          onMouseEnter={() => disabled ? null : setActiveRating(3)}
          onClick = {() => onChange(3)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 4 ? "filled" : "empty"}
          onMouseEnter={() => disabled ? null : setActiveRating(4)}
          onClick = {() => onChange(4)}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={activeRating >= 5 ? "filled" : "empty"}
          onMouseEnter={() => disabled ? null : setActiveRating(5)}
          onClick = {() => onChange(5)}>
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;