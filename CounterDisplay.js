//Presentational Component
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


class CounterDisplay extends Component{
    constructor(props){
        super(props);
    }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style ={styles.textStuff}>
          <Text style={styles.label}>Counter App:</Text>
          <Text style={styles.author}>By Will Munoz</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text style={styles.count}>{this.props.count}</Text>
          </View>
          <View style = {styles.options}>
              <View style={styles.increment}>
                <Button onPress={this.props.increment} title={'+'} color='black'/>
              </View>
              <View style={styles.decrement}>
                <Button onPress={this.props.decrement} title={'-'} color='black'/>
              </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  outerContainer: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  
  textStuff:{
    flexDirection: 'column',
    alignItems: 'center'
  },

  label: {
    fontSize: 30,
    color: 'purple'
  },

  author: {
    fontSize: 15,
    color: 'purple'
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  countContainer:{
    height: 60,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
  },

  count:{
    color: 'black',
    fontSize: 30
  },

  options:{
    height: 60,
    width: 50,
    flexDirection: "column",
    justifyContent: 'space-between'
  },

  increment:{
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'steelblue',
  },

  decrement:{
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'steelblue'
  }
  

});

export default CounterDisplay;