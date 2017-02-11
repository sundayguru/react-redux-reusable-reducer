import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch, name }) => {
  let input
  console.log(name)
  return (
    <div>
      <form>
        <input ref={node => {
          input = node
        }} />
        <button onClick={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, name))
        input.value = ''
      }} >
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    name: props.name
  }
}

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo