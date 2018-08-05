import React from 'react';
import Catalog from './catalog/catalog.js';
import Nav from './nav/nav.js';

export default class CatalogPage extends React.Component{
  render() {
    const { products } = this.props
    return (
      <div>
        <Nav />
        <Catalog products={ products } />
      </div>
    );
  }
}