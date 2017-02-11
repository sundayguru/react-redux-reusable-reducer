import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { todos, visibilityFilter } from './todo/reducers'
import App from './todo/components/App'

function todoAppWrapper(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos_great: todos(state.todos_great, action, "todos_great"),
    todos_main: todos(state.todos_main, action, "todos_main")
  }
}

//const todoApp = combineReducers({todoAppWrapper})

let store = createStore(todoAppWrapper)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)