import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'

//Import components to put on this page
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import Edit from '../Pages/Edit/Edit';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
        <img id="header_image" src="../images/movies_header.jpg" alt="movie reel"/>
        </header>
        
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/Details' component={Details} />
          <Route path='/Edit' component={Edit} />
        </Router>
      </div>

    );
  }
}

export default (App);
