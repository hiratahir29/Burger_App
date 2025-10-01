import './Error.css';
const Error=(props)=>{
    return(
        <div className='Error'>
            <p onClick={props.disable}>Network Error</p>
        </div>
    );
}
export default Error;