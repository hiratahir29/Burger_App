import { Component } from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";
import Wrapper from "../../hoc/Wrapper.js";
import Summary from "../../components/Summary/Summary.js";
import axios from '../../axios';

class BurgerBuilder extends Component{
    state={
        ingredients:[
            {name:'meat',no:0,price:20},
            {name:'cheese',no:0,price:10},
            {name:'salad',no:0,price:5}
        ],
        totalPrice:0,
        goingToPurchase:false
    }

        componentDidMount(){
        //to get ingredients from firebase and set burger whenever app loads for the first time
        axios.get('/ingredients.json').then(res=>{
            
           // console.log(res.data);
            let ing=this.state.ingredients;
            console.log(ing);
            ing.map(obj=>{
            //    console.log(obj.name);
            //    console.log(res.data[obj.name]); 
               obj.no=res.data[obj.name]
                
            })
            this.setState({
                ingredients:ing    
            })
        })
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
    showSummary=()=>{
        this.setState({
            goingToPurchase:true
        })
    }
        goBack=()=>{
        this.setState({
            goingToPurchase:false
        })
    }
    goContinue=()=>{
        let myOrder={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            OrderNo:1,
            customer:{
                name:"hira",
                address:"lahore"
            }
        }
        
    }

    
    render(){
        const disabledInfo=[...this.state.ingredients];

        let flag={};   //helps to disable that particular ingredient's button whose quantity is 0
        let quantityOfEveryIngredient=0;
        let disableOrderButton;
        for(let obj of disabledInfo)
        {
            if(obj.no<=0)
            {
                flag[obj.name]=true;
                quantityOfEveryIngredient++;
            }
            else{
                flag[obj.name]=false;
            }
        }
        if(quantityOfEveryIngredient===3)
        {
            disableOrderButton=true;
        }
        else{
            disableOrderButton=false;
        }
         //now flag object contains something like this {'meat': true, 'cheese': true, 'salad': true}. we will pass this object to 'BUildControls'
       
        return(
            <Wrapper>
                {this.state.goingToPurchase && <Summary ing={this.state.ingredients} back={this.goBack} continue={this.goContinue}/>}
                 <Burger ingredients={this.state.ingredients}/>
                 <BuildControls  disableOrderButton={disableOrderButton} price={this.state.totalPrice} adding={this.addIng} removing={this.remIng} dis={flag} showSummary={this.showSummary}/>

            </Wrapper>
           
        )
            
        
       

    }
}


export default BurgerBuilder;