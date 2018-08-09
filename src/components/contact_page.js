import React, { Component } from 'react';
import AppNav from './app_nav/app_nav.js';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <AppNav />
        <h1>Наши контакты</h1>
        <p>555-55-55</p>
      </div>
    )
  }
}
