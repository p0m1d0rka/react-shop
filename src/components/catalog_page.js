import React from 'react';
import Catalog from './catalog/catalog.js';

export default class CatalogPage extends React.Component{
  render() {
    const { products } = this.props
    return (
      <div>
        <Catalog products={products}/>
      </div>
    );
  }
}