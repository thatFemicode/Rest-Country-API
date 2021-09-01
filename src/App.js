import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
// import { useGlobalContext } from './components/context/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleCountry from './pages/SingleCountry';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/name">
            <SingleCountry />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
