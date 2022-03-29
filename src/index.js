import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './app-contents/redux/Store';
import { BrowserRouter } from "react-router-dom";
import './globalStyles/index.css';
import './globalStyles/responsive-index.css';
import App from './App';
ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
