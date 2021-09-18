import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // We provide our store field to all components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
