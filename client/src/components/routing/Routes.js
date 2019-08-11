import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import Goals from '../pages/Goals';
import FavoritesList from '../pages/FavoritesList';
import Detail from '../pages/Detail';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <PrivateRoute exact path='/goals' component={Goals} />
        <PrivateRoute exact path="/goals/:id" component={Detail} />
        <PrivateRoute exact path="/favorites" component={FavoritesList} />
      </Switch>
    </section>
  );
};

export default Routes;
