import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header-component';
import Home from './pages/home/home-component';
import Episode from './pages/episode/episode-component';

import './App.css';

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/episodes' component={Episode}/>
        </Switch>
    </div>
    )
  }
}

export default App;
