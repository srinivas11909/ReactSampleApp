import React, {Component} from 'react';
import ReactAux from '../../hoc/ReactAux';
import axios from 'axios';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/ui/Model/Model';
import Spinner from '../../components/ui/Spinner/Spinner';
//import burger from '../../data/burger';

axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['content-type']='application/json';
axios.defaults.headers.get['content-type']='application/json';
const INGREDIENT_PRICE = {
  meat: 1.2,
  cheese: 0.7,
  bacon: 0.4,
  salad: 1.2
};

class BurgerBuilder extends Component{

  state = {
    ingredients: null,
    totalPrice: 2,
    purchaseable: false,
    isShow: false,
    loadspinner: false
  }



componentDidMount (){
  console.log(this.props);
  axios.get('https://react-burger-c2829.firebaseio.com/ingredients.json')
   .then(response => {
     this.setState({ingredients: response.data});
     //console.log(response);
   })
   .catch(err => {
     console.log(err);
   })

   axios.get('https://organicbuy.herokuapp.com/getAllProducts/')
    .then(response => {
      //this.setState({ingredients: response.data});
      //var res = JSON.parse(response.data)
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    })

}

updatePurchaseState(ingredients) {

  const sum = Object.keys(ingredients)
       .map(igkey=>{
         return ingredients[igkey]
       })
       .reduce((sum, el)=>{
         return sum + el;
       }, 0);

  this.setState({purchaseable: sum>0});

}


addedIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  console.log(oldCount);
  const updatedCount = oldCount + 1;
  const updatedIngredients = {
     ...this.state.ingredients
  };
  updatedIngredients[type] = updatedCount;
  console.log(updatedIngredients);
  const price = INGREDIENT_PRICE[type];
  const oldprice = this.state.totalPrice;
  const newPrice = oldprice + price;
  this.setState({
    totalPrice: newPrice,
    ingredients: updatedIngredients
  });
  this.updatePurchaseState(updatedIngredients);
}

removeIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  if(oldCount === 0){
    return ;
  }
  const updatedCount = oldCount-1;
  const updatedIngredients = {
    ...this.state.ingredients
  };
    updatedIngredients[type] = updatedCount;
    const price = INGREDIENT_PRICE[type];
    const oldprice = this.state.totalPrice;
    const newPrice = oldprice - price;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
      this.updatePurchaseState(updatedIngredients);
}

purchasehandler = () => {
  this.setState({isShow: true})
}

purchasecancelhandler = () => {
  this.setState({isShow: false})
}

purchaseContinue = () => {
  //console.log(burger);
  const order ={
    ingredients: this.state.ingredients,
    price: this.state.totalPrice,
    customer:{
      name: 'srinivas',
      address: {
        street: 'newbay way',
        zipcode: 201201,
        country: 'india'
      },
      email: 'srinivas.reddy865@gmail.com',
      deleiveryMehod: 'fastest'
    }

  }
  // axios.post('https://react-burger-c2829.firebaseio.com/orders.json', order)
  //    .then((response) =>{
  //       this.setState({loadspinner: false, isShow: false})
  //     })
  //    .catch(err => {
  //        this.setState({loadspinner: false, isShow: false})
  //    })
  const queryParams = []
  for(let i in this.state.ingredients){
     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
  }
  const queryString = queryParams.join('&');
  this.props.history.push({
    pathname: '/checkout',
    search: '?' + queryString
  });
}

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    let orderSummary = null;


    let burger = <Spinner/>;
    if(this.state.ingredients){
      burger = (
          <ReactAux>
            <Burger ingredients={this.state.ingredients}></Burger>
            <BuildControls
                addIngredient= {this.addedIngredientHandler}
                removeIngredient= {this.removeIngredientHandler}
                price={this.state.totalPrice}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchasehandler}
               />
               </ReactAux>
             );
             orderSummary =  <OrderSummary
                  ingredients={this.state.ingredients}
                  purchasecontinue={this.purchaseContinue}
                  purchasecancel={this.purchasecancelhandler} pricelist={this.state.totalPrice}/>;
    }
    if(this.state.loadspinner){
         orderSummary = <Spinner/>
    }
    return(
       <ReactAux>

          <Model show={this.state.isShow} modelClose={this.purchasecancelhandler}>
              {orderSummary}
          </Model>
          {burger}

       </ReactAux>
    );
  }
}

export default BurgerBuilder;
