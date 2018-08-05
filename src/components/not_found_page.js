import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <p>404 ошибка</p>
        <p>Страница не найдена</p>
        <Link to='/'>На главную</Link>
      </div>
    )
  }
}
