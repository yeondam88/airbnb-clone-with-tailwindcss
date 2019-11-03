import React from 'react';
import RatingStars from './RatingStars';

function Card(props) {
  return (
    <article className="lg:w-1/3 w-full lg:pr-4 lg:mb-0 mb-6">
      <img
        src={props.photoURL}
        alt="review 1"
        className="object-cover rounded w-full"
      />
      <div className="my-3 flex justify-start items-center">
        <RatingStars count={props.count} />
      </div>
      <p className="text-gray-700 font-light text-sm leading-snug">
        {props.reviewContent}
      </p>
      <div className="flex items-center justify-start my-4">
        <img
          src={props.profilePic}
          className="w-12 h-12 rounded-full flex-shrink-0"
          alt="reviewer"
        />
        <div className="flex-1 pl-4 text-sm">
          <p className="font-semibold leading-none">{props.reviewerName}</p>
          <p>{props.reviewerCountry}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
