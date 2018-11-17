import React, {Component} from 'react';
import * as Loadable from 'react-loadable';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppPage from 'src/container/App';
import ArticleList from 'src/container/ArticleList';
import ArticleDetail from 'src/container/ArticleDetail';
import TimeFile from "../container/TimeFile";
import Paths from "router/Paths";

const RouterList = [
  {
    component: ArticleList,
    path: Paths.home
  },
  {
    component: ArticleDetail,
    path: Paths.articleDetail,
  },
  {
    component: TimeFile,
    path: Paths.timeFile,
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