import'./Summary.css';

const Summary=(props)=>{

    let list=props.ing.map(obj=>{
        return(
            <li>{obj.name} : {obj.no}</li>
        )
    })
    return(
        <div className='SummaryDisplay'>
            <div>Your Order</div>
            <div>
                Buger is Ready with following ingredients
            </div>
            <ul>
                {list}
            </ul>
            
            <div>Do you wish to proceed to Checkout?</div>
            <button className='Button Danger' onClick={props.back}>Cancel</button>
            <button className='Button Success' onClick={props.continue}>Continue</button>
        </div>
    )
}
export default Summary;