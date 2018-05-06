import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo {...todo} key={todo.id} onClick={() => this.props.onTodoClick(todo.id)} />
        ))}
      </ul>
    );
  }
}
