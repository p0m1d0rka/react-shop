import React, { Component } from 'react';
import CartContent from './cart_content/cart_content.js';
import Nav from './nav/nav.js';

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CartContent />
      </div>
    )
  }
}
