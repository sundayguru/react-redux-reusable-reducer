import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    
    <h2>First list main</h2>
    <AddTodo name="todos_main" />
    <VisibleTodoList name="todos_main" />
    <h2>Second list great</h2>
    <AddTodo name="todos_great" />
    <VisibleTodoList name="todos_great" />
    <Footer />
  </div>
)

export default App