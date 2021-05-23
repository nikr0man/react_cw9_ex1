import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import Comp1 from './comps/Comp1';
import Comp2 from './comps/Comp2';
import Comp3 from './comps/Comp3';
import Comp4 from './comps/Comp4';
import Comp5 from './comps/Comp5';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <Comp4 />
    <Comp5 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
