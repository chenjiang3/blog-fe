import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import './index.less';

import store from './redux/store';
import RouterMap from "router/RouterMap";
// import RouteList from 'router/router';

renderWithHotReload(RouterMap);

if (module.hot) {
  module.hot.accept('src/components/App/App', () => {
    const NextApp = require('src/components/App/App').default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <LocaleProvider locale={zhCN}>
      <AppContainer>
        <Provider store={store}>
          <Router>
            <RootElement/>
          </Router>
        </Provider>
      </AppContainer>
    </LocaleProvider>,
    document.getElementById('app'));
}