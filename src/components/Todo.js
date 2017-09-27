import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Todo extends Component {

  render() {
    let { text, id } = this.props;
    return (
      <Container>
        <Row>
          <Col sm="1">{ id }</Col>
          <Col sm="5"> { text }</Col>
          <Col sm="6"></Col>
        </Row>

      </Container>
    )
  }
}

export default Todo;
