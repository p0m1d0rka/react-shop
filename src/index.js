import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello_world'
import './style.css';
import Calculator from './calculator.js';


console.log('hssdsdi')
const c = new Calculator({firstNumber: 2, secondNumber: 4, operator: '-'})
console.log(c.calc())

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('reactApp')
);