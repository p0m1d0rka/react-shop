import React from 'react';

export default class Image extends React.Component {
  render() {
    const { src, width, height, alt } = this.props
    return (
      <div>
        <img src={src} style={{ width, height }} alt={alt} />
      </div>
    );
  }
}