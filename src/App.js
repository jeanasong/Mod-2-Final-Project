import React, { Component } from 'react';
import Login from "./Pages/Login";
// import Logout from "./Pages/Logout"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create/Create';
//here we import the store
//----STORE
import StoreRef from "./store/store";
//store provider
//the provider gives us access to the state
import {Provider} from "react-redux";
import Main from './components/main';
import Logout from './Pages/Logout';
import Register from './Pages/registration.js';

// Provider needs a property called store
//on which we add our store file

//at this point we have the app ready
//the state is set in a global manner with Redux
//we can access it in any component

//now in order to DO something
//remember the Reducer has an action?
//this action is called whenever we want
//lets see how an action is implemented first
//this is a lot of code, but is because the API call, lets see

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={StoreRef}>
        <div className="container">
          <h1>Weather App </h1>
          {/* <Main /> */}
          <Switch>
          <Route exact path='/' render={ (props) => <Login {...props} />} />
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path='/main' render={ (props) => <Main {...props} />} />

            <Route exact path='/logout' render={ (props) => <Logout {...props} />} />

            <Route exact path='/register' render={ (props) => <Register {...props} />} />
          </Switch>
        
        </div>
      </Provider>
      </Router>
    );
  }
}

export default App;
