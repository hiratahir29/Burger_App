import './CheckoutSummary.css';

import Burger from '../../components/Burger/Burger';

const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button className='Button Danger' onClick={props.goBack}>Cancel</button>
            <button className='Button Success' >Continue</button>
        </div>
    );
}

export default CheckoutSummary;