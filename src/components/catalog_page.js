import React from 'react';
import  { bind, each, merge, find, map, assign, reduce }  from 'lodash';
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
    let newState =  entries.slice();
    let elem = find(entries, { id: product.id })

    if(typeof elem != 'undefined'){
      newState = map(newState, (cartProduct) => {
        cartProduct.id == product.id ? cartProduct.quantity += quantity : null
        return cartProduct
      })
    }else{
      newState.push(assign(product, { quantity: parseInt(quantity, 10) }))
    }

    this.setState({cart: {entries: newState}})
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
          dragOver: this.dragOver, 
          dragDrop: this.dragDrop,
          dragStart: this.dragStart,
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