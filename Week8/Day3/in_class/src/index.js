import React from 'react';
import Parent from './Parent';
import Child from './Child';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter'
import ErrorBoundary from './ErrorBoundary'
import reportWebVitals from './reportWebVitals';
import Select from './Select';

ReactDOM.render(
  <React.StrictMode>
    <Select/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
