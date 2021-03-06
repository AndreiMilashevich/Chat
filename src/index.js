import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Container from './components/container/Container';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Container> 
  </Container>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
