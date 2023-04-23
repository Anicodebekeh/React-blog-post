import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Error from './Error'

function App() {
  
return (
   <Router>
     <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route path = "/create">
            <Create /> 
          </Route>

          <Route path = "/Blogs/:id">
            <BlogDetails /> 
          </Route>

          <Route path = "*">
            <Error /> 
          </Route>

        </Switch>
      </div>
    </div>
   </Router>
  );
}

// at the end we always export our component function
// curly bracket are used to output a variable
export default App;
