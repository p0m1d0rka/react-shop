import React from 'react';
import HelloWorld from './hello_world'
import '../style.css';
import Voucher from './voucher';

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