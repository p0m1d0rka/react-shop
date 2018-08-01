import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import './product_card.scss';
import AddToCartForm from '../add_to_cart_form/add_to_cart_form.js';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props
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
        <AddToCartForm product={ product }/>
      </div>
    )
  }
}