import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

export default class AddToCartBtn extends React.Component {
  render() {
    const { onClick } = this.props
    return(
      <Button
        color='success'
        onClick={ onClick }
      >
        <span>В корзину</span>
        <FontAwesomeIcon icon={ faCartPlus }  size="1x"/>
      </Button>
    )
  }
}