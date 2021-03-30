import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Email from "./components/Authentication/Email";
import { Register } from "./components/Authentication/Registration";
import Verification from "./components/Authentication/Verification"
import Header from "./components/header";
import ProfilePage from "./components/user";


const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Verification}/>
        <Route exact path='/home' component={Header}/>
        <Route exact path='/user' component={ProfilePage}/>
      </Switch>
    </Router>

  </>
}

export default App;
