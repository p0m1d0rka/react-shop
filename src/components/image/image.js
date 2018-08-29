import React from 'react';

export default class Image extends React.Component {
  render() {
    const { src, width, height, alt, onClick } = this.props
    return (
      <div>
        <img src={src} style={{ width, height }} alt={alt} onClick={onClick}/>
      </div>
    );
  }
}