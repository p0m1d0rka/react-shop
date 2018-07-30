import React from 'react';
import  { bind, each, merge, find, map }  from 'lodash';
import Catalog from './catalog/catalog.js';
import CartContent from './cart_content/cart_content.js';
import Products from '../constants/products.js';
export const ProductsInCart = React.createContext([])
export const CartManager = React.createContext()

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
    let new_state =  entries.slice();
    let elem = find(entries, { id: product.id })

    if(typeof elem != 'undefined'){
      new_state = map(new_state, (cartProduct) => {
        cartProduct.id == product.id ? cartProduct.quantity += 1 : null
        return cartProduct
      })
    }else{
      new_state.push(merge(product, { quantity: parseInt(quantity, 10) }))
    }

    this.setState({cart: {entries: new_state}})
  }

  dragOver = (e) => {
    e.preventDefault()
  } 

  dragDrop = (e) => {
    const productId = e.dataTransfer.getData('text')
    this.toCart(e, parseInt(productId, 10), 1, ()=>{})
    console.log(`drag drop productId=${productId}`)
  }

  dragStart = (e, id) => {
    e.dataTransfer.setData('text', id)
  }

  render() {
    const { entries } = this.state.cart
    const { products } = this.state
    return (
      <ProductsInCart.Provider value={ entries }>
        <CartManager.Provider value={
          {
            addToCart: this.addToCart, 
            dragOver: this.dragOver, 
            dragDrop: this.dragDrop,
            dragStart: this.dragStart
          }}
        >
          <Catalog products={ products } />
          <CartContent />
        </CartManager.Provider>
      </ProductsInCart.Provider>
    );
  }
}