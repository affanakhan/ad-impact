// src/App.js

// import React from "react";
// import React, { Component, PropTypes } from 'react';
import * as React from 'react'
import NavBar from "./components/NavBar";
// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DoASurvey from "./components/DoASurvey";
import SurveysDone from "./components/SuverysDone";
import SurveyTwo from "./components/SurveyTwo";
import Title from './Title';
import { Button } from 'react-bootstrap';

import { Redirect } from 'react-router';
import './App.css'


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Title />
      <DoASurvey />
    </div>
  );
}
//           <Route path="*" component={Profile} />
//          <Route> path="" component={HomePage}</Route>
/*
<Router history={history}>
        <Switch>
          <Route path="/surveyex" component={DoASurvey} />
          <Route path="/surveytwo" component={SurveyTwo} />
          <Route path="/profile" component={Profile} />
          <Route path="/surveysdone" component={SurveysDone}/>
        </Switch>
      </Router>
*/

export default App;