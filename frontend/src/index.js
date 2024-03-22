import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main App component is in App.js
import { Provider } from "react-redux"
import store from './store';
import {positions,transitions,Provider as AlertProvider} from 'react-alert';
import ALertTemplate from 'react-alert-template-basic';

const options={
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,

}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={ALertTemplate}{...options}>
      <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
