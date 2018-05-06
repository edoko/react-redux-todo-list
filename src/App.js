import React, { Component } from "react";
import "./App.css";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

import { connect } from "react-redux";
import * as actions from "./actions";

// 상태를 props로 맵핑해서 스토어에 전달.
const mapStateToProps = state => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

// 상태가 변경되면 디스패처를 통해서 액션 객체를 전달하는 함수들을 props에 맵핑
const mapDispatchToProps = dispatch => {
  return {
    handleAddTodo: text => {
      dispatch(actions.addTodo(text));
    },
    handleToggleSet: id => {
      dispatch(actions.toggleSet(id));
    },
    handleSetVisibilityFilter: filter => {
      dispatch(actions.setVisibilityFilter(filter));
    }
  };
};

const selectTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    default:
      return;
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo onAddClick={this.props.handleAddTodo} />
        <TodoList todos={this.props.visibleTodos} onTodoClick={this.props.handleToggleSet} />
        <Filter
          filter={this.props.visibilityFilter}
          onFilterChange={this.props.handleSetVisibilityFilter}
        />
      </div>
    );
  }
}

// connect로 연결
export default connect(mapStateToProps, mapDispatchToProps)(App);
