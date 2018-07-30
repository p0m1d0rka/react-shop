import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import { Input } from 'reactstrap';
import './product_card.scss';
import ToCartBtn from '../to_cart_btn/to_cart_btn.js';

export default class ProductCard extends React.Component {
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
      <div 
        className='productCard' 
      >
        <Image 
          src={ product.imageUrl }
          width='200px' 
          height='200px'
          alt={ product.title }
        />
        <TextBox >
          { product.title }
        </TextBox>
        <Price currency='USD' locale="en-US">
          { product.price }
        </Price>
        <Input placeholder='Кол-во' value={ quantity } onChange={ (e) => this.handleQuantity(e) }/>
        <ToCartBtn 
          dropQuantity={ this.dropQuantity } 
          quantity={ quantity }
          product={ product }
        />
      </div>
    )
  }
}