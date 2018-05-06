import * as types from "../actions/ActionTypes";

// 여기 state는 filter
const visibilityFilter = (state = "SHOW_ALL", action) => {
  if (action.type === types.SET_VISIBILITY_FILTER) {
    return action.filter;
  } else {
    return state;
  }
};

export default visibilityFilter;
