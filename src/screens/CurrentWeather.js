import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {WeatherType} from '../utility/WeatherType';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="yellow" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like: 8</Text>
        <RowText
          text1={'High: 10'}
          text2={' Low: 5'}
          bodyStyles={styles.highLowWrapper}
          text1Styles={styles.highLow}
          text2Styles={styles.highLow}
        />
      </View>
      <RowText
        text1={'Its Sunny'}
        text2={'Its perfect T-Shirt Weather'}
        bodyStyles={styles.bodyWrapper}
        text1Styles={styles.description}
        text2Styles={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#0c8c4c',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'lightgreen',
  },
  highLow: {
    color: 'lightgreen',
    fontSize: 20,
  },
  highLowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 50,
  },
  description: {
    fontSize: 48,
    color: 'white',
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
