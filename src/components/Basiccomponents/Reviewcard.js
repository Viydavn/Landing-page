import React from 'react';

const ReviewCard = ({ icon, review, avatarSrc, name, title, rating }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="icon">{icon}</div>
      </div>
      <div className="content">
        <p>{review}</p>
        <div className="details">
          <div className="avatar">
            <img src={avatarSrc} alt="User Avatar" />
          </div>
          <div>
            <p><strong>{name}</strong></p>
            <p>{title}</p>
            <p>Rating: {rating} stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
