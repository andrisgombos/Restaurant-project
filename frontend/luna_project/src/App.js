import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import profilePage from './components/user';



export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/verification' component={Verification} />
        <Route exact path='/gratulations' component={Congratulations}/> */}
        <Route exact path='/my-profile' component={profilePage} />


      </Switch>
    </BrowserRouter>
  );
}
