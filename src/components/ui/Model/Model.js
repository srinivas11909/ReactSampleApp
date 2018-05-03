import React,{Component} from 'react';
import ReactAux from '../../../hoc/ReactAux';
import Backdrop from './Backdrop/Backdrop';
import classes from './Model.css';


class Model extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
      console.log('[Modal] WillUpdate');
  }

  render () {
    return(
      <ReactAux>
      <Backdrop show={this.props.show} clicked={this.props.modelClose}/>
      <div
         className={classes.Modal}
         style={{transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
        <div>{this.props.children}</div>
      </div>
      </ReactAux>
    )
  }
}


export default Model;
