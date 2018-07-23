import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { ProductsInCart } from '../catalog_page.js'
import Price from '../price/price.js'

export default class CartContent extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Наименование</th>
              <th>Цена</th>
              <th>Кол-во</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <ProductsInCart.Consumer>
              {
                productsInCart => {
                  return (
                    productsInCart.map((product,i) => 
                      <tr key={ `productInCart-${product.id}` }>
                        <td>{ i+1 }</td>
                        <td>{ product.title }</td>
                        <td>
                          <Price currency='USD' locale="en-US">
                            { product.price }
                          </Price>
                        </td>
                        <td>{ product.quantity }</td>
                        <td>
                          <Price currency='USD' locale="en-US">
                            { product.price * product.quantity }
                          </Price>
                        </td>
                      </tr>
                    )
                  )
                }
              }
            </ProductsInCart.Consumer>
          </tbody>
        </Table>
      </div>
    )
  }
}
