import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartManager } from '../app.js';
import './cart.scss';

export default class Cart extends Component {
  dragOver = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <CartManager.Consumer>
        { manager => 
            <div
              onDragOver={ this.dragOver } 
              onDrop={ (e) => {
                  const productId = e.dataTransfer.getData('productId')
                  const product = manager.getProduct(parseInt(productId, 10))
                  manager.addToCart(product) 
               }
              }
            >
              <span>
                { manager.getTotalCartEntries}
              </span>
              <FontAwesomeIcon icon={ faShoppingCart }  size="3x"/>
            </div>
        }
      </CartManager.Consumer>
    )
  }
}