import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import NoMatch from './components/pages/NoMatch';
import FavoritesList from './components/pages/FavoritesList';
import { StoreProvider } from './utils/GlobalState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar/Navbar';
import Goals from './components/pages/Goals';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <StoreProvider> */}
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/goals' component={Goals} />
          <Route exact path="/goals/:id" component={Detail} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route component={NoMatch} />
        {/* </StoreProvider> */}

      </Router>
    </div>
  );
}

export default App;
