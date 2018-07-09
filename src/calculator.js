import _ from 'lodash';

export default class Calculator { 
  constructor(obj = {firstNumber: 1, secondNumber: 1, operator: '+'}){
    this.params = obj;
    this.available_operators = ['+', '-', '*', '/'];
  }
  _validate(){
    if(!_.includes(this.available_operators, this.params.operator) && 
    typeof this.params.firstNumber != 'number' && 
    typeof this.params.firstNumber != 'number'){
      throw `Incorrect input ${obj}`
    }
  }
  calc(){
    this._validate()
    return eval(`${this.params.firstNumber} ${this.params.operator} ${this.params.secondNumber}`)
  }
}