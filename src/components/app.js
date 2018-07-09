import React from 'react';
import HelloWorld from './hello_world'
import '../style.css';
import Calculator from '../calculator.js';
import Voucher from './voucher';

const c = new Calculator({firstNumber: 2, secondNumber: 4, operator: '-'})
console.log(c.calc())

export default class App extends React.Component{
  render() {
    return (
    <div>
      <HelloWorld />
      <Voucher items={[{item_id: 1, quantity: 1}, {item_id: 2, quantity: 5}]}/>
    </div>
    );
  }
}