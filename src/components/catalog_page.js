import React from 'react';
import  { bind, each, merge, find}  from 'lodash';
import Catalog from './catalog/catalog.js';
import CartContent from './cart_content/cart_content.js';
import Products from '../constants/products.js';
export const ProductsInCart = React.createContext([])
export const CartManager = React.createContext()

export default class CatalogPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { productsInCart: [] }
    this.toCart = bind(this.toCart, this)
  }

  toCart(e, id, quantity, dropQuantity) {
    const { productsInCart } = this.state
    let elem = find(productsInCart, {id})
    if(typeof elem != 'undefined'){
      let new_state = []
      each(productsInCart, item => {
        let mutateItem = Object.assign({}, item)
        if(mutateItem.id == id){
          mutateItem.quantity = mutateItem.quantity + parseInt(quantity, 10)
        }
        new_state.push(mutateItem)
      })
      this.setState({productsInCart: new_state})
    }else{
      let new_state =  productsInCart.slice();
      let new_product = find(Products, { id })
      new_state.push(merge(new_product, { quantity: parseInt(quantity, 10) }))
      this.setState({productsInCart: new_state})
    }
    dropQuantity()
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
    return (
      <ProductsInCart.Provider value={this.state.productsInCart}>
        <CartManager.Provider value={
          {
            toCart: this.toCart, 
            dragOver: this.dragOver, 
            dragDrop: this.dragDrop,
            dragStart: this.dragStart
          }}
        >
          <Catalog products={ Products } />
          <CartContent />
        </CartManager.Provider>
      </ProductsInCart.Provider>
    );
  }
}