import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../ui/Model/Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux';



const sidedrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <ReactAux>
     <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
        <nav>
           <NavigationItems />
        </nav>
      </div>
    </ReactAux>
  );
};


export default sidedrawer;
