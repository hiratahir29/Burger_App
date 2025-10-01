import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';
import '../NavigationItems/NavigationItems.css';

const Toolbar=(props)=>{
 return (
  <header className='Toolbar'>
    <DrawToggle show={props.show}/>
    
    {/* <div className='Logo'><img className='Logo img' src={logo}/></div> */}
    <nav>
        <NavigationItems className='NavigationItems'/>
    </nav>

  </header>
 );

}
export default Toolbar;