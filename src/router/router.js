import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'src/components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notfound!pages/NotFound/NotFound';

const createComponent = component => {
  return (props) => {
    return (
      <Bundle load={component}>
        {
          (Component) => Component ? <Component {...props}/> : <Loading/>
        }
      </Bundle>
    )
  }
};

const getRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={createComponent(Home)}/>
      <Route exact path='/page1' component={createComponent(Page1)}/>
      <Route exact path='/counter' component={createComponent(Counter)}/>
      <Route exact path='/userinfo' component={createComponent(UserInfo)}/>
      <Route component={createComponent(NotFound)}/>
    </Switch>
  </div>
);

export default getRouter;