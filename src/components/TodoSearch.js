import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TodoSearch extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {

  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
              <Input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
          </FormGroup>
        </Form>
        <FormGroup>
          
        </FormGroup>

      </Container>
    )
  }
}

export default TodoSearch;
