import React from 'react'
import PostList from './posts/containers/PostList'

const App = () => (
  <div>
    <h3>Posts - Category A</h3>
    <PostList cat="a" name="a_posts"/>
    <h3>Posts - Category B</h3>
    <PostList cat="b" name="b_posts" />
  </div>
)

export default App