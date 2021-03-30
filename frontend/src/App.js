import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Authentication/Registration";
import Header from "./components/header";
import ProfilePage from './components/userPage';
import MyProfilePage from "./components/userPage/userMePage";
//import {withAuth} from './components/HOC'

const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/home' component={Header}/>
        <Route exact path='/user' component={ProfilePage}/>
        {/*next line is just to test pages */}
        <Route exact path='/user-self' component={MyProfilePage}/>

        {/*<Route exact path='/user-self' component={withAuth(MyProfilePage)}/>*/}
      </Switch>
    </Router>

  </>
}

export default App;
