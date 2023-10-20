import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '.env';
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [location, setLocation] = useState(null); // Initialize location state to null
  const [weather, setWeather] = useState([]); // Initialize weather state
  const [errorState, setErrorState] = useState(null); // Initialize error state to null
  const [lat, setLat] = useState([]); // Initialize latitude
  const [lon, setLon] = useState([]); // Initialize longitude

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setErrorState('Could not fetch weather data');
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLat(position.coords.latitude); // Update the Latitude state with the received position
        setLon(position.coords.longitude); // Update the Longitude state with the received position
        setLoading(false); // Set loading to false after getting the location
      },
      error => {
        console.log(error.code, error.message);
        setLoading(true); // Set loading to false if there's an error in getting the location
        setErrorState('Could not get location');
      },
      {enableHighAccuracy: false, timeout: 15000}, // keeping accuracy as false works, but if i change it to true, it breaks.
    );
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use Geolocation');
          getLocation();
          await fetchWeather();
        } else {
          console.log('You cannot use Geolocation');
          setLoading(true);
        }
      } catch (err) {
        console.warn(err);
        setLoading(true);
      }
    };
    requestLocationPermission();
  }, [lat, lon]);

  useEffect(() => {
    console.log(lat);
    console.log(lon);
  }, [lat, lon]);

  if (loading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size={'large'} color={'lightgreen'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
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
