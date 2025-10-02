import { Component } from "react";
import { Navigate } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter";
import Wrapper from "../../hoc/Wrapper";

class Checkout extends Component{
    state={
        ingredients:[
            {name:"meat", no:0,price:20},
            {name:"cheese",no:0,price:10},
            {name:"salad", no:0,price:5}
        ],
        cancel:false
    }

    goBack=()=>{
        this.setState({
            cancel:true
        })
    }
    
    render(){
       
        return(
            <Wrapper>
                {this.state.cancel && <Navigate to="/"/>}
                {/* pass UPDATED ingredients as prop so that it fills burger with same ingredients as coming from URL params */}
                <CheckoutSummary ingredients={this.state.ingredients} goBack={this.goBack}/>
            </Wrapper>
        );
    }
}
export default withRouter(Checkout);