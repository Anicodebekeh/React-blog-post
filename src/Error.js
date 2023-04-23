import { Link } from "react-router-dom"


const Error = () => {
    return (  
        <div>
            <h1>:) 404</h1>
            <p> Opps Error return to homepage 
                <div>{<Link to='/'>Home</Link>}  </div>
            </p>
        </div>

    );
}
 
export default Error;