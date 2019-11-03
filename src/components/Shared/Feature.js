import React from 'react';
import SupportSVG from './SupportSVG';
import StandardSVG from './StandardSVG';
import HostSVG from './HostSVG';

function Feature(props) {
  return (
    <>
      <div className="lg:w-1/3 w-full lg:pr-4 lg:mb-0 mb-6">
        <SupportSVG />
        <p className="font-bold mt-3 mb-1">24/7 Customer Support</p>
        <p className="text-gray-700 font-light text-sm leading-snug">
          Day or night, we’re here for you. Talk to our support team from
          anywhere in the world, any hour of day.
        </p>
      </div>
      <div className="lg:w-1/3 w-full lg:px-2 lg:mb-0 mb-6">
        <StandardSVG />
        <p className="font-bold mt-3 mb-1">Global hospitality standards</p>
        <p className="text-gray-700 font-light text-sm leading-snug">
          Guests review their hosts after each stay. All hosts must maintain a
          minimum rating and our hospitality standards to be on Airbnb.
        </p>
      </div>
      <div className="lg:w-1/3 w-full lg:pl-4">
        <HostSVG />
        <p className="font-bold mt-3 mb-1">5-star hosts</p>
        <p className="text-gray-700 font-light text-sm leading-snug">
          From fresh-pressed sheets to tips on where to get the best brunch, our
          hosts are full of local hospitality.
        </p>
      </div>
    </>
  );
}

export default Feature;
