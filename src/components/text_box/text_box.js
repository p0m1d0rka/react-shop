import React from 'react';

export default class TextBox extends React.Component {
  render() {
    const { children } = this.props
    return (
      <span>{children}</span>
    );
  }
}