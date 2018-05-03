import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import ToggleDraw from '../SideDrawer/ToggleDrawer/ToggleDrawer';
import classes from './Toolbar.css';


const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleDraw clicked={props.toggleclicked}/>
    <div className={classes.Logo}>
       <Logo/>
    </div>
    <nav className={classes.Desktoponly}>
     <Navigationitems/>
    </nav>
  </header>
);


export default toolbar;
