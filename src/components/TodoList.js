import React, { Component } from 'react';
import Todo from './Todo';
import { Container, Row, Col } from 'reactstrap';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    let todos = this.props.todos;
    return todos.map( (todo) => {
      return (
        <Todo key={todo.id} {...todo}/>
      )
    });
  }

  render() {
    let todos = this.props;
    console.log('TodoList todos from props ', todos);
    return (
      <Container>
        { this.renderTodos()}
      </Container>
    )
  }
}

export default TodoList;
