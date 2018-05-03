import React, { Component } from 'react';
// import logo from './logo.svg';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route, Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
           <Switch>
             <Route path="/order" component={Checkout} />
             <Route path="/" exact component={BurgerBuilder} />
           </Switch>
            {/* // <BurgerBuilder></BurgerBuilder>
             // <Checkout />*/}
        </Layout>
      </div>
    );
  }
}

export default App;
