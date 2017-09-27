import React, { Component } from 'react';
import TodoApp from './components/TodoApp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;
