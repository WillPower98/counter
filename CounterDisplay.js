//Presentational Component
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
} from 'react-native';


const dataSource = [
  {data:['Rating: 3 out of 5 stars', 'Amenities: toilet paper, mints'], Location:'Quincy Market'},
  {data:['Rating:4 out of 5 stars', 'Amenities: coffee nearby'], Location:'Starbucks on Bolyston Ave'},
  {data:['Rating:1 out of 5 stars', 'Amenities: in conveciance store'], Location:'7/11 on Comm Ave'}
]

class CounterDisplay extends Component{
    constructor(props){
        super(props);
    }
  renderItem = ({item, index, section}) => {
    return<Text key = {index} style={styles.infoText}>{item}</Text>
  }

  renderHeader = ({section:{Location}}) => {
    return <Text style={styles.header}>{Location}</Text>
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style ={styles.textStuff}>
          <Text style={styles.label}>Bathrooms Nearby:</Text>
          <Text style={styles.author}>By Will Munoz</Text>
        </View>
        <SectionList style={styles.info}
          renderItem = {this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections = {dataSource}
          keyExtractor={(item, index) => item + index}/>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  info:{
    flex: 2,
    flexDirection: 'row'
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
    flex: 1,
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
  },

  infoText:{
    fontSize: 14,
    color: 'purple'
  },

  header:{
    fontSize: 20,
    marginTop: 10,
    color: 'purple',
    fontWeight: 'bold'
  }
  

});

export default CounterDisplay;