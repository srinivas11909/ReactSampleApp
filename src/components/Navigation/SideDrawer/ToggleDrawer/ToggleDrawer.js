import React from 'react';
import classes from './ToggleDrawer.css'
const toggledraw = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggledraw;
