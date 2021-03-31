import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Email from "./components/Authentication/Email";
import { Register } from "./components/Authentication/Registration";
//import Verification from "./components/Authentication/Verification";
import SignIn from "./components/Authentication/Signin"
import Home from "./components/home";
import ProfilePage from './components/userPage';
import MyProfilePage from "./components/userPage/userMePage";
import Restaurants from "./components/restaurants/index"
import Reviews from "./components/restaurants/reviews";
//import {withAuth} from './components/HOC'

const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Register}/>
        <Route exact path='/sign-in' component={SignIn}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/user' component={ProfilePage}/>
        {/*next line is just to test pages */}
        <Route exact path='/user-self' component={MyProfilePage}/>
        <Route exact path='/restaurants' component={Restaurants}/>
        <Route exact path='/reviews' component={Reviews}/>

        {/*<Route exact path='/user-self' component={withAuth(MyProfilePage)}/>*/}
      </Switch>
    </Router>

  </>
}

export default App;
