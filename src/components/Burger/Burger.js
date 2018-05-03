import React from 'react';
import classes from './Burger.css';
import {withRouter} from 'react-router-dom';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props)
  let transormingredients = Object.keys(props.ingredients).map( (igkey) => {
       return  [...Array( props.ingredients[igkey])].map((_, i) => {
         return <BurgerIngredient key={igkey + i} type={igkey} />;
       });
    })
    .reduce((arr, el)=>{
      return arr.concat(el)
    }, []);
    if(transormingredients.length === 0){
        transormingredients = <p style={{textAlign: 'center'}}>Please Add ingredient</p>
    }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
       {transormingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
