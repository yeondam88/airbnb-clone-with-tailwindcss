import React from 'react';

function MainContainer(props) {
  return (
    <div className="max-w-5xl mx-auto lg:py-16 py-12 lg:px-0 px-4">
      {props.children}
    </div>
  );
}

export default MainContainer;
