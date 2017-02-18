import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { posts } from './posts/reducers';
import App from './App';


function storeWrapper(state = {}, action) {
  return {
    posts: posts(state.posts, action)
  }
}

let store = createStore(
  storeWrapper,
  applyMiddleware(
      thunkMiddleware
    )
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)