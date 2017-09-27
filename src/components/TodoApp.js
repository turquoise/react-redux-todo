import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Walk the dog.' },
        { id: 2, text: 'Clean the yard.'},
        { id: 3, text: 'Buy Chocolate'},
        { id: 4, text: 'Leave mail on porch'},
        { id: 5, text: 'Play video games'}
      ]
    }
  }

  render() {
    let todos = this.state.todos;
    console.log('TodoApp todos from state ', todos);
    return (
      <div className="container">
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp;
