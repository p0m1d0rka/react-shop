import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../cart/cart.js';

export default class AppNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler  onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/catalog" className='nav-link'>Каталог</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contacts" className='nav-link'>Контакты</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" className='nav-link'>
                <Cart />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}