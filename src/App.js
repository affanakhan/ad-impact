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
      <Button variant="btn btn-success" onClick={() => history.push('/SurveyEx')}>Start Survey</Button>    

      <Router history={history}>
        <Switch>
          <PrivateRoute path="/SurveyEx" component={DoASurvey} />
          <PrivateRoute path="/surveytwo" component={SurveyTwo} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/surveysdone" component={SurveysDone}/>
        </Switch>
      </Router>
    </div>
  );
}
//           <Route path="*" component={Profile} />
//          <Route> path="" component={HomePage}</Route>


export default App;