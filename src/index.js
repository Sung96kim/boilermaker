import React from 'react';
import ReactDOM from 'react-dom';

import '../public/style.css'
import Root from './components/Root'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);
