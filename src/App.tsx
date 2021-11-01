import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


// local imports
import './css/App.css';
// Components
import Groups from './Groups';
import Chats from './Chats';




const App = () => {

  
  return (
    <Router>
    <Switch>
    <Route exact path="/">
     <Chats />
    </Route>
    <Route exact path="/groups">
      <Groups /> 
    </Route>
    </Switch>
    </Router>
  )
}
export default App;
/*
<Router>
    <Switch>
    <Route exact path="/">
     <Index />
    </Route>
    <Route exact path="/groups">
      <Groups /> 
    </Route>
    </Switch>
    </Router>
*/