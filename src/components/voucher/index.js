import React from 'react';
import { _ } from '../../../initializers/production.js';
import db from '../../db.js';
import Calculator from '../../calculator.js';

export default class Voucher extends React.Component {
  constructor(props){
    super(props)
    this.state = { items: [] }
    this.addItem = this.addItem.bind(this);
    this.liItem = this.liItem.bind(this);
  }

  showCalculator(obj){
    console.log(new Calculator(obj).calc())
  }

  addItem(itemId){
    const { items } = this.state
    let elem = _.find(items, {itemId})
    if(typeof elem != 'undefined'){
      let new_state = []
      _.each(items, item => {
        if(item.itemId == itemId){
          item.quantity ++
        }
        new_state.push(item)
      })
      this.setState({items: new_state})
    }else{
      let new_state = items
      new_state.push({itemId: itemId, quantity: 1})
      this.setState({items: new_state})
    }
    this.showCalculator({firstNumber: 1, secondNumber: 2, operator: '+'})
  }

  removeItem(itemId){
    const { items } = this.state
    let elem = _.find(items, {itemId})
    if(typeof elem != 'undefined'){
      let new_state = []
      _.each(items, item => {
        if(item.itemId == itemId){
          item.quantity --
        }
        if(item.quantity > 0 ){
          new_state.push(item)
        }
      })
      this.setState({items: new_state})
    }
  }

  countTotal(){
    const { items } = this.state
    return(
      items
      .map(item => item.quantity * this.findItem(item.itemId).itemPrice)
      .reduce((acc, curVal)=> {return acc+curVal}, 0)
    )
  }
  findItem(itemId){
    return _.find(db, {itemId: itemId})
  }

  liItem(item){
    const dbItem = this.findItem(item.itemId)
    return(
      <li key={dbItem.itemId}>
        itemId = {dbItem.itemId},
        name = {dbItem.itemName}, 
        quantity = {item.quantity}, 
        priceForOne = {dbItem.itemPrice}, 
        total = {item.quantity * dbItem.itemPrice} 
      </li>
    )
  }

  render() {
    return (
      <div>
        <div>
          { db.map(item => 
              <button key={item.itemId} onClick={()=>this.addItem(item.itemId)}>
                Добавить {item.itemName}
              </button> 
          )}
        </div>
        <div>
          { db.map(item => 
            <button key={item.itemId} onClick={()=>this.removeItem(item.itemId)}>
            Удалить {item.itemName}</button> 
          )}
        </div>
        <div>
          {this.state.items.map(item => this.liItem(item))}
        </div>
        <div>Total: { this.countTotal() }</div>
      </div>
    );
  }
}