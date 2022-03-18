import React from 'react';
import './styles/App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
// import Facade from './components/Facade';
// import Services from './components/Services';
// import Results from './components/Results';
// import Ideas from './components/Ideas';
// import About from './components/About';
// import Works from './components/Works';


import BaseComponent from './components/BaseComponent.js';



const App = () => {

  return (
    <Router>
      <div className="App">
        <BaseComponent />
      </div>

      
    </Router>
  );
}

export default App;
