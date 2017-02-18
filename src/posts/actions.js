// import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = "FETCH_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

let sampleResponse = [
  {"title":"test title 1","id":1976235410884491574,"category":"a"},
  {"title":"test title 2","id":3510942875414458836,"category":"a"},
  {"title":"test title 3","id":6263450610539110790,"category":"b"},
  {"title":"test title 4","id":2015796113853353331,"category":"b"}
]

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
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let result = sampleResponse.filter(function(item){
          return item.category === query.cat
        })
        resolve(result);
      }, 1000);
    }).then(payload => dispatch(receivePosts(payload, name)));

    /*
    // You can use this to call an external api endpoint
    return fetch("http://example.com/api?cat=" + query.cat)
      .then(function(response){
         return response.json()
      })
      .then(payload => dispatch(receivePosts(payload, name)))
      */
  }
}