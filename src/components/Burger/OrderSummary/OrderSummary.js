import React from 'react';
import Button from '../../ui/Model/Button/Button';
import ReactAux from '../../../hoc/ReactAux';

const ordersummary = (props) => {
   const ingredientSummary = Object.keys(props.ingredients)
     .map(ihkey => {
       return (
         <li key={ihkey}><span style={{color: 'tomato',textTransform:'Capitalize'}}>{ihkey} :</span> {props.ingredients[ihkey]}</li>
       )

     });
     return (
       <ReactAux>
         <h3>Your Order Summary</h3>
          <ul style={{listStyle: 'none',padding: '0'}}>
           {ingredientSummary}
          </ul>
          <p>{props.pricelist.toFixed(2)}</p>
          <Button btnType="Danger" clicked={props.purchasecancel}>Cancel</Button>
          <Button btnType="Success" clicked={props.purchasecontinue}>Continue</Button>
       </ReactAux>
     )
};


export default ordersummary;
