import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { todos, visibilityFilter } from './reducers'
import App from './components/App'


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)