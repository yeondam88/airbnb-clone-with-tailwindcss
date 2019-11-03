import React from 'react';
import Feature from '../Shared/Feature';

function FeatureSection() {
  return (
    <>
      <h3 className="font-bold bold text-2xl lg:mb-2 mb-4 leading-none pb-4 border-b border-gray-300">
        Traveling with AirBnb
      </h3>
      <section className="flex items-start flex-wrap justify-between lg:my-8 my-6 border-b border-gray-300 pb-8">
        <Feature />
      </section>
    </>
  );
}

export default FeatureSection;
