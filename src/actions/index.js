import * as types from "./ActionTypes";

// id 값 설정
let nextTodoId = 0;
// text를 변수로 받아서 액션객체 생성 나머지도 마찬가지
export const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const toggleSet = id => ({
  type: types.TOGGLE_SET,
  id
});
