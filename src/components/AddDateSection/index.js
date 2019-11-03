import React from 'react';

function AddDateSection() {
  return (
    <section className="lg:mt-16 mt-8">
      <h3 className="font-bold text-2xl lg:mb-2 mb-4 leading-none">
        When are you traveling?
      </h3>
      <p className="font-light">
        Add dates for updated pricing and availability
      </p>
      <a
        href="#"
        className="bg-cyan px-6 py-3 rounded text-white font-bold inline-block my-2"
      >
        Add Dates
      </a>
    </section>
  );
}

export default AddDateSection;
