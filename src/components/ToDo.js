import React, { Component} from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } />
        <span>{ this.props.description }</span>
        <input type="button" value="Delete" onClick={ this.props.deleteTodo}
      </li>
    );
  }
}

export default ToDo;
