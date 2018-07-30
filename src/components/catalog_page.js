import React from 'react';
import  { bind, find, assign, reduce, includes }  from 'lodash';
import Catalog from './catalog/catalog.js';
import CartContent from './cart_content/cart_content.js';
import Products from '../constants/products.js';
export const CartManager = React.createContext();

export default class CatalogPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      products: Products,
      cart: {
       entries: [], 
      } 
    }
    this.addToCart = bind(this.addToCart, this)
  }

  addToCart(product, quantity=1) {
    const { entries } = this.state.cart
    let newEntries =  entries.slice();

    if(includes(newEntries, product)){
      find(newEntries, product).quantity += quantity
    }else{
      newEntries.push(assign(product, { quantity }))
    }

    this.setState({cart: {entries: newEntries}})
  }

  getProducts = () => this.state.cart.entries

  getTotalCartEntries = () =>  reduce(
    this.getProducts(), function(acc, item){
      return acc + item.quantity
    }, 0)

  render() {
    const { entries } = this.state.cart
    const { products } = this.state
    return (
      <CartManager.Provider value={
        {
          addToCart: this.addToCart, 
          getProducts: this.getProducts(),
          getTotalCartEntries: this.getTotalCartEntries()
        }}
      >
        <Catalog products={ products } />
        <CartContent />
      </CartManager.Provider>
    );
  }
}