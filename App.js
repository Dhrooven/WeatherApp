import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useGetWeather} from './src/hooks/useGetWeather';
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, errorState, weather] = useGetWeather();
  console.log(weather, loading, errorState);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={Styles.container}>
      <ActivityIndicator size={'large'} color={'lightgreen'} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
