import React, {Component} from 'react';
import * as Loadable from 'react-loadable';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppPage from 'src/container/App';
import ArticleList from 'src/container/ArticleList';
import ArticleDetail from 'src/container/ArticleDetail';

const RouterList = [
  {
    component: ArticleList,
    path: '/'
  },
  {
    component: ArticleDetail,
    path: '/article/:id'
  }
];

class RouterMap extends Component {

  render() {
    return (
      <AppPage>
        <Switch>
          {
            RouterList.map(item => (
              <Route
                key={item.path}
                exact
                path={item.path}
                component={item.component}
              />
            ))
          }
        </Switch>
      </AppPage>
    )
  }

}

export default RouterMap;