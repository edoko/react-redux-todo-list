import * as types from "../actions/ActionTypes";

// 여기 state는 todo list
const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case types.TOGGLE_SET:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
      );
    default:
      return state;
  }
};

export default todos;
