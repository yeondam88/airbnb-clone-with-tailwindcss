import React from 'react';
import PropertyCard from '../Shared/PropertyCard';

import property_img_1 from '../../images/just-booked-1.jpg';
import property_img_2 from '../../images/just-booked-2.jpg';
import property_img_3 from '../../images/just-booked-3.jpg';
import property_img_4 from '../../images/just-booked-4.jpg';

const properties = [
  {
    id: 1,
    name: 'Joshua Tree',
    type: 'Entire house',
    fullname: 'The Joshua Tree House',
    photoURL: property_img_1,
    price: 285,
    ratingCount: 5,
    reviewCount: 467,
    hostType: 'Superhost'
  },
  {
    id: 2,
    name: 'Aptos',
    type: 'Dome house',
    fullname: 'Mushroom Dome Cabin: #1  on airbnb in the world',
    photoURL: property_img_2,
    price: 130,
    ratingCount: 4,
    reviewCount: 1392,
    hostType: 'Superhost'
  },
  {
    id: 3,
    name: 'Orondo',
    type: 'Earth house',
    fullname: 'Underground Hygge',
    photoURL: property_img_3,
    price: 150,
    ratingCount: 5,
    reviewCount: 552,
    hostType: 'Superhost'
  },
  {
    id: 4,
    name: 'Pioneertown',
    type: 'Entire house',
    fullname: 'Off-grid itHouse',
    photoURL: property_img_4,
    price: 450,
    ratingCount: 5,
    reviewCount: 254,
    hostType: 'Superhost'
  }
];

function PropertiesSection() {
  return (
    <>
      <h3 className="font-bold text-2xl lg:mb-2 mb-4">
        Just booked in the United States
      </h3>
      <section className="flex items-start flex-wrap justify-between lg:my-8 my-6">
        {properties.map(property => {
          return (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              type={property.type}
              fullname={property.fullname}
              photoURL={property.photoURL}
              price={property.price}
              ratingCount={property.ratingCount}
              reviewCount={property.reviewCount}
              hostType={property.hostType}
            />
          );
        })}
      </section>
    </>
  );
}

export default PropertiesSection;
