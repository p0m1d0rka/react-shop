import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { rootPath} from '../helpers/routes.js';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <p>404 ошибка</p>
        <p>Страница не найдена</p>
        <Link to={ rootPath() }>На главную</Link>
      </div>
    )
  }
}
