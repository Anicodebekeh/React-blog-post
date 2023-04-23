import { Link } from 'react-router-dom';

const Navbar =  () => {
    return ( 
         <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create">New Blog</Link>
        
                
            </div>
         </nav>
    );
}

// export this navbar so that other files can access it 
export default Navbar;

// type sfc tab, it create a stateless functional component
