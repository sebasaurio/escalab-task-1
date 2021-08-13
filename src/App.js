import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header-component';
import Footer from './components/footer/footer-component';
import Home from './pages/home/home-component';
import Episode from './pages/episode/episode-component';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/episodes' component={Episode}/>
        </Switch>
        <Footer/>
    </div>
    )
  }
}

export default App;
