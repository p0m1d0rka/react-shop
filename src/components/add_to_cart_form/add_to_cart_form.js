import React from 'react';
import { Input } from 'reactstrap';
import AddToCartBtn from '../add_to_cart_btn/add_to_cart_btn.js';

export default class AddToCartForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { quantity: 1 }
  }

  handleQuantity = (e) =>{
    let value = parseInt(e.target.value)  || 1
    this.setState({quantity: value}) 
  }

  dropQuantity = (e) => {
    this.setState({quantity: 1})
  }

  render() {
    const { product } = this.props
    const { quantity } = this.state
    return (
      <div>
        <Input placeholder='Кол-во' value={ quantity } onChange={ (e) => this.handleQuantity(e) }/>
        <AddToCartBtn 
          dropQuantity={ this.dropQuantity } 
          quantity={ quantity }
          product={ product }
        />
      </div>
    )
  }
}