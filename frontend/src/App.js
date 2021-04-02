import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Email from "./components/Authentication/email/index"
import { Register } from "./components/Authentication/registration/index";
import Verification from "./components/Authentication/verification/index";
import SignIn from "./components/Authentication/signin/index"
import Home from "./components/home";
import ProfilePage from './components/userPage';
import MyProfilePage from "./components/userPage/userMePage";
import Restaurants from "./components/restaurants/index"
import Reviews from "./components/restaurants/reviews";
import CreateNewRestaurant from "./components/createNewRestaurant";
import CreateNewReview from "./components/createNewReview";
// import {withAuth} from './components/HOC'
import Users from "./components/restaurants/users";
import RestaurantOverview from "./components/restaurant_overview/index"









const App = () => {
  return <>
    
    <Router>
      <Switch>
        <Route exact path='/registration' component={Register}/>
        <Route exact path='/sucess' component={Email}/>
        <Route exact path='/verification' component={Verification}/>
        <Route exact path='/sign-in' component={SignIn}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/user' component={ProfilePage}/>
        {/*next line is just to test pages */}
        <Route exact path='/user-self' component={MyProfilePage}/>
         <Route exact path='/restaurants' component={Restaurants}/> 
        <Route exact path='/reviews' component={Reviews}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/create-new-restaurant' component={CreateNewRestaurant}/>
        <Route exact path='/create-new-review' component={CreateNewReview}/>
        <Route exact path='/restaurant-view' component={RestaurantOverview}/>





        {/* <Route exact path='/user-self' component={withAuth(MyProfilePage)}/> */}
      </Switch>
    </Router>

  </>
}

export default App;
