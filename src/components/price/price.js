import React from 'react';
import PropTypes from 'prop-types';

export default class Price extends React.Component {
  render() {
    const { children, currency, locale } = this.props
    const intl = new Intl.NumberFormat(locale, { style: "currency", currency })
    return (
      <span>{ intl.format(children) }</span>
    );
  }
}

Price.propTypes = {
  children: PropTypes.number,
  currency: PropTypes.oneOf(['USD']),
  locale: PropTypes.oneOf(['en-US'])
}

Price.defaultProps = {
  children: 0,
  currency: 'USD',
  locale: 'en-US'
}