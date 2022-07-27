import React from 'react';
import "./Button.scss";

const Button = ({onPress, buttonText}) => {
  return (
    <>
    <button className='button' onClick={onPress}>{buttonText}</button>
    </>
  )
}

export default Button