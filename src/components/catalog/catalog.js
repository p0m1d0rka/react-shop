import React from 'react';
import ProductCard from '../product_card/product_card.js';
import Cart from '../cart/cart.js';
import './catalog.scss';

export default class Catalog extends React.Component {
  render() {
    const { products } = this.props
    return (
      <div className='catalog'>
        { products.map(product => 
          <ProductCard 
            key={ `productCard-${product.id}` } 
            product={ product }
          />) 
        }
        <Cart />
      </div>
    );
  }
}