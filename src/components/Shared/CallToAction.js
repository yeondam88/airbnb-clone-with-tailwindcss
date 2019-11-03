import React from 'react';

function CallToAction() {
  return (
    <a href="#" className="text-cyan text-lg flex items-center font-medium">
      Show all (22,000+)
      <svg
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        className="ml-2 relative w-3 h-3 fill-current text-cyan"
      >
        <path
          d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
          fillRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}

export default CallToAction;
