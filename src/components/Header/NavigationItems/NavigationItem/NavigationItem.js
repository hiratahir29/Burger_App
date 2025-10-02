import React from 'react';
import { Link } from 'react-router';
import './NavigationItem.css';

const NavigationItem = ( props ) => (
    <li className='NavigationItem'>
        <Link 
            to={props.link}>{props.children}</Link>
    </li>
);

export default NavigationItem;