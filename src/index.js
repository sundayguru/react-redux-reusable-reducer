import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { postWithName } from './posts/reducers';
import App from './App';


function storeWrapper(state = {}, action) {
  return {
    a_posts: postWithName('a_posts')(state.a_posts, action),
    b_posts: postWithName('b_posts')(state.a_posts, action)
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