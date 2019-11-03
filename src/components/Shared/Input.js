import React from 'react';

function Input(props) {
  return (
    <>
      <label htmlFor={`${props.elemId}`} className="label">
        {props.label}
      </label>
      <input
        type="text"
        className={`${props.className}`}
        id={`${props.elemId}`}
        placeholder={`${props.placeholder}`}
      />
    </>
  );
}

export default Input;
