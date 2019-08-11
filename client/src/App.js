import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing';
import Routes from './components/routing/Routes';
import { StoreProvider } from './utils/GlobalState';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <StoreProvider>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
            </StoreProvider>
          </Switch>
        </Fragment>
      </Router>
      </div>
    </Provider>
  );
};

export default App;
