import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        sideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({sideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => 
        { 
            return {sideDrawer: !prevState.sideDrawer}
        })
    }
    render(){
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.sideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
         </Aux>
        );
    }
}
export default Layout;