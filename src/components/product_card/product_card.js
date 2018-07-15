import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import './product_card.css';

export default class ProductCard extends React.Component {
  render() {
    return (
      <div className='productCard'>
        <Image 
          src='http://lenis-animal.ru/wp-content/uploads/2016/09/sterilizacia-koshki.jpg' 
          width='100px' 
          height='100px'
        />
        <TextBox>
          text_box
        </TextBox>
        <Price>10$</Price>
      </div>
    );
  }
}