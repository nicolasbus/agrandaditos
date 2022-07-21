import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux"
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store} >
    <title>Agrandaditos</title>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();