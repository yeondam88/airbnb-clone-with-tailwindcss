import React from 'react';

function Button(props) {
  return (
    <a
      href="#"
      className={props.classes}
    >
      {props.name}
    </a>
  );
}

export default Button;
