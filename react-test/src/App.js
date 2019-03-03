import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/uwu/Header.jsx';
import Products from './components/Products/Products';
import Footer from './components/uwu/Footer.jsx';
import HomePage from './components/HomePage/index';
import Contact from './components/Contact/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='body'>
        <Header/>
          
        <div id='body-body'>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
