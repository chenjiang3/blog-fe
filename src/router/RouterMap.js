import React, {Component} from 'react';
import * as Loadable from 'react-loadable';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppPage from 'src/container/App';
import ArticleList from 'src/container/ArticleList';
import ArticleDetail from 'src/container/ArticleDetail';
import TimeFile from "../container/TimeFile";
import Say from '../container/Say';
import JsonFormater from 'src/container/JsonFormater'
import Header from 'src/container/Header';
import Tools from 'src/container/ITTools';

import Paths from "router/Paths";

const RouterList = [
  {
    component: JsonFormater,
    path: Paths.home
  }
];

// const RouterList = [
//   {
//     component: ArticleList,
//     path: Paths.home
//   },
//   {
//     component: ArticleDetail,
//     path: Paths.articleDetail,
//   },
//   {
//     component: TimeFile,
//     path: Paths.timeFile,
//   },
//   {
//     component: Say,
//     path: Paths.says,
//   },
//
// ];

// class RouterMap extends Component {
//
//   render() {
//     return (
//       <Switch>
//         <AppPage>
//           {
//             RouterList.map(item => (
//               <Route
//                 key={item.path}
//                 exact
//                 path={item.path}
//                 component={item.component}
//               />
//             ))
//           }
//         </AppPage>
//       </Switch>
//     )
//   }
//
// }

class RouterMap extends Component {
  render() {
    return (
      <Switch>
        <Tools>
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
        </Tools>
      </Switch>
    )
  }
}

export default RouterMap;