import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { CartManager } from '../catalog_page.js';

export default class AddToCartBtn extends React.Component {
  render() {
    const { product, quantity, dropQuantity } = this.props
    return(
      <CartManager.Consumer>
        { 
          manager => 
            <Button
              color='success'
              onClick={(e) => {
                  manager.addToCart(product, quantity)
                  dropQuantity()
                }
              }
            >
              <span>В корзину</span>
              <FontAwesomeIcon icon={ faCartPlus }  size="1x"/>
            </Button>
        }
      </CartManager.Consumer>
    )
  }
}