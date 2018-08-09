import React from 'react';
import { Media } from 'reactstrap';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import { Link } from 'react-router-dom';
import AddToCartForm from '../add_to_cart_form/add_to_cart_form.js';


export default class ProductCardExtend extends React.Component {

  dragStart = (e) => {
    const { product } = this.props
    e.dataTransfer.setData('productId', product.id)
  }

  render() {
    const { product } = this.props
    return (
      <div>
        <Link to='/'>К каталогу</Link>
        <Media>
          <Media left>
            <Image 
              src={ product.imageUrl }
              width='400px' 
              height='400px'
              alt={ product.title }
            />
          </Media>
          <Media body>
            <Media heading>
              { product.title } 
            </Media>
            { product.description }
            <div>
              <span>Цена: </span>
              <Price currency='USD' locale="en-US">
                { product.price }
              </Price>
            </div>
            <AddToCartForm product={ product }/>
          </Media>
        </Media>
      </div>
    )
  }
}