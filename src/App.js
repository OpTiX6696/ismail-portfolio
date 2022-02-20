import React from 'react';
import './styles/App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Results from './components/Results';
import Ideas from './components/Ideas';
import About from './components/About';
// import Works from './components/Works'

import ContactUs from './components/ContactUs.js';



function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Works /> */}
      </div>

      <Switch>

        <Route path='/' component={Home} exact/>

        <Route path='/services' component={Services} exact/>

        <Route path='/results' component={Results} exact/>

        <Route path='/ideas' component={Ideas} exact/>

        <Route path='/about' component={About} exact/>

        <Route path='/contact' component={ContactUs} />


      </Switch>
      
    </Router>
  );
}

export default App;
