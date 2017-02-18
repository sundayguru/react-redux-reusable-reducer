
import {
  REQUEST_POSTS, RECEIVE_POSTS
} from './actions'

let initialState = {items: [], isFetching: false};

export function postWithName(name) {
  return function posts(state = initialState, action) {
    if(name !== action.name)
      return state;

    switch (action.type) {
      case REQUEST_POSTS:
        return Object.assign({}, state, {isFetching: true})
      case RECEIVE_POSTS:
        return Object.assign({}, state, {isFetching: false, items: action.items})
      default:
        return state
    }
  }
}

/*
function postsB(state = initialState, action) {
    if(name !== action.name)
      return state;
    
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
  }*/