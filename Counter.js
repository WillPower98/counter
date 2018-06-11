//Container Component
import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay'
import {connect} from 'react-redux';
import {increment, decrement} from "./actions"
import{Button} from 'react-native'

class Counter extends Component{
  constructor(props){
    super(props);
  }

  _incrementCount = () => {
    this.props.dispatch(increment())
  }

  _decrementCount = () => {
    this.props.dispatch(decrement())
  }

  render() {
    return (
        <CounterDisplay count={this.props.count} 
          increment={this._incrementCount} 
          decrement={this._decrementCount} />
    );
  }
}

const mapStateToProps = (state) =>{
  return {
      count: state
      }
}


export default connect(
  mapStateToProps,
)(Counter);



