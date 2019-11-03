import React from 'react';
import RatingStars from './RatingStars';

function PropertyCard(props) {
  let className = '';

  switch (props.id) {
    case 1:
      className = 'lg:w-1/4 md:w-1/2 w-full lg:pr-2 md:pr-2 lg:mb-0 mb-6';
      break;
    case 2:
      className = 'lg:w-1/4 md:w-1/2 w-full lg:px-1 md:px-1 lg:mb-0 mb-6';
      break;
    case 3:
      className = 'lg:w-1/4 md:w-1/2 w-full lg:px-1 md:px-1 lg:mb-0 mb-6';
      break;
    case 4:
      className = 'lg:w-1/4 md:w-1/2 w-full lg:pl-2 md:pl-2';
      break;
    default:
      className = 'lg:w-1/4 md:w-1/2 w-full lg:pr-2 md:pr-2 lg:mb-0 mb-6';
  }

  return (
    <>
      <a href="#" className={className}>
        <img
          className="object-cover w-full rounded"
          src={props.photoURL}
          alt="property 1"
        />
        <p className="uppercase text-gray-600 text-xs font-bold pt-2">
          {props.type}
          <span className="px-1" aria-hidden="true">
            •
          </span>
          {props.name}
        </p>
        <h4 className="font-medium my-1 text-lg leading-snug">
          {props.fullname}
        </h4>
        <p className="text-gray-600 text-sm mb-1">${props.price}/night</p>
        <div className="flex items-center">
          <RatingStars count={props.ratingCount} />
          <p className="text-xs text-gray-600">
            {props.reviewCount}
            <span className="px-1" aria-hidden="true">
              •
            </span>
            {props.hostType}
          </p>
        </div>
      </a>
    </>
  );
}

export default PropertyCard;
