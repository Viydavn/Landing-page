import React, { useState } from 'react';
import {RightArrowIcn,LeftArrowIcn} from "./icons"

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slides.length - 3));
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={handlePrevSlide} disabled={currentSlide === 0}>
        Left
      </button>
      <div className="slides">
        {slides.slice(currentSlide, currentSlide + 3).map(({ key, image, caption }) => (
          <div key={key} className="slide">
            {image}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={handleNextSlide} disabled={currentSlide === slides.length - 3}>
        Right
      </button>
    </div>
  );
};



export const ReviewsCarousel = ({ reviews }) => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    setCurrentReview((prevReview) =>  Math.max(prevReview - 1, 0) % reviews.length);
  };

  const handleNextReview = () => {
    setCurrentReview((prevReview) => Math.min(prevReview + 1, reviews.length - 3));
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={handlePrevReview} disabled={currentReview === 0}>
        Left
      </button>
      <div className="slides">
        {reviews.slice(currentReview, currentReview + 3).map((review, index) => (
          <div key={index} className="slide">
            <p>{review.comment}</p>
            <p>- {review.user}</p>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={handleNextReview} disabled={currentReview === reviews.length - 3}>
        Right
      </button>
    </div>
  );
};

export default Carousel;
