import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  { bind, find, assign, reduce, includes }  from 'lodash';
import CartPage from './cart_page.js';
import CatalogPage from './catalog_page.js';
import ContactPage from './contact_page.js';
import Products from '../constants/products.js';
import NotFoundPage from './not_found_page.js';
import { ConnectedProductPage } from './product_page.js';
export const CartManager = React.createContext();

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      products: Products,
      cart: {
       entries: [], 
       isDragging: false
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
  getProduct = (id) => find(this.state.products, { id })

  getCatalog = () => this.state.products

  getTotalCartEntries = () =>  reduce(
    this.getProducts(), function(acc, item){
      return acc + item.quantity
    }, 0)

  render() {
    const { products } = this.state
    return (
      <CartManager.Provider value={
        {
          addToCart: this.addToCart, 
          getProducts: this.getProducts(),
          getTotalCartEntries: this.getTotalCartEntries(),
          getProduct: this.getProduct
        }}
      >
        <Router>
          <Switch>
            <Route exact strict path='/' render={() => <CatalogPage products={ products }/>} />
            <Route exact strict path='/catalog' render={() => <CatalogPage products={ products }/>} />
            <Route exact strict path='/product/:id' component={ ConnectedProductPage } />
            <Route exact strict path='/cart' component={ CartPage } />
            <Route exact strict path='/contacts' component={ ContactPage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </Router>
      </CartManager.Provider>
    )
  }
}