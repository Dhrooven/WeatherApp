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

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null); // Initialize location state to null

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
        } else {
          console.log('You cannot use Geolocation');
          setLoading(false);
        }
      } catch (err) {
        console.warn(err);
        setLoading(false);
      }
    };
    requestLocationPermission();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLocation(position); // Update the location state with the received position
        setLoading(false); // Set loading to false after getting the location
      },
      error => {
        console.log(error.code, error.message);
        setLoading(true); // Set loading to false if there's an error in getting the location
      },
      {enableHighAccuracy: false, timeout: 15000},
    );
  };

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
