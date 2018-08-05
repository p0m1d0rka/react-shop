import React, { Component } from 'react';
import CartContent from './cart_content/cart_content.js';
import AppNav from './app_nav/app_nav.js';

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <AppNav />
        <h1>Товары в корзине:</h1>
        <CartContent />
      </div>
    )
  }
}
