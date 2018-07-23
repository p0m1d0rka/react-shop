import React, { Component } from 'react'
import { reduce } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ProductsInCart, CartManager } from '../catalog_page.js'
import './cart.scss';

export default class Cart extends Component {
  render() {
    return (
      <CartManager.Consumer>
        {
          manager => {
            return (<div onDragOver={manager.dragOver} onDrop={manager.dragDrop} >
              <ProductsInCart.Consumer>
                {
                  productsInCart => {
                    return (
                      <span>
                        { reduce(productsInCart, function(acc, item){
                          return acc + item.quantity
                        }, 0)}
                      </span>
                    )
                  }
                }
              </ProductsInCart.Consumer>
              <FontAwesomeIcon icon={ faShoppingCart }  size="3x"/>
            </div>)
          }
        }
      </CartManager.Consumer>
    )
  }
}