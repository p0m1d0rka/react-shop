import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import { Link } from 'react-router-dom';
import './product_card.scss';
import AddToCartForm from '../add_to_cart_form/add_to_cart_form.js';
import { productPath } from '../../helpers/routes.js';


export default class ProductCard extends React.Component {

  dragStart = (e) => {
    const { product } = this.props
    e.dataTransfer.setData('productId', product.id)
  }

  render() {
    const { product } = this.props
    return (
      <div 
        className='productCard' 
        draggable
        onDragStart={ this.dragStart }
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
        <Link to={ productPath(product.id) }>Подробнее...</Link>
      </div>
    )
  }
}