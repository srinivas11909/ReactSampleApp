import React, { Component } from 'react';
import Button from '../../../components/ui/Model/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component{
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalcode: ''
    }
  }

  orderHandle = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
  }

  render(){
    return(
      <div className={classes.ContactData}>
         <h4>Enter Your Contact Data</h4>
         <form>
            <input className={classes.Input} type="text" name="name" placeholder="Enter your name" />
            <input className={classes.Input} type="email" name="email" placeholder="Enter your placeholder" />
            <input className={classes.Input} type="text" name="street" placeholder="Enter your Street Name and Address" />
            <input className={classes.Input} type="text" name="postalcode" placeholder="Enter your postalcode" />
            <Button btnType="Success" clicked={this.orderHandle}>Order</Button>
         </form>
      </div>
    )
  }
}

export default ContactData;
