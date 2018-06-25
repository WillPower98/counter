//Presentational Component
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
} from 'react-native';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class CounterDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
         dataSource: ds.cloneWithRows([
          {
            location: 'Quincy Market',
            quality: '3 out of 5 stars',
            eminities: 'toilet paper mints',
          },
          {
            location: 'Starbuck on Bolyston Ave',
            quality: '4 out of 5 stars',
            eminities: 'coffee nearby'
          }
        ]),
      };
    }

  _renderRow(rowData){
    return (
      <View style={{borderWidth: 2, alignItems: 'center', justifyContent: 'center', marginTop: 5, width: 250}}>
        <Text>{rowData.location}</Text>
        <Text>{rowData.quality}</Text>
        <Text>{rowData.eminities}</Text>
     </View>
    );
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style ={styles.textStuff}>
          <Text style={styles.label}>Counter App:</Text>
          <Text style={styles.author}>By Will Munoz</Text>
        </View>
        <ListView style={styles.info}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
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
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  info:{
    flex: 1,
    flexDirection: 'row',
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
  }
  

});

export default CounterDisplay;