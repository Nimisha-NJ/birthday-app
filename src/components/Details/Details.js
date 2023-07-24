import React, { useState } from "react";
import { UserData } from "../Data/Data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

function Details() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = UserData[index];

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index < UserData.length - 1) {
      setIndex(index + 1);
    }
  };
  const randomClick = () => {
    let random = Math.floor(Math.random() * UserData.length);
    setIndex(random);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" alt="" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={handlePrevClick}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextClick}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomClick}>
          Surprise Me
        </button>
      </article>
    </>
  );
}

export default Details;
