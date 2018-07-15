import React from 'react';

export default class Image extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { src, width, height } = this.props
    return (
      <div>
        <img src={src} style={{ width: width, height: height }} />
      </div>
    );
  }
}