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
import MapView, { Marker } from 'react-native-maps';

const dataSource = [
  {data:['Rating: 3 out of 5 stars', 'Amenities: toilet paper, mints'], Location:'Quincy Market'},
  {data:['Rating:4 out of 5 stars', 'Amenities: coffee nearby'], Location:'Starbucks on Bolyston Ave'},
  {data:['Rating:1 out of 5 stars', 'Amenities: in conveciance store'], Location:'7/11 on Comm Ave'}
]

class CounterDisplay extends Component{
    constructor(props){
        super(props);
        return {
          region: {
            latitude: 42.348887,
            longitude: -71.101606,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
    }
  }

    onRegionChange(region) {
      this.setState({ region });
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
        <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}>
        {this.state.markers.map(marker => (
           <Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
        />
        ))}
       </MapView>
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
  },
  map:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
  

});

export default CounterDisplay;