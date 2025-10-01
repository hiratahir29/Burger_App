import './DrawToggle.css';

const DrawToggle=(props)=>{
   return( 
   <div className="DrawToggle" onClick={props.show}>
    <div></div>
    <div></div>
    <div></div>
   </div>);
}
export default DrawToggle;