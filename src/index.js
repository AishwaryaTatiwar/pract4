import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Aishwarya" m1="13" m2="12" m3="15"/>
    <App name="Apeksha" m1="15" m2="15" m3="15"/>
    <App m1="1" m2="2" m3="15"/>
    <App name="Aisha" m1="10" m3="9"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
