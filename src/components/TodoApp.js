import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: 1, text: 'Walk the dog.' },
        { id: 2, text: 'Clean the yard.'},
        { id: 3, text: 'Buy Chocolate'},
        { id: 4, text: 'Leave mail on porch'},
        { id: 5, text: 'Play video games'}
      ]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText
    })
  }

  handleAddTodo(text) {
    console.log('text ', text);
    alert('text ' + text);
  }

  render() {
    let todos = this.state.todos;
    console.log('TodoApp todos from state ', todos);
    return (
      <Container>
        <Row>
          <Col>
            <TodoSearch onSearch={this.handleSearch}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList todos={todos}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTodo onAddTodo={this.handleAddTodo }/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TodoApp;
