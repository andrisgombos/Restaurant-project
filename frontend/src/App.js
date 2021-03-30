import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Authentication/Registration";
import Home from "./components/home";
import ProfilePage from "./components/user";


const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/user' component={ProfilePage}/>
      </Switch>
    </Router>

  </>
}

export default App;
