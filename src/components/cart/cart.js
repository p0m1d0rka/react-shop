import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.scss';

export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = { inCart: this.props.inCart }
  }

  render() {
    const { inCart } = this.state
    return (
      <div>
        <span>{ inCart }</span>
        <FontAwesomeIcon icon={ faShoppingCart }  size="3x"/>
      </div>
    )
  }
}
Cart.defaultProps = { 
  inCart: 0 
}
Cart.propTypes = {
  inCart: PropTypes.number,
}