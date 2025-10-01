import logo from '../../../assests/images/burgerlogo1.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';


const SideDrawer = ( props ) => {
    let attachedClasses = false;
     if (props.open) {
        attachedClasses = true;//['SideDrawer', 'Open'];
    }
    return (
         <div onClick={props.close}>
           // {/* <button show={props.open} clicked={props.closed}>click to go back</button> */}
            { attachedClasses && <div className='SideDrawer Open'>
                <div className='Logo'><img src={logo}/></div>
                <nav>
                    <NavigationItems className='Navigation'/>
                </nav>
            </div>
    }
       </div>
    );
};

export default SideDrawer;