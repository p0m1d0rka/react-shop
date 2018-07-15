import React from 'react';
import ProductCard from '../product_card/product_card.js';

export default class Catalog extends React.Component {
  render() {
    const { products } = this.props
    return (
      <div className='catalog'>
        { products.map(product => <ProductCard key={ product.id } product={ product }/>) }
      </div>
    );
  }
}