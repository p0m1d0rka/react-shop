import React from 'react';
import  { bind, each, merge, find}  from 'lodash';
import Catalog from './catalog/catalog.js';
import CartContent from './cart_content/cart_content.js';
export const ProductsInCart = React.createContext([])
export const CartManager = React.createContext()

export default class CatalogPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { productsInCart: [] }
    this.toCart = bind(this.toCart, this)
  }

  toCart(e, id, quantity, dropQuantity) {
    const { products } = this.props
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
      let new_product = find(products, { id })
      new_state.push(merge(new_product, { quantity: parseInt(quantity, 10) }))
      this.setState({productsInCart: new_state})
    }
    dropQuantity()
  }

  render() {
    const { products } = this.props
    return (
      <ProductsInCart.Provider value={this.state.productsInCart}>
        <CartManager.Provider value={this.toCart}>
          <Catalog products={ products } />
          <CartContent />
        </CartManager.Provider>
      </ProductsInCart.Provider>
    );
  }
}