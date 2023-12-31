import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import store from '../src/redux/store';
import { Provider } from 'react-redux';




ReactDOM.render(
 
   <Provider store = {store}>
     <App />
   </Provider>,

 
  document.getElementById('root')
);

