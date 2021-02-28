import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/beers" component={HomePage}/>
        <Route path="/random-beer" component={HomePage}/>
        <Route path="/new-beer" component={HomePage}/>
      </Switch>
    </div>
  );
}
}

export default App;
