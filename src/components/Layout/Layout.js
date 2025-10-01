import Wrapper from "../../hoc/Wrapper";
import Toolbar from "../Header/Toolbar/Toolbar";
import SideDrawer from "../Header/SideDrawer/SideDrawer";
import './Layout.css';
import { Component } from "react";

class Layout extends Component{
    
    state={
        showSideDrawer:false
    }
 
    drawToggle=()=>{
        this.setState({
            showSideDrawer:!this.state.showSideDrawer
        })
    }
    sideDrawerClosedHandler = () => {
        this.setState( { 
            showSideDrawer: false 
        } );
    }
    render(){
    return (
        <Wrapper>
            
            <Toolbar show={this.drawToggle}/>
            {this.state.showSideDrawer && <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler}/>}
            <main className='Content'>{this.props.children}</main>
        </Wrapper>
    )
    }
};

export default Layout;