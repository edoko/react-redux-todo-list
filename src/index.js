import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

// store 생성
const store = createStore(reducers);

// provider로 store 제공
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
