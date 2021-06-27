

import React, { useState } from 'react';

import Dashboard from '../src/components/Dashboard'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from '../src/components/Login'


function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
     
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;