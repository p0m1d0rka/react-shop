import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  { bind, find, assign, reduce, includes }  from 'lodash';
import CartPage from './cart_page.js';
import CatalogPage from './catalog_page.js';
import ContactPage from './contact_page.js';
import Products from '../constants/products.js';
import NotFoundPage from './not_found_page.js';
import { ConnectedProductPage } from './product_page.js';
import { 
  rootPath, 
  cartPath,
  contactPath,
  catalogPath,
  productPath } from '../helpers/routes.js';
import { history } from '../helpers/history.js';
import request from 'superagent';
import { productsPath, assetsPath } from '../helpers/contentful.js';

export const CartManager = React.createContext();

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      products: [],
      assets: [],
      cart: {
       entries: [], 
       isDragging: false
      } 
    }
    this.addToCart = bind(this.addToCart, this)
  }
  
  componentDidMount(){
    history.listen((location, action) => {
      if (typeof location.state != 'undefined'){
        const { message } = location.state
        alert(message);
      }
    })
    const productsPromise = request.get(productsPath());
    const assetsPromise = request.get(assetsPath());

    Promise.all([productsPromise, assetsPromise])
      .then(res => {
        const productsRes = res[0].body
        const assetsRes = res[1].body.items.map(item => assign(item.fields.file, {id: item.sys.id}))
        const products = productsRes.items.map(item => {
            const fields = item.fields
            const { gallery } = item.fields 
            const newGallery = gallery.map(gal => {
              const assetFile = find(assetsRes, {id: gal.sys.id})
              return assign(gal, {file: assetFile})
            })
            return assign(item.fields)
          }
        )
        this.setState({ products })

      })
      .catch(err => {
        console.log(err)
      })
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
        <Router history={ history }>
          <Switch>
            <Route exact strict path={ rootPath() } render={() => <CatalogPage products={ products }/>} />
            <Route exact strict path={ catalogPath() } render={() => <CatalogPage products={ products }/>} />
            <Route exact strict path={ productPath() } component={ ConnectedProductPage } />
            <Route exact strict path={ cartPath() } render={() =>  <CartPage isEmpty={ this.getProducts().length == 0 }/> } />
            <Route exact strict path={ contactPath() } component={ ContactPage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </Router>
      </CartManager.Provider>
    )
  }
}