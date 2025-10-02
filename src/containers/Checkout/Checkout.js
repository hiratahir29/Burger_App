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
    componentDidMount(){
        //Extract query parameters from URL starting from ? i.e. ?0,2,1 (representing 0 meat slices, 2 cheese slices and 1 salad) 
        let queryParam=(this.props.location.search);
        //Remove ? from string as it is unnecessary for us now
        queryParam=queryParam.substr(1,queryParam.length-1);
        console.log(queryParam);
        let ingList=[...this.state.ingredients];
        queryParam.split(',').map((e,i)=>{
            //Places rightly e=0 in no i.e. {name:"meat", no:0,price:15}, e=2 in {name:"cheese", no:2,price:15} and same for salad
            ingList[i].no=Number(e);
        })
        console.log(ingList);
        this.setState({
            ingredients:ingList
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