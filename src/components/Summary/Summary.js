import'./Summary.css';
import { Link } from 'react-router';

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
            {/* we have used ? here not / because by writing /checkout/0,2,1 it will assume it to be a new path and search for
            route having this path to activate it (which it will never get as URL can be any sequence of ingredient quantity
            and we don't want to display a NEW page/component everytime. we want to redirect to Checkout page only but add
            these ingredients with URL) */}
           <Link to={"/checkout?"+ props.queryParams }><button className='Button Success' onClick={props.continue}>Continue</button></Link>
        </div>
    )
}
export default Summary;