import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = "FETCH_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";


export function requestPosts(payload, name) {
  return {
    type: REQUEST_POSTS,
    name,
    payload
  }
}

export function receivePosts(payload, name) {
  return {
    type: RECEIVE_POSTS,
    name,
    items: payload
  }
}

export function fetchPosts(query, name) {
  
  return dispatch => {
    dispatch(requestPosts(query, name))
    return fetch("http://localhost:8080/greet?cat=" + query.cat)
      .then(function(response){
         return response.json()
      })
      .then(payload => dispatch(receivePosts(payload, name)))
  }
}