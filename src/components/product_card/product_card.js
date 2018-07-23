import React from 'react';
import Image from '../image/image.js';
import TextBox from '../text_box/text_box.js';
import Price from '../price/price.js';
import { CartManager } from '../catalog_page.js'
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './product_card.scss';


export default class ProductCard extends React.Component {
  constructor(props){
    super(props)
    this.state = { quantity: 1 }
  }

  handleQuantity = (e) =>{
    let value = parseInt(e.target.value)
    isNaN(value) ? 
      e.target.value = 1 : 
      e.target.value = value
    this.setState({quantity: value}) 
  }

  dropQuantity = (e) => {
    this.setState({quantity: 1})
  }

  render() {
    const { product } = this.props
    const { quantity } = this.state
    return (
      <CartManager.Consumer>
        {
          manager => {
            return (
              <div 
                onDragStart={(e) => manager.dragStart(e, product.id)}
                className='productCard' 
                draggable
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
                <Button
                  color='success'
                  onClick={(e) => manager.toCart(e, product.id, this.state.quantity, this.dropQuantity)}
                >
                  <span>В корзину</span>
                  <FontAwesomeIcon icon={ faCartPlus }  size="1x"/>
                </Button>
              </div>
            )
          }
        }
      </CartManager.Consumer>
    );
  }
}