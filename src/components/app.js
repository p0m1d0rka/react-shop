import React from 'react';
import HelloWorld from './hello_world/hello_world.js'
import '../style.css';
import Voucher from './voucher/voucher.js';
import Image from './image/image.js'
import TextBox from './text_box/text_box.js';

export default class App extends React.Component{
  render() {
    return (
    <div>
      <HelloWorld />
      <Voucher items={[{item_id: 1, quantity: 1}, {item_id: 2, quantity: 5}]}/>
      <Image 
        src='https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg' 
        width='200px' 
        height='100px'
      />
      <TextBox>text box string</TextBox>
    </div>
    );
  }
}