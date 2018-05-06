import React, { Component } from "react";
import { findDOMNode } from "react-dom";

export default class AddTodo extends Component {
  handleClick = e => {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  };

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>추가</button>
      </div>
    );
  }
}
