import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Authentication/Registration";
import Header from "./components/header";
import ProfilePage from "./components/user";
import MyProfilePage from "./components/userMe";


const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/home' component={Header}/>
        <Route exact path='/user' component={ProfilePage}/>
        <Route exact path='/user-self' component={withAuth(MyProfilePage)}/>
      </Switch>
    </Router>

  </>
}

export default App;
