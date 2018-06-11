import {createStore} from 'redux';
import React, { Component } from 'react';
import Counter from './Counter'
import update_count from './reducers';
import { Provider } from 'react-redux'

const store = createStore(update_count)

export default class app extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}