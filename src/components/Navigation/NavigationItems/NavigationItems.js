import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationitems = (props) => (
  <ul className={classes.Navigationitems}>
    <NavigationItem link="/">BurgerBuilder</NavigationItem>
    <NavigationItem link="/orders">Checkout</NavigationItem>
  </ul>
);

export default navigationitems;
