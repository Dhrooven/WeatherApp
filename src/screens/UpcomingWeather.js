import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItems';

const DATA = [
  {
    dt_txt: '2023-12-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 6,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
  {
    dt_txt: '2023-12-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 6,
    },
    weather: [
      {
        main: 'clouds',
      },
    ],
  },
  {
    dt_txt: '2023-12-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 6,
    },
    weather: [
      {
        main: 'rain',
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_txt}
      temp_max={item.main.temp_max}
      temp_min={item.main.temp_min}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/szabo-viktor-28ZbKOWiZfs-unsplash.jpg')}
        style={styles.image}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
