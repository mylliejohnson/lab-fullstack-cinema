import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/movies" render={(props) => <Movies {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
