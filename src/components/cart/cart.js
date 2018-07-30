import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartManager } from '../catalog_page.js';
import './cart.scss';

export default class Cart extends Component {
  render() {
    return (
      <CartManager.Consumer>
        {
          manager => {
            return (
              <div>
                <span>
                  { manager.getTotalCartEntries}
                </span>
                <FontAwesomeIcon icon={ faShoppingCart }  size="3x"/>
              </div>
            )
          }
        }
      </CartManager.Consumer>
    )
  }
}