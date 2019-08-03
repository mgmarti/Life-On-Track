import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navtabs from './components/Navtabs'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

      </Router>
    </div>
  );
}

export default App;
