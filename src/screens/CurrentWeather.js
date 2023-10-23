import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import {WeatherType} from '../utility/WeatherType';

const CurrentWeather = ({weatherData}) => {
  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {backgroundColor: WeatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={styles.container}>
        <Feather
          name={WeatherType[weatherCondition].icon}
          size={100}
          color="yellow"
        />
        <Text style={styles.tempStyle}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like: ${feels_like}°`}</Text>
        <RowText
          text1={`High: ${temp_max}° `}
          text2={`Low: ${temp_min}°`}
          bodyStyles={styles.highLowWrapper}
          text1Styles={styles.highLow}
          text2Styles={styles.highLow}
        />
      </View>
      <RowText
        text1={WeatherType[weatherCondition].icon}
        text2={WeatherType[weatherCondition].message}
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
  tempStyle: {
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
