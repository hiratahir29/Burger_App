import { Component } from "react";
import Burger from "../../components/Burger/Burger.js";

class BurgerBuilder extends Component{
    state={
        ingredients:[
            {name:'meat',no:0,price:20},
            {name:'cheese',no:0,price:10},
            {name:'salad',no:0,price:5}
        ]
    }
    render(){
        return(
            <Burger/>
        )
            
        
       

    }
}


export default BurgerBuilder;