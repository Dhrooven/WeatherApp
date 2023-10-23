import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ErrorItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Sorry, Something went wrong.</Text>
      <Feather name={'frown'} size={100} color={'white'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },
  errorText: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
export default ErrorItems();
