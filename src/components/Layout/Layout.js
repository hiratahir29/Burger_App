import Wrapper from '../../hoc/Wrapper'
import './Layout.css'

const Layout=(props)=>{
    return(
        <Wrapper>
            <div>Toolbar,Sidedrawer</div>
            <main className="Main">
                {props.children}
            </main>
        </Wrapper>
    )
}


export default Layout;