import React from 'react';
import antd from 'antd'
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/Products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
