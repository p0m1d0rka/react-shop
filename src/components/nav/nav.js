import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
    <div>
      <Link to='/catalog'>Каталог</Link>
      <Link to='/cart'>Корзина</Link>
      <Link to='/contacts'>Контакты</Link>
    </div>
    );
  }
}