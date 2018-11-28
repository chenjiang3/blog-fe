import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Paths from './Paths';

import Bundle from './Bundle';
import Loading from 'src/components/Loading/Loading';

import AppPage from 'bundle-loader?lazy&name=apppage!src/container/App';
import ArticleList from 'bundle-loader?lazy&name=articlelist!src/container/ArticleList';
import ArticleDetail from 'bundle-loader?lazy&name=articledetail!src/container/ArticleDetail';
import TimeFile from "bundle-loader?lazy&name=timefile!src/container/TimeFile";
import Say from 'bundle-loader?lazy&name=say!src/container/Say';

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

// const RouterList = [
//   {
//     component: createComponent(ArticleList),
//     path: Paths.home
//   },
//   {
//     component: createComponent(ArticleDetail),
//     path: Paths.articleDetail,
//   },
//   {
//     component: createComponent(TimeFile),
//     path: Paths.timeFile,
//   },
//   {
//     component: createComponent(Say),
//     path: Paths.says,
//   },
//
// ];

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
  },
  {
    component: Say,
    path: Paths.says,
  },

];

//
// const getRouter = () => (
//   <div>
//     <Switch>
//       <Route exact path='/' component={createComponent(Home)}/>
//       <Route exact path='/page1' component={createComponent(Page1)}/>
//       <Route exact path='/counter' component={createComponent(Counter)}/>
//       <Route exact path='/userinfo' component={createComponent(UserInfo)}/>
//       <Route component={createComponent(NotFound)}/>
//     </Switch>
//   </div>
// );

export default class RouteList extends Component {

  render() {
    return (
      <Switch>
        <AppPage>
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
        </AppPage>
      </Switch>
    )
  }

}

// export default getRouter;