import React from 'react';

export default class Price extends React.Component {
  render() {
    const { children, currency, locale } = this.props
    const intl = new Intl.NumberFormat(locale, { style: "currency", currency })
    return (
      <span>{ intl.format(children) }</span>
    );
  }
}