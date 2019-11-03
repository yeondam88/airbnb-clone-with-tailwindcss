import React from 'react';

import review_img_1 from '../../images/1.jpg';
import review_img_2 from '../../images/2.jpg';
import review_img_3 from '../../images/3.jpg';

import reviewer_1 from '../../images/jeff.jpg';
import reviewer_2 from '../../images/lesley.jpg';
import reviewer_3 from '../../images/denise.jpg';
import Card from '../Shared/Card';

const reviews = [
  {
    photoURL: review_img_1,
    profilePic: reviewer_1,
    content:
      'What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...',
    starCount: 5,
    reviewer: {
      name: 'jeff',
      country: 'United States'
    }
  },
  {
    photoURL: review_img_2,
    profilePic: reviewer_2,
    content:
      'What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...',
    starCount: 4,
    reviewer: {
      name: 'Lesley',
      country: 'United Kingdom'
    }
  },
  {
    photoURL: review_img_3,
    profilePic: reviewer_3,
    content:
      'What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...',
    starCount: 5,
    reviewer: {
      name: 'Denis',
      country: 'United States'
    }
  }
];

function ReviewSection() {
  return (
    <>
      <h3 className="font-bold bold text-2xl mb-4 lg:mb-2 leading-none">
        What guests are saying about homes in the United States
      </h3>
      <div className="flex lg:items-center items-start">
        <svg
          className="w-4 h-4 flex-shrink-0"
          viewBox="0 0 24 24"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{ height: '24px', width: '24px', fill: '#FFB400' }}
        >
          <path
            d="m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01"
            fill="#484848"
          ></path>
          <path d="m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z"></path>
        </svg>
        <p className="pl-2">
          United States homes were <strong>rated 4.8 out of 5 starts</strong>{' '}
          with <strong>42,500,000+ reviews</strong>
        </p>
      </div>

      <section className="flex items-start flex-wrap justify-between lg:my-10 my-6">
        {reviews.map((review, index) => {
          return (
            <Card
              key={index}
              photoURL={review.photoURL}
              count={review.starCount}
              reviewContent={review.content}
              profilePic={review.profilePic}
              reviewerName={review.reviewer.name}
              reviewerCountry={review.reviewer.country}
            />
          );
        })}
      </section>
    </>
  );
}

export default ReviewSection;
