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
            {
                controls.map(obj=>{
                    return <BuildControl label={obj.label}
                            added={()=>props.adding(obj.type)}
                            removed={()=>props.removing(obj.type)}
                           />
                })
            }
            <button className="OrderButton">Order Now</button>
        </div>

    )
}

export default BuildControls;