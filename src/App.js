import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
const App = () => {
  return (
    <div className="App">
      <Router>
      <Navigation />

      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/projects" exact component={Projects} />
      </Router>
    </div>
  );
}

export default App;
