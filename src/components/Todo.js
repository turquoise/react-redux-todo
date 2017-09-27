import React, { Component } from 'react';


class Todo extends Component {

  render() {
    let { text, id } = this.props;
    return (
      <div className="container">
        { id }. { text }
      </div>
    )
  }
}

export default Todo;
