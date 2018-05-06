import React, { Component } from "react";

export default class Filter extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        필터: {this.renderFilter("SHOW_ALL", "전체")}
        {", "}
        {this.renderFilter("SHOW_COMPLETED", "완료")}
        {", "}
        {this.renderFilter("SHOW_ACTIVE", "하는중")}
        .
      </p>
    );
  }
}
