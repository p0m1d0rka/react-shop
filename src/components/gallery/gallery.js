import React, { Component } from 'react';
import  { find, reject }  from 'lodash';
import Image from '../image/image.js';

export default class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentImgId: this.props.product.gallery[0].file.id
    }
  }

  switchImg = (id) => {
    this.setState({currentImgId: id})
  }

  render() {
    const { product } = this.props
    const { currentImgId } = this.state
    const currentImg = find(product.gallery, {file: {id: currentImgId}})
    return(
      <div>
        <Image 
          key={ currentImg.file.id }
          src={ currentImg.file.url }
          width='400px' 
          height='400px'
          alt={ product.title }
        />
        <div>
          { reject(product.gallery, {file: {id: currentImgId} }).sort().map(img => {
            return( 
              <Image
                key={ img.file.id }
                src={ img.file.url }
                width='100px' 
                height='100px'
                alt={ product.title }
                onClick={ (e) => this.switchImg(img.file.id, e) }
              />
            )
          }) }
        </div>
      </div>
    ) 
  }
}

