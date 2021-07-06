import React, {Component} from 'react';
import {App} from './src';
import {store} from './src/store';
import {Provider} from 'react-redux';

export const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
