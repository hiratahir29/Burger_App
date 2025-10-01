import { Component } from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";

class BurgerBuilder extends Component{
    state={
        ingredients:[
            {name:'meat',no:0,price:20},
            {name:'cheese',no:0,price:10},
            {name:'salad',no:0,price:5}
        ],
        totalPrice:0
    }

        addIng=(type)=>{
        let index=this.state.ingredients.findIndex(i=>i.name===type)
        let obj={...this.state.ingredients[index]}
        obj.no+=1
        let totalUpdatedPrice=this.state.totalPrice
        totalUpdatedPrice+=obj.price
        let updatedIng=[...this.state.ingredients]
        updatedIng[index]=obj
        this.setState({
            ingredients:updatedIng,
            totalPrice:totalUpdatedPrice
        })
    }
    remIng=(type)=>{
        let index=this.state.ingredients.findIndex(i=>i.name===type)
        let obj={...this.state.ingredients[index]}
        if(obj.no<=0)
        {
            return;
        }
        obj.no-=1
        let totalUpdatedPrice=this.state.totalPrice
        totalUpdatedPrice-=obj.price
        let updatedIng=[...this.state.ingredients]
        updatedIng[index]=obj
        this.setState({
            ingredients:updatedIng,
            totalPrice:totalUpdatedPrice
        })
    }
    
    render(){
        return(
            <div>
                 <Burger ingredients={this.state.ingredients}/>
                 <BuildControls price={this.state.totalPrice} adding={this.addIng} removing={this.remIng}/>

            </div>
           
        )
            
        
       

    }
}


export default BurgerBuilder;