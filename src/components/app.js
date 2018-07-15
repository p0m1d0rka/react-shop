import React from 'react';
import HelloWorld from './hello_world/hello_world.js'
import '../style.css';
import Voucher from './voucher/voucher.js';
import ProductCard from './product_card/product_card.js';

export default class App extends React.Component{
  render() {
    return (
    <div>
      <HelloWorld />
      <Voucher items={[{item_id: 1, quantity: 1}, {item_id: 2, quantity: 5}]}/>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    );
  }
}