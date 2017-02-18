import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Posts from '../components/posts'

class PostContainer extends Component {

  componentDidMount() {
    const { dispatch} = this.props
    dispatch(fetchPosts({cat:this.props.cat}, this.props.name))
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.length > 0 &&
          <div style={{ opacity:  1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  cat: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  return {
    posts: state.posts[props.name].items
  }
}

export default connect(mapStateToProps)(PostContainer)