
import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEIVE_POSTS
} from './actions'

let initialState = {
  a_posts: {items: [], isFetching: false},
  b_posts: {items: [], isFetching: false},
}

export function posts(state = initialState, action) {
  let data = initialState;
  switch (action.type) {
    case REQUEST_POSTS:
      data[action.name].isFetching = true;
      return Object.assign({}, state, data)
    case RECEIVE_POSTS:
      data[action.name].items =  action.items
      data[action.name].isFetching = false;
      return Object.assign({}, state, data)
    default: 
      return state
  }
}