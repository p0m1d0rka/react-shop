import React from 'react';
import ProductCardExtend from './product_card_extend/product_card_extend.js';
import AppNav from './app_nav/app_nav.js';
import { withRouter } from 'react-router-dom';
import { CartManager } from './app.js';

export default class ProductPage extends React.Component{
  render() {
    const { history, location, match: { params } } = this.props
    return (
      <div>
        <AppNav />
        <CartManager.Consumer>
          { manager =>  <ProductCardExtend product={ manager.getProduct(parseInt(params.id)) } /> }
        </CartManager.Consumer>
      </div>
    );
  }
}

export const ConnectedProductPage = withRouter(ProductPage)