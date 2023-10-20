import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/roberto-jr-saldana-ms7_Xkxn8aU-unsplash.jpg')}
        style={styles.imgbackground}>
        <Text style={[styles.city, styles.cityText]}>Delhi</Text>
        <Text style={[styles.country, styles.cityText]}>India</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            IconName={'sun'}
            IconSize={50}
            IconColor={'lightgrey'}
            Icontext={'8000'}
            IconTextStyles={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            IconName={'sunrise'}
            IconSize={50}
            IconColor={'white'}
            Icontext={'07:46:48am'}
            IconTextStyles={styles.riseSetText}
          />
          <IconText
            IconName={'sunset'}
            IconSize={50}
            IconColor={'white'}
            Icontext={'18:13:12pm'}
            IconTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgbackground: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'lightgreen',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 15,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
