import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./assets/fonts/Exo-Bold.woff2";
import "./assets/fonts/Roboto-Regular.woff2";

ReactDOM.render(
  // We provide our store field to all components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
