import { useLocation, useNavigate, useParams } from "react-router"

const withRouter=WrappedComponent=>props=>{
    const params=useParams();
    const location=useLocation();
    return(
        <WrappedComponent {...props}
        params={params}
        location={location}
        />
    )
}
export default withRouter;