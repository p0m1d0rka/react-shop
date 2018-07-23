import ReactDOM from 'react-dom';
import React from 'react';
import CatalogPage from './components/catalog_page.js'
import Products from './constants/products.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <CatalogPage products={ Products }/>,
  document.getElementById('reactApp')
);