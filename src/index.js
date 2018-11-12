import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import getRouter from 'router/router';
import store from './redux/store';

import App from 'src/components/App/App';

// renderWithHotReload(getRouter());

renderWithHotReload(App);

// if (module.hot) {
//   module.hot.accept('./router/router', () => {
//     const getRouter = require('./router/router').default;
//     renderWithHotReload(getRouter());
//   });
// }

if (module.hot) {
  module.hot.accept('src/components/App/App', () => {
    const NextApp = require('src/components/App/App').default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement/>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'));
}