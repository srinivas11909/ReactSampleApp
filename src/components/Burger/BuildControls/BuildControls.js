import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  {label: 'Salad', type:"salad"},
  {label: 'Bacon', type:"bacon"},
  {label: 'Cheese', type:"cheese"},
  {label: 'Meat', type:"meat"}
];

const buildControls = (props) => (
   <div className={classes.BuildControls}>
   <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
     {controls.map(ctrl => {
        return <BuildControl
                  key={ctrl.label}
                  label={ctrl.label}
                  added = {()=> props.addIngredient(ctrl.type)}
                  remove = {()=> props.removeIngredient(ctrl.type)}
                  disabled = {props.disabled[ctrl.type]}
                  />
     })}
     <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
   </div>
);

export default buildControls;
