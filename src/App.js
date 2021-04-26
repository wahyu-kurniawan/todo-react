import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

class App extends Component {

  state = {
    todos : [
      {id:1, content : 'Buy milk'},
      {id : 2, content : 'Playing games'}
    ]
  }

  deleteTodo = (id) => {
      const todos = this.state.todos.filter((todo) => {
        return todo.id !== id
      })
      this.setState({
        todos
      })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }
  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h2 className="my-2">Todo's</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
