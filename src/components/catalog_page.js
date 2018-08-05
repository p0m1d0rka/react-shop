import React from 'react';
import Catalog from './catalog/catalog.js';
import AppNav from './app_nav/app_nav.js';

export default class CatalogPage extends React.Component{
  render() {
    const { products } = this.props
    return (
      <div>
        <AppNav />
        <Catalog products={ products } />
      </div>
    );
  }
}