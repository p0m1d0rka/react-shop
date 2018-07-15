import React from 'react';
import HelloWorld from './hello_world/hello_world.js'
import '../style.css';
import Voucher from './voucher/voucher.js';
import Catalog from './catalog/catalog.js';
import Products from '../constants/products.js';

export default class App extends React.Component{
  render() {
    return (
    <div>
      <HelloWorld />
      <Voucher items={[{item_id: 1, quantity: 1}, {item_id: 2, quantity: 5}]}/>
      <Catalog products={Products}/>
    </div>
    );
  }
}