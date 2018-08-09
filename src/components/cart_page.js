import React, { Component } from 'react';
import CartContent from './cart_content/cart_content.js';
import AppNav from './app_nav/app_nav.js';
import { history } from '../helpers/history.js';
import { catalogPath } from '../helpers/routes.js'

export default class CartPage extends Component {
  componentDidMount(){
    const { isEmpty } = this.props
    if(isEmpty){
      history.push(catalogPath(), {message: 'Корзина пуста'})
    } 
  }

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
