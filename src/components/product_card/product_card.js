import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import './product_card.css';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props
    return (
      <div className='productCard'>
        <Image 
          src={ product.imageUrl }
          width='100px' 
          height='100px'
        />
        <TextBox>
          { product.title }
        </TextBox>
        <Price>{ product.price }$</Price>
      </div>
    );
  }
}