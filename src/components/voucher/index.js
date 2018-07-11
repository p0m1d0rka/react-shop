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

  addItem(item_id){
    let elem = _.find(this.state.items, {item_id: item_id})
    if(typeof elem != 'undefined'){
      let new_state = []
      _.each(this.state.items, item => {
        if(item.item_id == item_id){
          item.quantity ++
        }
        new_state.push(item)
      })
      this.setState({items: new_state})
    }else{
      let new_state = this.state.items
      new_state.push({item_id: item_id, quantity: 1})
      this.setState({items: new_state})
    }
    this.showCalculator({firstNumber: 1, secondNumber: 2, operator: '+'})
  }

  removeItem(item_id){
    let elem = _.find(this.state.items, {item_id: item_id})
    if(typeof elem != 'undefined'){
      let new_state = []
      _.each(this.state.items, item => {
        if(item.item_id == item_id){
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
    return this.state.items.map(item => item.quantity * this.findItem(item.item_id).item_price).reduce((prevVal, curVal, index, array)=> {return prevVal+curVal}, 0)
  
  }
  findItem(item_id){
    return _.find(db, {item_id: item_id})
  }

  liItem(item){
    const dbItem = this.findItem(item.item_id)
    return <li key={dbItem.item_id}>item_id = {dbItem.item_id}, name = {dbItem.item_name}, quantity = {item.quantity}, price_for_one = {dbItem.item_price}, total = {item.quantity * dbItem.item_price} </li>
  }

  render() {
    return (
      <div>
        <div>
          { db.map(item => <button key={item.item_id} onClick={()=>this.addItem(item.item_id)}>Добавить {item.item_name}</button> )}
        </div>
        <div>
          { db.map(item => <button key={item.item_id} onClick={()=>this.removeItem(item.item_id)}>Удалить {item.item_name}</button> )}
        </div>
        <div>
          {this.state.items.map(item => this.liItem(item))}
        </div>
        <div>Total: { this.countTotal() }</div>

      </div>
    );
  }
}