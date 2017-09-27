import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TodoSearch extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);

  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
              <Input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
          </FormGroup>
        </Form>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>{' '}
              Show completed todos
          </Label>
        </FormGroup>

      </Container>
    )
  }
}

export default TodoSearch;
