import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NoPureComponent from './app/NoPureComponent';
import ReduxConnectEquality from './app/ReduxConnectEquality/index.js';
import ReduxStateImmutability from './app/ReduxStateImmutability';
import SagaNoUserAction from './app/SagaNoUserAction.js';
import TooMuchDataConnected from './app/TooMuchDataConnected';

function App() {
  return (
    <Router>
      <div className="back-block">
        <Link to="/">Back Home</Link>
      </div>

      <Switch>
        <Route path="/no-pure-component">
          <NoPureComponent/>
        </Route>
        <Route path="/redux-connect-equality">
          <ReduxConnectEquality />
        </Route>
        <Route path="/redux-state-not-immutable">
          <ReduxStateImmutability />
        </Route>
        <Route path="/too-much-data-connected">
          <TooMuchDataConnected />
        </Route>
        <Route path="/saga-no-user-action">
          <SagaNoUserAction />
        </Route>

        <Route path="/">
          <h1>
            Bad practices list:
          </h1>
          <ul className="bad-list">
            <li>
              <Link to="/no-pure-component">Not using PureComponent</Link>
            </li>
            <li>
              <Link to="/redux-connect-equality">Redux connect equality</Link>
            </li>
            <li>
              <Link to="/saga-no-user-action">Saga no user action</Link>
            </li>
            <li>
              <Link to="/too-much-data-connected">Too much data connected for component</Link>
            </li>
            <li>
              <Link to="/redux-state-not-immutable">Redux state not immutable (new redux fixes the problem by crashing early)</Link>
            </li>
          </ul>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
