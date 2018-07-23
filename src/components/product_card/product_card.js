import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './product_card.scss';


export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props
    return (
      <div className='productCard'>
        <Image 
          src={ product.imageUrl }
          width='200px' 
          height='200px'
          alt={ product.title }
        />
        <TextBox>
          { product.title }
        </TextBox>
        <Price currency='USD' locale="en-US">
          { product.price }
        </Price>
        <Button
          color='success'
        >
          <span>В корзину</span>
          <FontAwesomeIcon icon={ faCartPlus }  size="1x"/>
        </Button>
      </div>
    );
  }
}