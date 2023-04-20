import React from 'react';
import './Badge.scss';

const Badge = ({ color, onClick }) => {
  return (
    <i className={`badge badge--${color}`}
        onClick={onClick}>
    </i>   
  );      
}


export default Badge;
