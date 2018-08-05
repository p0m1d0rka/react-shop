import React, { Component } from 'react';
import Nav from './nav/nav.js';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Наши контакты</h1>
        <p>555-55-55</p>
      </div>
    )
  }
}
