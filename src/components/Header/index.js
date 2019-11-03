import React from 'react';
import Logo from './Logo';
import Button from '../Shared/Button';

import airbnb_bg from '../../images/airbnb-home.jpg';

function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${airbnb_bg})` }}
      className="relative bg-no-repeat bg-cover lg:bg-center p-6 bg-top-right"
    >
      <a href="/">
        <Logo />
      </a>

      <div className="max-w-5xl mx-auto lg:py-32 py-2">
        <h2 className="lg:text-5xl text-4xl font-semibold text-white leading-none mb-4">
          Book a trip. Host travel. All on Airbnb.
        </h2>
        <div className="flex items-center flex-wrap justify-sart max-w-2xl lg:mx-0 mx-auto">
          <div className="lg:pr-5 w-full lg:w-1/2 mb-4 lg:mb-0">
            <p className="text-white mb-2 tracking-wide">
              Find places to stay and things to do.
            </p>
            <Button
              classes="transition bg-white px-10 py-3 rounded font-bold hover:bg-gray-300 block w-full text-center border-2 border-white"
              name="Explore"
            />
          </div>
          <div className="lg:pl-5 w-full lg:w-1/2">
            <p className="text-white mb-2 tracking-wide">
              Earn money from your extra space.
            </p>
            <Button
              classes="transition bg-transparent px-10 py-3 rounded font-bold hover:bg-gray-800 block w-full text-center border-2 border-white text-white"
              name="Host"
            />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
