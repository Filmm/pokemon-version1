import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "semantic-ui-css/semantic.min.css";
import "./assets/css/style.css";

import { Provider } from 'react-redux';
import configureStore from './_helpers/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
