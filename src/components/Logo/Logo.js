import React from 'react';
import burgerlogo from '../../assests/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerlogo} alt="my burger logo"/>
  </div>
);

export default logo;
