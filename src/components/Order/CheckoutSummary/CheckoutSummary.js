import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../ui/Model/Button/Button';
import classes from './CheckoutSummary.css';


const checkoutsummary = ( props ) => {
  return (
      <div className={classes.checkoutsummary}>
        <h1>We hope it taste all</h1>
        <div style={{width: '100%',margin: 'auto'}}>
           <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
      </div>
  )
}

export default checkoutsummary;
