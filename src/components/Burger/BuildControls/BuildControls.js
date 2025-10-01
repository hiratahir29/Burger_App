import BuildControl from "./BuildControl/BuildControl"
import './BuildControls.css';
const BuildControls=props=>{
    const controls=[
        {label:"Meat",type:"meat"},
        {label:"Cheese",type:"cheese"},
        {label:"Salad",type:"salad"},
    ]
    
    return(
        <div className="BuildControls">
            <div>Current Price: <strong>{props.price}</strong></div>
            {console.log(props.dis)}
            {
                controls.map(obj=>{
                    return <BuildControl label={obj.label}
                            added={()=>props.adding(obj.type)}
                            removed={()=>props.removing(obj.type)}
                            disable={props.dis[obj.type]}  //get only specific ingredient's boolean value from the 'flag' obj passed as prop here in 'dis'
                           />
                })
            }
            <button className="OrderButton" onClick={props.showSummary}>Order Now</button>
        </div>

    )
}

export default BuildControls;