import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Beers from './components/Beers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'


class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/beers" component={Beers}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
      </Switch>
    </div>
  );
}
}

export default App;
