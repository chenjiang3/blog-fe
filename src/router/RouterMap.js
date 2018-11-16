import React, { Component } from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppPage from 'src/container/App';

import Loading from 'src/components/Loading/Loading';

import ArticleList from 'src/container/ArticleList';

const RouterList = [
  {
    component: () => import('src/container/ArticleList'),
    path: '/'
  }
];

class RouterMap extends Component {

  render() {
    return (
      <Router>
        <AppPage>
          <Switch>
            {
              RouterList.map(item => (
                <Route
                  key={item.path}
                  exact={true}
                  path={item.path}
                  component={ArticleList}
                />
              ))
            }
          </Switch>
        </AppPage>
      </Router>
    )
  }

}

export default RouterMap;