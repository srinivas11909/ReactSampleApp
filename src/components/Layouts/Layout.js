import React,{Component} from 'react';
import ReactAux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from'./Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  state={
    isShow: false
  }
  sidedrawerClosed = () => {
    this.setState({isShow: false})
  }
  sidedrawerToggle = () => {
    this.setState((prevState) => {
      return { isShow: !prevState.isShow };
    });
  }
  render(){
    return(
      <ReactAux >
        <Toolbar toggleclicked={this.sidedrawerToggle}/>
        <SideDrawer open={this.state.isShow} closed={this.sidedrawerClosed}/>
        <main className={classes.Content}>{this.props.children}</main>
      </ReactAux>
    )
  }
}




export default Layout;
