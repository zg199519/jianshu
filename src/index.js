import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js';
import GlobalStyleIconFont from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalStyleIconFont/>
    <App/>
  </Fragment>,
  document.getElementById('root')
);

